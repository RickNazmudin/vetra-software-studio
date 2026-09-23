"use client";

import { useLanguage } from "@/context/language-context";

export default function TermsPage() {
  const { lang } = useLanguage();

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-8 py-24 text-[#12141A] text-xs font-mono leading-relaxed space-y-6">
      <div className="border-b border-[var(--line)] pb-6 mb-8">
        <span className="mi text-[10px] tracking-[0.2em] text-[var(--mid)] uppercase block mb-1">
          {lang === "id" ? "PERJANJIAN HUKUM // KETENTUAN" : "LEGAL AGREEMENT // GOVERNANCE"}
        </span>
        <h1 className="font-sans font-bold text-3xl uppercase tracking-tight text-[#12141A]">
          {lang === "id" ? "Ketentuan Layanan" : "Terms of Service"}
        </h1>
        <p className="text-[var(--mid)] mt-1">
          {lang === "id" ? "Terakhir diperbarui: September 2026 / IDR & Global" : "Last updated: September 2026 / IDR & Global"}
        </p>
      </div>

      <section className="space-y-2">
        <h2 className="font-sans font-bold text-sm text-[#12141A] uppercase tracking-wider">
          {lang === "id" ? "1. Pengenalan" : "1. Introduction"}
        </h2>
        <p className="text-[var(--mid)]">
          {lang === "id" ? (
            "Dengan mengakses situs web Vetra Software Studio dan membeli atau menggunakan software kami (termasuk TOKOin-POS, Brew & Bite, ModaKita, PadelSpace), Anda menyetujui seluruh ketentuan dalam Perjanjian Layanan ini."
          ) : (
            "By accessing the Vetra Software Studio platform and purchasing or utilizing our software (including TOKOin-POS, Brew & Bite, ModaKita, PadelSpace), you agree to be bound by these Terms of Service."
          )}
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-sans font-bold text-sm text-[#12141A] uppercase tracking-wider">
          {lang === "id" ? "2. Hak Penggunaan & Lisensi" : "2. Licensing & Usage Rights"}
        </h2>
        <p className="text-[var(--mid)]">
          {lang === "id" ? (
            <>
              <strong className="text-[#12141A]">Paket Lifetime License:</strong> Memberikan hak kepemilikan lisensi non-eksklusif, tidak dapat dipindahtangankan, untuk menggunakan versi produk yang dibeli (termasuk update minor dan bug fixes v1.x) tanpa batas waktu kedaluwarsa pada jumlah perangkat yang ditentukan.
            </>
          ) : (
            <>
              <strong className="text-[#12141A]">Lifetime License Plan:</strong> Grants a non-exclusive, non-transferable perpetual license to use the purchased version of the software (including minor updates and v1.x bug fixes) indefinitely on authorized hardware units.
            </>
          )}
        </p>
        <p className="text-[var(--mid)]">
          {lang === "id" ? (
            <>
              <strong className="text-[#12141A]">Paket Monthly Subscription:</strong> Memberikan hak akses penuh terhadap aplikasi dan fitur cloud selama masa periode penagihan aktif. Akses akan berakhir jika langganan dibatalkan atau pembayaran gagal setelah masa tenggang.
            </>
          ) : (
            <>
              <strong className="text-[#12141A]">Monthly Subscription Plan:</strong> Grants access to the software and cloud synchronization services for the duration of the active billing cycle.
            </>
          )}
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-sans font-bold text-sm text-[#12141A] uppercase tracking-wider">
          {lang === "id" ? "3. Batasan Penggunaan" : "3. Acceptable Use & Restrictions"}
        </h2>
        <p className="text-[var(--mid)]">
          {lang === "id" ? (
            "Pengguna dilarang mendekompilasi, merekayasa balik (reverse engineering), menjual kembali (reselling), atau menyewakan license key software kepada pihak ketiga tanpa persetujuan tertulis dari Vetra Software Studio."
          ) : (
            "Users may not decompile, reverse-engineer, redistribute, or resell license keys to unauthorized third parties without express written authorization from Vetra Software Studio."
          )}
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-sans font-bold text-sm text-[#12141A] uppercase tracking-wider">
          {lang === "id" ? "4. Kepemilikan Data" : "4. Data Sovereignty"}
        </h2>
        <p className="text-[var(--mid)]">
          {lang === "id" ? (
            "Seluruh data operasional, basis data lokal, dan catatan transaksi bisnis yang dibuat menggunakan software kami adalah 100% milik Anda. Vetra Software Studio tidak mengklaim kepemilikan atas data bisnis Anda."
          ) : (
            "All operational data, local database instances, and transaction records created with our tools remain 100% your property. Vetra Software Studio asserts zero ownership over your operational data."
          )}
        </p>
      </section>
    </div>
  );
}

