"use client";

import Link from "next/link";
import { useLanguage } from "@/context/language-context";
import { LanguageToggle } from "@/components/language-toggle";
import { VetraLogo } from "@/components/logo";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full border-t border-[var(--line)] bg-[#F4F5F6] text-[#12141A] py-14 text-xs font-mono">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 pb-12 border-b border-[var(--line)]">
          {/* Studio Profile */}
          <div className="md:col-span-2 space-y-4">
            <VetraLogo size="md" subtitle="SOFTWARE STUDIO" href="/" />
            <p className="text-[var(--mid)] max-w-sm text-xs leading-relaxed">
              {t("footer.motto")}
            </p>
            <div className="flex items-center gap-2 pt-1 text-[10px] uppercase tracking-widest text-[#12141A]">
              <span className="w-2 h-2 rounded-full bg-[#E5484D] animate-live"></span>
              <span>{t("footer.status")}</span>
              <span className="text-[var(--mid)]">· JAKARTA / GLOBAL</span>
            </div>
          </div>

          {/* Software Catalog Links */}
          <div className="space-y-3">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#12141A] font-bold">
              // STATIONS
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/products/tokoin-pos" className="text-[var(--mid)] hover:text-[#12141A] transition-colors">
                  TOKOin-POS (Retail & POS)
                </Link>
              </li>
              <li>
                <Link href="/products/brew-and-bite" className="text-[var(--mid)] hover:text-[#12141A] transition-colors">
                  Brew &amp; Bite (Cafe F&amp;B)
                </Link>
              </li>
              <li>
                <Link href="/products/modakita" className="text-[var(--mid)] hover:text-[#12141A] transition-colors">
                  ModaKita (Fashion E-Comm)
                </Link>
              </li>
              <li>
                <Link href="/products/padelspace" className="text-[var(--mid)] hover:text-[#12141A] transition-colors">
                  PadelSpace (Sports Club)
                </Link>
              </li>
              <li>
                <Link href="/products/padelspace-system" className="text-[var(--mid)] hover:text-[#12141A] transition-colors">
                  PadelSpace (Court Engine)
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/custom" className="text-[#FF6B6B] hover:underline font-bold transition-colors">
                  ✦ Custom Bespoke Dev →
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio & Legal */}
          <div className="space-y-3">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#12141A] font-bold">
              // GOVERNANCE
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/terms" className="text-[var(--mid)] hover:text-[#12141A] transition-colors">
                  {t("footer.terms")}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-[var(--mid)] hover:text-[#12141A] transition-colors">
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-[var(--mid)] hover:text-[#12141A] transition-colors">
                  {t("footer.refund")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[var(--mid)] hover:text-[#12141A] transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] tracking-[0.14em] uppercase text-[var(--mid)] font-mono">
          <div>
            © {new Date().getFullYear()} {t("footer.rights")}
          </div>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <span>IDR / GLOBAL</span>
            <span>·</span>
            <span>VETRA.STUDIO</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


