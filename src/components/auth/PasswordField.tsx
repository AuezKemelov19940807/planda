"use client";

import { useState } from "react";

type Mode = "login" | "register";

interface Props {
  mode: Mode;
  value: string;
  onChange: (value: string) => void;
}

export default function PasswordField({ value, onChange, mode }: Props) {
  const [show, setShow] = useState(false);
  const isLogin = mode === "login";

  return (
    <fieldset className="relative">
      {isLogin && (
        <span className="text-xs text-blue-700 absolute text-blue right-0 font-medium cursor-pointer">
          forgot password
        </span>
      )}

      <label className="block text-sm font-medium text-gray-700">
        Құпия сөз
      </label>
      <div className="relative">
        <input
          className="border-gray-300 border  outline-none py-2 px-2.5 rounded-lg w-full text-xs"
          type={show ? "text" : "password"}
          id="password"
          placeholder="Құпия сөз енгізіңіз"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />

        {value.length > 0 && (
          <button
            className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              setShow((prev) => !prev);
            }}
          >
            <img
              src={show ? "/icons/eye-off.svg" : "/icons/eye.svg"}
              alt="Toggle password visibility"
            />
          </button>
        )}
      </div>
    </fieldset>
  );
}
