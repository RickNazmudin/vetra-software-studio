"use client";

import * as React from "react";
import { useLanguage } from "@/context/language-context";
import { Globe } from "lucide-react";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-[4px] border border-[#262c3b] bg-[#11141c] p-0.5 text-xs font-mono ${className}`}
    >
      <button
        type="button"
        onClick={() => setLang("id")}
        className={`px-2 py-0.5 rounded-[2px] transition-all cursor-pointer ${
          lang === "id"
            ? "bg-white text-black font-bold shadow-xs"
            : "text-neutral-400 hover:text-white"
        }`}
        title="Bahasa Indonesia"
      >
        ID
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`px-2 py-0.5 rounded-[2px] transition-all cursor-pointer ${
          lang === "en"
            ? "bg-white text-black font-bold shadow-xs"
            : "text-neutral-400 hover:text-white"
        }`}
        title="English"
      >
        EN
      </button>
    </div>
  );
}
