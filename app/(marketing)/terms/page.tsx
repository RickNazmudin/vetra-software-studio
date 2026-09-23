export const metadata = {
  title: "Terms of Service — Vetra Software Studio",
  description: "Terms and conditions for purchasing and using Vetra Software Studio applications.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-8 py-24 text-[#12141A] text-xs font-mono leading-relaxed space-y-6">
      <div className="border-b border-[var(--line)] pb-6 mb-8">
        <span className="mi text-[10px] tracking-[0.2em] text-[var(--mid)] uppercase block mb-1">
          LEGAL AGREEMENT // GOVERNANCE
        </span>
        <h1 className="font-sans font-bold text-3xl uppercase tracking-tight text-[#12141A]">Terms of Service</h1>
        <p className="text-[var(--mid)] mt-1">Terakhir diperbarui: September 2026 / IDR &amp; Global</p>
      </div>

      <section className="space-y-2">
        <h2 className="font-sans font-bold text-sm text-[#12141A] uppercase tracking-wider">1. Pengenalan</h2>
        <p className="text-[var(--mid)]">
          Dengan mengakses situs web Vetra Software Studio dan membeli atau menggunakan software kami (termasuk TOKOin-POS, Brew &amp; Bite, ModaKita, PadelSpace), Anda menyetujui seluruh ketentuan dalam Perjanjian Layanan ini.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-sans font-bold text-sm text-[#12141A] uppercase tracking-wider">2. Hak Penggunaan &amp; Lisensi</h2>
        <p className="text-[var(--mid)]">
          <strong className="text-[#12141A]">Paket Lifetime License:</strong> Memberikan hak kepemilikan lisensi non-eksklusif, tidak dapat dipindahtangankan, untuk menggunakan versi produk yang dibeli (termasuk update minor dan bug fixes v1.x) tanpa batas waktu kedaluwarsa pada jumlah perangkat yang ditentukan.
        </p>
        <p className="text-[var(--mid)]">
          <strong className="text-[#12141A]">Paket Monthly Subscription:</strong> Memberikan hak akses penuh terhadap aplikasi dan fitur cloud selama masa periode penagihan aktif. Akses akan berakhir jika langganan dibatalkan atau pembayaran gagal setelah masa tenggang.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-sans font-bold text-sm text-[#12141A] uppercase tracking-wider">3. Batasan Penggunaan</h2>
        <p className="text-[var(--mid)]">
          Pengguna dilarang mendekompilasi, merekayasa balik (*reverse engineering*), menjual kembali (*reselling*), atau menyewakan license key software kepada pihak ketiga tanpa persetujuan tertulis dari Vetra Software Studio.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-sans font-bold text-sm text-[#12141A] uppercase tracking-wider">4. Kepemilikan Data</h2>
        <p className="text-[var(--mid)]">
          Seluruh data operasional, basis data lokal, dan catatan transaksi bisnis yang dibuat menggunakan software kami adalah 100% milik Anda. Vetra Software Studio tidak mengklaim kepemilikan atas data bisnis Anda.
        </p>
      </section>
    </div>
  );
}
