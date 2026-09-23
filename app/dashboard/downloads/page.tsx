"use client";

import * as React from "react";
import { DownloadCloud, Monitor, Apple, CheckCircle2, FileText, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DownloadsPage() {
  const releases = [
    {
      id: "rel-1",
      productName: "TOKOin-POS",
      version: "2.1.0",
      releaseDate: "22 September 2026",
      platforms: [
        { name: "Cloud Web Portal & POS Dashboard", filename: "https://tokoin.app/app", size: "Cloud Hosted", icon: Globe },
        { name: "Windows Native Desktop (64-bit)", filename: "TOKOin-POS-Setup-2.1.0.exe", size: "78.4 MB", icon: Monitor },
        { name: "macOS Universal Desktop (Apple & Intel)", filename: "TOKOin-POS-2.1.0.dmg", size: "84.2 MB", icon: Apple },
      ],
      changelog: [
        "Integrasi kasir barcode & SKU berkecepatan tinggi (< 1 detik)",
        "Otomatisasi pencetakan QRIS Dinamis langsung pada printer struk thermal 58mm & 80mm",
        "Modul manajemen inventaris multi-gudang dan peringatan stok minimum otomatis",
        "Dashboard omzet harian & export laporan keuangan laba rugi real-time",
        "Fitur auto-sync cloud database dengan enkripsi SSL",
      ],
    },
    {
      id: "rel-2",
      productName: "Brew & Bite",
      version: "2.4.0",
      releaseDate: "22 September 2026",
      platforms: [
        { name: "Cloud Web App (Waiter, Kasir & Owner)", filename: "https://brewbite.app/portal", size: "Cloud Hosted", icon: Globe },
        { name: "Kitchen Display App (Android Tablet / Touchscreen)", filename: "BrewBite-KDS-Setup-2.4.0.apk", size: "32.6 MB", icon: Monitor },
        { name: "Desktop POS Terminal (Windows 10/11)", filename: "BrewBite-POS-2.4.0.exe", size: "71.8 MB", icon: Monitor },
      ],
      changelog: [
        "Kitchen Display System (KDS) real-time dengan timer pemrosesan pesanan",
        "Pemesanan meja interaktif (Dine-in, Takeaway, Split Bill per kursi)",
        "Manajemen resep & otomatisasi pemotongan stok bahan baku (BOM)",
        "Rekap shift kasir harian & laporan omzet per kategori menu",
      ],
    },
    {
      id: "rel-3",
      productName: "ModaKita",
      version: "3.0.0",
      releaseDate: "22 September 2026",
      platforms: [
        { name: "Storefront & Backoffice Admin Portal", filename: "https://modakita.app/admin", size: "Cloud Hosted", icon: Globe },
        { name: "Admin Mobile Assistant (Android APK)", filename: "ModaKita-Admin-3.0.0.apk", size: "24.5 MB", icon: Monitor },
      ],
      changelog: [
        "Storefront katalog produk fashion dengan smart filter & varian swatch warna/ukuran",
        "Integrasi pembayaran Midtrans Snap (QRIS, VA Bank, Kartu Kredit, GoPay, ShopeePay)",
        "Multi-alamat pengiriman pelanggan & kalkulasi ongkir ekspedisi otomatis",
        "Backoffice admin terpusat untuk kontrol inventaris stok, kupon diskon, dan blog SEO",
      ],
    },
    {
      id: "rel-4",
      productName: "PadelSpace — Club Landing Page",
      version: "1.2.0",
      releaseDate: "22 September 2026",
      platforms: [
        { name: "Live Production Website & CMS", filename: "https://padelspace.club", size: "Cloud Hosted", icon: Globe },
        { name: "Full Source Code & Assets Package (.zip)", filename: "PadelSpace-v1.2.0-Source.zip", size: "18.2 MB", icon: Monitor },
      ],
      changelog: [
        "Showcase Lapangan & Fasilitas Klub (Panoramic Court, Locker, Cafe, Pro Shop)",
        "Tabel Harga Sewa Lapangan, Membership & Paket Pelatihan (Coaching)",
        "Jadwal Operasional & Kalender Event / Turnamen Komunitas",
        "Menu Lengkap: Home, About, Courts, Facilities, Pricing, Schedule, Events, FAQ, Contact & Direct Booking CTA",
      ],
    },
    {
      id: "rel-5",
      productName: "PadelSpace — Booking & Management System",
      version: "2.0.0",
      releaseDate: "22 September 2026",
      platforms: [
        { name: "Player Web App & Booking Portal", filename: "https://padelspace.app", size: "Cloud Hosted", icon: Globe },
        { name: "Club Admin Backoffice Dashboard", filename: "https://padelspace.app/admin", size: "Cloud Hosted", icon: Globe },
      ],
      changelog: [
        "Player Portal: Cari lapangan, jadwal slot real-time, payment gateway, e-tiket booking & profil",
        "Admin Backoffice: Court management, slot scheduler, customer CRM, staff role & laporan omzet",
        "Integrasi pembayaran online multi-metode (QRIS, VA Bank, Kartu Kredit)",
        "Dedicated Database cloud dengan otomatisasi backup harian",
      ],
    },
  ];

  function handleDownload(filename: string) {
    if (filename.startsWith("http")) {
      window.open(filename, "_blank");
    } else {
      alert(`Mengunduh file resmi installer: ${filename}\nChecksum terverifikasi SHA-256.`);
    }
  }

  return (
    <div className="space-y-6">
      <div className="border-b border-[#181c25] pb-4">
        <h1 className="text-xl font-bold tracking-tight text-white">Software Downloads & Releases</h1>
        <p className="text-xs text-neutral-400">
          Unduh installer resmi dan akses portal cloud untuk sistem TOKOin-POS Anda.
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
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  {rel.productName}
                  <span className="text-xs font-mono font-normal text-neutral-400 border border-[#222734] px-1.5 py-0.5 rounded-[3px]">
                    v{rel.version}
                  </span>
                </h3>
                <span className="text-xs text-neutral-400">Rilis pada {rel.releaseDate}</span>
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
                      className="gap-1.5 text-xs font-semibold w-full"
                    >
                      <DownloadCloud className="w-3.5 h-3.5" />
                      <span>{p.filename.startsWith("http") ? "Buka Web Portal" : "Download"}</span>
                    </Button>
                  </div>
                );
              })}
            </div>

            {/* Release Changelog */}
            <div className="bg-[#0f1118] border border-[#1b202c] p-4 rounded-[4px] space-y-2">
              <h4 className="text-xs font-mono font-bold text-neutral-300 uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-neutral-400" />
                <span>Release Notes & Changes</span>
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
