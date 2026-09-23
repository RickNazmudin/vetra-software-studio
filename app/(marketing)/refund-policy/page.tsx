"use client";

import { useLanguage } from "@/context/language-context";

export default function RefundPolicyPage() {
  const { lang } = useLanguage();

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-8 py-24 text-[#12141A] text-xs font-mono leading-relaxed space-y-6">
      <div className="border-b border-[var(--line)] pb-6 mb-8">
        <span className="mi text-[10px] tracking-[0.2em] text-[var(--mid)] uppercase block mb-1">
          {lang === "id" ? "KEBIJAKAN & HAK AKSES // REFUND" : "POLICY & ENTITLEMENTS // REFUND"}
        </span>
        <h1 className="font-sans font-bold text-3xl uppercase tracking-tight text-[#12141A]">
          {lang === "id" ? "Kebijakan Refund & Lisensi" : "Refund & Lifetime Policy"}
        </h1>
        <p className="text-[var(--mid)] mt-1">
          {lang === "id" ? "Terakhir diperbarui: September 2026 / IDR & Global" : "Last updated: September 2026 / IDR & Global"}
        </p>
      </div>

      <section className="space-y-2">
        <h2 className="font-sans font-bold text-sm text-[#12141A] uppercase tracking-wider">
          {lang === "id" ? "1. Definisi Lifetime License" : "1. Lifetime License Definition"}
        </h2>
        <p className="text-[var(--mid)]">
          {lang === "id" ? (
            <>
              Sesuai dengan komitmen Vetra Studio, <strong className="text-[#12141A]">Lifetime License</strong> didefinisikan sebagai hak untuk menggunakan versi produk yang dibeli (termasuk seluruh pembaruan minor, patch stabilitas, dan perbaikan bug dalam siklus rilis v1.x) tanpa batas waktu dan tanpa kewajiban membayar biaya langganan berulang.
            </>
          ) : (
            <>
              In accordance with Vetra Studio commitment, a <strong className="text-[#12141A]">Lifetime License</strong> is defined as a perpetual, non-expiring grant to use the purchased version of the software (including all minor releases, stability patches, and bug fixes for the major version cycle) without recurring subscription fees.
            </>
          )}
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-sans font-bold text-sm text-[#12141A] uppercase tracking-wider">
          {lang === "id" ? "2. Kebijakan Pengembalian Dana (Refund)" : "2. Refund Policy"}
        </h2>
        <p className="text-[var(--mid)]">
          {lang === "id" ? (
            "Kami memberikan garansi pengembalian dana 7 hari untuk pembelian pertama apabila terdapat kendala teknis kritis atau ketidaksesuaian fungsi software dengan spesifikasi teknis yang terdokumentasi, yang tidak dapat diselesaikan oleh tim dukungan kami."
          ) : (
            "We offer a 7-day money-back guarantee on initial purchases if there is a critical technical issue or functional discrepancy with documented specifications that our support engineering team cannot resolve."
          )}
        </p>
        <p className="text-[var(--mid)]">
          {lang === "id" ? (
            "Setelah pengembalian dana disetujui, License Key terkait akan dinonaktifkan (REVOKED) dari server lisensi."
          ) : (
            "Upon refund approval, the associated License Key is revoked on our license servers."
          )}
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-sans font-bold text-sm text-[#12141A] uppercase tracking-wider">
          {lang === "id" ? "3. Pembatalan Langganan Monthly" : "3. Monthly Subscription Cancellation"}
        </h2>
        <p className="text-[var(--mid)]">
          {lang === "id" ? (
            "Anda dapat membatalkan paket bulanan kapan saja melalui Customer Dashboard. Akses software akan tetap aktif hingga akhir periode penagihan yang sedang berjalan dan tidak akan diperpanjang secara otomatis di bulan berikutnya."
          ) : (
            "You may cancel your monthly plan at any time via the Customer Dashboard. Software access remains active until the end of your paid billing period and will not renew automatically."
          )}
        </p>
      </section>
    </div>
  );
}

