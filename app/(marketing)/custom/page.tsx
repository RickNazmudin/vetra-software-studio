"use client";

import * as React from "react";
import Link from "next/link";
import {
  Code2,
  Globe,
  Layers,
  Database,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Send,
  Sparkles,
  Zap,
  Cpu,
  Clock,
  MessageSquare,
  HelpCircle,
  FileCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";

export default function CustomServicesPage() {
  const { lang } = useLanguage();

  // Consultation Form State
  const [serviceType, setServiceType] = React.useState<"landing" | "webapp" | "enterprise">("webapp");
  const [clientName, setClientName] = React.useState("");
  const [businessName, setBusinessName] = React.useState("");
  const [whatsapp, setWhatsapp] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [budgetRange, setBudgetRange] = React.useState("Rp10.000.000 - Rp25.000.000");
  const [timeline, setTimeline] = React.useState("2-4 Minggu");
  const [projectBrief, setProjectBrief] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const customTiers = [
    {
      id: "tier-landing",
      name: lang === "id" ? "Custom Landing Page" : "Custom Landing Page",
      badge: lang === "id" ? "Fast Delivery" : "Fast Delivery",
      priceRange: "Rp2.500.000 — Rp6.500.000",
      priceSubtitle: lang === "id" ? "Termasuk domain, cloud hosting & maintenance 3 bulan" : "Includes custom domain, fast cloud hosting & 3 months maintenance",
      timeline: lang === "id" ? "3 – 7 Hari Kerja" : "3 – 7 Business Days",
      description:
        lang === "id"
          ? "Landing page berperforma ultra-cepat, mobile-first, dan dioptimalkan khusus untuk konversi penjualan, perkenalan brand, dan kampanye promosi bisnis Anda."
          : "Ultra-fast, mobile-first landing pages tailored for maximum conversion, brand storytelling, and high-impact business launches.",
      targetUse:
        lang === "id"
          ? "Profil perusahaan, brand showcase, arena/klub olahraga, peluncuran produk baru, portfolio profesional, dan promo event khusus."
          : "Corporate profiles, sports clubs/venues, brand showcases, product launches, portfolio hubs, and promotional events.",
      features: [
        lang === "id" ? "Desain UI/UX eksklusif (Bebas template pasaran)" : "Exclusive tailored UI/UX design (No cookie-cutter templates)",
        lang === "id" ? "Responsif 100% sempurna di Mobile, Tablet & Desktop" : "100% responsive across Mobile, Tablet, & Desktop",
        lang === "id" ? "Optimasi SEO dasar & integrasi Google Search Console" : "Basic & Meta SEO optimization with Search Console setup",
        lang === "id" ? "Integrasi Direct CTA Booking / WhatsApp Form interaktif" : "Direct CTA Booking / Interactive WhatsApp form integration",
        lang === "id" ? "Sudah termasuk Domain (.com / .id) & Global CDN Fast Hosting" : "Includes Domain (.com / .id), Fast CDN Hosting & Free SSL",
        lang === "id" ? "Garansi perbaikan bug & Maintenance selama 3 bulan" : "Free bug fixes & technical maintenance for 3 months",
      ],
      popular: false,
    },
    {
      id: "tier-webapp",
      name: lang === "id" ? "Custom Web App & SaaS MVP" : "Custom Web App & SaaS MVP",
      badge: lang === "id" ? "Paling Diminati" : "Most Popular",
      priceRange: "Rp7.500.000 — Rp22.000.000",
      priceSubtitle: lang === "id" ? "Termasuk full-stack backend, database, payment & support 6 bulan" : "Includes full-stack backend, DB, payment gateways & 6 months support",
      timeline: lang === "id" ? "2 – 4 Minggu" : "2 – 4 Weeks",
      description:
        lang === "id"
          ? "Aplikasi web interaktif dengan sistem backend tangguh, dashboard analitik, manajemen pengguna, database terenkripsi, dan integrasi payment gateway otomatis."
          : "Interactive web applications engineered with resilient backends, user roles, encrypted databases, real-time dashboards, and payment gateway automation.",
      targetUse:
        lang === "id"
          ? "Portal booking/reservasi, platform e-commerce kustom, sistem membership, marketplace niche, portal klien, dan MVP untuk startup."
          : "Booking/scheduling platforms, custom e-commerce stores, membership engines, client portals, and startup MVPs.",
      features: [
        lang === "id" ? "Arsitektur Full-Stack Modern (Next.js, TypeScript, Tailwind)" : "Modern Full-Stack Architecture (Next.js, TypeScript, Tailwind)",
        lang === "id" ? "Database PostgreSQL dedicated dengan otomatisasi backup" : "Dedicated PostgreSQL Database with automated daily cloud backups",
        lang === "id" ? "User Authentication & Role-Based Access Control" : "User Authentication & Role-Based Access Control (RLS)",
        lang === "id" ? "Integrasi Payment Gateway resmi (Midtrans, Xendit, QRIS)" : "Official Payment Gateway Integration (Midtrans, Xendit, QRIS)",
        lang === "id" ? "Admin Backoffice terpusat & visualisasi analitik data" : "Centralized Admin Backoffice & visual analytics reports",
        lang === "id" ? "Garansi & Technical Support intensif selama 6 bulan" : "Intensive bug fix warranty & maintenance for 6 months",
      ],
      popular: true,
    },
    {
      id: "tier-enterprise",
      name: lang === "id" ? "Custom Enterprise Software & Internal Tool" : "Enterprise Software & Internal Systems",
      badge: lang === "id" ? "Full Bespoke" : "Enterprise Grade",
      priceRange: "Rp18.000.000 — Rp65.000.000+",
      priceSubtitle: lang === "id" ? "Arsitektur scalable, multi-outlet, offline-first & SLA maintenance" : "Scalable architecture, multi-branch, offline-first & SLA support",
      timeline: lang === "id" ? "4 – 8 Minggu" : "4 – 8 Weeks",
      description:
        lang === "id"
          ? "Software sistem operasional bisnis kelas enterprise yang dirancang khusus untuk memecahkan proses bisnis yang kompleks, multi-cabang, dan volume data tinggi."
          : "Enterprise-grade operational software engineered to streamline intricate business workflows, multi-branch synchronizations, and heavy data volumes.",
      targetUse:
        lang === "id"
          ? "Sistem POS multi-outlet, manajemen pergudangan & stok (BOM), ERP/CRM terpadu, sistem manajemen keuangan bisnis, dan otomasi logistik."
          : "Multi-branch POS networks, inventory & warehouse BOM systems, ERP/CRM suites, and logistics automation pipelines.",
      features: [
        lang === "id" ? "Arsitektur High-Throughput & Ketahanan Offline-First" : "High-Throughput Architecture & Offline-First Resilience",
        lang === "id" ? "Integrasi Hardware Kustom (Thermal Printer, Scanner, IoT)" : "Custom Hardware Support (Thermal Printers, Barcode Scanners, IoT)",
        lang === "id" ? "Multi-Branch & Sinkronisasi Cloud Antar Outlet Real-Time" : "Multi-Branch & Real-time cross-outlet Cloud Synchronization",
        lang === "id" ? "Audit Keamanan Tingkat Lanjut & Kontrol Hak Akses Staf" : "Advanced Security Auditing & Granular Staff Permissions",
        lang === "id" ? "Serah terima 100% Full Source Code & Dokumentasi API Lengkap" : "100% Full Source Code Handover & Complete Technical Documentation",
        lang === "id" ? "Dedicated Priority SLA & Maintenance Support 6 – 12 Bulan" : "Dedicated Priority SLA & Maintenance Support for 6 – 12 Months",
      ],
      popular: false,
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: lang === "id" ? "Discovery & Analisis Kebutuhan" : "Discovery & Technical Scope",
      desc:
        lang === "id"
          ? "Kami berdiskusi mendalam untuk membedah masalah operasional, alur kerja bisnis, target pengguna, dan menyusun spesifikasi fitur tertulis."
          : "We conduct in-depth consultations to dissect your workflow, business bottlenecks, and define a clear feature specification.",
    },
    {
      step: "02",
      title: lang === "id" ? "Desain UI/UX & Prototyping" : "UI/UX & Interactive Prototype",
      desc:
        lang === "id"
          ? "Merancang antarmuka visual presisi tinggi yang clean, intuitif, dan nyaman digunakan staf maupun pelanggan Anda tanpa kebingungan."
          : "Designing pixel-perfect, clean, and intuitive interfaces optimized for smooth user adoption.",
    },
    {
      step: "03",
      title: lang === "id" ? "Development & Sprint Berkala" : "Full-Stack Agile Development",
      desc:
        lang === "id"
          ? "Proses koding full-stack dengan standar arsitektur modern yang cepat, aman, dan modular. Anda mendapatkan akses link staging berkala."
          : "Writing robust full-stack code adhering to high performance and security standards with live staging previews.",
    },
    {
      step: "04",
      title: lang === "id" ? "Quality Assurance & Deployment" : "QA Testing & Live Deployment",
      desc:
        lang === "id"
          ? "Pengujian beban, keamanan data, integrasi payment gateway, dan deployment ke infrastruktur cloud berkinerja tinggi."
          : "Rigorous load testing, security auditing, payment gateway simulation, and final cloud production deployment.",
    },
    {
      step: "05",
      title: lang === "id" ? "Handover, Training & Garansi" : "Handover, Training & Support",
      desc:
        lang === "id"
          ? "Serah terima lisensi/source code, panduan penggunaan untuk tim Anda, serta masa garansi bug fix dan technical support aktif."
          : "Full code handover, staff operational walkthroughs, and active maintenance warranty.",
    },
  ];

  const customFaqs = [
    {
      q: lang === "id" ? "Bagaimana penentuan harga akhir dari rentang (range) yang tertera?" : "How is the exact final price determined within the range?",
      a:
        lang === "id"
          ? "Harga ditentukan secara transparan berdasarkan kompleksitas logika bisnis, jumlah modul/halaman, jenis integrasi (seperti gateway pembayaran, hardware kasir, atau API pihak ketiga), serta tenggat waktu pengerjaan yang diinginkan."
          : "The final quotation is transparently formulated based on business logic complexity, number of screens/modules, third-party integrations (payment gateways, POS hardware), and project delivery timeline.",
    },
    {
      q: lang === "id" ? "Apakah source code dan database menjadi milik kami sepenuhnya?" : "Do we own 100% of the source code and database?",
      a:
        lang === "id"
          ? "Ya. Pada setiap proyek custom development di Vetra Studio, 100% kepemilikan source code, skema database, dan aset digital diserahkan kepada Anda tanpa royalti tersembunyi ataupun vendor lock-in."
          : "Yes. Upon project completion and final handover, 100% ownership of the repository source code, database schemas, and intellectual property belongs strictly to you with zero vendor lock-in.",
    },
    {
      q: lang === "id" ? "Bagaimana skema termin pembayaran proyek custom?" : "What is the payment milestone structure for custom projects?",
      a:
        lang === "id"
          ? "Skema pembayaran kami menggunakan termin bertahap yang aman: Uang Muka (DP) 50% saat kick-off proyek dan desain disetujui, serta Pelunasan 50% setelah seluruh pengujian User Acceptance Testing (UAT) selesai dan siap live deployment."
          : "We follow a transparent two-stage milestone: 50% Down Payment upon project kickoff and design approval, and the remaining 50% upon final User Acceptance Testing (UAT) sign-off and production release.",
    },
    {
      q: lang === "id" ? "Apakah sudah termasuk biaya domain, server hosting, dan SSL?" : "Are domain, fast hosting, and SSL included?",
      a:
        lang === "id"
          ? "Ya. Seluruh paket custom development kami sudah mencakup setup konfigurasi server hosting cepat, domain custom (.com / .id), dan enkripsi SSL aktif untuk menjamin software langsung siap digunakan tanpa repot."
          : "Yes. All custom development tiers include turnkey server setup, custom domain (.com / .id), and automated SSL encryption ready for production.",
    },
  ];

  function handleSendBrief(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);

    const serviceName =
      serviceType === "landing"
        ? "Custom Landing Page"
        : serviceType === "webapp"
        ? "Custom Web App & SaaS"
        : "Custom Enterprise Software";

    const messageText = `Halo Tim Vetra Software Studio,%0A%0ASaya ingin konsultasi mengenai pembuatan *${serviceName}* untuk bisnis saya:%0A%0A- *Nama*: ${clientName}%0A- *Bisnis*: ${businessName || "-"}%0A- *WhatsApp*: ${whatsapp}%0A- *Email*: ${email}%0A- *Estimasi Budget*: ${budgetRange}%0A- *Target Waktu*: ${timeline}%0A- *Ringkasan Kebutuhan*: ${projectBrief || "-"}%0A%0AMohon info estimasi penawaran dan jadwal konsultasinya. Terima kasih!`;

    // Open WhatsApp directly with prefilled prompt
    const waUrl = `https://wa.me/6281234567890?text=${messageText}`;
    window.open(waUrl, "_blank");
  }

  return (
    <div className="relative">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative mx-auto max-w-6xl px-4 sm:px-8 pt-24 pb-16 border-b border-[var(--line)]">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 border border-[var(--line)] bg-white px-3 py-1 text-[10px] font-mono tracking-widest text-[#12141A] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5484D] animate-live"></span>
            <span>BESPOKE ENGINEERING // CUSTOM SYSTEMS</span>
          </div>

          <h1 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#12141A] leading-[1.05]">
            {lang === "id"
              ? "Bangun Software Kustom, Web App & Landing Page Presisi."
              : "Bespoke Software, Web Applications & Landing Pages."}
          </h1>

          <p className="text-sm sm:text-base text-[var(--mid)] max-w-2xl leading-relaxed">
            {lang === "id"
              ? "Kami merancang dan mengoding solusi digital khusus yang disesuaikan 100% dengan alur operasional dan model bisnis Anda. Cepat, berkinerja tinggi, tanpa bloatware, dan transparan dari awal hingga serah terima."
              : "We engineer high-performance bespoke software tailored strictly to your operational workflows and business requirements. Clean code, zero bloat, transparent pricing, and 100% source code ownership."}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a href="#inquiry-form" className="btn-nullwave">
              <span>{lang === "id" ? "Mulai Konsultasi Proyek →" : "Start Project Consultation →"}</span>
            </a>
            <a href="#price-ranges" className="text-xs font-mono tracking-wider uppercase text-[var(--mid)] hover:text-[#12141A] px-4 py-3 border border-[var(--line)] bg-white">
              {lang === "id" ? "Lihat Estimasi Harga ↓" : "View Price Ranges ↓"}
            </a>
          </div>
        </div>

        {/* Value Highlights */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-[var(--line)] pt-8 text-xs text-[#12141A] font-mono">
          <div className="flex items-center gap-2">
            <span className="text-[#FF6B6B]">▪</span>
            <span>100% Full Source Code</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#FF6B6B]">▪</span>
            <span>High Performance Stack</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#FF6B6B]">▪</span>
            <span>Direct Senior Engineer</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#FF6B6B]">▪</span>
            <span>Turnkey Domain &amp; SSL</span>
          </div>
        </div>
      </section>

      {/* PRICING TIERS & SCOPE SECTION */}
      <section id="price-ranges" className="relative mx-auto max-w-6xl px-4 sm:px-8 py-20 border-b border-[var(--line)]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="mi text-[10px] tracking-[0.2em] text-[var(--mid)] block mb-1">
              {lang === "id" ? "ESTIMASI BIAYA TRANSPARAN" : "TRANSPARENT PRICE RANGES"}
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl uppercase tracking-tight text-[#12141A]">
              {lang === "id" ? "Pilihan Layanan & Rentang Harga" : "Custom Development Services & Tiers"}
            </h2>
            <p className="text-xs text-[var(--mid)] mt-1 max-w-xl">
              {lang === "id"
                ? "Rentang harga dari tingkat termurah hingga solusi terlengkap. Semua paket mencakup hosting, domain, SSL, dan garansi maintenance."
                : "Comprehensive tiers spanning from focused landing pages to complex enterprise platforms. All packages include hosting, domain, SSL, and maintenance."}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 font-mono">
          {customTiers.map((tier) => (
            <div
              key={tier.id}
              className={`border p-6 sm:p-7 flex flex-col justify-between transition-all relative ${
                tier.popular
                  ? "border-[#12141A] bg-[#12141A] text-[#F4F5F6] shadow-xl"
                  : "border-[var(--line)] bg-white text-[#12141A]"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-[#FF6B6B] text-[#12141A] text-[9.5px] font-mono font-bold px-2.5 py-0.5 uppercase tracking-wider">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="space-y-5">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-sans font-bold text-lg uppercase tracking-tight">{tier.name}</h3>
                    {!tier.popular && (
                      <span className="text-[9px] font-mono px-2 py-0.5 bg-[#F4F5F6] text-[#12141A] border border-[var(--line)]">
                        {tier.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono opacity-60 mt-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{tier.timeline}</span>
                  </div>
                </div>

                {/* Price Display */}
                <div className={`p-4 border space-y-1 ${tier.popular ? "bg-[#1A1D24] border-white/10" : "bg-[#F4F5F6] border-[var(--line)]"}`}>
                  <span className="mi text-[8.5px] tracking-widest block uppercase opacity-70">
                    {lang === "id" ? "RENTANG ESTIMASI HARGA" : "ESTIMATED PRICE RANGE"}
                  </span>
                  <div className="text-xl sm:text-2xl font-bold font-mono tracking-tight">
                    {tier.priceRange}
                  </div>
                  <span className="text-[10px] block leading-snug opacity-75">
                    {tier.priceSubtitle}
                  </span>
                </div>

                <p className="text-xs leading-relaxed opacity-80">
                  {tier.description}
                </p>

                <div className={`space-y-1.5 border-t pt-4 ${tier.popular ? "border-white/10" : "border-[var(--line)]"}`}>
                  <span className="mi text-[8.5px] uppercase tracking-widest block opacity-70">
                    {lang === "id" ? "SANGAT COCOK UNTUK:" : "IDEAL FOR:"}
                  </span>
                  <p className="text-xs leading-snug opacity-80">
                    {tier.targetUse}
                  </p>
                </div>

                {/* Features List */}
                <div className={`space-y-2.5 border-t pt-4 ${tier.popular ? "border-white/10" : "border-[var(--line)]"}`}>
                  <span className="mi text-[8.5px] uppercase tracking-widest block opacity-80">
                    {lang === "id" ? "FITUR & HAK TERMASUK:" : "WHAT'S INCLUDED:"}
                  </span>
                  <ul className="space-y-2 text-xs">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 opacity-85">
                        <span className="text-[#FF6B6B] mt-0.5">▪</span>
                        <span className="leading-snug text-[11.5px]">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={`pt-6 mt-6 border-t ${tier.popular ? "border-white/10" : "border-[var(--line)]"}`}>
                <a
                  href="#inquiry-form"
                  onClick={() => {
                    if (tier.id === "tier-landing") {
                      setServiceType("landing");
                      setBudgetRange("Rp2.500.000 - Rp6.500.000");
                      setTimeline("3-7 Hari");
                    } else if (tier.id === "tier-webapp") {
                      setServiceType("webapp");
                      setBudgetRange("Rp7.500.000 - Rp22.000.000");
                      setTimeline("2-4 Minggu");
                    } else {
                      setServiceType("enterprise");
                      setBudgetRange("Rp18.000.000 - Rp65.000.000+");
                      setTimeline("4-8 Minggu");
                    }
                  }}
                  className={`inline-flex w-full items-center justify-between font-sans font-bold text-xs uppercase tracking-wider py-3 px-4 transition-all ${
                    tier.popular
                      ? "bg-[#FF6B6B] text-[#12141A] hover:bg-white"
                      : "bg-[#12141A] text-[#F4F5F6] hover:bg-[#FF6B6B] hover:text-[#12141A]"
                  }`}
                >
                  <span>{lang === "id" ? "Pilih & Konsultasi Layanan Ini" : "Select & Inquire"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WORKFLOW PROCESS SECTION */}
      <section className="relative mx-auto max-w-6xl px-4 sm:px-8 py-20 border-b border-[var(--line)] font-mono">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="mi text-[10px] tracking-[0.2em] text-[var(--mid)] block">
            {lang === "id" ? "ALUR PENGERJAAN STUDIO" : "STUDIO WORKFLOW"}
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl uppercase tracking-tight text-[#12141A]">
            {lang === "id" ? "5 Langkah Dari Konsep Hingga Siap Pakai" : "From Concept to Production in 5 Steps"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {workflowSteps.map((ws, i) => (
            <div
              key={i}
              className="border border-[var(--line)] bg-white p-5 space-y-3 relative flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-2xl font-mono font-bold text-[#FF6B6B] block">
                  {ws.step}
                </span>
                <h3 className="font-sans font-bold text-xs uppercase text-[#12141A] leading-snug">
                  {ws.title}
                </h3>
                <p className="text-[11px] text-[var(--mid)] leading-relaxed">
                  {ws.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE INQUIRY FORM SECTION */}
      <section id="inquiry-form" className="relative mx-auto max-w-4xl px-4 sm:px-8 py-20 border-b border-[var(--line)] font-mono">
        <div className="border border-[var(--line)] bg-white p-6 sm:p-10 space-y-8 shadow-sm">
          <div className="space-y-2 border-b border-[var(--line)] pb-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#12141A] text-[#F4F5F6] text-[9.5px] font-mono uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5484D] animate-live"></span>
              <span>FREE TECHNICAL CONSULTATION</span>
            </div>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl uppercase tracking-tight text-[#12141A]">
              {lang === "id" ? "Diskusikan Proyek Custom Anda" : "Request a Project Consultation"}
            </h2>
            <p className="text-xs text-[var(--mid)] max-w-xl">
              {lang === "id"
                ? "Isi form singkat di bawah ini untuk mendapatkan estimasi penawaran spesifik, arsitektur teknis, dan jadwal pengerjaan langsung dari tim developer Vetra."
                : "Fill out the brief below to receive a direct tailored technical proposal, architecture breakdown, and estimated timeline."}
            </p>
          </div>

          <form onSubmit={handleSendBrief} className="space-y-6">
            {/* Service Selection Buttons */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#12141A] block">
                {lang === "id" ? "1. Tipe Layanan Kustom *" : "1. Desired Custom Service *"}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setServiceType("landing");
                    setBudgetRange("Rp2.500.000 - Rp6.500.000");
                    setTimeline("3-7 Hari");
                  }}
                  className={`flex flex-col items-start p-3.5 border text-left transition-all cursor-pointer ${
                    serviceType === "landing"
                      ? "border-[#12141A] bg-[#12141A] text-[#F4F5F6]"
                      : "border-[var(--line)] bg-[#F4F5F6] text-[#12141A] hover:bg-black/5"
                  }`}
                >
                  <Globe className="w-4 h-4 mb-1.5 text-[#FF6B6B]" />
                  <span className="text-xs font-bold block font-sans uppercase">Landing Page</span>
                  <span className="text-[10px] opacity-70 font-mono">Rp2,5 Jt – Rp6,5 Jt</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setServiceType("webapp");
                    setBudgetRange("Rp7.500.000 - Rp22.000.000");
                    setTimeline("2-4 Minggu");
                  }}
                  className={`flex flex-col items-start p-3.5 border text-left transition-all cursor-pointer ${
                    serviceType === "webapp"
                      ? "border-[#12141A] bg-[#12141A] text-[#F4F5F6]"
                      : "border-[var(--line)] bg-[#F4F5F6] text-[#12141A] hover:bg-black/5"
                  }`}
                >
                  <Layers className="w-4 h-4 mb-1.5 text-[#FF6B6B]" />
                  <span className="text-xs font-bold block font-sans uppercase">Web App &amp; SaaS</span>
                  <span className="text-[10px] opacity-70 font-mono">Rp7,5 Jt – Rp22 Jt</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setServiceType("enterprise");
                    setBudgetRange("Rp18.000.000 - Rp65.000.000+");
                    setTimeline("4-8 Minggu");
                  }}
                  className={`flex flex-col items-start p-3.5 border text-left transition-all cursor-pointer ${
                    serviceType === "enterprise"
                      ? "border-[#12141A] bg-[#12141A] text-[#F4F5F6]"
                      : "border-[var(--line)] bg-[#F4F5F6] text-[#12141A] hover:bg-black/5"
                  }`}
                >
                  <Database className="w-4 h-4 mb-1.5 text-[#FF6B6B]" />
                  <span className="text-xs font-bold block font-sans uppercase">Enterprise Software</span>
                  <span className="text-[10px] opacity-70 font-mono">Rp18 Jt – Rp65 Jt+</span>
                </button>
              </div>
            </div>

            {/* Client Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#12141A] block">
                  {lang === "id" ? "Nama Lengkap *" : "Your Name *"}
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Budi Santoso"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full border border-[var(--line)] bg-[#F4F5F6] px-3 py-2 text-xs text-[#12141A] focus:border-[#12141A] focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#12141A] block">
                  {lang === "id" ? "Nama Bisnis / Brand" : "Business Name"}
                </label>
                <input
                  type="text"
                  placeholder="e.g. PT Maju Digital"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full border border-[var(--line)] bg-[#F4F5F6] px-3 py-2 text-xs text-[#12141A] focus:border-[#12141A] focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#12141A] block">
                  {lang === "id" ? "Nomor WhatsApp *" : "WhatsApp Number *"}
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 081234567890"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full border border-[var(--line)] bg-[#F4F5F6] px-3 py-2 text-xs text-[#12141A] focus:border-[#12141A] focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#12141A] block">
                  {lang === "id" ? "Email Address *" : "Email Address *"}
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. budi@business.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-[var(--line)] bg-[#F4F5F6] px-3 py-2 text-xs text-[#12141A] focus:border-[#12141A] focus:outline-none"
                />
              </div>
            </div>

            {/* Budget & Timeline Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#12141A] block">
                  {lang === "id" ? "Estimasi Anggaran" : "Target Budget"}
                </label>
                <select
                  value={budgetRange}
                  onChange={(e) => setBudgetRange(e.target.value)}
                  className="w-full border border-[var(--line)] bg-[#F4F5F6] px-3 py-2 text-xs text-[#12141A] focus:border-[#12141A] focus:outline-none cursor-pointer"
                >
                  <option value="Rp2.500.000 - Rp6.500.000">Rp2.500.000 - Rp6.500.000 (Landing Page)</option>
                  <option value="Rp7.500.000 - Rp22.000.000">Rp7.500.000 - Rp22.000.000 (Web App &amp; SaaS)</option>
                  <option value="Rp18.000.000 - Rp65.000.000+">Rp18.000.000 - Rp65.000.000+ (Enterprise Software)</option>
                  <option value="Menyesuaikan Rekomendasi Studio">Menyesuaikan Rekomendasi Studio</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#12141A] block">
                  {lang === "id" ? "Target Waktu Peluncuran" : "Launch Timeline"}
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full border border-[var(--line)] bg-[#F4F5F6] px-3 py-2 text-xs text-[#12141A] focus:border-[#12141A] focus:outline-none cursor-pointer"
                >
                  <option value="Segera (< 2 Minggu)">Segera (&lt; 2 Minggu)</option>
                  <option value="2-4 Minggu">2 – 4 Minggu</option>
                  <option value="1-2 Bulan">1 – 2 Bulan</option>
                  <option value="Fleksibel / Tahap Perencanaan">Fleksibel / Tahap Perencanaan</option>
                </select>
              </div>
            </div>

            {/* Brief Description */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#12141A] block">
                {lang === "id"
                  ? "Deskripsi Singkat Kebutuhan / Fitur Utama"
                  : "Brief Project Summary"}
              </label>
              <textarea
                rows={4}
                placeholder={
                  lang === "id"
                    ? "Contoh: Kami ingin membuat web booking lapangan badminton multi-venue dengan payment gateway QRIS..."
                    : "Describe the core features, target users, or operational problems you want to solve..."
                }
                value={projectBrief}
                onChange={(e) => setProjectBrief(e.target.value)}
                className="w-full border border-[var(--line)] bg-[#F4F5F6] p-3 text-xs text-[#12141A] placeholder:text-[var(--mid)] focus:border-[#12141A] focus:outline-none"
              />
            </div>

            <div className="pt-2">
              <button type="submit" className="btn-nullwave w-full justify-center text-sm py-3.5">
                <Send className="w-4 h-4" />
                <span>
                  {lang === "id"
                    ? "Kirim Brief & Mulai Konsultasi via WhatsApp →"
                    : "Submit Brief & Consult via WhatsApp →"}
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="relative mx-auto max-w-4xl px-4 sm:px-8 py-20 font-mono">
        <div className="text-center mb-12 space-y-2">
          <span className="mi text-[10px] tracking-[0.2em] text-[var(--mid)] block">
            {lang === "id" ? "TANYA JAWAB LAYANAN KUSTOM" : "CUSTOM DEV FAQ"}
          </span>
          <h2 className="font-sans font-bold text-2xl sm:text-3xl uppercase tracking-tight text-[#12141A]">
            {lang === "id" ? "Hal Yang Sering Ditanyakan" : "Frequently Asked Questions"}
          </h2>
        </div>

        <div className="space-y-3">
          {customFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-[var(--line)] bg-white p-5 space-y-2"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-xs text-[#FF6B6B] font-bold">[{idx + 1}]</span>
                <h4 className="font-sans font-bold text-sm text-[#12141A] uppercase">{faq.q}</h4>
              </div>
              <p className="text-xs text-[var(--mid)] leading-relaxed pl-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

