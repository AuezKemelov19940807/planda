"use client";
import { useAuthStore } from "@/store/auth.store";

export default function UserProfile() {
  const { user } = useAuthStore();

  return (
    <div>
      {user && (
        <div>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}
