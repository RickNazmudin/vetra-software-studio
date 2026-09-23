"use client";

import { useLanguage } from "@/context/language-context";

export default function PrivacyPage() {
  const { lang } = useLanguage();

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-8 py-24 text-[#12141A] text-xs font-mono leading-relaxed space-y-6">
      <div className="border-b border-[var(--line)] pb-6 mb-8">
        <span className="mi text-[10px] tracking-[0.2em] text-[var(--mid)] uppercase block mb-1">
          {lang === "id" ? "KEAMANAN DATA // PRIVASI" : "DATA SECURITY // PRIVACY"}
        </span>
        <h1 className="font-sans font-bold text-3xl uppercase tracking-tight text-[#12141A]">
          {lang === "id" ? "Kebijakan Privasi" : "Privacy Policy"}
        </h1>
        <p className="text-[var(--mid)] mt-1">
          {lang === "id" ? "Terakhir diperbarui: September 2026 / IDR & Global" : "Last updated: September 2026 / IDR & Global"}
        </p>
      </div>

      <section className="space-y-2">
        <h2 className="font-sans font-bold text-sm text-[#12141A] uppercase tracking-wider">
          {lang === "id" ? "1. Pengumpulan Informasi" : "1. Information Collection"}
        </h2>
        <p className="text-[var(--mid)]">
          {lang === "id" ? (
            "Kami hanya mengumpulkan informasi minimal yang diperlukan untuk memproses pesanan dan menerbitkan lisensi software Anda, seperti: Nama, Alamat Email, dan ID Transaksi dari payment gateway."
          ) : (
            "We collect only minimal necessary information required to fulfill orders and issue software licenses, specifically: Name, Email Address, and Gateway Transaction IDs."
          )}
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-sans font-bold text-sm text-[#12141A] uppercase tracking-wider">
          {lang === "id" ? "2. Keamanan Pembayaran" : "2. Payment Security"}
        </h2>
        <p className="text-[var(--mid)]">
          {lang === "id" ? (
            "Kami tidak menyimpan nomor kartu kredit, detail rekening, atau kredensial perbankan Anda di server kami. Semua pemrosesan pembayaran dilakukan secara terenkripsi oleh payment gateway berlisensi (Midtrans / Xendit)."
          ) : (
            "We never store credit card numbers, bank account details, or credentials on our servers. All transaction processing is securely handled via encrypted payment gateway partners (Midtrans / Xendit)."
          )}
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-sans font-bold text-sm text-[#12141A] uppercase tracking-wider">
          {lang === "id" ? "3. Perlindungan & Non-Distribusi Data" : "3. Non-Disclosure & Data Protection"}
        </h2>
        <p className="text-[var(--mid)]">
          {lang === "id" ? (
            "Vetra Software Studio tidak akan pernah menjual, menyewakan, atau mendistribusikan data pribadi maupun daftar pelanggan Anda kepada pihak ketiga untuk keperluan periklanan atau pemasaran."
          ) : (
            "Vetra Software Studio will never sell, rent, or distribute your private contact details or business records to third parties for advertising or marketing campaigns."
          )}
        </p>
      </section>
    </div>
  );
}

