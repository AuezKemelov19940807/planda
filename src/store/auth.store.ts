import { api } from "@/shared/lib/api";

import { create } from "zustand";

interface User {
  id: number;
  name: string;
  email: string;
}

interface LoginDto {
  email: string;
  password: string;
}

interface RegisterDto {
  name: string;
  email: string;
  password: string;
}

interface AuthStore {
  user: User | null;

  isAuthLoading: boolean;
  isActionLoading: boolean;

  error: string | null;

  login: (data: LoginDto) => Promise<void>;
  register: (data: RegisterDto) => Promise<void>;
  getProfile: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthLoading: false,
  isActionLoading: false,
  error: null,
  login: async (data: LoginDto) => {
    try {
      set({ isAuthLoading: true, error: null });

      const res = await api.post("/auth/login", data, {
        withCredentials: true,
      });

      set({ user: res.data.user });
    } catch (error: any) {
      const message = error.response?.data?.message || "Login failed";

      set({ error: message });

      throw new Error(message);
    } finally {
      set({ isAuthLoading: false });
    }
  },
  register: async (data: RegisterDto) => {
    try {
      set({ isAuthLoading: true, error: null });

      const res = await api.post("/auth/register", data);

      set({
        user: res.data.user,
      });

      return res.data;
    } catch (error: any) {
      const message = error.response?.data?.message || "Register failed";

      set({ error: message });

      throw new Error(message);
    } finally {
      set({ isAuthLoading: false });
    }
  },
  getProfile: async () => {
    try {
      set({ isAuthLoading: true, error: null });
      const profile = await api.get("/auth/profile");
      set({ user: profile.data });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || "Failed to fetch profile",
      });
    } finally {
      set({
        isAuthLoading: false,
      });
    }
  },
  logout: async () => {
    try {
      await api.post("/auth/logout");
      set({ user: null });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || "Failed to logout",
      });
    }
  },
}));
