import { api } from "@/shared/lib/api";
import { create } from "zustand";

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthStore {
  user: User | null;

  isAuthLoading: boolean;
  isActionLoading: boolean;
  isInitialized: boolean;

  error: string | null;

  isHydrated: boolean;

  login: (data: any) => Promise<void>;
  register: (data: any) => Promise<void>;
  getProfile: () => Promise<void>;
  initAuth: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,

  isAuthLoading: false,
  isActionLoading: false,
  isInitialized: false,

  isHydrated: false,

  error: null,

  login: async (data) => {
    try {
      set({ isActionLoading: true, error: null });

      const res = await api.post("/auth/login", data, {
        withCredentials: true,
      });

      set({ user: res.data.user });
    } catch (error: any) {
      set({ error: error.response?.data?.message || "Login failed" });
      throw error;
    } finally {
      set({ isActionLoading: false });
    }
  },

  register: async (data) => {
    try {
      set({ isActionLoading: true, error: null });

      const res = await api.post("/auth/register", data);

      set({ user: res.data.user });
    } catch (error: any) {
      set({ error: error.response?.data?.message || "Register failed" });
      throw error;
    } finally {
      set({ isActionLoading: false });
    }
  },

  getProfile: async () => {
    try {
      set({ isAuthLoading: true, error: null });

      const res = await api.get("/auth/profile", {
        withCredentials: true,
      });

      set({ user: res.data });
    } catch {
      set({ user: null });
    } finally {
      set({ isAuthLoading: false });
    }
  },

  initAuth: async () => {
    const { isHydrated } = get();

    if (isHydrated) return;

    set({ isAuthLoading: true });

    try {
      const res = await api.get("/auth/profile", {
        withCredentials: true,
      });

      set({ user: res.data });
    } catch {
      set({ user: null });
    } finally {
      set({
        isAuthLoading: false,
        isHydrated: true,
      });
    }
  },

  logout: async () => {
    try {
      await api.post("/auth/logout");

      set({ user: null });
    } catch (error: any) {
      set({ error: error.response?.data?.message || "Logout failed" });
    }
  },
}));
