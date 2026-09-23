"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  KeyRound,
  RefreshCw,
  Receipt,
  DownloadCloud,
  User,
  LogOut,
  ExternalLink,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { useLanguage } from "@/context/language-context";
import { LanguageToggle } from "@/components/language-toggle";
import { VetraLogo } from "@/components/logo";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useLanguage();

  const navigation = [
    { name: t("dash.overview"), href: "/dashboard", icon: LayoutDashboard },
    { name: t("dash.myProducts"), href: "/dashboard/products", icon: Package },
    { name: t("dash.licenses"), href: "/dashboard/licenses", icon: KeyRound },
    { name: t("dash.subscriptions"), href: "/dashboard/subscriptions", icon: RefreshCw },
    { name: t("dash.purchases"), href: "/dashboard/purchases", icon: Receipt },
    { name: t("dash.downloads"), href: "/dashboard/downloads", icon: DownloadCloud },
    { name: t("dash.account"), href: "/dashboard/account", icon: User },
  ];

  async function handleSignOut() {
    try {
      const supabase = createClient();
      await supabase.auth.signOut();
    } catch {}
    localStorage.removeItem("vetra_mock_session");
    router.push("/login");
  }

  return (
    <div className="min-h-screen bg-[#08090c] text-neutral-200 flex flex-col md:flex-row">
      {/* Sidebar for Desktop */}
      <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-[#181c25] bg-[#0c0e14] p-4 flex flex-col justify-between shrink-0">
        <div>
          {/* Brand Header */}
          <div className="flex items-center justify-between pb-6 mb-4 border-b border-[#181c25]">
            <VetraLogo size="sm" subtitle="CUSTOMER PORTAL" href="/" dark={true} />

            <Link href="/products" title="Browse Store" className="text-neutral-400 hover:text-white">
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Nav Items */}
          <nav className="space-y-1">
            {navigation.map((item) => {
              const isActive =
                item.href === "/dashboard"
                  ? pathname === "/dashboard"
                  : pathname.startsWith(item.href);
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-[4px] transition-colors ${
                    isActive
                      ? "bg-[#181c26] text-white font-semibold border border-[#272f3e]"
                      : "text-neutral-400 hover:text-white hover:bg-[#12151c]"
                  }`}
                >
                  <Icon className="w-4 h-4 text-neutral-400" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Footer / Controls */}
        <div className="pt-4 border-t border-[#181c25] space-y-3 mt-6">
          <div className="flex items-center justify-between px-1">
            <span className="text-[11px] font-mono text-neutral-400">Language:</span>
            <LanguageToggle />
          </div>

          <Link href="/admin">
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start gap-2 font-mono text-[11px] text-neutral-400"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>{t("dash.adminSwitch")}</span>
            </Button>
          </Link>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleSignOut}
            className="w-full justify-start gap-2 text-xs text-neutral-400 hover:text-red-300"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>{t("dash.signOut")}</span>
          </Button>
        </div>
      </aside>

      {/* Main Dashboard Content */}
      <main className="flex-1 p-6 sm:p-10 overflow-y-auto">
        <div className="max-w-5xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
