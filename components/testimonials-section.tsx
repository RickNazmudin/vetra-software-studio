"use client";

import * as React from "react";
import Image from "next/image";
import { Star, CheckCircle2, Quote } from "lucide-react";
import { TESTIMONIALS, Testimonial } from "@/lib/testimonials-data";
import { useLanguage } from "@/context/language-context";

export function TestimonialsSection() {
  const { t, lang } = useLanguage();
  const [activeFilter, setActiveFilter] = React.useState<string>("all");

  const filterOptions = [
    { key: "all", label: lang === "id" ? "Semua Review" : "All Reviews" },
    { key: "tokoin-pos", label: "TOKOin-POS" },
    { key: "brew-and-bite", label: "Brew & Bite" },
    { key: "modakita", label: "ModaKita" },
    { key: "padelspace", label: "PadelSpace" },
    { key: "custom", label: lang === "id" ? "Custom Studio" : "Bespoke" },
  ];

  const filteredTestimonials = React.useMemo(() => {
    if (activeFilter === "all") return TESTIMONIALS;
    return TESTIMONIALS.filter((item) => item.productKey === activeFilter);
  }, [activeFilter]);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#F4F5F6] border-b border-[var(--line)]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[var(--line)]">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#FF6B6B] block font-mono font-bold">
              {t("testimonials.tag")}
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-5xl uppercase tracking-tight text-[#12141A]">
              {t("testimonials.title")}
            </h2>
            <p className="text-xs sm:text-sm text-[var(--mid)] leading-relaxed">
              {t("testimonials.subtitle")}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3 bg-white/80 border border-[var(--line)] px-4 py-2.5 shadow-sm">
            <div className="flex items-center gap-1 text-[#FF6B6B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <div className="border-l border-[var(--line)] pl-3">
              <span className="font-sans font-bold text-xs text-[#12141A] block">5.0 / 5.0 RATING</span>
              <span className="text-[10px] text-[var(--mid)] font-mono">{t("testimonials.verified")}</span>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              type="button"
              onClick={() => setActiveFilter(opt.key)}
              className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider transition-all border ${
                activeFilter === opt.key
                  ? "bg-[#12141A] text-[#F4F5F6] border-[#12141A] shadow-sm"
                  : "bg-white/60 text-[#12141A] border-[var(--line)] hover:bg-black/5"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((item: Testimonial) => (
            <div
              key={item.id}
              className="bg-white border border-[var(--line)] p-6 sm:p-7 flex flex-col justify-between hover:border-[#12141A] transition-all hover:shadow-md relative group"
            >
              {/* Product Badge & Quote icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[9.5px] font-mono tracking-widest uppercase bg-[#12141A]/5 text-[#12141A] px-2.5 py-1 font-bold border border-black/10">
                  {item.productName}
                </span>
                <Quote className="w-5 h-5 text-[var(--line)] group-hover:text-[#FF6B6B] transition-colors" />
              </div>

              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-3 text-[#FF6B6B]">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>

              {/* Highlight */}
              <h3 className="font-sans font-bold text-sm sm:text-base text-[#12141A] uppercase tracking-tight mb-2">
                &ldquo;{item.highlight[lang] || item.highlight.id}&rdquo;
              </h3>

              {/* Comment text */}
              <p className="text-xs sm:text-[13px] text-[var(--mid)] leading-relaxed mb-6">
                {item.comment[lang] || item.comment.id}
              </p>

              {/* Client Profile */}
              <div className="pt-4 border-t border-[var(--line)] flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[var(--line)] shrink-0 bg-neutral-200">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-sans font-bold text-xs text-[#12141A] truncate">
                      {item.name}
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00A86B] shrink-0" />
                  </div>
                  <span className="text-[11px] text-[var(--mid)] block truncate">
                    {item.role[lang] || item.role.id}, {item.company}
                  </span>
                  <span className="text-[9px] font-mono text-[var(--mid)]/70 uppercase">
                    {item.location} · {item.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
