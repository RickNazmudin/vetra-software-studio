"use client";

import * as React from "react";
import Link from "next/link";
import { Package, KeyRound, DownloadCloud, ArrowUpRight, CheckCircle2, ShieldCheck, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";

export default function DashboardOverviewPage() {
  const { t, lang } = useLanguage();
  const [copiedKey, setCopiedKey] = React.useState(false);
  const [orders, setOrders] = React.useState<any[]>([]);

  React.useEffect(() => {
    const localOrders = JSON.parse(localStorage.getItem("vetra_customer_orders") || "[]");
    if (localOrders.length === 0) {
      // Default demo initial license for new portal visitors
      const initial = [
        {
          orderNumber: "VETRA-TOKOIN-2026",
          productName: "TOKOin-POS",
          productSlug: "tokoin-pos",
          planType: "LIFETIME",
          planName: "Lifetime License",
          amount: 8900000,
          licenseKey: "VETRA-TOKO-9921-8842",
          date: new Date().toISOString(),
          status: "PAID",
        },
      ];
      setOrders(initial);
      localStorage.setItem("vetra_customer_orders", JSON.stringify(initial));
    } else {
      setOrders(localOrders);
    }
  }, []);

  const activeLicense = orders[0];

  function copyKey(key: string) {
    navigator.clipboard.writeText(key);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  }

  return (
    <div className="space-y-8 font-mono">
      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#181c25] pb-6">
        <div>
          <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest block mb-1">
            {lang === "id" ? "Portal Pengguna" : "Customer Dashboard"}
          </span>
          <h1 className="text-2xl font-bold tracking-tight text-white font-sans">
            {t("dash.welcomeTitle")}
          </h1>
        </div>

        <Link href="/products">
          <Button variant="outline" size="sm" className="gap-1.5 font-mono text-xs">
            <span>{t("dash.exploreMore")}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Button>
        </Link>
      </div>

      {/* Active License Highlight Card */}
      {activeLicense && (
        <div className="rounded-[8px] border border-[#232938] bg-[#0e1117] p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <h2 className="text-base font-bold text-white font-sans">
                {activeLicense.productName} — {t("dash.activeEntitlement")}
              </h2>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-[3px] bg-emerald-950/60 text-emerald-400 border border-emerald-800/60 font-bold uppercase">
              {activeLicense.planType} ACTIVE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-[#13161f] border border-[#1f2430] p-4 rounded-[6px]">
            <div className="md:col-span-8 space-y-1">
              <span className="text-[10px] font-mono text-neutral-400 uppercase">
                {t("dash.prodKey")}
              </span>
              <div className="flex items-center gap-3">
                <code className="font-mono text-sm font-bold text-white tracking-wider">
                  {activeLicense.licenseKey}
                </code>
                <button
                  onClick={() => copyKey(activeLicense.licenseKey)}
                  className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                >
                  {copiedKey ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>{copiedKey ? (lang === "id" ? "Tersalin" : "Copied") : (lang === "id" ? "Salin" : "Copy")}</span>
                </button>
              </div>
            </div>

            <div className="md:col-span-4 flex items-center justify-start md:justify-end gap-2">
              <Link href="/dashboard/downloads">
                <Button size="sm" className="gap-1.5 text-xs font-semibold">
                  <DownloadCloud className="w-3.5 h-3.5" />
                  <span>{t("dash.downloadInstaller")}</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Quick Summary Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-[6px] border border-[#1b202a] bg-[#0c0e14] p-5 space-y-1">
          <span className="text-[10px] font-mono uppercase text-neutral-400">{t("dash.totalOwned")}</span>
          <div className="text-2xl font-bold font-mono text-white">{orders.length}</div>
          <Link href="/dashboard/products" className="text-xs text-neutral-400 hover:text-white inline-block pt-1">
            {lang === "id" ? "Lihat daftar produk →" : "View products list →"}
          </Link>
        </div>

        <div className="rounded-[6px] border border-[#1b202a] bg-[#0c0e14] p-5 space-y-1">
          <span className="text-[10px] font-mono uppercase text-neutral-400">{t("dash.activeLicCount")}</span>
          <div className="text-2xl font-bold font-mono text-white">{orders.length}</div>
          <Link href="/dashboard/licenses" className="text-xs text-neutral-400 hover:text-white inline-block pt-1">
            {lang === "id" ? "Kelola license keys →" : "Manage license keys →"}
          </Link>
        </div>

        <div className="rounded-[6px] border border-[#1b202a] bg-[#0c0e14] p-5 space-y-1">
          <span className="text-[10px] font-mono uppercase text-neutral-400">{t("dash.activeSubsCount")}</span>
          <div className="text-2xl font-bold font-mono text-white">0</div>
          <Link href="/dashboard/subscriptions" className="text-xs text-neutral-400 hover:text-white inline-block pt-1">
            {lang === "id" ? "Status tagihan rutin →" : "Recurring billing status →"}
          </Link>
        </div>
      </div>

      {/* Recent Purchases List */}
      <div className="rounded-[8px] border border-[#1c212c] bg-[#0c0e13] overflow-hidden">
        <div className="p-4 bg-[#11141b] border-b border-[#1b202a] flex items-center justify-between">
          <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            {t("dash.recentPurchases")}
          </h3>
          <Link href="/dashboard/purchases" className="text-xs text-neutral-400 hover:text-white">
            {t("dash.viewAll")}
          </Link>
        </div>

        <div className="divide-y divide-[#181c25]">
          {orders.map((ord, i) => (
            <div key={i} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div>
                <span className="font-bold text-white block">{ord.productName}</span>
                <span className="text-neutral-400 font-mono text-[11px]">
                  Order #{ord.orderNumber} • {ord.planName}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono font-bold text-white">
                  Rp{ord.amount?.toLocaleString("id-ID")}
                </span>
                <span className="px-2 py-0.5 rounded-[3px] bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 text-[10px] font-mono font-bold uppercase">
                  PAID
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
