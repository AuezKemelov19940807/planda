"use client";

export default function SocialAuth() {
  const API_URL = "https://planola-back.fly.dev";

  const handleGoogle = () => {
    window.location.href = `${API_URL}/auth/google?prompt=consent&access_type=offline`;
  };

  return (
    <div className="grid grid-cols-2 gap-x-6 items-center mt-22">
      <button
        className="flex items-center gap-x-2.5  border-gray-300 border rounded-lg py-1 px-6 text-xs font-medium cursor-pointer"
        onClick={handleGoogle}
      >
        <span>
          <img src="/icons/google.svg" alt="Google Icon" />
        </span>
        <span>Google арқылы жалғастыру</span>
      </button>
      <div className="flex items-center gap-x-2.5 cursor-pointer border-gray-300 border rounded-lg py-1 px-6 text-xs font-medium">
        <span>
          <img src="/icons/apple.svg" alt="Apple Icon" />
        </span>
        <span>Apple арқылы жалғастыру</span>
      </div>
    </div>
  );
}
