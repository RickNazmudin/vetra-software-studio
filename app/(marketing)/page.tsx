"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Cpu, HardDrive, Zap, Radio, Check } from "lucide-react";
import { getAllProducts } from "@/lib/products-data";
import { ProductCard } from "@/components/product-card";
import { SignalVisualizer } from "@/components/signal-visualizer";
import { useLanguage } from "@/context/language-context";

export default function HomePage() {
  const products = getAllProducts();
  const { t, lang } = useLanguage();

  const [activeHop, setActiveHop] = React.useState<number>(0);

  const signalLegs = [
    { title: "STUDIO CORE, JAKARTA", a: ["1,411", "Days on air"], b: ["100%", "Offline Capable"], c: ["0", "Adverts Served"] },
    { title: "LOCAL RUNTIME ENGINE", a: ["SQLite / Embedded", "Data Store"], b: ["< 1.2ms", "Query Latency"], c: ["256-bit", "Local Encryption"] },
    { title: "PERPETUAL KEY MESH", a: ["Lifetime", "License Protocol"], b: ["Instant", "Webhook Dispatch"], c: ["Zero", "Cloud Hostage"] },
    { title: "YOUR BUSINESS SYSTEM", a: ["100%", "Hardware Autonomy"], b: ["0", "Recurring Traps"], c: ["∞", "Perpetual Value"] },
  ];

  const currentLeg = signalLegs[activeHop];

  const scheduleSlots = [
    { time: "08:00", name: "POS Core Engine v2.4", type: "Retail & Multi-Outlet", status: "Operational", active: false },
    { time: "12:00", name: "F&B Table & Kitchen Router", type: "Cafe & Hospitality", status: "On air", active: true },
    { time: "16:00", name: "Booking Grid & Court Matrix", type: "Padel & Sports Venues", status: "Operational", active: false },
    { time: "20:00", name: "Local License Dispatcher", type: "Perpetual Key Gen", status: "Active", active: false },
  ];

  return (
    <div className="relative font-mono bg-[#F4F5F6] text-[#12141A]">
      {/* ── HERO SECTION ────────────────────────────────────────── */}
      <header className="relative min-h-[92vh] pt-[84px] pb-16 px-4 sm:px-8 lg:px-12 flex flex-col justify-between border-b border-[var(--line)]">
        <div className="max-w-4xl space-y-6">
          {/* Marks */}
          <div className="flex flex-col gap-1.5 opacity-60">
            <i className="w-[26px] h-[1.5px] bg-[#12141A] block"></i>
            <i className="w-[14px] h-[1.5px] bg-[#12141A] block"></i>
            <i className="w-[34px] h-[1.5px] bg-[#12141A] block"></i>
          </div>

          <div className="space-y-1">
            <b className="font-sans font-bold text-lg sm:text-xl tracking-[0.26em] uppercase block text-[#12141A]">
              VETRA SOFTWARE STUDIO
            </b>
            <span className="mi block text-[10px] tracking-[0.2em] text-[var(--mid)]">
              Focused software · Perpetual licenses · 24/7 standalone
            </span>
          </div>

          <h1 className="font-sans font-bold text-4xl sm:text-6xl lg:text-7xl uppercase leading-[0.96] tracking-[-0.02em] text-[#12141A]">
            Software built<br />for real business<br />operations.
          </h1>

          <div className="flex flex-wrap gap-4 text-[10px] tracking-[0.2em] uppercase text-[var(--mid)]">
            <span>NO SAAS HOSTAGE</span>
            <span>·</span>
            <span>OFFLINE-FIRST</span>
            <span>·</span>
            <span>LIFETIME OWNERSHIP</span>
          </div>

          {/* Embedded Nullwave Tactile Waveform Player Bar */}
          <div className="pt-2">
            <SignalVisualizer />
          </div>
        </div>

        {/* Quick Trust Highlights Row */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[var(--line)] pt-8">
          <div>
            <span className="text-[10px] text-[#FF6B6B] font-mono tracking-widest block mb-1">[01]</span>
            <span className="text-xs sm:text-sm font-bold font-sans uppercase text-[#12141A] block">{t("hero.perpetual")}</span>
            <span className="text-[11px] text-[var(--mid)]">{t("hero.perpetualSub")}</span>
          </div>
          <div>
            <span className="text-[10px] text-[#FF6B6B] font-mono tracking-widest block mb-1">[02]</span>
            <span className="text-xs sm:text-sm font-bold font-sans uppercase text-[#12141A] block">{t("hero.instantKey")}</span>
            <span className="text-[11px] text-[var(--mid)]">{t("hero.instantKeySub")}</span>
          </div>
          <div>
            <span className="text-[10px] text-[#FF6B6B] font-mono tracking-widest block mb-1">[03]</span>
            <span className="text-xs sm:text-sm font-bold font-sans uppercase text-[#12141A] block">{t("hero.offlineReady")}</span>
            <span className="text-[11px] text-[var(--mid)]">{t("hero.offlineReadySub")}</span>
          </div>
          <div>
            <span className="text-[10px] text-[#FF6B6B] font-mono tracking-widest block mb-1">[04]</span>
            <span className="text-xs sm:text-sm font-bold font-sans uppercase text-[#12141A] block">{t("hero.noLockIn")}</span>
            <span className="text-[11px] text-[var(--mid)]">{t("hero.noLockInSub")}</span>
          </div>
        </div>
      </header>

      {/* ── SCHEDULE / DISPATCH SLOTS ──────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 border-b border-[var(--line)]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <h2 className="font-sans font-bold text-3xl sm:text-5xl uppercase leading-tight text-[#12141A]">
              {t("telemetry.title")}
            </h2>
            <span className="mi text-[10px] tracking-[0.2em] text-[var(--mid)]">
              {t("telemetry.sub")}
            </span>
          </div>

          <div className="border-t border-[var(--line)]">
            {scheduleSlots.map((slot, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-[60px_1fr] sm:grid-cols-[80px_1fr_180px_100px] gap-4 sm:gap-6 items-center py-4 px-3 border-b border-[var(--line)] transition-all ${
                  slot.active
                    ? "bg-[#12141A] text-[#F4F5F6]"
                    : "hover:bg-black/[0.04] hover:pl-5 cursor-pointer"
                }`}
              >
                <span className="text-xs font-mono tabular-nums opacity-75">{slot.time}</span>
                <span className="font-sans font-bold text-sm sm:text-base uppercase tracking-tight">{slot.name}</span>
                <span className="hidden sm:inline text-[10px] tracking-wider uppercase opacity-60">{slot.type}</span>
                <span className={`text-[10px] tracking-widest uppercase text-right font-bold ${slot.active ? "text-[#FF6B6B]" : "opacity-60"}`}>
                  {slot.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATIONS / PRODUCTS (DARK INK SECTION) ─────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#12141A] text-[#F4F5F6] border-b border-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-[rgba(244,245,246,0.16)]">
            <div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#FF6B6B] block mb-1 font-mono">
                // CATALOG // FIVE ACTIVE STATIONS
              </span>
              <h2 className="font-sans font-bold text-3xl sm:text-5xl uppercase tracking-tight text-[#F4F5F6]">
                {t("home.catalog.title")}
              </h2>
            </div>
            <Link
              href="/products"
              className="text-xs font-mono uppercase tracking-[0.16em] text-[rgba(244,245,246,0.7)] hover:text-[#FF6B6B] inline-flex items-center gap-2 transition-colors"
            >
              <span>{t("home.catalog.viewAll")} ({products.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Custom Bespoke Software Banner */}
          <div className="mt-14 border border-[rgba(244,245,246,0.16)] bg-[#1A1D24] p-6 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="text-[9.5px] font-mono tracking-[0.2em] text-[#FF6B6B] uppercase block">
                ✦ BESPOKE SOFTWARE ENGINEERING
              </span>
              <h3 className="font-sans font-bold text-2xl sm:text-3xl uppercase tracking-tight text-[#F4F5F6]">
                {lang === "id"
                  ? "Butuh Software Khusus Sesuai Alur Bisnis?"
                  : "Need Bespoke Software for Your Workflow?"}
              </h3>
              <p className="text-xs sm:text-sm text-[rgba(244,245,246,0.65)] leading-relaxed">
                {lang === "id"
                  ? "Custom Landing Pages, Web Apps, SaaS MVPs, dan Enterprise Systems. 100% kepemilikan full source code."
                  : "Custom Landing Pages, Web Apps, SaaS MVPs, and Enterprise Systems. 100% full source code ownership."}
              </p>
            </div>

            <div className="shrink-0">
              <Link href="/custom">
                <button type="button" className="btn-nullwave">
                  <span>{lang === "id" ? "Lihat Layanan Custom →" : "View Custom Services →"}</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SIGNAL ROUTE SECTION ─────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 border-b border-[var(--line)] bg-[#F4F5F6]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-10">
            <h2 className="font-sans font-bold text-3xl sm:text-5xl uppercase leading-[0.98] text-[#12141A] mb-4">
              {t("telemetry.direct")}
            </h2>
            <p className="text-xs sm:text-sm text-[var(--mid)] leading-relaxed">
              {t("telemetry.directDesc")}
            </p>
          </div>

          {/* Interactive Route Hops */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 border-y border-[var(--line)] py-6">
            {signalLegs.map((leg, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveHop(idx)}
                className={`text-left p-4 border transition-all cursor-pointer ${
                  activeHop === idx
                    ? "bg-[#12141A] text-[#F4F5F6] border-[#12141A]"
                    : "bg-transparent text-[#12141A] border-[var(--line)] hover:bg-black/5"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-2 h-2 rounded-full ${activeHop === idx ? "bg-[#FF6B6B] animate-live" : "bg-black/40"}`}></span>
                  <span className="text-[9px] font-mono uppercase tracking-widest opacity-70">HOP 0{idx + 1}</span>
                </div>
                <div className="font-sans font-bold text-xs uppercase tracking-tight truncate">
                  {leg.title.split(",")[0]}
                </div>
              </button>
            ))}
          </div>

          {/* Route Readout Telemetry */}
          <div className="mt-8 flex flex-wrap gap-8 sm:gap-16 pt-4">
            <div>
              <b className="font-mono text-xl sm:text-3xl font-bold tabular-nums block text-[#12141A] mb-1">
                {currentLeg.a[0]}
              </b>
              <span className="mi text-[9px] tracking-[0.18em] text-[var(--mid)]">{currentLeg.a[1]}</span>
            </div>
            <div>
              <b className="font-mono text-xl sm:text-3xl font-bold tabular-nums block text-[#12141A] mb-1">
                {currentLeg.b[0]}
              </b>
              <span className="mi text-[9px] tracking-[0.18em] text-[var(--mid)]">{currentLeg.b[1]}</span>
            </div>
            <div>
              <b className="font-mono text-xl sm:text-3xl font-bold tabular-nums block text-[#12141A] mb-1">
                {currentLeg.c[0]}
              </b>
              <span className="mi text-[9px] tracking-[0.18em] text-[var(--mid)]">{currentLeg.c[1]}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SIGNAL CHAIN / ARCHITECTURE (DARK INK SECTION) ──────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#12141A] text-[#F4F5F6] border-b border-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#FF6B6B] block font-mono">
              // ARCHITECTURE // HARDWARE CHAIN
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-5xl uppercase leading-[0.98] text-[#F4F5F6]">
              {t("home.why.title")}
            </h2>
            <p className="text-xs sm:text-sm text-[rgba(244,245,246,0.6)] leading-relaxed">
              {t("home.why.desc1")}
            </p>
          </div>

          <div className="lg:col-span-7">
            <ol className="list-none border-t border-[rgba(244,245,246,0.18)]">
              <li className="grid grid-cols-[36px_1fr_auto] gap-4 items-baseline py-4 border-b border-[rgba(244,245,246,0.1)]">
                <span className="text-xs font-mono text-[#FF6B6B]">01</span>
                <div>
                  <b className="font-bold text-sm block mb-0.5">{t("home.pillar1.title")}</b>
                  <p className="text-xs text-[rgba(244,245,246,0.55)]">{t("home.pillar1.desc")}</p>
                </div>
                <span className="text-[10px] text-[rgba(244,245,246,0.4)] font-mono">LOCAL-FIRST</span>
              </li>

              <li className="grid grid-cols-[36px_1fr_auto] gap-4 items-baseline py-4 border-b border-[rgba(244,245,246,0.1)]">
                <span className="text-xs font-mono text-[#FF6B6B]">02</span>
                <div>
                  <b className="font-bold text-sm block mb-0.5">{t("home.pillar2.title")}</b>
                  <p className="text-xs text-[rgba(244,245,246,0.55)]">{t("home.pillar2.desc")}</p>
                </div>
                <span className="text-[10px] text-[rgba(244,245,246,0.4)] font-mono">PERPETUAL</span>
              </li>

              <li className="grid grid-cols-[36px_1fr_auto] gap-4 items-baseline py-4 border-b border-[rgba(244,245,246,0.1)]">
                <span className="text-xs font-mono text-[#FF6B6B]">03</span>
                <div>
                  <b className="font-bold text-sm block mb-0.5">{t("home.pillar3.title")}</b>
                  <p className="text-xs text-[rgba(244,245,246,0.55)]">{t("home.pillar3.desc")}</p>
                </div>
                <span className="text-[10px] text-[rgba(244,245,246,0.4)] font-mono">NO LOCK-IN</span>
              </li>

              <li className="grid grid-cols-[36px_1fr_auto] gap-4 items-baseline py-4 border-b border-[rgba(244,245,246,0.1)]">
                <span className="text-xs font-mono text-[#FF6B6B]">04</span>
                <div>
                  <b className="font-bold text-sm block mb-0.5">{t("home.pillar4.title")}</b>
                  <p className="text-xs text-[rgba(244,245,246,0.55)]">{t("home.pillar4.desc")}</p>
                </div>
                <span className="text-[10px] text-[rgba(244,245,246,0.4)] font-mono">ZERO BLOAT</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* ── SUPPORT / FINAL CTA ──────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 text-center bg-[#F4F5F6]">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-sans font-bold text-3xl sm:text-6xl uppercase leading-[0.94] text-[#12141A]">
            {t("home.cta.title")}
          </h2>
          <p className="text-xs sm:text-sm text-[var(--mid)] leading-relaxed max-w-xl mx-auto">
            {t("home.cta.desc")}
          </p>
          <div className="pt-4">
            <Link href="/products">
              <button type="button" className="btn-nullwave text-sm px-8 py-4">
                <span>{t("hero.ctaExplore")} →</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


