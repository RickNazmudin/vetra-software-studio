"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Layers,
  ShoppingBag,
  Key,
  UploadCloud,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import { LanguageToggle } from "@/components/language-toggle";
import { VetraLogo } from "@/components/logo";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems = [
    { name: t("admin.overview"), href: "/admin", icon: BarChart3 },
    { name: t("admin.products"), href: "/admin/products", icon: Layers },
    { name: t("admin.orders"), href: "/admin/orders", icon: ShoppingBag },
    { name: t("admin.licenses"), href: "/admin/licenses", icon: Key },
    { name: t("admin.releases"), href: "/admin/releases", icon: UploadCloud },
  ];

  return (
    <div className="min-h-screen bg-[#07080b] text-neutral-200 flex flex-col md:flex-row">
      {/* Admin Sidebar */}
      <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-[#1a1f2c] bg-[#0a0c12] p-4 flex flex-col justify-between shrink-0">
        <div>
          {/* Admin Header */}
          <div className="flex items-center justify-between pb-6 mb-4 border-b border-[#181c25]">
            <VetraLogo size="sm" subtitle="ADMIN CONTROL" href="/admin" dark={true} />
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-[3px] bg-red-950/80 text-red-400 border border-red-800/40 uppercase">
              OPERATOR
            </span>
          </div>

          {/* Nav Items */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive =
                item.href === "/admin"
                  ? pathname === "/admin"
                  : pathname.startsWith(item.href);
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-[4px] transition-colors ${
                    isActive
                      ? "bg-[#181d2a] text-white font-semibold border border-[#2b3447]"
                      : "text-neutral-400 hover:text-white hover:bg-[#12151f]"
                  }`}
                >
                  <Icon className="w-4 h-4 text-neutral-400" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Controls & Back to Portal */}
        <div className="pt-4 border-t border-[#181c25] space-y-3 mt-6">
          <div className="flex items-center justify-between px-1">
            <span className="text-[11px] font-mono text-neutral-400">Language:</span>
            <LanguageToggle />
          </div>

          <Link href="/dashboard">
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start gap-2 text-xs text-neutral-300"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{t("nav.portal")}</span>
            </Button>
          </Link>
          <Link href="/">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start gap-2 text-xs text-neutral-400"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>{t("nav.backToStore")}</span>
            </Button>
          </Link>
        </div>
      </aside>

      {/* Admin Content Area */}
      <main className="flex-1 p-6 sm:p-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
