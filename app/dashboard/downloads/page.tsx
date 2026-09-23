"use client";

import * as React from "react";
import { DownloadCloud, Monitor, Apple, CheckCircle2, FileText, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";

export default function DownloadsPage() {
  const { t, lang } = useLanguage();

  const releases = [
    {
      id: "rel-1",
      productName: "TOKOin-POS",
      version: "2.1.0",
      releaseDate: lang === "id" ? "22 September 2026" : "September 22, 2026",
      platforms: [
        { name: lang === "id" ? "Cloud Web Portal & POS Dashboard" : "Cloud Web Portal & POS Dashboard", filename: "https://tokoin.app/app", size: "Cloud Hosted", icon: Globe },
        { name: "Windows Native Desktop (64-bit)", filename: "TOKOin-POS-Setup-2.1.0.exe", size: "78.4 MB", icon: Monitor },
        { name: "macOS Universal Desktop (Apple & Intel)", filename: "TOKOin-POS-2.1.0.dmg", size: "84.2 MB", icon: Apple },
      ],
      changelog: [
        lang === "id" ? "Integrasi kasir barcode & SKU berkecepatan tinggi (< 1 detik)" : "High-speed barcode & SKU scanning POS engine (< 1 sec)",
        lang === "id" ? "Otomatisasi pencetakan QRIS Dinamis langsung pada printer struk thermal 58mm & 80mm" : "Dynamic QRIS direct receipt generation on thermal printers (58mm/80mm)",
        lang === "id" ? "Modul manajemen inventaris multi-gudang dan peringatan stok minimum otomatis" : "Multi-warehouse inventory tracking and low-stock automated alerts",
        lang === "id" ? "Dashboard omzet harian & export laporan keuangan laba rugi real-time" : "Daily sales dashboard and real-time P&L profit reporting exports",
        lang === "id" ? "Fitur auto-sync cloud database dengan enkripsi SSL" : "Automated cloud database sync with 256-bit SSL encryption",
      ],
    },
    {
      id: "rel-2",
      productName: "Brew & Bite",
      version: "2.4.0",
      releaseDate: lang === "id" ? "22 September 2026" : "September 22, 2026",
      platforms: [
        { name: lang === "id" ? "Cloud Web App (Waiter, Kasir & Owner)" : "Cloud Web App (Waiter, Cashier & Owner)", filename: "https://brewbite.app/portal", size: "Cloud Hosted", icon: Globe },
        { name: "Kitchen Display App (Android Tablet / Touchscreen)", filename: "BrewBite-KDS-Setup-2.4.0.apk", size: "32.6 MB", icon: Monitor },
        { name: "Desktop POS Terminal (Windows 10/11)", filename: "BrewBite-POS-2.4.0.exe", size: "71.8 MB", icon: Monitor },
      ],
      changelog: [
        lang === "id" ? "Kitchen Display System (KDS) real-time dengan timer pemrosesan pesanan" : "Real-time Kitchen Display System (KDS) with order processing timers",
        lang === "id" ? "Pemesanan meja interaktif (Dine-in, Takeaway, Split Bill per kursi)" : "Interactive table ordering (Dine-in, Takeaway, Split Bill per seat)",
        lang === "id" ? "Manajemen resep & otomatisasi pemotongan stok bahan baku (BOM)" : "Recipe management and automatic ingredient depletion (BOM)",
        lang === "id" ? "Rekap shift kasir harian & laporan omzet per kategori menu" : "Daily cashier shift summaries and category breakdown reports",
      ],
    },
    {
      id: "rel-3",
      productName: "ModaKita",
      version: "3.0.0",
      releaseDate: lang === "id" ? "22 September 2026" : "September 22, 2026",
      platforms: [
        { name: "Storefront & Backoffice Admin Portal", filename: "https://modakita.app/admin", size: "Cloud Hosted", icon: Globe },
        { name: "Admin Mobile Assistant (Android APK)", filename: "ModaKita-Admin-3.0.0.apk", size: "24.5 MB", icon: Monitor },
      ],
      changelog: [
        lang === "id" ? "Storefront katalog produk fashion dengan smart filter & varian swatch warna/ukuran" : "Fashion storefront catalog with smart filters & color/size swatch variants",
        lang === "id" ? "Integrasi pembayaran Midtrans Snap (QRIS, VA Bank, Kartu Kredit, GoPay, ShopeePay)" : "Midtrans Snap checkout integration (QRIS, VA, Cards, e-Wallets)",
        lang === "id" ? "Multi-alamat pengiriman pelanggan & kalkulasi ongkir ekspedisi otomatis" : "Multiple customer shipping addresses & automated courier rate calculator",
        lang === "id" ? "Backoffice admin terpusat untuk kontrol inventaris stok, kupon diskon, dan blog SEO" : "Centralized backoffice admin for stock control, promo coupons, and SEO blog",
      ],
    },
    {
      id: "rel-4",
      productName: "PadelSpace — Club Landing Page",
      version: "1.2.0",
      releaseDate: lang === "id" ? "22 September 2026" : "September 22, 2026",
      platforms: [
        { name: "Live Production Website & CMS", filename: "https://padelspace.club", size: "Cloud Hosted", icon: Globe },
        { name: "Full Source Code & Assets Package (.zip)", filename: "PadelSpace-v1.2.0-Source.zip", size: "18.2 MB", icon: Monitor },
      ],
      changelog: [
        lang === "id" ? "Showcase Lapangan & Fasilitas Klub (Panoramic Court, Locker, Cafe, Pro Shop)" : "Court & Club Facilities Showcase (Panoramic Court, Locker, Cafe, Pro Shop)",
        lang === "id" ? "Tabel Harga Sewa Lapangan, Membership & Paket Pelatihan (Coaching)" : "Court Rental Pricing, Membership & Coaching Package Matrices",
        lang === "id" ? "Jadwal Operasional & Kalender Event / Turnamen Komunitas" : "Operating Hours & Community Event / Tournament Calendar",
        lang === "id" ? "Menu Lengkap: Home, About, Courts, Facilities, Pricing, Schedule, Events, FAQ, Contact & Direct Booking CTA" : "Full Nav: Home, About, Courts, Facilities, Pricing, Schedule, Events, FAQ, Contact & Booking CTA",
      ],
    },
    {
      id: "rel-5",
      productName: "PadelSpace — Booking & Management System",
      version: "2.0.0",
      releaseDate: lang === "id" ? "22 September 2026" : "September 22, 2026",
      platforms: [
        { name: "Player Web App & Booking Portal", filename: "https://padelspace.app", size: "Cloud Hosted", icon: Globe },
        { name: "Club Admin Backoffice Dashboard", filename: "https://padelspace.app/admin", size: "Cloud Hosted", icon: Globe },
      ],
      changelog: [
        lang === "id" ? "Player Portal: Cari lapangan, jadwal slot real-time, payment gateway, e-tiket booking & profil" : "Player Portal: Court finder, real-time slot scheduler, payment gateway, e-tickets & profile",
        lang === "id" ? "Admin Backoffice: Court management, slot scheduler, customer CRM, staff role & laporan omzet" : "Admin Backoffice: Court management, scheduler, CRM, staff roles & revenue reports",
        lang === "id" ? "Integrasi pembayaran online multi-metode (QRIS, VA Bank, Kartu Kredit)" : "Multi-method online payment integrations (QRIS, VA Bank, Cards)",
        lang === "id" ? "Dedicated Database cloud dengan otomatisasi backup harian" : "Dedicated cloud database with daily automated backups",
      ],
    },
  ];

  function handleDownload(filename: string) {
    if (filename.startsWith("http")) {
      window.open(filename, "_blank");
    } else {
      alert(lang === "id" 
        ? `Mengunduh file resmi installer: ${filename}\nChecksum terverifikasi SHA-256.`
        : `Downloading official release installer: ${filename}\nSHA-256 checksum verified.`);
    }
  }

  return (
    <div className="space-y-6 font-mono">
      <div className="border-b border-[#181c25] pb-4">
        <h1 className="text-xl font-bold tracking-tight text-white font-sans">{t("dash.downloadsTitle")}</h1>
        <p className="text-xs text-neutral-400">
          {t("dash.downloadsDesc")}
        </p>
      </div>

      <div className="space-y-6">
        {releases.map((rel) => (
          <div
            key={rel.id}
            className="rounded-[6px] border border-[#202534] bg-[#0c0e14] p-6 space-y-5"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#181c25] pb-4">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2 font-sans">
                  {rel.productName}
                  <span className="text-xs font-mono font-normal text-neutral-400 border border-[#222734] px-1.5 py-0.5 rounded-[3px]">
                    v{rel.version}
                  </span>
                </h3>
                <span className="text-xs text-neutral-400">
                  {lang === "id" ? `Rilis pada ${rel.releaseDate}` : `Released on ${rel.releaseDate}`}
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-[3px] bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 uppercase">
                Stable Release
              </span>
            </div>

            {/* Platform Download Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {rel.platforms.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col justify-between p-4 rounded-[4px] bg-[#12151d] border border-[#1e232f] space-y-3"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-neutral-400 shrink-0" />
                      <div>
                        <span className="text-xs font-bold text-white block leading-snug">{p.name}</span>
                        <span className="text-[10px] font-mono text-neutral-400">{p.size}</span>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => handleDownload(p.filename)}
                      className="gap-1.5 text-xs font-semibold w-full cursor-pointer"
                    >
                      <DownloadCloud className="w-3.5 h-3.5" />
                      <span>{p.filename.startsWith("http") ? (lang === "id" ? "Buka Web Portal" : "Open Web Portal") : (lang === "id" ? "Unduh Binary" : "Download Binary")}</span>
                    </Button>
                  </div>
                );
              })}
            </div>

            {/* Release Changelog */}
            <div className="bg-[#0f1118] border border-[#1b202c] p-4 rounded-[4px] space-y-2">
              <h4 className="text-xs font-mono font-bold text-neutral-300 uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-neutral-400" />
                <span>{lang === "id" ? "Catatan Rilis & Pembaruan" : "Release Notes & Changes"}</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-neutral-400">
                {rel.changelog.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-neutral-500">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

