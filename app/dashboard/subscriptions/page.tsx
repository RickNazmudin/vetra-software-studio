"use client";

import * as React from "react";
import Link from "next/link";
import { RefreshCw, AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";

export default function SubscriptionsPage() {
  const { t, lang } = useLanguage();
  const [hasSubscription, setHasSubscription] = React.useState(false);

  return (
    <div className="space-y-6 font-mono">
      <div className="border-b border-[#181c25] pb-4">
        <h1 className="text-xl font-bold tracking-tight text-white font-sans">{t("dash.subsTitle")}</h1>
        <p className="text-xs text-neutral-400">
          {t("dash.subsDesc")}
        </p>
      </div>

      {!hasSubscription ? (
        <div className="rounded-[8px] border border-[#202534] bg-[#0c0e14] p-8 text-center space-y-4">
          <RefreshCw className="w-8 h-8 text-neutral-500 mx-auto" />
          <div className="space-y-1">
            <h3 className="text-base font-bold text-white font-sans">{t("dash.noSubs")}</h3>
            <p className="text-xs text-neutral-400 max-w-sm mx-auto">
              {t("dash.noSubsDesc")}
            </p>
          </div>
          <Link href="/products" className="inline-block pt-2">
            <Button size="sm" variant="outline" className="text-xs">
              {t("dash.exploreMore")}
            </Button>
          </Link>
        </div>
      ) : null}
    </div>
  );
}

