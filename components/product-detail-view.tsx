"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Check, ShieldCheck, Cpu, HardDrive, Terminal, Layers, ArrowUpRight, Lock } from "lucide-react";
import { ExtendedProduct } from "@/lib/products-data";
import { PricingSelector } from "@/components/pricing-selector";
import { ProductGallery } from "@/components/product-gallery";
import { formatIDR } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";

interface ProductDetailViewProps {
  product: ExtendedProduct;
}

export function ProductDetailView({ product }: ProductDetailViewProps) {
  const { t, lang } = useLanguage();

  const monthlyPlan = product.plans?.find((p) => p.type === "SUBSCRIPTION");
  const lifetimePlan = product.plans?.find((p) => p.type === "LIFETIME");

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-8 py-24 font-mono text-[#12141A]">
      {/* Back to catalog navigation */}
      <div className="mb-10">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-xs font-mono text-[var(--mid)] hover:text-[#12141A] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{t("product.backToCatalog")}</span>
        </Link>
      </div>

      {/* PRODUCT HERO HEADER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 border-b border-[var(--line)]">
        <div className="lg:col-span-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] bg-[#12141A] text-[#F4F5F6] px-2.5 py-0.5">
              {product.category}
            </span>
            {product.badge && (
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] bg-[#FF6B6B] text-[#12141A] px-2.5 py-0.5">
                {product.badge}
              </span>
            )}
            <span className="text-xs font-mono text-[var(--mid)] border border-[var(--line)] px-2 py-0.5">
              v{product.version}
            </span>
          </div>

          <h1 className="font-sans font-bold text-3xl sm:text-5xl uppercase tracking-tight text-[#12141A]">
            {product.name}
          </h1>

          <p className="text-base sm:text-lg text-[var(--mid)] leading-snug">
            {product.tagline}
          </p>

          <p className="text-xs sm:text-sm text-[var(--mid)] max-w-2xl leading-relaxed">
            {product.description}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a href="#pricing">
              <button type="button" className="btn-nullwave">
                <span>{t("product.viewPlans")} ↓</span>
              </button>
            </a>
          </div>
        </div>

        {/* Quick Snapshot Card */}
        <div className="lg:col-span-4 border border-[var(--line)] bg-white p-5 space-y-3 shadow-sm">
          <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--mid)] block pb-2 border-b border-[var(--line)]">
            {t("product.overview")}
          </span>

          <div className="space-y-2">
            {monthlyPlan && (
              <div className="flex items-center justify-between text-xs">
                <span className="text-[var(--mid)]">Monthly Plan</span>
                <span className="font-mono font-bold text-[#12141A]">
                  {formatIDR(monthlyPlan.price)}
                  <span className="text-[10px] font-normal text-[var(--mid)] ml-1">{lang === "id" ? "/ bln" : "/ mo"}</span>
                </span>
              </div>
            )}
            {lifetimePlan && (
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#FF6B6B] font-bold">Lifetime License</span>
                <span className="font-mono font-bold text-[#12141A]">
                  {formatIDR(lifetimePlan.price)}
                </span>
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-[var(--line)] text-[10.5px] text-[var(--mid)] font-mono space-y-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[#FF6B6B]">✓</span>
              <span>{lang === "id" ? "Penerbitan Lisensi Instan via Webhook" : "Instant Webhook License Issue"}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#FF6B6B]">✓</span>
              <span>{lang === "id" ? "Installer Terverifikasi & Bebas Gimmick" : "Verified Binary Downloads"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* REAL SOFTWARE SCREENSHOTS & GALLERY */}
      <div className="my-16">
        <div className="mb-6">
          <span className="mi text-[10px] tracking-[0.2em] text-[var(--mid)] block mb-1">
            {t("product.screenshotsTag")}
          </span>
          <h2 className="font-sans font-bold text-2xl sm:text-3xl uppercase tracking-tight text-[#12141A]">
            {t("product.screenshotsTitle")}
          </h2>
        </div>

        <ProductGallery
          productName={product.name}
          version={product.version}
          screenshots={product.screenshots || [product.thumbnail]}
        />
      </div>

      {/* CORE FEATURES BREAKDOWN */}
      <div className="py-16 border-b border-[var(--line)]">
        <div className="mb-8">
          <span className="mi text-[10px] tracking-[0.2em] text-[var(--mid)] block mb-1">
            {t("product.featuresTag")}
          </span>
          <h2 className="font-sans font-bold text-2xl sm:text-3xl uppercase tracking-tight text-[#12141A]">
            {t("product.features")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {product.features?.map((feat) => (
            <div
              key={feat.id}
              className="border border-[var(--line)] bg-white p-6 space-y-2 shadow-sm"
            >
              <h3 className="font-sans font-bold text-sm uppercase text-[#12141A]">{feat.title}</h3>
              <p className="text-xs text-[var(--mid)] leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* USE CASES & SPECIFICATIONS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-16 border-b border-[var(--line)]">
        {/* Use Cases */}
        <div className="space-y-4">
          <h3 className="font-sans font-bold text-xl uppercase tracking-tight text-[#12141A]">
            {t("product.useCases")}
          </h3>
          <p className="text-xs text-[var(--mid)]">
            {t("product.useCasesDesc")}
          </p>
          <ul className="space-y-2.5">
            {product.useCases.map((uc, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-[#12141A]">
                <span className="text-[#FF6B6B] font-bold mt-0.5">▪</span>
                <span>{uc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Specifications */}
        <div className="space-y-4">
          <h3 className="font-sans font-bold text-xl uppercase tracking-tight text-[#12141A]">
            {t("product.specs")}
          </h3>
          <div className="border border-[var(--line)] bg-white overflow-hidden shadow-sm">
            <table className="w-full text-left text-xs">
              <tbody>
                {product.specs.map((spec, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-[var(--line)] last:border-none"
                  >
                    <td className="p-3 font-mono text-[var(--mid)] bg-[#F4F5F6] w-1/3">
                      {spec.label}
                    </td>
                    <td className="p-3 text-[#12141A] font-semibold">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* INTERACTIVE PRICING SELECTOR */}
      <div id="pricing" className="py-16 border-b border-[var(--line)] scroll-mt-20">
        <PricingSelector
          productSlug={product.slug}
          productName={product.name}
          plans={product.plans || []}
        />
      </div>

      {/* PRODUCT SPECIFIC FAQ */}
      <div className="py-16">
        <h3 className="font-sans font-bold text-2xl uppercase tracking-tight text-[#12141A] mb-6">
          {t("product.faqTitle")} {product.name}
        </h3>
        <div className="space-y-3">
          {product.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-[var(--line)] bg-white p-5 space-y-2 shadow-sm"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-xs text-[#FF6B6B] font-bold">[{idx + 1}]</span>
                <h4 className="font-sans font-bold text-sm text-[#12141A] uppercase">{faq.question}</h4>
              </div>
              <p className="text-xs text-[var(--mid)] leading-relaxed pl-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
