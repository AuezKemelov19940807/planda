"use client";

import { useAuthStore } from "@/store/auth.store";
import NameField from "../auth/NameField";
import EmailField from "../auth/EmailField";
import PasswordField from "../auth/PasswordField";
import { useState } from "react";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";
export default function Profile() {
  const { user, editProfile, isActionLoading } = useAuthStore();

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  if (!user) return <p>Loading...</p>;

  const [form, setForm] = useState({
    name: user.name,
    email: user.email,
    password: "",
  });

  const handleOnChange = (field: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

const handleSave = async () => {
  try {
    const formData = new FormData();

    formData.append("name", form.name);
    formData.append("email", form.email);

    if (form.password) {
      formData.append("password", form.password);
    }

    if (imageFile) {
      formData.append("image", imageFile);
    }

    await editProfile(formData);

    toast.success("Профиль успешно обновлён");
  } catch (err: any) {
    toast.error(err.message);
  }
};

  return user ? (
    <div>
      <div className="flex items-center justify-between">
        <h1>Редактировать профиль</h1>

        <div className="flex items-center justify-center flex-col gap-y-1">
          <img
            className="w-50 h-50 object-cover rounded-full"
            src={preview || user?.image || "/default-avatar.png"}
            alt=""
          />

          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="avatar"
            onChange={handleImageChange}
          />
          <label htmlFor="avatar" className="cursor-pointer">
            Редактировать аву
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-y-6">
        <NameField
          value={form.name}
          onChange={(v) => handleOnChange("name", v)}
        />
        <EmailField
          value={form.email}
          onChange={(v) => handleOnChange("email", v)}
        />
        <PasswordField
          mode="register"
          value={form.password}
          onChange={(v) => handleOnChange("password", v)}
        />
      </div>
      <div className="flex gap-x-4 mt-10">
        <button
          className="cursor-pointer bg-amber-600 px-4 py-2.5 rounded-lg text-white"
          onClick={() =>
            setForm({
              name: user.name,
              email: user.email,
              password: "",
            })
          }
        >
          Отмена
        </button>
        <button
          className="cursor-pointer bg-green px-4 py-2.5 rounded-lg text-white"
          onClick={handleSave}
        >
          {isActionLoading ? (
            <div className="flex items-center justify-center gap-2 w-[120.53px] ">
              <LoaderCircle size={18} className="animate-spin" />
            </div>
          ) : (
            "Редактировать"
          )}
        </button>
      </div>
    </div>
  ) : (
    <p>Ошибка</p>
  );
}
