"use client";

import * as React from "react";
import { KeyRound, Copy, Check, ShieldCheck, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";

export default function LicensesPage() {
  const { t, lang } = useLanguage();
  const [copiedKey, setCopiedKey] = React.useState<string | null>(null);
  const [licenses, setLicenses] = React.useState<any[]>([]);

  React.useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("vetra_customer_orders") || "[]");
    if (saved.length === 0) {
      setLicenses([
        {
          productName: "TOKOin-POS",
          licenseKey: "VETRA-TOKO-9921-8842",
          type: "LIFETIME",
          status: "ACTIVE",
          activations: lang === "id" ? "1 / 3 Terminal Kasir Terdaftar" : "1 / 3 Cashier Terminals Registered",
          date: "2026-09-22",
        },
      ]);
    } else {
      setLicenses(
        saved.map((s: any) => ({
          productName: s.productName,
          licenseKey: s.licenseKey,
          type: s.planType || "LIFETIME",
          status: "ACTIVE",
          activations: lang === "id" ? "1 / 2 Perangkat Terdaftar" : "1 / 2 Devices Registered",
          date: s.date ? new Date(s.date).toISOString().split("T")[0] : "2026-09-22",
        }))
      );
    }
  }, [lang]);

  function copyToClipboard(key: string) {
    navigator.clipboard.writeText(key);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  }

  return (
    <div className="space-y-6 font-mono">
      <div className="border-b border-[#181c25] pb-4">
        <h1 className="text-xl font-bold tracking-tight text-white font-sans">{t("dash.licTitle")}</h1>
        <p className="text-xs text-neutral-400">
          {t("dash.licDesc")}
        </p>
      </div>

      <div className="space-y-4">
        {licenses.map((lic, idx) => (
          <div
            key={idx}
            className="rounded-[6px] border border-[#202534] bg-[#0c0e14] p-5 space-y-3"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <KeyRound className="w-4 h-4 text-emerald-400" />
                <h3 className="text-sm font-bold text-white font-sans">{lic.productName}</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-[3px] bg-neutral-800 text-neutral-300">
                  {lic.type}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-[3px] bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 font-bold uppercase">
                  {lic.status}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between bg-[#11141c] border border-[#1d222e] px-3 py-2.5 rounded-[4px]">
              <code className="font-mono text-xs sm:text-sm font-bold text-white tracking-wider">
                {lic.licenseKey}
              </code>
              <button
                onClick={() => copyToClipboard(lic.licenseKey)}
                className="flex items-center gap-1 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                {copiedKey === lic.licenseKey ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 text-xs">{lang === "id" ? "Tersalin" : "Copied"}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="text-xs">{lang === "id" ? "Salin Key" : "Copy Key"}</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-neutral-400 font-mono pt-1">
              <span>{lic.activations}</span>
              <span>{lang === "id" ? "Diterbitkan: " : "Issued: "}{lic.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
