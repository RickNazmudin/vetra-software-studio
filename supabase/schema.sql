-- ==============================================================================
-- VETRA SOFTWARE STUDIO — DATABASE SCHEMA (SUPABASE POSTGRESQL DDL)
-- ==============================================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. ENUM TYPES
DO $$ BEGIN
    CREATE TYPE user_role AS ENUM ('CUSTOMER', 'ADMIN');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE product_status AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE plan_type AS ENUM ('SUBSCRIPTION', 'LIFETIME');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE order_status AS ENUM ('PENDING', 'PAID', 'FAILED', 'CANCELLED', 'EXPIRED', 'REFUNDED');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE payment_status AS ENUM ('PENDING', 'PAID', 'FAILED', 'EXPIRED');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE subscription_status AS ENUM ('ACTIVE', 'PAST_DUE', 'CANCELLED', 'EXPIRED');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE license_status AS ENUM ('ACTIVE', 'SUSPENDED', 'REVOKED', 'EXPIRED');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- 3. PROFILES TABLE (Linked to auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    full_name TEXT,
    role user_role NOT NULL DEFAULT 'CUSTOMER',
    avatar_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Trigger to auto-create profile on Supabase auth signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, full_name, role)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
        'CUSTOMER'
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 4. PRODUCTS TABLE
CREATE TABLE IF NOT EXISTS public.products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    tagline TEXT NOT NULL,
    short_description TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'Software',
    status product_status NOT NULL DEFAULT 'PUBLISHED',
    badge TEXT,
    version TEXT DEFAULT '1.0.0',
    demo_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 5. PRODUCT IMAGES
