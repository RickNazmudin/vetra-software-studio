export const metadata = {
  title: "Privacy Policy — Vetra Software Studio",
  description: "How Vetra Software Studio handles and protects your personal and transaction data.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-8 py-24 text-[#12141A] text-xs font-mono leading-relaxed space-y-6">
      <div className="border-b border-[var(--line)] pb-6 mb-8">
        <span className="mi text-[10px] tracking-[0.2em] text-[var(--mid)] uppercase block mb-1">
          DATA SECURITY // PRIVACY
        </span>
        <h1 className="font-sans font-bold text-3xl uppercase tracking-tight text-[#12141A]">Privacy Policy</h1>
        <p className="text-[var(--mid)] mt-1">Terakhir diperbarui: September 2026 / IDR &amp; Global</p>
      </div>

      <section className="space-y-2">
        <h2 className="font-sans font-bold text-sm text-[#12141A] uppercase tracking-wider">1. Pengumpulan Informasi</h2>
        <p className="text-[var(--mid)]">
          Kami hanya mengumpulkan informasi minimal yang diperlukan untuk memproses pesanan dan menerbitkan lisensi software Anda, seperti: Nama, Alamat Email, dan ID Transaksi dari payment gateway.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-sans font-bold text-sm text-[#12141A] uppercase tracking-wider">2. Keamanan Pembayaran</h2>
        <p className="text-[var(--mid)]">
          Kami tidak menyimpan nomor kartu kredit, detail rekening, atau kredensial perbankan Anda di server kami. Semua pemrosesan pembayaran dilakukan secara terenkripsi oleh payment gateway berlisensi (Midtrans / Xendit).
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-sans font-bold text-sm text-[#12141A] uppercase tracking-wider">3. Perlindungan &amp; Non-Distribusi Data</h2>
        <p className="text-[var(--mid)]">
          Vetra Software Studio tidak akan pernah menjual, menyewakan, atau mendistribusikan data pribadi maupun daftar pelanggan Anda kepada pihak ketiga untuk keperluan periklanan atau pemasaran.
        </p>
      </section>
    </div>
  );
}
