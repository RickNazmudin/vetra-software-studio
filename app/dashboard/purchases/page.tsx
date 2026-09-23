"use client";

import * as React from "react";
import { Receipt, Download, CheckCircle2, ExternalLink } from "lucide-react";
import { formatIDR, formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";

export default function PurchasesPage() {
  const { t, lang } = useLanguage();
  const [orders, setOrders] = React.useState<any[]>([]);

  React.useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("vetra_customer_orders") || "[]");
    if (saved.length === 0) {
      setOrders([
        {
          orderNumber: "VETRA-TOKOIN-2026",
          productName: "TOKOin-POS",
          planName: "Lifetime License",
          amount: 8900000,
          date: new Date().toISOString(),
          status: "PAID",
          paymentMethod: "QRIS",
        },
      ]);
    } else {
      setOrders(saved);
    }
  }, []);

  return (
    <div className="space-y-6 font-mono">
      <div className="border-b border-[#181c25] pb-4">
        <h1 className="text-xl font-bold tracking-tight text-white font-sans">{t("dash.purchasesTitle")}</h1>
        <p className="text-xs text-neutral-400">
          {t("dash.purchasesDesc")}
        </p>
      </div>

      <div className="rounded-[8px] border border-[#202534] bg-[#0c0e14] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#181c25] bg-[#11141c] text-neutral-400 font-mono">
                <th className="p-4">{lang === "id" ? "Nomor Pesanan" : "Order Number"}</th>
                <th className="p-4">{lang === "id" ? "Software & Paket" : "Software & Plan"}</th>
                <th className="p-4">{lang === "id" ? "Tanggal" : "Date"}</th>
                <th className="p-4">{lang === "id" ? "Metode" : "Method"}</th>
                <th className="p-4">{lang === "id" ? "Nominal" : "Amount"}</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Invoice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#181c25] text-neutral-300">
              {orders.map((ord, idx) => (
                <tr key={idx} className="hover:bg-[#11131a] transition-colors">
                  <td className="p-4 font-mono font-bold text-white">
                    #{ord.orderNumber}
                  </td>
                  <td className="p-4">
                    <span className="font-bold text-white block">{ord.productName}</span>
                    <span className="text-[11px] text-neutral-400 font-mono">{ord.planName}</span>
                  </td>
                  <td className="p-4 font-mono text-neutral-400">
                    {formatDate(ord.date)}
                  </td>
                  <td className="p-4 font-mono text-neutral-300">
                    {ord.paymentMethod || "QRIS"}
                  </td>
                  <td className="p-4 font-mono font-bold text-white">
                    {formatIDR(ord.amount || 1499000)}
                  </td>
                  <td className="p-4">
                    <span className="px-2 py-0.5 rounded-[3px] bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 text-[10px] font-mono font-bold uppercase">
                      {ord.status || "PAID"}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => alert(lang === "id" ? `Mengunduh PDF Invoice untuk pesanan #${ord.orderNumber}` : `Downloading PDF Invoice for order #${ord.orderNumber}`)}
                      className="text-xs font-mono text-neutral-400 hover:text-white inline-flex items-center gap-1 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

