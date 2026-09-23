"use client";

import * as React from "react";
import Link from "next/link";
import { Package, DownloadCloud, ExternalLink, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MyProductsPage() {
  const [orders, setOrders] = React.useState<any[]>([]);

  React.useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("vetra_customer_orders") || "[]");
    if (saved.length === 0) {
      setOrders([
        {
          productName: "TOKOin-POS",
          productSlug: "tokoin-pos",
          version: "2.1.0",
          planType: "LIFETIME",
          licenseKey: "VETRA-TOKO-9921-8842",
          status: "ACTIVE",
        },
      ]);
    } else {
      setOrders(saved);
    }
  }, []);

  return (
    <div className="space-y-6">
      <div className="border-b border-[#181c25] pb-4">
        <h1 className="text-xl font-bold tracking-tight text-white">My Software</h1>
        <p className="text-xs text-neutral-400">
          Daftar seluruh aplikasi yang Anda miliki dengan akses unduh dan lisensi.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {orders.map((item, idx) => (
          <div
            key={idx}
            className="rounded-[6px] border border-[#202634] bg-[#0c0e14] p-6 space-y-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-bold text-white">{item.productName}</h3>
                <span className="text-xs font-mono text-neutral-400">
                  Plan: {item.planType || "LIFETIME"} • v{item.version || "1.0.0"}
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-[3px] bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 text-[10px] font-mono font-bold uppercase shrink-0">
                ACTIVE
              </span>
            </div>

            <div className="bg-[#12151d] border border-[#1d222e] p-3 rounded-[4px] space-y-1">
              <span className="text-[10px] font-mono text-neutral-400 uppercase">License Key</span>
              <code className="font-mono text-xs font-bold text-white block">
                {item.licenseKey || "VETRA-XXXX-XXXX-XXXX"}
              </code>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <Link href="/dashboard/downloads" className="flex-1">
                <Button size="sm" className="w-full text-xs gap-1.5">
                  <DownloadCloud className="w-3.5 h-3.5" />
                  <span>Download Installer</span>
                </Button>
              </Link>
              <Link href={`/products/${item.productSlug || "pos-pro"}`}>
                <Button variant="outline" size="sm" className="text-xs">
                  <ExternalLink className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
