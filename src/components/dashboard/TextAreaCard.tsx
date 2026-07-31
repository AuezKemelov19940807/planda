"use client";

import { StaticImageData } from "next/image";
import { ReactNode, useState } from "react";

type TextAreaCardProps = {
  icon: string;
  placeholder: string;
};

export default function TextAreaCard({ placeholder, icon }: TextAreaCardProps) {
  const [text, setText] = useState("");

  return (
    <div className="px-2 md:px-5 relative">
      <span className="absolute right-10 top-15 w-12.5 h-12.5 ">
        <img className="max-w-12.5 max-h-12.5" src={icon} />
      </span>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
        className="
          w-full
          h-32
          p-3
          resize-none
          rounded-lg
          outline-none
          bg-white
          dark:bg-[#0D1012] 
          border
       border-light-gray  dark:border-dark-gray
          text-zinc-900
          dark:text-zinc-100
          placeholder:text-zinc-400
          dark:placeholder:text-zinc-500

          transition-colors
        "
      />
    </div>
  );
}
