export interface Testimonial {
  id: string;
  name: string;
  role: {
    id: string;
    en: string;
  };
  company: string;
  avatar: string;
  rating: number;
  productKey: "all" | "tokoin-pos" | "brew-and-bite" | "modakita" | "padelspace" | "custom";
  productName: string;
  highlight: {
    id: string;
    en: string;
  };
  comment: {
    id: string;
    en: string;
  };
  date: string;
  location: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testi-1",
    name: "Reza Pratama",
    role: {
      id: "Founder & COO",
      en: "Founder & COO"
    },
    company: "PT Sinergi Retail Nusantara",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    productKey: "custom",
    productName: "Bespoke Enterprise System",
    highlight: {
      id: "Proses handover & setup cepet banget!",
      en: "Super fast handover and onboarding process!"
    },
    comment: {
      id: "Awalnya sempat ragu mau pakai software siap pakai atau develop custom dari nol. Setelah konsultasi dengan tim Vetra, solusinya udah sangat matang dan siap pakai. Timnya kooperatif banget bantu migrasi data awal sampai tim kasir kami siap jalan.",
      en: "We were initially torn between off-the-shelf software or custom development from scratch. After consulting with Vetra, their architecture was robust and production-ready. Their team helped migrate our initial database until our operators were 100% ready."
    },
    date: "2026-08-15",
    location: "Jakarta Barat"
  },
  {
    id: "testi-2",
    name: "Budi Santoso",
    role: {
      id: "Owner",
      en: "Owner"
    },
    company: "Minimarket Berkah Jaya (3 Cabang)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    productKey: "tokoin-pos",
    productName: "TOKOin-POS",
    highlight: {
      id: "Stock opname jauh lebih gampang dan akurat",
      en: "Stock audit is now effortless and precise"
    },
    comment: {
      id: "Dulu sering pusing selisih stok barang dan antrean kasir panjang kalau jam sibuk. Sejak pakai TOKOin-POS, scan barcode super cepat dan fitur peringatan stok menipis ngebantu banget biar nggak kehabisan barang dagangan. Integrasi QRIS-nya juga bikin kasir nggak ribet cari uang kembalian.",
      en: "We used to deal with constant inventory discrepancies and long checkout queues during peak hours. With TOKOin-POS, barcode scanning is instantaneous, and automatic low-stock alerts keep our shelves full. The integrated QRIS makes checkout seamless."
    },
    date: "2026-09-02",
    location: "Surabaya"
  },
  {
    id: "testi-3",
    name: "Fajar Ardiansyah",
    role: {
      id: "Co-Founder",
      en: "Co-Founder"
    },
    company: "Titik Temu Kopi & Eatery",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    productKey: "brew-and-bite",
    productName: "Brew & Bite",
    highlight: {
      id: "Order jam sibuk teratur, barista & kitchen sinkron",
      en: "Peak hour orders run smoothly with kitchen sync"
    },
    comment: {
      id: "Sebelumnya nota pesanan sering tercecer pas weekend ramai. Dengan Brew & Bite, order masuk langsung sinkron ke display kitchen otomatis. Split bill pesanan rombongan juga tinggal klik. Sangat ngebantu kelancaran operasional cafe!",
      en: "Paper tickets used to get lost during packed weekend rush hours. With Brew & Bite, orders route directly to our kitchen displays in real time. Splitting checks for group tables takes one click. Essential for busy cafe workflows."
    },
    date: "2026-09-10",
    location: "Bandung"
  },
  {
    id: "testi-4",
    name: "Siti Nurhaliza",
    role: {
      id: "Creative Director & Owner",
      en: "Creative Director & Owner"
    },
    company: "Zafira Modest Wear",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    productKey: "modakita",
    productName: "ModaKita",
    highlight: {
      id: "Katalog estetik & sinkronisasi stok toko fisik",
      en: "Aesthetic catalog and unified store inventory"
    },
    comment: {
      id: "ModaKita bener-bener dirancang pas buat industri fashion. Variasi warna, size chart, dan foto produk tertata sangat estetik. Nggak ada lagi cerita barang terjual dobel antara toko offline dan pembeli online.",
      en: "ModaKita feels tailor-made for the fashion industry. Color swatches, size matrices, and lookbooks display beautifully. It completely solved the issue of double-selling stock between our boutique and online buyers."
    },
    date: "2026-09-18",
    location: "Yogyakarta"
  },
  {
    id: "testi-5",
    name: "Kevin Wijaya",
    role: {
      id: "Operational Lead",
      en: "Operational Lead"
    },
    company: "Jakarta Padel Club",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    productKey: "padelspace",
    productName: "PadelSpace",
    highlight: {
      id: "Member booking mandiri tanpa chat admin berulang",
      en: "Self-serve booking solved our booking bottlenecks"
    },
    comment: {
      id: "Member bisa langsung pilih slot jam kosong, bayar langsung via QRIS, dan jadwal otomatis ter-booking. Masalah double booking yang dulu sering terjadi sekarang 100% tuntas. Dashboard analitik okupansi lapangannya juga sangat informatif.",
      en: "Players can view empty court slots, pay instantly via QRIS, and receive confirmed booking passes without messaging back and forth. Zero double bookings since day one. The occupancy analytics dashboard is super helpful for revenue planning."
    },
    date: "2026-09-24",
    location: "Jakarta Selatan"
  },
  {
    id: "testi-6",
    name: "Nadia Amanda",
    role: {
      id: "Head of Operations",
      en: "Head of Operations"
    },
    company: "Karsa Brand Studio",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    productKey: "custom",
    productName: "Vetra Studio Core",
    highlight: {
      id: "UI clean, staf baru paham tanpa training rumit",
      en: "Clean UI, new staff onboarded without complex training"
    },
    comment: {
      id: "Yang paling kami suka dari software buatan Vetra itu UX-nya bersih dan nggak bikin pusing. Staf baru kami cuma butuh waktu 15 menit buat adaptasi. Dukungan teknis dan update berkala mereka juga sangat responsif.",
      en: "What sets Vetra apart is the clean, unbloated user experience. Our staff needed less than 15 minutes to learn the entire workflow. Technical support and updates have been stellar."
    },
    date: "2026-09-26",
    location: "Tangerang"
  }
];
