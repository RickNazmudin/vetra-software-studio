export const metadata = {
  title: "Refund & Lifetime Policy — Vetra Software Studio",
  description: "Clear refund rules and Lifetime License entitlements definition.",
};

export default function RefundPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-8 py-24 text-[#12141A] text-xs font-mono leading-relaxed space-y-6">
      <div className="border-b border-[var(--line)] pb-6 mb-8">
        <span className="mi text-[10px] tracking-[0.2em] text-[var(--mid)] uppercase block mb-1">
          POLICY &amp; ENTITLEMENTS // REFUND
        </span>
        <h1 className="font-sans font-bold text-3xl uppercase tracking-tight text-[#12141A]">Refund &amp; Lifetime Policy</h1>
        <p className="text-[var(--mid)] mt-1">Terakhir diperbarui: September 2026 / IDR &amp; Global</p>
      </div>

      <section className="space-y-2">
        <h2 className="font-sans font-bold text-sm text-[#12141A] uppercase tracking-wider">1. Definisi Lifetime License</h2>
        <p className="text-[var(--mid)]">
          Sesuai dengan komitmen Vetra Studio, <strong className="text-[#12141A]">Lifetime License</strong> didefinisikan sebagai hak untuk menggunakan versi produk yang dibeli (termasuk seluruh pembaruan minor, patch stabilitas, dan perbaikan bug dalam siklus rilis v1.x) tanpa batas waktu dan tanpa kewajiban membayar biaya langganan berulang.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-sans font-bold text-sm text-[#12141A] uppercase tracking-wider">2. Kebijakan Pengembalian Dana (Refund)</h2>
        <p className="text-[var(--mid)]">
          Kami memberikan garansi pengembalian dana 7 hari untuk pembelian pertama apabila terdapat kendala teknis kritis atau ketidaksesuaian fungsi software dengan spesifikasi teknis yang terdokumentasi, yang tidak dapat diselesaikan oleh tim dukungan kami.
        </p>
        <p className="text-[var(--mid)]">
          Setelah pengembalian dana disetujui, License Key terkait akan dinonaktifkan (*REVOKED*) dari server lisensi.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-sans font-bold text-sm text-[#12141A] uppercase tracking-wider">3. Pembatalan Langganan Monthly</h2>
        <p className="text-[var(--mid)]">
          Anda dapat membatalkan paket bulanan kapan saja melalui Customer Dashboard. Akses software akan tetap aktif hingga akhir periode penagihan yang sedang berjalan dan tidak akan diperpanjang secara otomatis di bulan berikutnya.
        </p>
      </section>
    </div>
  );
}
