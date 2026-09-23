import { Product } from "@/types/database.types";

export interface ExtendedProduct extends Product {
  highlights: string[];
  useCases: string[];
  specs: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
  thumbnail: string;
  screenshots: string[];
}

export const PRODUCTS: ExtendedProduct[] = [
  {
    id: "10000000-0000-4000-8000-000000000001",
    name: "TOKOin-POS",
    slug: "tokoin-pos",
    tagline: "Sistem POS dan manajemen toko retail dalam satu platform.",
    short_description: "Kelola transaksi, stok, produk, pembelian, dan laporan bisnis dengan lebih cepat dan terorganisir. Dilengkapi kasir, barcode/SKU, pembayaran QRIS & tunai, inventory, dashboard penjualan, serta laporan keuangan.",
    description: "TOKOin-POS adalah solusi lengkap all-in-one untuk toko retail modern, minimarket, butik, dan cafe. Mengintegrasikan mesin kasir berkecepatan tinggi, manajemen stok multi-gudang, pemindai barcode/SKU, otomatisasi pembayaran QRIS, serta dashboard analitik penjualan dan laporan laba rugi akurat tanpa ribet.",
    category: "Retail & Commerce",
    status: "PUBLISHED",
    badge: "Bestseller",
    version: "2.1.0",
    demo_url: "#demo",
    thumbnail: "/Tokoin/1.jpg",
    screenshots: [
      "/Tokoin/1.jpg",
      "/Tokoin/2.jpg",
      "/Tokoin/3.jpg",
      "/Tokoin/4.jpg",
      "/Tokoin/5.jpg",
      "/Tokoin/6.jpg",
      "/Tokoin/7.jpg",
      "/Tokoin/8.jpg"
    ],
    created_at: "2026-01-01T00:00:00Z",
    updated_at: "2026-09-22T00:00:00Z",
    highlights: [
      "Sistem kasir cepat & responsif (< 1 detik per transaksi)",
      "Manajemen inventaris, multi-gudang, & peringatan stok menipis otomatis",
      "Mendukung Barcode Scanner, SKU lookup, & printer struk thermal (58mm/80mm)",
      "Pembayaran instan QRIS Dinamis, tunai, kartu debit/kredit, & transfer",
      "Sudah termasuk hosting, domain, deployment, SSL, backup, maintenance, & support 12 bulan"
    ],
    features: [
      {
        id: "f-tokoin-1",
        product_id: "10000000-0000-4000-8000-000000000001",
        title: "Kasir & Transaksi Cepat",
        description: "Antarmuka kasir yang dioptimalkan untuk navigasi cepat via barcode scanner atau layar sentuh, split bill, diskon per item, dan serah terima shift kasir.",
        sort_order: 1
      },
      {
        id: "f-tokoin-2",
        product_id: "10000000-0000-4000-8000-000000000001",
        title: "Manajemen Stok & Inventory",
        description: "Pelacakan pergerakan stok real-time, pencatatan barang masuk dari supplier, penyesuaian stock opname, dan peringatan otomatis jika stok mendekati batas minimum.",
        sort_order: 2
      },
      {
        id: "f-tokoin-3",
        product_id: "10000000-0000-4000-8000-000000000001",
        title: "Pembayaran QRIS & Multi-Metode",
        description: "Cetak QRIS Dinamis langsung pada struk pembayaran belanja, terima tunai dengan kalkulasi kembalian otomatis, kartu debit, dan transfer bank.",
        sort_order: 3
      },
      {
        id: "f-tokoin-4",
        product_id: "10000000-0000-4000-8000-000000000001",
        title: "Dashboard Penjualan & Laporan Keuangan",
        description: "Laporan omzet harian, grafik tren produk terlaris, rekap margin laba kotor/bersih, serta rekapitulasi pembelian barang dagang siap export.",
        sort_order: 4
      }
    ],
    plans: [
      {
        id: "11111111-1111-4111-8111-111111111111",
        product_id: "10000000-0000-4000-8000-000000000001",
        name: "Monthly Subscription",
        type: "SUBSCRIPTION",
        price: 399000,
        currency: "IDR",
        billing_interval: "month",
        features: [
          "Akses penuh seluruh fitur platform TOKOin-POS",
          "Sudah termasuk Cloud Hosting, Custom Domain & SSL Certificate",
          "Otomatisasi Cloud Backup Database harian",
          "Pembaruan fitur & patch keamanan berkala",
          "Dukungan teknis prioritas & Maintenance selama langganan aktif",
          "Bebas dibatalkan kapan saja tanpa denda"
        ],
        is_active: true,
        created_at: "2026-01-01T00:00:00Z",
        updated_at: "2026-09-22T00:00:00Z"
      },
      {
        id: "22222222-2222-4222-8222-222222222222",
        product_id: "10000000-0000-4000-8000-000000000001",
        name: "Lifetime License",
        type: "LIFETIME",
        price: 8900000,
        currency: "IDR",
        billing_interval: null,
        features: [
          "Kepemilikan permanen sistem TOKOin-POS seumur hidup",
          "Sudah termasuk Hosting, Domain, Deployment & SSL Setup",
          "Termasuk Backup rutin, Maintenance & Full Support 12 Bulan pertama",
          "Lisensi resmi aktivasi multi-terminal kasir di toko Anda",
          "Termasuk semua update minor dan bug fixes versi v2.x",
          "Sekali bayar tanpa tagihan bulanan wajib selamanya"
        ],
        is_active: true,
        created_at: "2026-01-01T00:00:00Z",
        updated_at: "2026-09-22T00:00:00Z"
      }
    ],
    useCases: [
      "Toko Retail Pakaian, Butik & Fashion Outlet",
      "Minimarket, Toko Kelontong, & Toko Grosir Sembako",
      "Toko Elektronik, Vape Store, & Toko Sparepart Otomotif",
      "Apotek, Toko Kosmetik, & Toko Alat Tulis / Buku"
    ],
    specs: [
      { label: "Platform & Akses", value: "Web App Cloud & Desktop Native (Windows 10/11, macOS, Tablet)" },
      { label: "Hardware Support", value: "Thermal Printer (58/80mm USB/LAN/Bluetooth), Barcode Scanner USB, Cash Drawer RJ11" },
      { label: "Deployment", value: "Fully Managed Cloud Hosting + Custom Domain & SSL" },
      { label: "Paket Termasuk", value: "Hosting, Domain, Deployment, SSL, Backup, Maintenance & Support 12 Bulan" }
    ],
    faqs: [
      {
        question: "Apakah harga sudah termasuk server hosting dan domain?",
        answer: "Ya, baik paket Monthly (Rp399.000/bln) maupun Lifetime (Rp8.900.000) sudah mencakup setup hosting, domain toko, deployment instalasi, enkripsi SSL, backup otomatis, dan maintenance support."
      },
      {
        question: "Apa keuntungan membeli paket Lifetime License?",
        answer: "Paket Lifetime memungkinkan Anda memiliki software TOKOin-POS secara permanen dengan satu kali pembayaran tanpa tagihan bulanan berulang, serta sudah termasuk full support, hosting, domain, dan maintenance selama 12 bulan pertama."
      },
      {
        question: "Perangkat kasir apa saja yang kompatibel dengan TOKOin-POS?",
        answer: "TOKOin-POS kompatibel dengan scanner barcode USB/wireless, printer struk thermal (58mm dan 80mm via USB, LAN, atau Bluetooth), serta laci kasir (cash drawer) otomatis."
      }
    ]
  },
  {
    id: "20000000-0000-4000-8000-000000000002",
    name: "Brew & Bite",
    slug: "brew-and-bite",
    tagline: "Sistem POS dan manajemen kafe/restoran modern dalam satu platform.",
    short_description: "Brew & Bite membantu menghubungkan kasir, waiter, dan dapur dalam satu alur kerja yang terintegrasi. Kelola pesanan dine-in & takeaway, pantau pesanan dapur secara real-time, kelola stok, shift kasir, hingga laporan penjualan dan keuangan dengan lebih cepat dan terorganisir.",
    description: "Brew & Bite adalah platform manajemen F&B modern yang mengintegrasikan seluruh operasional restoran dan kedai kopi. Dari pemesanan meja oleh waiter via tablet/smartphone, Kitchen Display System (KDS) real-time untuk tim koki/barista, manajemen resep & bahan baku (BOM), split bill per tamu, hingga rekapitulasi shift kasir dan laporan profitabilitas menu.",
    category: "F&B & Restaurant",
    status: "PUBLISHED",
    badge: "Hot Choice",
    version: "2.4.0",
    demo_url: "#demo",
    thumbnail: "/brewbite/3.jpg",
    screenshots: [
      "/brewbite/3.jpg",
      "/brewbite/4.jpg",
      "/brewbite/5.jpg",
      "/brewbite/6.jpg",
      "/brewbite/7.jpg",
      "/brewbite/8.jpg",
      "/brewbite/9.jpg",
      "/brewbite/10.jpg",
      "/brewbite/11.jpg"
    ],
    created_at: "2026-02-01T00:00:00Z",
    updated_at: "2026-09-22T00:00:00Z",
    highlights: [
      "Kitchen Display System (KDS) real-time & integrasi printer checker dapur",
      "Pemesanan meja Dine-in, Takeaway, & sistem reservasi antrean interaktif",
      "Multi-Role Access terisolasi: Kasir, Waiter, Kitchen/Barista, & Owner",
      "Manajemen resep bahan baku (BOM) & peringatan stok expired/menipis",
      "Sudah termasuk hosting, domain, deployment, SSL, database, backup, maintenance, & support 12 bulan"
    ],
    features: [
      {
        id: "f-brew-1",
        product_id: "20000000-0000-4000-8000-000000000002",
        title: "Kitchen Display System (KDS) Real-Time",
        description: "Pesanan dari waiter langsung muncul di layar dapur/barista dalam hitungan milidetik, lengkap dengan indikator waktu tunggu, modifikasi pesanan (less sugar, extra shot), dan status hidangan selesai.",
        sort_order: 1
      },
      {
        id: "f-brew-2",
        product_id: "20000000-0000-4000-8000-000000000002",
        title: "Manajemen Meja, Dine-In & Takeaway",
        description: "Visualisasi denah meja cafe, gabung meja (merge table), pindah meja (transfer table), pesanan bertahap (open bill), dan split bill per kursi atau per pembayaran.",
        sort_order: 2
      },
      {
        id: "f-brew-3",
        product_id: "20000000-0000-4000-8000-000000000002",
        title: "Resep Bahan Baku (Bill of Materials)",
        description: "Setiap cangkir kopi atau menu makanan yang terjual akan secara otomatis memotong stok gramasi biji kopi, susu, sirup, atau bahan mentah di dapur secara akurat.",
        sort_order: 3
      },
      {
        id: "f-brew-4",
        product_id: "20000000-0000-4000-8000-000000000002",
        title: "Laporan Omzet, Shift & Menu Terlaris",
        description: "Rekapitulasi kasir per shift untuk mencegah selisih uang kas, analitik menu paling menghasilkan profit, jam sibuk (peak hours), dan laporan laba kotor harian.",
        sort_order: 4
      }
    ],
    plans: [
      {
        id: "33333333-3333-4333-8333-333333333333",
        product_id: "20000000-0000-4000-8000-000000000002",
        name: "Monthly Subscription",
        type: "SUBSCRIPTION",
        price: 799000,
        currency: "IDR",
        billing_interval: "month",
        features: [
          "Akses penuh seluruh fitur platform Brew & Bite",
          "Sudah termasuk Cloud Hosting, Custom Domain, Dedicated Database & SSL",
          "Otomatisasi Cloud Backup harian",
          "Multi-role user tanpa batasan perangkat waiter & kitchen",
          "Pembaruan fitur & patch keamanan berkala",
          "Dukungan teknis prioritas & Maintenance selama langganan aktif",
          "Bebas dibatalkan kapan saja tanpa denda"
        ],
        is_active: true,
        created_at: "2026-02-01T00:00:00Z",
        updated_at: "2026-09-22T00:00:00Z"
      },
      {
        id: "44444444-4444-4444-8444-444444444444",
        product_id: "20000000-0000-4000-8000-000000000002",
        name: "Lifetime License",
        type: "LIFETIME",
        price: 11900000,
        currency: "IDR",
        billing_interval: null,
        features: [
          "Kepemilikan permanen sistem Brew & Bite seumur hidup",
          "Sudah termasuk Hosting, Domain, Deployment, Database & SSL Setup",
          "Termasuk Backup rutin, Maintenance & Full Support 12 Bulan pertama",
          "Lisensi resmi aktivasi multi-terminal kasir, waiter & KDS dapur",
          "Termasuk semua update minor dan bug fixes versi v2.x",
          "Sekali bayar tanpa tagihan bulanan wajib selamanya"
        ],
        is_active: true,
        created_at: "2026-02-01T00:00:00Z",
        updated_at: "2026-09-22T00:00:00Z"
      }
    ],
    useCases: [
      "Kedai Kopi, Coffee Shop & Roastery",
      "Restoran Casual Dining & Fine Dining",
      "Cafe & Bakery / Pastry Shop",
      "Fast Food Outlet & Food Truck",
      "Bar, Lounge & Bistro"
    ],
    specs: [
      { label: "Platform & Akses", value: "Cloud Web Portal, Tablet Waiter App, KDS Dapur & Desktop Kasir" },
      { label: "Hardware Support", value: "Thermal 58/80mm (USB/LAN/Bluetooth), KDS Tablet/Touchscreen Monitor, Cash Drawer" },
      { label: "Deployment", value: "Fully Managed Cloud Hosting + Custom Domain, Database & SSL" },
      { label: "Paket Termasuk", value: "Hosting, Domain, Deployment, SSL, Database, Backup, Maintenance & Support 12 Bulan" }
    ],
    faqs: [
      {
        question: "Apakah sistem mendukung pemesanan langsung dari meja oleh waiter?",
        answer: "Ya, waiter dapat menggunakan smartphone atau tablet untuk langsung mencatat pesanan tamu di meja, yang secara otomatis terkirim ke KDS dapur dan mesin kasir dalam hitungan detik."
      },
      {
        question: "Apakah harga paket sudah termasuk biaya hosting, database, dan domain?",
        answer: "Ya, baik paket Monthly (Rp799.000/bln) maupun Lifetime (Rp11.900.000) sudah mencakup setup hosting, domain custom, database dedicated, enkripsi SSL, backup harian, dan maintenance support 12 bulan pertama."
      },
      {
        question: "Bagaimana cara kerja Kitchen Display System (KDS)?",
        answer: "KDS menggantikan kertas tiket dapur tradisional dengan layar monitor/tablet interaktif di area dapur atau barista. Tim dapur dapat melihat urutan tiket pesanan masuk, item yang harus dimasak, serta menandai pesanan yang sudah siap saji."
      }
    ]
  },
  {
    id: "30000000-0000-4000-8000-000000000003",
    name: "ModaKita",
    slug: "modakita",
    tagline: "Platform e-commerce fashion untuk menghadirkan pengalaman belanja online yang praktis sekaligus memudahkan pengelolaan toko dari satu dashboard.",
    short_description: "ModaKita menyediakan katalog produk dengan filter dan varian, keranjang belanja, checkout dengan Midtrans, multi-alamat pengiriman, serta riwayat pesanan pelanggan. Dari sisi admin, toko dapat mengelola produk, varian, inventaris, pembayaran, kupon diskon, pesanan, dan artikel blog melalui backoffice terpusat.",
    description: "ModaKita adalah platform e-commerce fashion & apparel terdepan yang dirancang untuk brand clothing, butik online, dan produsen fashion. Menghadirkan storefront belanja yang cepat dan mobile-optimized bagi pembeli, checkout pembayaran otomatis terintegrasi Midtrans (QRIS, VA, Kartu Kredit, E-Wallet), multi-alamat pengiriman dengan integrasi kurir, serta backoffice admin terpusat untuk kontrol stok varian (warna/ukuran), kupon promo, hingga konten blog SEO.",
    category: "E-Commerce & Fashion",
    status: "PUBLISHED",
    badge: "New Release",
    version: "3.0.0",
    demo_url: "#demo",
    thumbnail: "/Modalkita/1.jpg",
    screenshots: [
      "/Modalkita/1.jpg",
      "/Modalkita/2.jpg",
      "/Modalkita/3.jpg",
      "/Modalkita/4.jpg",
      "/Modalkita/5.jpg",
      "/Modalkita/6.jpg",
      "/Modalkita/7.jpg",
      "/Modalkita/8.jpg"
    ],
    created_at: "2026-03-01T00:00:00Z",
    updated_at: "2026-09-22T00:00:00Z",
    highlights: [
      "Storefront modern dengan katalog varian (Warna, Ukuran, Bahan) & Smart Filter",
      "Checkout instan terintegrasi Midtrans resmi (QRIS, VA Bank, Kartu Kredit, E-Wallet)",
      "Multi-alamat pengiriman pelanggan & kalkulasi ongkir ekspedisi otomatis",
      "Backoffice Admin: Kontrol stok varian, pesanan masuk, kupon diskon & modul blog SEO",
      "Sudah termasuk hosting, domain, deployment, SSL, database, backup, maintenance, & support 12 bulan"
    ],
    features: [
      {
        id: "f-moda-1",
        product_id: "30000000-0000-4000-8000-000000000003",
        title: "Katalog Varian Produk & Smart Filter",
        description: "Tampilkan produk fashion dengan foto galeri interaktif, variasi ukuran (S/M/L/XL), swatch warna, panduan ukuran (size chart), dan filter kategori harga yang mulus.",
        sort_order: 1
      },
      {
        id: "f-moda-2",
        product_id: "30000000-0000-4000-8000-000000000003",
        title: "Checkout Midtrans & Multi-Alamat",
        description: "Pelanggan dapat menyimpan beberapa alamat pengiriman rumah/kantor dan menyelesaikan transaksi dengan gateway pembayaran Midtrans Snap otomatis tanpa konfirmasi manual.",
        sort_order: 2
      },
      {
        id: "f-moda-3",
        product_id: "30000000-0000-4000-8000-000000000003",
        title: "Backoffice Admin & Manajemen Stok Terpusat",
        description: "Dashboard terpusat untuk mengelola inventaris stok per varian, update nomor resi pengiriman kurir, ekspor laporan penjualan, dan memantau status pesanan pelanggan.",
        sort_order: 3
      },
      {
        id: "f-moda-4",
        product_id: "30000000-0000-4000-8000-000000000003",
        title: "Engine Kupon Promo & Modul Blog SEO",
        description: "Buat kode voucher diskon persentase atau nominal, minimum pembelian belanja, batas kuota pemakaian, serta publikasikan artikel tren fashion untuk mendongkrak trafik organik Google.",
        sort_order: 4
      }
    ],
    plans: [
      {
        id: "55555555-5555-4555-8555-555555555555",
        product_id: "30000000-0000-4000-8000-000000000003",
        name: "Monthly Subscription",
        type: "SUBSCRIPTION",
        price: 899000,
        currency: "IDR",
        billing_interval: "month",
        features: [
          "Akses penuh seluruh fitur platform e-commerce ModaKita",
          "Sudah termasuk Cloud Server Hosting, Custom Domain & SSL",
          "Dedicated Database terenkripsi dengan Cloud Backup harian",
          "Integrasi Payment Gateway Midtrans & Ekspedisi",
          "Modul Kupon Promo Diskon & CMS Artikel Blog SEO",
          "Dukungan teknis prioritas & Maintenance selama langganan aktif",
          "Bebas dibatalkan kapan saja tanpa denda"
        ],
        is_active: true,
        created_at: "2026-03-01T00:00:00Z",
        updated_at: "2026-09-22T00:00:00Z"
      },
      {
        id: "66666666-6666-4666-8666-666666666666",
        product_id: "30000000-0000-4000-8000-000000000003",
        name: "Lifetime License",
        type: "LIFETIME",
        price: 13900000,
        currency: "IDR",
        billing_interval: null,
        features: [
          "Kepemilikan permanen sistem ModaKita seumur hidup",
          "Sudah termasuk Hosting, Domain, Deployment, Database & SSL Setup",
          "Termasuk Backup rutin, Maintenance & Full Support 12 Bulan pertama",
          "Lisensi resmi kepemilikan platform toko online brand Anda",
          "Termasuk semua update minor dan bug fixes versi v3.x",
          "Sekali bayar tanpa potongan komisi penjualan selamanya"
        ],
        is_active: true,
        created_at: "2026-03-01T00:00:00Z",
        updated_at: "2026-09-22T00:00:00Z"
      }
    ],
    useCases: [
      "Brand Fashion, Clothing Line & Distro Lokal",
      "Butik Muslim / Hijab & Modest Wear",
      "Toko Sepatu, Tas & Aksesoris Fashion",
      "Toko Perhiasan, Kacamata & Jam Tangan",
      "Produsen & Distributor Tekstil / Pakaian Jadi"
    ],
    specs: [
      { label: "Platform & Akses", value: "Responsive Web Storefront (Mobile & Desktop) + Admin Backoffice Dashboard" },
      { label: "Payment Integration", value: "Midtrans Payment Gateway (QRIS, VA Bank, Credit Card, E-Wallet)" },
      { label: "Deployment", value: "Fully Managed Cloud Hosting + Custom Domain, Database & SSL" },
      { label: "Paket Termasuk", value: "Hosting, Domain, Deployment, SSL, Database, Backup, Maintenance & Support 12 Bulan" }
    ],
    faqs: [
      {
        question: "Apakah sistem pembayaran Midtrans sudah terpasang otomatis?",
        answer: "Ya, ModaKita telah dilengkapi modul integrasi Midtrans Snap resmi. Anda hanya perlu memasukkan Server Key dan Client Key Midtrans toko Anda untuk mulai menerima pembayaran otomatis."
      },
      {
        question: "Apakah ModaKita memotong komisi dari setiap transaksi penjualan baju?",
        answer: "Tidak ada potongan komisi dari kami. 100% omzet penjualan masuk langsung ke rekening bank atau akun Midtrans toko Anda sendiri."
      },
      {
        question: "Apakah sudah termasuk biaya domain dan server hosting?",
        answer: "Ya, baik paket Monthly (Rp899.000/bln) maupun Lifetime (Rp13.900.000) sudah mencakup paket komprehensif: hosting, domain custom, deployment instalasi, SSL, database, backup rutin, dan maintenance support selama 12 bulan pertama."
      }
    ]
  },
  {
    id: "40000000-0000-4000-8000-000000000004",
    name: "PadelSpace",
    slug: "padelspace",
    tagline: "Website profesional untuk klub padel yang membantu memperkenalkan fasilitas, lapangan, harga, jadwal, dan layanan kepada calon pemain.",
    short_description: "Website profesional untuk klub padel yang membantu memperkenalkan fasilitas, lapangan, harga, jadwal, dan layanan kepada calon pemain. Dilengkapi menu Home, About, Courts, Facilities, Pricing, Schedule, Events, How It Works, FAQ, Contact, dan CTA Booking.",
    description: "PadelSpace adalah template & solusi website landing page profesional untuk klub dan arena padel modern. Dirancang untuk memaksimalkan konversi calon pemain dengan menampilkan showcase lapangan panoramic, fasilitas club lounge, jadwal main harian, tabel tarif sewa & membership, promo turnamen komunitas, serta integrasi tombol direct booking dan lokasi maps.",
    category: "Sports & Lifestyle",
    status: "PUBLISHED",
    badge: "Landing Page",
    version: "1.2.0",
    demo_url: "#demo",
    thumbnail: "/LPpadel/1.jpg",
    screenshots: [
      "/LPpadel/1.jpg",
      "/LPpadel/2.jpg",
      "/LPpadel/3.jpg",
      "/LPpadel/4.jpg",
      "/LPpadel/5.jpg",
      "/LPpadel/6.jpg",
      "/LPpadel/7.jpg"
    ],
    created_at: "2026-03-15T00:00:00Z",
    updated_at: "2026-09-22T00:00:00Z",
    highlights: [
      "Showcase Lapangan & Fasilitas Klub (Panoramic Court, Locker, Cafe, Pro Shop)",
      "Tabel Harga Sewa Lapangan, Membership & Paket Pelatihan (Coaching)",
      "Jadwal Operasional & Kalender Event / Turnamen Komunitas",
      "Menu Lengkap: Home, About, Courts, Facilities, Pricing, Schedule, Events, How It Works, FAQ, Contact, CTA Booking",
      "Sudah termasuk design UI/UX, responsive development, deployment, domain, hosting, SSL, basic SEO, & maintenance 3 bulan"
    ],
    features: [
      {
        id: "f-padel-1",
        product_id: "40000000-0000-4000-8000-000000000004",
        title: "Showcase Lapangan & Fasilitas Klub",
        description: "Tampilkan keunggulan lapangan padel panoramic standar internasional, penerangan LED malam hari, pro shop perlengkapan raket, cafe lounge, dan area loker.",
        sort_order: 1
      },
      {
        id: "f-padel-2",
        product_id: "40000000-0000-4000-8000-000000000004",
        title: "Tabel Harga, Membership & Paket Coaching",
        description: "Struktur tarif transparan untuk jam reguler, prime time malam, sewa raket & bola, paket kelas coaching private/grup, dan keanggotaan membership.",
        sort_order: 2
      },
      {
        id: "f-padel-3",
        product_id: "40000000-0000-4000-8000-000000000004",
        title: "Jadwal Main, Event & Turnamen Komunitas",
        description: "Kalender jadwal open play, turnamen akhir pekan, coaching clinic, dan promo khusus member yang mudah diperbarui.",
        sort_order: 3
      },
      {
        id: "f-padel-4",
        product_id: "40000000-0000-4000-8000-000000000004",
        title: "CTA Direct Booking & Peta Lokasi",
        description: "Tombol reservasi langsung terintegrasi dengan WhatsApp admin atau sistem booking online klub, lengkap dengan peta interaktif Google Maps.",
        sort_order: 4
      }
    ],
    plans: [
      {
        id: "77777777-7777-4777-8777-777777777777",
        product_id: "40000000-0000-4000-8000-000000000004",
        name: "Complete Website Package",
        type: "LIFETIME",
        price: 4500000,
        currency: "IDR",
        billing_interval: null,
        features: [
          "Website Landing Page Padel Club responsif & modern (Mobile & Desktop)",
          "Desain UI/UX eksklusif disesuaikan dengan identitas brand klub Anda",
          "Semua Menu: Home, About, Courts, Facilities, Pricing, Schedule, Events, FAQ, Contact",
          "Sudah termasuk Custom Domain (.com / .id), Fast Cloud Hosting & SSL Certificate",
          "Optimasi Basic SEO (Google Search Console & Meta Tags)",
          "Deployment siap pakai & Maintenance Support selama 3 Bulan pertama",
          "Sekali bayar tanpa tagihan bulanan wajib selamanya"
        ],
        is_active: true,
        created_at: "2026-03-15T00:00:00Z",
        updated_at: "2026-09-22T00:00:00Z"
      }
    ],
    useCases: [
      "Klub Olahraga Padel & Pusat Arena Raket",
      "Padel Court Rental & Multi-Court Facility",
      "Akademi Padel & Private Coaching Hub",
      "Komunitas Olahraga & Turnamen Padel Lokal",
      "Sport Club & Wellness Center"
    ],
    specs: [
      { label: "Platform & Akses", value: "Modern High-Performance Web (Responsive Mobile, Tablet & Desktop)" },
      { label: "Menu & Modul", value: "Home, About, Courts, Facilities, Pricing, Schedule, Events, How It Works, FAQ, Contact, CTA Booking" },
      { label: "Deployment & Hosting", value: "Custom Domain + Fast Global CDN Cloud Hosting & Free SSL" },
      { label: "Paket Termasuk", value: "Design UI/UX, Responsive Dev, Deployment, Domain, Hosting, SSL, Basic SEO & Maintenance 3 Bulan" }
    ],
    faqs: [
      {
        question: "Apa saja yang sudah termasuk dalam harga Rp4.500.000?",
        answer: "Harga Rp4.500.000 sudah mencakup paket lengkap: design UI/UX, responsive development, domain custom, cloud hosting, enkripsi SSL, optimasi basic SEO, deployment siap pakai, dan maintenance support selama 3 bulan pertama."
      },
      {
        question: "Apakah calon pemain bisa langsung melakukan booking lapangan?",
        answer: "Ya, PadelSpace dilengkapi tombol CTA Booking interaktif yang langsung terhubung ke nomor WhatsApp admin kasir dengan format pesan otomatis, ataupun terhubung ke link booking software eksternal klub Anda."
      },
      {
        question: "Apakah saya bisa mengubah harga, jadwal, dan foto fasilitas di kemudian hari?",
        answer: "Tentu, struktur kode dibuat sangat modular dan mudah diperbarui, atau Anda dapat memanfaatkan masa maintenance 3 bulan untuk bantuan update konten."
      }
    ]
  },
  {
    id: "50000000-0000-4000-8000-000000000005",
    name: "PadelSpace — Booking & Management System",
    slug: "padelspace-system",
    tagline: "Web app untuk mengelola proses booking lapangan padel dari sisi pemain hingga operasional klub dalam satu platform.",
    short_description: "Web app untuk mengelola proses booking lapangan padel dari sisi pemain hingga operasional klub dalam satu platform. Dilengkapi Player Web App, Admin Dashboard, sistem slot jadwal, payment gateway, customer CRM, staff role, dan laporan omzet.",
    description: "PadelSpace — Booking & Management System adalah platform web app end-to-end terintegrasi yang dirancang untuk mengotomasi seluruh operasional klub dan arena padel. Pemain dapat mencari lapangan, memilih jadwal slot jam, melakukan pembayaran online instan, serta memantau riwayat booking dari Player Portal. Sementara tim operasional klub dapat mengontrol ketersediaan court, tarif fleksibel (peak/off-peak), data member, staf kasir, dan analitik pendapatan dari Admin Dashboard.",
    category: "Sports & Booking System",
    status: "PUBLISHED",
    badge: "Pro System",
    version: "2.0.0",
    demo_url: "#demo",
    thumbnail: "/webappspadel/1.1.jpg",
    screenshots: [
      "/webappspadel/1.1.jpg",
      "/webappspadel/1.2.jpg",
      "/webappspadel/1.3.jpg",
      "/webappspadel/1.4.jpg",
      "/webappspadel/1.5.jpg",
      "/webappspadel/1.6.jpg",
      "/webappspadel/1.7.jpg",
      "/webappspadel/1.8.jpg",
      "/webappspadel/1.9.jpg",
      "/webappspadel/2.1.jpg"
    ],
    created_at: "2026-03-20T00:00:00Z",
    updated_at: "2026-09-22T00:00:00Z",
    highlights: [
      "Player Web App: Dashboard, Find Court, Court Detail, Schedule, Booking, Payment, My Bookings & Notifications",
      "Admin Backoffice: Court & Schedule Management, Customer CRM, Pricing, Payment Management, Staff & Reports",
      "Sistem Booking Slot Otomatis & Integrasi Gateway Pembayaran Real-Time",
      "Sudah termasuk UI/UX, Authentication, Deployment, Domain, Hosting, SSL, Database, & Backup",
      "Termasuk Maintenance & Support 6 bulan pertama (Opsi Renewal Rp2.500.000/tahun)"
    ],
    features: [
      {
        id: "f-padelsys-1",
        product_id: "50000000-0000-4000-8000-000000000005",
        title: "Player Web App & Real-Time Booking",
        description: "Pemain dapat mencari lapangan, melihat ketersediaan slot jam harian, menyelesaikan pembayaran instan, dan mengakses e-tiket booking beserta riwayat pemesanan.",
        sort_order: 1
      },
      {
        id: "f-padelsys-2",
        product_id: "50000000-0000-4000-8000-000000000005",
        title: "Admin Dashboard & Court Management",
        description: "Kelola ketersediaan multi-lapangan padel, blokir slot jadwal untuk turnamen atau maintenance berkala, atur kebijakan reschedule, dan pantau utilisasi court.",
        sort_order: 2
      },
      {
        id: "f-padelsys-3",
        product_id: "50000000-0000-4000-8000-000000000005",
        title: "Pricing Rules & Multi-Metode Pembayaran",
        description: "Konfigurasi tarif fleksibel reguler vs prime time malam, sewa perlengkapan raket/bola, paket coaching, serta integrasi gateway pembayaran otomatis (QRIS, VA Bank, Kartu Kredit).",
        sort_order: 3
      },
      {
        id: "f-padelsys-4",
        product_id: "50000000-0000-4000-8000-000000000005",
        title: "Customer CRM, Staff Access & Laporan",
        description: "Database profil member dengan riwayat bermain, hak akses staf terisolasi (Admin, Front Desk, Keuangan), dan rekapitulasi laporan pendapatan siap ekspor.",
        sort_order: 4
      }
    ],
    plans: [
      {
        id: "88888888-8888-4888-8888-888888888888",
        product_id: "50000000-0000-4000-8000-000000000005",
        name: "Full System & Setup License",
        type: "LIFETIME",
        price: 17900000,
        currency: "IDR",
        billing_interval: null,
        features: [
          "Kepemilikan sistem PadelSpace Booking & Management seumur hidup",
          "Akses Player Web App & Admin Backoffice Dashboard tanpa batasan transaksi",
          "Sistem Booking Lapangan & Integrasi Payment Gateway Otomatis",
          "Sudah termasuk UI/UX, Authentication, Deployment, Domain, Hosting & SSL",
          "Dedicated Database dengan otomatisasi Cloud Backup berkala",
          "Termasuk Maintenance & Technical Support intensif selama 6 Bulan pertama",
          "Opsi perpanjangan hosting, domain & maintenance tahun berikutnya Rp2.500.000/tahun"
        ],
        is_active: true,
        created_at: "2026-03-20T00:00:00Z",
        updated_at: "2026-09-22T00:00:00Z"
      },
      {
        id: "99999999-9999-4999-8999-999999999999",
        product_id: "50000000-0000-4000-8000-000000000005",
        name: "Annual Cloud & Support Renewal",
        type: "SUBSCRIPTION",
        price: 2500000,
        currency: "IDR",
        billing_interval: "year",
        features: [
          "Perpanjangan Cloud Hosting performa tinggi & Dedicated Database Cloud",
          "Perpanjangan Custom Domain (.com / .id) & Enkripsi SSL tahunan",
          "Layanan Cloud Backup otomatis database harian",
          "Full Technical Support & Bug Fix Maintenance selama 1 tahun ke depan",
          "Update patch keamanan sistem & kestabilan infrastruktur server"
        ],
        is_active: true,
        created_at: "2026-03-20T00:00:00Z",
        updated_at: "2026-09-22T00:00:00Z"
      }
    ],
    useCases: [
      "Klub Padel Komersial & Multi-Court Padel Arena",
      "Arena Olahraga Raket Terpadu (Padel, Tenis, Badminton, Pickleball)",
      "Klub Olahraga Berlangganan & Community Sport Hub",
      "Resort, Hotel & Sport Complex dengan Fasilitas Lapangan Padel"
    ],
    specs: [
      { label: "Platform & Modul", value: "Player Web App (Mobile/Desktop) + Admin Management Backoffice" },
      { label: "Menu Player", value: "Dashboard, Find Court, Court Detail, Schedule, Booking, Payment, My Bookings, History, Profile, Notifications" },
      { label: "Menu Admin", value: "Dashboard, Booking Management, Court Management, Schedule, Customer Management, Pricing, Payments, Reports, Staff, Settings" },
      { label: "Paket Termasuk", value: "UI/UX, Player App, Admin Dashboard, Payment Gateway, Auth, Domain, Hosting, SSL, Database, Backup & Support 6 Bulan" },
      { label: "Renewal Tahunan", value: "Rp2.500.000/tahun (Hosting, Domain, Database, Backup, Maintenance & Support)" }
    ],
    faqs: [
      {
        question: "Apa perbedaan PadelSpace Landing Page dengan PadelSpace Booking & Management System?",
        answer: "PadelSpace Landing Page (Rp4.500.000) adalah website profil klub untuk branding dan informasi fasilitas dengan CTA booking WhatsApp/link. Sedangkan PadelSpace Booking & Management System (Rp17.900.000) adalah aplikasi web lengkap interaktif di mana pemain bisa langsung memilih slot jadwal, membayar secara online instan, serta admin dapat mengelola jadwal court, member, staf, dan laporan omzet secara otomatis."
      },
      {
        question: "Bagaimana ketentuan biaya renewal Rp2.500.000/tahun?",
        answer: "Biaya renewal Rp2.500.000/tahun mulai berlaku setelah 6 bulan pertama paket sistem awal berakhir. Renewal ini mencakup biaya perpanjangan domain, server cloud hosting, database, backup cloud harian, update keamanan berkala, dan maintenance support teknis selama satu tahun ke depan."
      },
      {
        question: "Apakah payment gateway pembayaran pemain langsung masuk ke rekening pengelola klub?",
        answer: "Ya, integrasi payment gateway terhubung langsung ke akun payment gateway (seperti Midtrans/Xendit) atas nama klub Anda sendiri. 100% dana masuk ke rekening Anda tanpa potongan komisi platform dari kami."
      }
    ]
  }
];

export function getProductBySlug(slug: string): ExtendedProduct | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getAllProducts(): ExtendedProduct[] {
  return PRODUCTS;
}
