"use client";

import Link from "next/link";
import { ArrowRight, Check, Image as ImageIcon } from "lucide-react";
import { formatIDR } from "@/lib/utils";
import { ExtendedProduct } from "@/lib/products-data";
import { useLanguage } from "@/context/language-context";

interface ProductCardProps {
  product: ExtendedProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const { lang } = useLanguage();
  const monthlyPlan = product.plans?.find((p) => p.type === "SUBSCRIPTION");
  const lifetimePlan = product.plans?.find((p) => p.type === "LIFETIME");

  return (
    <article className="group relative flex flex-col justify-between bg-[#12141A] text-[#F4F5F6] border border-white/10 overflow-hidden transition-all duration-300 hover:bg-[#1B1E26] hover:border-[#FF6B6B]/40 font-mono">
      <div>
        {/* Product Art Plate (with live level meter on image) */}
        <Link href={`/products/${product.slug}`} className="block relative aspect-square w-full overflow-hidden bg-[#0C0E12]">
          {product.thumbnail ? (
            <img
              src={product.thumbnail}
              alt={product.name}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-[1.02]"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#0C0E12] text-white/20">
              <ImageIcon className="w-10 h-10 opacity-40" />
            </div>
          )}
          
          {/* On Air / Category Badge */}
          <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
            <span className="text-[8.5px] font-bold uppercase tracking-[0.18em] bg-[#FF6B6B] text-[#12141A] px-2 py-0.5">
              {product.badge || "MODULE ON AIR"}
            </span>
          </div>

          <div className="absolute top-2.5 right-2.5">
            <span className="text-[8.5px] font-mono tracking-widest text-[#F4F5F6]/70 bg-black/60 px-2 py-0.5 border border-white/10">
              v{product.version}
            </span>
          </div>

          {/* Live Level Meter (Nullwave signature) */}
          <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[rgba(244,245,246,0.14)]">
            <i className="block h-full w-[45%] group-hover:w-[85%] bg-[#FF6B6B] transition-all duration-500 ease-out"></i>
          </div>
        </Link>

        {/* Content Body */}
        <div className="p-5 sm:p-6 pb-2">
          {/* Index Number in Coral Accent */}
          <div className="text-[10px] tracking-[0.2em] uppercase text-[#FF6B6B] font-mono mb-2">
            STATION // {product.category}
          </div>

          {/* Title */}
          <Link href={`/products/${product.slug}`} className="block mb-2">
            <h3 className="font-sans font-bold text-lg sm:text-xl uppercase tracking-tight text-[#F4F5F6] group-hover:text-[#FF6B6B] transition-colors leading-tight">
              {product.name}
            </h3>
          </Link>

          {/* Description */}
          <p className="text-xs text-[rgba(244,245,246,0.6)] leading-relaxed mb-4 line-clamp-2">
            {product.short_description}
          </p>

          {/* Product Highlights */}
          <div className="space-y-1.5 border-t border-[rgba(244,245,246,0.1)] pt-3 mb-3 text-xs">
            {product.highlights.slice(0, 3).map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2 text-[rgba(244,245,246,0.7)]">
                <span className="text-[#FF6B6B] text-[10px] mt-0.5">▪</span>
                <span className="line-clamp-1 text-[11px]">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing & Link */}
      <div className="p-5 sm:p-6 pt-0">
        <div className="border-t border-[rgba(244,245,246,0.1)] pt-4">
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <span className="text-[9px] font-mono text-[rgba(244,245,246,0.45)] block uppercase tracking-[0.16em]">
                {lang === "id" ? "TARIF DASAR" : "BASE PRICE"}
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-base sm:text-lg font-bold text-[#F4F5F6] font-mono">
                  {monthlyPlan ? formatIDR(monthlyPlan.price) : lifetimePlan ? formatIDR(lifetimePlan.price) : "Hubungi Kami"}
                </span>
                {monthlyPlan && (
                  <span className="text-[10px] text-[rgba(244,245,246,0.5)] font-mono">
                    {lang === "id" ? "/ bln" : "/ mo"}
                  </span>
                )}
              </div>
            </div>

            {lifetimePlan && (
              <span className="text-[9.5px] font-mono text-[#FF6B6B] border border-[#FF6B6B]/30 bg-[#FF6B6B]/10 px-2 py-0.5 uppercase tracking-wider">
                LIFETIME
              </span>
            )}
          </div>

          <Link
            href={`/products/${product.slug}`}
            className="inline-flex w-full items-center justify-between bg-transparent hover:bg-[#FF6B6B] hover:text-[#12141A] text-[#F4F5F6] text-[11px] font-sans font-bold uppercase tracking-[0.16em] py-2.5 px-4 border border-[rgba(244,245,246,0.2)] hover:border-[#FF6B6B] transition-all duration-200"
          >
            <span>{lang === "id" ? "Buka Stasiun Software" : "Open Software Station"}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}


