"use client";

import * as React from "react";
import Link from "next/link";
import { Check, ShieldCheck, Zap, RefreshCw, Key, ArrowRight } from "lucide-react";
import { formatIDR } from "@/lib/utils";
import { Plan } from "@/types/database.types";
import { useLanguage } from "@/context/language-context";

interface PricingSelectorProps {
  productSlug: string;
  productName: string;
  plans: Plan[];
}

export function PricingSelector({
  productSlug,
  productName,
  plans,
}: PricingSelectorProps) {
  const { t, lang } = useLanguage();
  const [selectedPlanType, setSelectedPlanType] = React.useState<"SUBSCRIPTION" | "LIFETIME">("LIFETIME");

  const activePlan = plans.find((p) => p.type === selectedPlanType) || plans[0];
  const monthlyPlan = plans.find((p) => p.type === "SUBSCRIPTION");
  const lifetimePlan = plans.find((p) => p.type === "LIFETIME");

  return (
    <div className="border border-[var(--line)] bg-white p-6 sm:p-8 font-mono">
      {/* Header & Toggle */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[var(--line)]">
        <div>
          <h3 className="font-sans font-bold text-xl uppercase tracking-tight text-[#12141A]">
            {t("pricingSelector.title")}
          </h3>
          <p className="text-xs text-[var(--mid)] mt-1">
            {t("pricingSelector.subtitle")}
          </p>
        </div>

        {/* Plan Switcher Button Group */}
        <div className="inline-flex border border-[var(--line)] bg-[#F4F5F6] p-1">
          {lifetimePlan && (
            <button
              type="button"
              onClick={() => setSelectedPlanType("LIFETIME")}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono transition-all cursor-pointer ${
                selectedPlanType === "LIFETIME"
                  ? "bg-[#12141A] text-[#F4F5F6] font-bold shadow-sm"
                  : "text-[var(--mid)] hover:text-[#12141A]"
              }`}
            >
              <Key className="w-3.5 h-3.5" />
              {t("pricingSelector.lifetime")}
            </button>
          )}
          {monthlyPlan && (
            <button
              type="button"
              onClick={() => setSelectedPlanType("SUBSCRIPTION")}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono transition-all cursor-pointer ${
                selectedPlanType === "SUBSCRIPTION"
                  ? "bg-[#12141A] text-[#F4F5F6] font-bold shadow-sm"
                  : "text-[var(--mid)] hover:text-[#12141A]"
              }`}
            >
              <RefreshCw className="w-3.5 h-3.5" />
              {t("pricingSelector.monthly")}
            </button>
          )}
        </div>
      </div>

      {/* Selected Plan Details */}
      {activePlan && (
        <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Price and Action */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#12141A] text-[#F4F5F6] text-[10px] font-mono uppercase tracking-wider">
              {activePlan.type === "LIFETIME" ? (
                <>
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF6B6B]" />
                  <span>{t("pricingSelector.lifetimeBadge")}</span>
                </>
              ) : (
                <>
                  <Zap className="w-3.5 h-3.5 text-[#FF6B6B]" />
                  <span>{t("pricingSelector.monthlyBadge")}</span>
                </>
              )}
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-bold text-[#12141A] font-mono tracking-tight">
                {formatIDR(activePlan.price)}
              </span>
              <span className="text-xs text-[var(--mid)] font-mono">
                {activePlan.type === "SUBSCRIPTION" 
                  ? (lang === "id" ? "/ bulan" : "/ mo") 
                  : (lang === "id" ? "/ perpetual" : "/ perpetual")}
              </span>
            </div>

            <Link
              href={`/checkout/${productSlug}?plan=${activePlan.type.toLowerCase()}`}
              className="w-full btn-nullwave justify-center text-center mt-4"
            >
              <span>{activePlan.type === "LIFETIME" ? t("pricingSelector.ctaLifetime") : t("pricingSelector.ctaMonthly")} →</span>
            </Link>
          </div>

          {/* Right: Feature Highlights */}
          <div className="lg:col-span-7 space-y-3 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#12141A]">
              {t("pricingSelector.featuresTitle")}:
            </h4>
            <ul className="space-y-2 text-xs text-[#12141A]">
              {(activePlan.features as string[]).map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#FF6B6B] mt-0.5">▪</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
