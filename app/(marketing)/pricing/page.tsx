"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllProducts } from "@/lib/products-data";
import { formatIDR } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";

export default function PricingPage() {
  const products = getAllProducts();
  const { t, lang } = useLanguage();

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-8 py-24 font-mono text-[#12141A]">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <span className="mi text-[10px] tracking-[0.2em] text-[var(--mid)] block">
          {t("pricingPage.tag")}
        </span>
        <h1 className="font-sans font-bold text-3xl sm:text-5xl uppercase tracking-tight text-[#12141A]">
          {t("pricingPage.title")}
        </h1>
        <p className="text-xs sm:text-sm text-[var(--mid)] leading-relaxed">
          {t("pricingPage.desc")}
        </p>
      </div>

      {/* Comparison Matrix Table */}
      <div className="border border-[var(--line)] bg-white overflow-hidden mb-16 shadow-sm">
        <div className="p-5 sm:p-6 bg-[#12141A] text-[#F4F5F6] border-b border-[var(--line)]">
          <h3 className="text-xs sm:text-sm font-bold font-sans uppercase tracking-wider">
            {t("pricingPage.tableTitle")}
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[var(--line)] bg-[#F4F5F6] text-[var(--mid)] font-mono">
                <th className="p-4">{t("pricingPage.colFeature")}</th>
                <th className="p-4 text-center w-48">{t("pricingPage.colMonthly")}</th>
                <th className="p-4 text-center w-48 bg-[#12141A] text-[#F4F5F6] font-bold">{t("pricingPage.colLifetime")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--line)] text-[#12141A]">
              <tr>
                <td className="p-4 font-bold">{t("pricingPage.row1")}</td>
                <td className="p-4 text-center text-[var(--mid)]">{t("pricingPage.row1M")}</td>
                <td className="p-4 text-center bg-black/5 font-bold text-[#12141A]">{t("pricingPage.row1L")}</td>
              </tr>
              <tr>
                <td className="p-4 font-bold">{t("pricingPage.row2")}</td>
                <td className="p-4 text-center text-[var(--mid)]">{t("pricingPage.row2M")}</td>
                <td className="p-4 text-center bg-black/5 font-bold text-[#12141A]">{t("pricingPage.row2L")}</td>
              </tr>
              <tr>
                <td className="p-4 font-bold">{t("pricingPage.row3")}</td>
                <td className="p-4 text-center text-[var(--mid)]">{t("pricingPage.row3M")}</td>
                <td className="p-4 text-center bg-black/5 font-bold text-[#12141A]">{t("pricingPage.row3L")}</td>
              </tr>
              <tr>
                <td className="p-4 font-bold">{t("pricingPage.row4")}</td>
                <td className="p-4 text-center text-[var(--mid)]">✓ {lang === "id" ? "Ya" : "Yes"}</td>
                <td className="p-4 text-center bg-black/5 font-bold text-[#12141A]">✓ {lang === "id" ? "Ya" : "Yes"}</td>
              </tr>
              <tr>
                <td className="p-4 font-bold">{t("pricingPage.row5")}</td>
                <td className="p-4 text-center text-[var(--mid)]">{t("pricingPage.row5M")}</td>
                <td className="p-4 text-center bg-black/5 font-bold text-[#12141A]">{t("pricingPage.row5L")}</td>
              </tr>
              <tr>
                <td className="p-4 font-bold">{t("pricingPage.row6")}</td>
                <td className="p-4 text-center text-[var(--mid)]">{t("pricingPage.row6M")}</td>
                <td className="p-4 text-center bg-black/5 font-bold text-[#12141A]">{t("pricingPage.row6L")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Product Specific Pricing List */}
      <div className="space-y-8 mb-16">
        <div className="border-b border-[var(--line)] pb-4">
          <h2 className="font-sans font-bold text-2xl uppercase tracking-tight text-[#12141A]">
            {t("pricingPage.productListTitle")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((p) => {
            const monthly = p.plans?.find((x) => x.type === "SUBSCRIPTION");
            const lifetime = p.plans?.find((x) => x.type === "LIFETIME");

            return (
              <div
                key={p.id}
                className="border border-[var(--line)] bg-white p-6 space-y-4 shadow-sm"
              >
                <div className="flex items-start justify-between gap-2 border-b border-[var(--line)] pb-4">
                  <div>
                    <span className="mi text-[9px] text-[#FF6B6B] tracking-[0.16em] uppercase block mb-1">
                      {p.category}
                    </span>
                    <h3 className="font-sans font-bold text-lg uppercase text-[#12141A]">{p.name}</h3>
                  </div>
                  <span className="text-[10px] font-mono text-[var(--mid)] border border-[var(--line)] px-2 py-0.5">
                    v{p.version}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  {monthly && (
                    <div className="border-r border-[var(--line)] pr-4">
                      <span className="mi text-[8.5px] text-[var(--mid)] block mb-1">MONTHLY</span>
                      <span className="font-bold text-base block font-mono text-[#12141A]">{formatIDR(monthly.price)}</span>
                      <span className="text-[10px] text-[var(--mid)]">{lang === "id" ? "/ bulan" : "/ month"}</span>
                    </div>
                  )}
                  {lifetime && (
                    <div>
                      <span className="mi text-[8.5px] text-[#FF6B6B] block mb-1">LIFETIME</span>
                      <span className="font-bold text-base block font-mono text-[#12141A]">{formatIDR(lifetime.price)}</span>
                      <span className="text-[10px] text-[var(--mid)]">{lang === "id" ? "sekali bayar" : "one-time"}</span>
                    </div>
                  )}
                </div>

                <div className="pt-2">
                  <Link
                    href={`/products/${p.slug}#pricing`}
                    className="inline-flex w-full items-center justify-between bg-[#12141A] text-[#F4F5F6] hover:bg-[#FF6B6B] hover:text-[#12141A] text-xs font-bold uppercase tracking-wider py-2.5 px-4 transition-colors font-sans"
                  >
                    <span>{lang === "id" ? "Lihat Detail & Beli" : "View Details & Buy"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