CREATE TABLE IF NOT EXISTS public.product_images (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
    image_url TEXT NOT NULL,
    caption TEXT,
    sort_order INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 6. PRODUCT FEATURES
CREATE TABLE IF NOT EXISTS public.product_features (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    sort_order INT NOT NULL DEFAULT 0
);

-- 7. PLANS TABLE
CREATE TABLE IF NOT EXISTS public.plans (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    type plan_type NOT NULL,
    price BIGINT NOT NULL, -- in IDR (integer)
    currency TEXT NOT NULL DEFAULT 'IDR',
    billing_interval TEXT, -- 'month', 'year', or NULL for lifetime
    features JSONB NOT NULL DEFAULT '[]'::jsonb,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 8. ORDERS TABLE
CREATE TABLE IF NOT EXISTS public.orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_number TEXT NOT NULL UNIQUE,
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE RESTRICT,
    status order_status NOT NULL DEFAULT 'PENDING',
    subtotal BIGINT NOT NULL,
    discount BIGINT NOT NULL DEFAULT 0,
    total BIGINT NOT NULL,
    currency TEXT NOT NULL DEFAULT 'IDR',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 9. ORDER ITEMS
CREATE TABLE IF NOT EXISTS public.order_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID NOT NULL REFERENCES public.orders(id) ON DELETE CASCADE,
    product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE RESTRICT,
    plan_id UUID NOT NULL REFERENCES public.plans(id) ON DELETE RESTRICT,
    price BIGINT NOT NULL
);

-- 10. PAYMENTS TABLE
CREATE TABLE IF NOT EXISTS public.payments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID NOT NULL REFERENCES public.orders(id) ON DELETE CASCADE,
    provider TEXT NOT NULL,
    provider_transaction_id TEXT,
    payment_method TEXT,
    amount BIGINT NOT NULL,
    status payment_status NOT NULL DEFAULT 'PENDING',
    paid_at TIMESTAMPTZ,
    raw_reference JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 11. SUBSCRIPTIONS TABLE
CREATE TABLE IF NOT EXISTS public.subscriptions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE RESTRICT,
    plan_id UUID NOT NULL REFERENCES public.plans(id) ON DELETE RESTRICT,
    provider_subscription_id TEXT,
    status subscription_status NOT NULL DEFAULT 'ACTIVE',
    started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    current_period_start TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    current_period_end TIMESTAMPTZ NOT NULL,
    cancelled_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 12. LICENSES TABLE
CREATE TABLE IF NOT EXISTS public.licenses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE RESTRICT,
    order_id UUID NOT NULL REFERENCES public.orders(id) ON DELETE CASCADE,
    license_key TEXT NOT NULL UNIQUE,
    type plan_type NOT NULL DEFAULT 'LIFETIME',
    status license_status NOT NULL DEFAULT 'ACTIVE',
    activated_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 13. RELEASES TABLE
CREATE TABLE IF NOT EXISTS public.releases (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
    version TEXT NOT NULL,
    release_date DATE NOT NULL DEFAULT CURRENT_DATE,
    platform TEXT NOT NULL, -- e.g. 'Windows x64', 'macOS Universal', 'Linux'
    file_url TEXT NOT NULL,
    file_size TEXT,
    checksum TEXT,
    release_notes TEXT NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 14. DOWNLOADS LOG (AUDIT)
CREATE TABLE IF NOT EXISTS public.downloads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    release_id UUID NOT NULL REFERENCES public.releases(id) ON DELETE CASCADE,
    downloaded_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    ip_address TEXT,
    user_agent TEXT
);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_features ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.licenses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.releases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.downloads ENABLE ROW LEVEL SECURITY;

-- Helper function to check if user is admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid() AND role = 'ADMIN'
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Profiles: Users can view & edit their own profile; Admin can view all
CREATE POLICY "Users can read own profile" ON public.profiles
    FOR SELECT USING (auth.uid() = id OR public.is_admin());

CREATE POLICY "Users can update own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id OR public.is_admin());

-- Products & Plans: Everyone can read published; Admin can manage
CREATE POLICY "Public can view published products" ON public.products
    FOR SELECT USING (status = 'PUBLISHED' OR public.is_admin());

CREATE POLICY "Admin can manage products" ON public.products
    FOR ALL USING (public.is_admin());

CREATE POLICY "Public can view active plans" ON public.plans
    FOR SELECT USING (is_active = true OR public.is_admin());

CREATE POLICY "Admin can manage plans" ON public.plans
    FOR ALL USING (public.is_admin());

CREATE POLICY "Public can view product images" ON public.product_images
    FOR SELECT USING (true);

CREATE POLICY "Admin can manage product images" ON public.product_images
    FOR ALL USING (public.is_admin());

CREATE POLICY "Public can view product features" ON public.product_features
    FOR SELECT USING (true);

CREATE POLICY "Admin can manage product features" ON public.product_features
    FOR ALL USING (public.is_admin());

-- Orders & Order Items: User can view own orders; Admin can manage
CREATE POLICY "Users can read own orders" ON public.orders
    FOR SELECT USING (auth.uid() = user_id OR public.is_admin());

CREATE POLICY "Users can insert own orders" ON public.orders
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admin can manage all orders" ON public.orders
    FOR ALL USING (public.is_admin());

CREATE POLICY "Users can read own order items" ON public.order_items
    FOR SELECT USING (
        EXISTS (SELECT 1 FROM public.orders WHERE orders.id = order_items.order_id AND orders.user_id = auth.uid())
        OR public.is_admin()
    );

CREATE POLICY "Users can insert order items" ON public.order_items
    FOR INSERT WITH CHECK (
        EXISTS (SELECT 1 FROM public.orders WHERE orders.id = order_items.order_id AND orders.user_id = auth.uid())
    );

-- Payments: User can view own payments
CREATE POLICY "Users can read own payments" ON public.payments
    FOR SELECT USING (
        EXISTS (SELECT 1 FROM public.orders WHERE orders.id = payments.order_id AND orders.user_id = auth.uid())
        OR public.is_admin()
    );

-- Subscriptions: User can view own subscriptions
CREATE POLICY "Users can read own subscriptions" ON public.subscriptions
    FOR SELECT USING (auth.uid() = user_id OR public.is_admin());

-- Licenses: User can view own licenses
CREATE POLICY "Users can read own licenses" ON public.licenses
    FOR SELECT USING (auth.uid() = user_id OR public.is_admin());

-- Releases: Customer with valid active license or subscription can view releases
CREATE POLICY "Entitled users and public active releases" ON public.releases
    FOR SELECT USING (is_active = true OR public.is_admin());

CREATE POLICY "Admin can manage releases" ON public.releases
    FOR ALL USING (public.is_admin());

CREATE POLICY "Users can insert own downloads" ON public.downloads
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own downloads" ON public.downloads
    FOR SELECT USING (auth.uid() = user_id OR public.is_admin());

-- ==============================================================================
-- INITIAL SEED DATA (SAMPLE PRODUCTS FOR VETRA SOFTWARE STUDIO)
-- ==============================================================================

INSERT INTO public.products (id, name, slug, tagline, short_description, description, category, status, badge, version)
VALUES
(
    '10000000-0000-4000-8000-000000000001',
    'TOKOin-POS',
    'tokoin-pos',
    'Sistem POS dan manajemen toko retail dalam satu platform.',
    'Kelola transaksi, stok, produk, pembelian, dan laporan bisnis dengan lebih cepat dan terorganisir. Dilengkapi kasir, barcode/SKU, pembayaran QRIS & tunai, inventory, dashboard penjualan, serta laporan keuangan.',
    'TOKOin-POS adalah solusi lengkap all-in-one untuk toko retail modern, minimarket, butik, dan cafe. Mengintegrasikan mesin kasir berkecepatan tinggi, manajemen stok multi-gudang, pemindai barcode/SKU, otomatisasi pembayaran QRIS, serta dashboard analitik penjualan dan laporan laba rugi akurat tanpa ribet.',
    'Retail & Commerce',
    'PUBLISHED',
    'Bestseller',
    '2.1.0'
),
(
    '20000000-0000-4000-8000-000000000002',
    'Brew & Bite',
    'brew-and-bite',
    'Sistem POS dan manajemen kafe/restoran modern dalam satu platform.',
    'Brew & Bite membantu menghubungkan kasir, waiter, dan dapur dalam satu alur kerja yang terintegrasi. Kelola pesanan dine-in & takeaway, pantau pesanan dapur secara real-time, kelola stok, shift kasir, hingga laporan penjualan dan keuangan dengan lebih cepat dan terorganisir.',
    'Brew & Bite adalah platform manajemen F&B modern yang mengintegrasikan seluruh operasional restoran dan kedai kopi. Dari pemesanan meja oleh waiter via tablet/smartphone, Kitchen Display System (KDS) real-time untuk tim koki/barista, manajemen resep & bahan baku (BOM), split bill per tamu, hingga rekapitulasi shift kasir dan laporan profitabilitas menu.',
    'F&B & Restaurant',
    'PUBLISHED',
    'Hot Choice',
    '2.4.0'
),
(
    '30000000-0000-4000-8000-000000000003',
    'ModaKita',
    'modakita',
    'Platform e-commerce fashion untuk menghadirkan pengalaman belanja online yang praktis sekaligus memudahkan pengelolaan toko dari satu dashboard.',
    'ModaKita menyediakan katalog produk dengan filter dan varian, keranjang belanja, checkout dengan Midtrans, multi-alamat pengiriman, serta riwayat pesanan pelanggan. Dari sisi admin, toko dapat mengelola produk, varian, inventaris, pembayaran, kupon diskon, pesanan, dan artikel blog melalui backoffice terpusat.',
    'ModaKita adalah platform e-commerce fashion & apparel terdepan yang dirancang untuk brand clothing, butik online, dan produsen fashion. Menghadirkan storefront belanja yang cepat dan mobile-optimized bagi pembeli, checkout pembayaran otomatis terintegrasi Midtrans (QRIS, VA, Kartu Kredit, E-Wallet), multi-alamat pengiriman dengan integrasi kurir, serta backoffice admin terpusat untuk kontrol stok varian (warna/ukuran), kupon promo, hingga konten blog SEO.',
    'E-Commerce & Fashion',
    'PUBLISHED',
    'New Release',
    '3.0.0'
),
(
    '40000000-0000-4000-8000-000000000004',
    'PadelSpace',
    'padelspace',
    'Website profesional untuk klub padel yang membantu memperkenalkan fasilitas, lapangan, harga, jadwal, dan layanan kepada calon pemain.',
    'Website profesional untuk klub padel yang membantu memperkenalkan fasilitas, lapangan, harga, jadwal, dan layanan kepada calon pemain. Dilengkapi menu Home, About, Courts, Facilities, Pricing, Schedule, Events, How It Works, FAQ, Contact, dan CTA Booking.',
    'PadelSpace adalah template & solusi website landing page profesional untuk klub dan arena padel modern. Dirancang untuk memaksimalkan konversi calon pemain dengan menampilkan showcase lapangan panoramic, fasilitas club lounge, jadwal main harian, tabel tarif sewa & membership, promo turnamen komunitas, serta integrasi tombol direct booking dan lokasi maps.',
    'Sports & Lifestyle',
    'PUBLISHED',
    'Landing Page',
    '1.2.0'
),
(
    '50000000-0000-4000-8000-000000000005',
    'PadelSpace — Booking & Management System',
    'padelspace-system',
    'Web app untuk mengelola proses booking lapangan padel dari sisi pemain hingga operasional klub dalam satu platform.',
    'Web app untuk mengelola proses booking lapangan padel dari sisi pemain hingga operasional klub dalam satu platform. Dilengkapi Player Web App, Admin Dashboard, sistem slot jadwal, payment gateway, customer CRM, staff role, dan laporan omzet.',
    'PadelSpace — Booking & Management System adalah platform web app end-to-end terintegrasi yang dirancang untuk mengotomasi seluruh operasional klub dan arena padel. Pemain dapat mencari lapangan, memilih jadwal slot jam, melakukan pembayaran online instan, serta memantau riwayat booking dari Player Portal. Sementara tim operasional klub dapat mengontrol ketersediaan court, tarif fleksibel, data member, staf kasir, dan analitik pendapatan dari Admin Dashboard.',
    'Sports & Booking System',
    'PUBLISHED',
    'Pro System',
    '2.0.0'
)
ON CONFLICT (slug) DO UPDATE SET
    name = EXCLUDED.name,
    tagline = EXCLUDED.tagline,
    short_description = EXCLUDED.short_description,
    description = EXCLUDED.description;

-- Seed Plans for TOKOin-POS, Brew & Bite, ModaKita, PadelSpace Landing & PadelSpace System
INSERT INTO public.plans (id, product_id, name, type, price, currency, billing_interval, features, is_active)
VALUES
(
    '11111111-1111-4111-8111-111111111111',
    '10000000-0000-4000-8000-000000000001',
    'Monthly Subscription',
    'SUBSCRIPTION',
    399000,
    'IDR',
    'month',
    '["Akses penuh seluruh fitur platform TOKOin-POS", "Sudah termasuk Cloud Hosting, Custom Domain & SSL Certificate", "Otomatisasi Cloud Backup Database harian", "Pembaruan fitur & patch keamanan berkala", "Dukungan teknis prioritas & Maintenance", "Bebas dibatalkan kapan saja tanpa denda"]'::jsonb,
    true
),
(
    '22222222-2222-4222-8222-222222222222',
    '10000000-0000-4000-8000-000000000001',
    'Lifetime License',
    'LIFETIME',
    8900000,
    'IDR',
    NULL,
    '["Kepemilikan permanen sistem TOKOin-POS seumur hidup", "Sudah termasuk Hosting, Domain, Deployment & SSL Setup", "Termasuk Backup rutin, Maintenance & Full Support 12 Bulan pertama", "Lisensi resmi aktivasi multi-terminal kasir di toko Anda", "Termasuk semua update minor dan bug fixes versi v2.x", "Sekali bayar tanpa tagihan bulanan wajib selamanya"]'::jsonb,
    true
),
(
    '33333333-3333-4333-8333-333333333333',
    '20000000-0000-4000-8000-000000000002',
    'Monthly Subscription',
    'SUBSCRIPTION',
    799000,
    'IDR',
    'month',
    '["Akses penuh seluruh fitur platform Brew & Bite", "Sudah termasuk Cloud Hosting, Custom Domain, Dedicated Database & SSL", "Otomatisasi Cloud Backup harian", "Multi-role user tanpa batasan perangkat waiter & kitchen", "Pembaruan fitur & patch keamanan berkala", "Dukungan teknis prioritas & Maintenance selama langganan aktif", "Bebas dibatalkan kapan saja tanpa denda"]'::jsonb,
    true
),
(
    '44444444-4444-4444-8444-444444444444',
    '20000000-0000-4000-8000-000000000002',
    'Lifetime License',
    'LIFETIME',
    11900000,
    'IDR',
    NULL,
    '["Kepemilikan permanen sistem Brew & Bite seumur hidup", "Sudah termasuk Hosting, Domain, Deployment, Database & SSL Setup", "Termasuk Backup rutin, Maintenance & Full Support 12 Bulan pertama", "Lisensi resmi aktivasi multi-terminal kasir, waiter & KDS dapur", "Termasuk semua update minor dan bug fixes versi v2.x", "Sekali bayar tanpa tagihan bulanan wajib selamanya"]'::jsonb,
    true
),
(
    '55555555-5555-4555-8555-555555555555',
    '30000000-0000-4000-8000-000000000003',
    'Monthly Subscription',
    'SUBSCRIPTION',
    899000,
    'IDR',
    'month',
    '["Akses penuh seluruh fitur platform e-commerce ModaKita", "Sudah termasuk Cloud Server Hosting, Custom Domain & SSL", "Dedicated Database terenkripsi dengan Cloud Backup harian", "Integrasi Payment Gateway Midtrans & Ekspedisi", "Modul Kupon Promo Diskon & CMS Artikel Blog SEO", "Dukungan teknis prioritas & Maintenance selama langganan aktif", "Bebas dibatalkan kapan saja tanpa denda"]'::jsonb,
    true
),
(
    '66666666-6666-4666-8666-666666666666',
    '30000000-0000-4000-8000-000000000003',
    'Lifetime License',
    'LIFETIME',
    13900000,
    'IDR',
    NULL,
    '["Kepemilikan permanen sistem ModaKita seumur hidup", "Sudah termasuk Hosting, Domain, Deployment, Database & SSL Setup", "Termasuk Backup rutin, Maintenance & Full Support 12 Bulan pertama", "Lisensi resmi kepemilikan platform toko online brand Anda", "Termasuk semua update minor dan bug fixes versi v3.x", "Sekali bayar tanpa potongan komisi penjualan selamanya"]'::jsonb,
    true
),
(
    '77777777-7777-4777-8777-777777777777',
    '40000000-0000-4000-8000-000000000004',
    'Complete Landing Page Package',
    'LIFETIME',
    4500000,
    'IDR',
    NULL,
    '["Website Landing Page Padel Club responsif & modern (Mobile & Desktop)", "Desain UI/UX eksklusif disesuaikan dengan identitas brand klub Anda", "Semua Menu: Home, About, Courts, Facilities, Pricing, Schedule, Events, FAQ, Contact", "Sudah termasuk Custom Domain (.com / .id), Fast Cloud Hosting & SSL Certificate", "Optimasi Basic SEO (Google Search Console & Meta Tags)", "Deployment siap pakai & Maintenance Support selama 3 Bulan pertama", "Sekali bayar tanpa tagihan bulanan wajib selamanya"]'::jsonb,
    true
),
(
    '88888888-8888-4888-8888-888888888888',
    '50000000-0000-4000-8000-000000000005',
    'Full System & Setup License',
    'LIFETIME',
    17900000,
    'IDR',
    NULL,
    '["Kepemilikan sistem PadelSpace Booking & Management seumur hidup", "Akses Player Web App & Admin Backoffice Dashboard tanpa batasan transaksi", "Sistem Booking Lapangan & Integrasi Payment Gateway Otomatis", "Sudah termasuk UI/UX, Authentication, Deployment, Domain, Hosting & SSL", "Dedicated Database dengan otomatisasi Cloud Backup berkala", "Termasuk Maintenance & Technical Support intensif selama 6 Bulan pertama", "Opsi perpanjangan hosting, domain & maintenance tahun berikutnya Rp2.500.000/tahun"]'::jsonb,
    true
),
(
    '99999999-9999-4999-8999-999999999999',
    '50000000-0000-4000-8000-000000000005',
    'Annual Cloud & Support Renewal',
    'SUBSCRIPTION',
    2500000,
    'IDR',
    'year',
    '["Perpanjangan Cloud Hosting performa tinggi & Dedicated Database Cloud", "Perpanjangan Custom Domain (.com / .id) & Enkripsi SSL tahunan", "Layanan Cloud Backup otomatis database harian", "Full Technical Support & Bug Fix Maintenance selama 1 tahun ke depan", "Update patch keamanan sistem & kestabilan infrastruktur server"]'::jsonb,
    true
)
ON CONFLICT (id) DO NOTHING;

-- Seed Features
INSERT INTO public.product_features (product_id, title, description, sort_order)
VALUES
('10000000-0000-4000-8000-000000000001', 'Kasir & Transaksi Cepat', 'Antarmuka kasir yang dioptimalkan untuk navigasi cepat via barcode scanner atau layar sentuh, split bill, diskon per item, dan serah terima shift kasir.', 1),
('10000000-0000-4000-8000-000000000001', 'Manajemen Stok & Inventory', 'Pelacakan pergerakan stok real-time, pencatatan barang masuk dari supplier, penyesuaian stock opname, dan peringatan otomatis jika stok mendekati batas minimum.', 2),
('10000000-0000-4000-8000-000000000001', 'Pembayaran QRIS & Multi-Metode', 'Cetak QRIS Dinamis langsung pada struk pembayaran belanja, terima tunai dengan kalkulasi kembalian otomatis, kartu debit, dan transfer bank.', 3),
('10000000-0000-4000-8000-000000000001', 'Dashboard Penjualan & Laporan Keuangan', 'Laporan omzet harian, grafik tren produk terlaris, rekap margin laba kotor/bersih, serta rekapitulasi pembelian barang dagang siap export.', 4),
('20000000-0000-4000-8000-000000000002', 'Kitchen Display System (KDS) Real-Time', 'Pesanan dari waiter langsung muncul di layar dapur/barista dalam hitungan milidetik dengan indikator waktu tunggu.', 1),
('20000000-0000-4000-8000-000000000002', 'Manajemen Meja, Dine-In & Takeaway', 'Visualisasi denah meja cafe, gabung meja, pindah meja, pesanan bertahap (open bill), dan split bill per tamu.', 2),
('20000000-0000-4000-8000-000000000002', 'Resep Bahan Baku (Bill of Materials)', 'Setiap menu terjual otomatis memotong stok gramasi bahan baku di dapur secara akurat.', 3),
('20000000-0000-4000-8000-000000000002', 'Laporan Omzet, Shift & Menu Terlaris', 'Rekapitulasi kasir per shift anti-selisih, analitik profitabilitas menu, jam sibuk, dan laporan laba kotor harian.', 4),
('30000000-0000-4000-8000-000000000003', 'Katalog Varian Produk & Smart Filter', 'Tampilkan produk fashion dengan foto galeri interaktif, variasi ukuran (S/M/L/XL), swatch warna, dan filter kategori harga yang mulus.', 1),
('30000000-0000-4000-8000-000000000003', 'Checkout Midtrans & Multi-Alamat', 'Pelanggan dapat menyimpan beberapa alamat pengiriman dan menyelesaikan transaksi dengan gateway pembayaran Midtrans Snap otomatis.', 2),
('30000000-0000-4000-8000-000000000003', 'Backoffice Admin & Manajemen Stok Terpusat', 'Dashboard terpusat untuk mengelola inventaris stok per varian, update nomor resi kurir, dan memantau status pesanan pelanggan.', 3),
('30000000-0000-4000-8000-000000000003', 'Engine Kupon Promo & Modul Blog SEO', 'Buat kode voucher diskon belanja serta publikasikan artikel tren fashion untuk mendongkrak trafik organik Google.', 4),
('40000000-0000-4000-8000-000000000004', 'Showcase Lapangan & Fasilitas Klub', 'Tampilkan keunggulan lapangan padel panoramic standar internasional, penerangan LED malam hari, pro shop perlengkapan raket, cafe lounge, dan area loker.', 1),
('40000000-0000-4000-8000-000000000004', 'Tabel Harga, Membership & Paket Coaching', 'Struktur tarif transparan untuk jam reguler, prime time malam, sewa raket & bola, paket kelas coaching private/grup, dan keanggotaan membership.', 2),
('40000000-0000-4000-8000-000000000004', 'Jadwal Main, Event & Turnamen Komunitas', 'Kalender jadwal open play, turnamen akhir pekan, coaching clinic, dan promo khusus member yang mudah diperbarui.', 3),
('40000000-0000-4000-8000-000000000004', 'CTA Direct Booking & Peta Lokasi', 'Tombol reservasi langsung terintegrasi dengan WhatsApp admin atau sistem booking online klub, lengkap dengan peta interaktif Google Maps.', 4),
('50000000-0000-4000-8000-000000000005', 'Player Web App & Real-Time Booking', 'Pemain dapat mencari lapangan, melihat ketersediaan slot jam harian, menyelesaikan pembayaran instan, dan mengakses e-tiket booking beserta riwayat pemesanan.', 1),
('50000000-0000-4000-8000-000000000005', 'Admin Dashboard & Court Management', 'Kelola ketersediaan multi-lapangan padel, blokir slot jadwal untuk turnamen atau maintenance berkala, atur kebijakan reschedule, dan pantau utilisasi court.', 2),
('50000000-0000-4000-8000-000000000005', 'Pricing Rules & Multi-Metode Pembayaran', 'Konfigurasi tarif fleksibel reguler vs prime time malam, sewa perlengkapan raket/bola, paket coaching, serta integrasi gateway pembayaran otomatis.', 3),
('50000000-0000-4000-8000-000000000005', 'Customer CRM, Staff Access & Laporan', 'Database profil member dengan riwayat bermain, hak akses staf terisolasi (Admin, Front Desk, Keuangan), dan rekapitulasi laporan pendapatan siap ekspor.', 4);

