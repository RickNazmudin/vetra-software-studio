"use client";

import * as React from "react";
import { ShoppingBag, Search, Filter } from "lucide-react";
import { formatIDR, formatDate } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";

export default function AdminOrdersPage() {
  const { t, lang } = useLanguage();
  const [filterStatus, setFilterStatus] = React.useState("ALL");
  const [search, setSearch] = React.useState("");

  const orders = [
    { id: "ORD-20260922-101", customer: "retail.nusantara@gmail.com", product: "TOKOin-POS", plan: "Lifetime License", amount: 8900000, status: "PAID", date: "2026-09-22" },
    { id: "ORD-20260922-100", customer: "cafe.senja@bisnis.id", product: "TOKOin-POS", plan: "Monthly Subscription", amount: 399000, status: "PAID", date: "2026-09-22" },
    { id: "ORD-20260921-099", customer: "butik.cantika@yahoo.com", product: "TOKOin-POS", plan: "Lifetime License", amount: 8900000, status: "PAID", date: "2026-09-21" },
    { id: "ORD-20260920-098", customer: "minimarket.barokah@gmail.com", product: "TOKOin-POS", plan: "Lifetime License", amount: 8900000, status: "PAID", date: "2026-09-20" },
  ];

  return (
    <div className="space-y-6 font-mono">
      <div className="border-b border-[#181c25] pb-4">
        <h1 className="text-xl font-bold tracking-tight text-white font-sans">
          {lang === "id" ? "Pesanan & Riwayat Transaksi" : "Orders & Transactions"}
        </h1>
        <p className="text-xs text-neutral-400">
          {lang === "id"
            ? "Semua transaksi pesanan masuk dari payment gateway terverifikasi."
            : "All incoming order transactions verified via payment gateway webhooks."}
        </p>
      </div>

      <div className="rounded-[8px] border border-[#202534] bg-[#0c0e14] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#181c25] bg-[#11141c] text-neutral-400 font-mono">
                <th className="p-4">Order ID</th>
                <th className="p-4">{lang === "id" ? "Pelanggan" : "Customer"}</th>
                <th className="p-4">{lang === "id" ? "Produk & Paket" : "Product & Plan"}</th>
                <th className="p-4">{lang === "id" ? "Nominal" : "Amount"}</th>
                <th className="p-4">{lang === "id" ? "Tanggal" : "Date"}</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#181c25] text-neutral-300">
              {orders.map((ord, idx) => (
                <tr key={idx} className="hover:bg-[#11131a]">
                  <td className="p-4 font-mono font-bold text-white">#{ord.id}</td>
                  <td className="p-4 text-neutral-200">{ord.customer}</td>
                  <td className="p-4">
                    <span className="font-bold text-white block font-sans">{ord.product}</span>
                    <span className="text-[11px] text-neutral-400 font-mono">{ord.plan}</span>
                  </td>
                  <td className="p-4 font-mono font-bold text-white">
                    {formatIDR(ord.amount)}
                  </td>
                  <td className="p-4 font-mono text-neutral-400">{ord.date}</td>
                  <td className="p-4">
                    <span className="px-2 py-0.5 rounded-[3px] bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 text-[10px] font-mono font-bold uppercase">
                      {ord.status}
                    </span>
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

