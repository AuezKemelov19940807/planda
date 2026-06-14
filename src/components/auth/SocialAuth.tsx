"use client";
import { useTranslations } from "next-intl";
export default function SocialAuth() {
  const t = useTranslations("Auth");
  const API_URL = "https://planola-back.fly.dev";

  const handleGoogle = () => {
    window.location.href = `${API_URL}/auth/google?prompt=consent&access_type=offline`;
  };

  return (
    <div className="flex justify-center items-center mt-5 md:mt-9 w-full">
      <button
        className="flex items-center gap-x-2.5 justify-center border-gray-300 w-full border rounded-lg py-1 px-6 text-xs font-medium cursor-pointer"
        onClick={handleGoogle}
      >
        <span>
          <img src="/icons/google.svg" alt="Google Icon" />
        </span>
        <span>{t("continueWithGoogle")}</span>
      </button>

      {/* <div className="flex items-center gap-x-2.5 cursor-pointer border-gray-300 border rounded-lg py-1 px-6 text-xs font-medium">
        <span>
          <img src="/icons/apple.svg" alt="Apple Icon" />
        </span>
        <span>{t("continueWithApple")}</span>
      </div> */}
    </div>
  );
}
