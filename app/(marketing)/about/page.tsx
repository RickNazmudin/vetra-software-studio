"use client";

import Link from "next/link";
import { Terminal, Shield, Cpu, Code2, Zap, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-8 py-24 font-mono text-[#12141A]">
      {/* Header */}
      <div className="border-b border-[var(--line)] pb-10 mb-12">
        <span className="mi text-[10px] tracking-[0.2em] text-[var(--mid)] block mb-2">
          {t("about.tag")}
        </span>
        <h1 className="font-sans font-bold text-3xl sm:text-5xl uppercase tracking-tight text-[#12141A] mb-4 leading-[1.02]">
          {t("about.title")}
        </h1>
        <p className="text-sm sm:text-base text-[var(--mid)] leading-relaxed">
          {t("about.intro")}
        </p>
      </div>

      {/* Engineering Pillars */}
      <div className="space-y-12 text-sm leading-relaxed">
        <section className="space-y-3 pb-8 border-b border-[var(--line)]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#FF6B6B] font-bold">[01]</span>
            <h2 className="font-sans font-bold text-xl uppercase tracking-tight text-[#12141A]">
              {t("about.p1.title")}
            </h2>
          </div>
          <p className="text-[var(--mid)] pl-8">
            {t("about.p1.desc")}
          </p>
        </section>

        <section className="space-y-3 pb-8 border-b border-[var(--line)]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#FF6B6B] font-bold">[02]</span>
            <h2 className="font-sans font-bold text-xl uppercase tracking-tight text-[#12141A]">
              {t("about.p2.title")}
            </h2>
          </div>
          <p className="text-[var(--mid)] pl-8">
            {t("about.p2.desc")}
          </p>
        </section>

        <section className="space-y-3 pb-8 border-b border-[var(--line)]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#FF6B6B] font-bold">[03]</span>
            <h2 className="font-sans font-bold text-xl uppercase tracking-tight text-[#12141A]">
              {t("about.p3.title")}
            </h2>
          </div>
          <p className="text-[var(--mid)] pl-8">
            {t("about.p3.desc")}
          </p>
        </section>

        <section className="space-y-3 pb-8 border-b border-[var(--line)]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#FF6B6B] font-bold">[04]</span>
            <h2 className="font-sans font-bold text-xl uppercase tracking-tight text-[#12141A]">
              {t("about.p4.title")}
            </h2>
          </div>
          <p className="text-[var(--mid)] pl-8">
            {t("about.p4.desc")}
          </p>
        </section>
      </div>

      {/* CTA Box */}
      <div className="mt-14 border border-[var(--line)] bg-white p-8 sm:p-12 text-center space-y-4">
        <h3 className="font-sans font-bold text-2xl uppercase tracking-tight text-[#12141A]">
          {t("about.ctaTitle")}
        </h3>
        <p className="text-xs sm:text-sm text-[var(--mid)] max-w-lg mx-auto">
          {t("about.ctaDesc")}
        </p>
        <div className="pt-2">
          <Link href="/products">
            <button type="button" className="btn-nullwave">
              <span>{t("about.ctaBtn")}</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

