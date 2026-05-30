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

  loading: boolean;
  error: string | null;

  login: (data: LoginDto) => Promise<void>;
  register: (data: RegisterDto) => Promise<void>;
  getProfile: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,

  loading: false,
  error: null,
  login: async (data: LoginDto) => {
    try {
      set({ loading: true, error: null });

      const res = await api.post("/auth/login", data, {
        withCredentials: true,
      });

      set({ user: res.data.user });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || "Login failed",
      });
    } finally {
      set({ loading: false });
    }
  },
  register: async (data: RegisterDto) => {
    try {
      set({ loading: true, error: null });
      await api.post("/auth/register", data);
    } catch (error: any) {
      set({
        error: error.response?.data?.message || "Register failed",
      });
    } finally {
      set({ loading: false });
    }
  },
  getProfile: async () => {
    try {
      set({ loading: true, error: null });
      const profile = await api.get("/auth/profile");
      set({ user: profile.data });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || "Failed to fetch profile",
      });
    } finally {
      set({ loading: false });
    }
  },
  logout: async () => {
    try {
      await api.post("/auth/logout");
    } catch (error: any) {
      set({
        error: error.response?.data?.message || "Failed to logout",
      });
    } finally {
      set({ user: null });
    }
  },
}));
