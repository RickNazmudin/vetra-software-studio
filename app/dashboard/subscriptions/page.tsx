"use client";

import * as React from "react";
import Link from "next/link";
import { RefreshCw, AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SubscriptionsPage() {
  const [hasSubscription, setHasSubscription] = React.useState(false);

  return (
    <div className="space-y-6">
      <div className="border-b border-[#181c25] pb-4">
        <h1 className="text-xl font-bold tracking-tight text-white">Monthly Subscriptions</h1>
        <p className="text-xs text-neutral-400">
          Kelola paket langganan bulanan aktif dan status penagihan otomatis.
        </p>
      </div>

      {!hasSubscription ? (
        <div className="rounded-[8px] border border-[#202534] bg-[#0c0e14] p-8 text-center space-y-4">
          <RefreshCw className="w-8 h-8 text-neutral-500 mx-auto" />
          <div className="space-y-1">
            <h3 className="text-base font-bold text-white">Tidak Ada Langganan Bulanan Aktif</h3>
            <p className="text-xs text-neutral-400 max-w-sm mx-auto">
              Saat ini semua lisensi software yang Anda miliki adalah <strong>Lifetime License</strong> tanpa biaya tagihan bulanan berulang.
            </p>
          </div>
          <Link href="/products" className="inline-block pt-2">
            <Button size="sm" variant="outline" className="text-xs">
              Jelajahi Software Lainnya
            </Button>
          </Link>
        </div>
      ) : null}
    </div>
  );
}
