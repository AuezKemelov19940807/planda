"use client";

export default function SocialAuth() {
  const handleGoogle = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
  };

  return (
    <div className="grid grid-cols-2 gap-x-6 items-center mt-22">
      <button className="flex items-center gap-x-2.5 cursor-pointer border-gray-300 border rounded-lg py-1 px-6 text-xs font-medium cursor-pointer" onClick={handleGoogle}  >
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
