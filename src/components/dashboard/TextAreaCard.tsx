"use client";

import { useState } from "react";

type TextAreaCardProps = {
  title: string;
  placeholder: string;
};

export default function TextAreaCard({
  title,
  placeholder,
}: TextAreaCardProps) {
  const [text, setText] = useState("");

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl p-5 transition-colors">
      <h2 className="text-2xl font-semibold text-center mb-5 text-zinc-900 dark:text-zinc-100">
        {title}
      </h2>

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
          dark:bg-zinc-800
          border
          border-zinc-300
          dark:border-zinc-700
          text-zinc-900
          dark:text-zinc-100
          placeholder:text-zinc-400
          dark:placeholder:text-zinc-500
          focus:border-black
          dark:focus:border-zinc-400
          transition-colors
        "
      />
    </div>
  );
}
