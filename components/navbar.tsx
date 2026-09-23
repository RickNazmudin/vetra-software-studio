"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import { LanguageToggle } from "@/components/language-toggle";
import { VetraLogo } from "@/components/logo";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const navLinks = [
    { href: "/products", label: t("nav.software") },
    { href: "/custom", label: t("nav.custom") },
    { href: "/pricing", label: t("nav.pricing") },
    { href: "/about", label: t("nav.about") },
  ];

  return (
    <>
      <nav className="fixed inset-x-0 top-0 h-[62px] z-50 flex items-center justify-between gap-4 px-4 sm:px-8 lg:px-12 bg-[rgba(244,245,246,0.94)] backdrop-blur-md border-b border-[var(--line)] font-mono">
        {/* Brand Mark */}
        <div className="flex items-center gap-3">
          <VetraLogo size="sm" href="/" />
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 list-none">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-[10px] tracking-[0.18em] uppercase transition-colors duration-200 ${
                    isActive
                      ? "text-[#12141A] font-bold border-b border-[#12141A] pb-0.5"
                      : "text-[var(--mid)] hover:text-[#12141A]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Station Status & CTA */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden sm:flex items-center gap-2 text-[9.5px] tracking-[0.16em] uppercase text-[#12141A]">
            <span className="w-[7px] h-[7px] rounded-full bg-[#E5484D] animate-live"></span>
            <span>ON AIR <b className="font-normal text-[var(--mid)] hidden lg:inline">· 24/7 PROD</b></span>
          </div>

          <div className="hidden sm:block">
            <LanguageToggle />
          </div>

          <Link
            href="/dashboard"
            className="bg-[#12141A] text-[#F4F5F6] hover:bg-[#FF6B6B] hover:text-[#12141A] transition-colors text-[10.5px] font-sans font-bold uppercase tracking-[0.16em] px-3.5 sm:px-4 py-2"
          >
            {t("nav.portal")}
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-[#12141A] hover:opacity-75 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden font-mono pt-[62px]"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-full bg-[#F4F5F6] border-b border-[var(--line)] p-6 space-y-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 text-[9px] tracking-[0.2em] uppercase text-[var(--mid)] pb-2 border-b border-[var(--line)]">
              <span className="w-2 h-2 rounded-full bg-[#E5484D] animate-live"></span>
              <span>INDEX // NAVIGATION</span>
            </div>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-bold tracking-[0.14em] uppercase text-[#12141A] py-2 px-3 border-b border-[var(--line)]/50 hover:bg-black/5 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-[10px] text-[#FF6B6B]">→</span>
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <LanguageToggle />
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full justify-center text-xs tracking-wider uppercase border-[var(--line)]">
                    {t("nav.signIn")}
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}


