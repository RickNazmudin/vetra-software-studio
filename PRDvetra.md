# PRODUCT REQUIREMENTS DOCUMENT (PRD)

## Software Store & Product Platform — V1

**Status:** Draft / Development Ready
**Version:** 1.0
**Platform:** Web Application
**Target:** Public Web + Customer Dashboard + Admin Dashboard

---

# 1. Product Overview

## 1.1 Product Name

**Working Name:** Software Studio Platform

> Nama final brand belum ditentukan dan dapat diganti sebelum development production.

Platform ini merupakan website resmi untuk menampilkan dan menjual software yang dibuat oleh software developer/studio.

Platform memungkinkan pengunjung:

* melihat software yang tersedia
* memahami fungsi dan manfaat setiap software
* melihat screenshot/demo
* melihat pricing
* memilih paket Monthly atau Lifetime
* membuat akun
* melakukan pembayaran
* melihat pembelian
* mengelola subscription
* mendapatkan license
* mengunduh software atau mengakses software yang dibeli

Pemilik platform dapat:

* menambahkan software
* mengatur pricing
* mengelola orders
* melihat customer
* mengelola subscription
* mengelola license
* mengunggah software/release
* melihat transaksi
* mengelola konten produk

---

# 2. Product Vision

Membangun sebuah platform software yang terasa seperti **website produk software profesional**, bukan marketplace generik dan bukan template landing page yang terlihat dibuat oleh AI.

Website harus:

* cepat
* sederhana
* jelas
* profesional
* mudah dipercaya
* mudah digunakan
* scalable
* memiliki identitas visual yang kuat
* fokus terhadap produk

Prinsip utama:

> **Show the product, explain the value, remove friction.**

---

# 3. Problem Statement

Saat developer membuat beberapa software, biasanya informasi produknya tersebar:

* portfolio
* GitHub
* landing page berbeda
* link payment berbeda
* file download manual
* komunikasi customer melalui chat
* license dikelola manual

Hal tersebut menyulitkan developer ketika jumlah produk dan customer bertambah.

Platform ini menyatukan:

```text
Product Showcase
        +
Pricing
        +
Payment
        +
Customer Account
        +
Subscription
        +
License
        +
Software Download
        +
Admin Management
```

dalam satu sistem.

---

# 4. Goals

## 4.1 Primary Goals

V1 harus memungkinkan:

1. Pengunjung melihat seluruh software.
2. Pengunjung melihat detail software.
3. Pengunjung melihat pricing.
4. Customer dapat membeli software.
5. Customer dapat memilih Monthly atau Lifetime.
6. Sistem dapat memproses pembayaran.
7. Sistem menerima payment webhook.
8. Sistem membuat order.
9. Sistem membuat subscription untuk paket Monthly.
10. Sistem membuat license untuk paket Lifetime.
11. Customer dapat melihat pembelian.
12. Customer dapat mengunduh software jika tersedia.
13. Admin dapat mengelola produk.
14. Admin dapat melihat transaksi.
15. Admin dapat mengelola license.
16. Admin dapat mengelola release software.

---

# 5. Non-Goals V1

Fitur berikut tidak menjadi prioritas V1:

* affiliate system
* referral system
* marketplace multi-vendor
* mobile application
* advanced analytics
* AI recommendation
* chat support
* community forum
* team collaboration
* reseller system
* automated tax system
* complex CRM
* multi-currency
* international payment
* advanced coupon engine

Fitur tersebut dapat masuk V2/V3.

---

# 6. Target Users

## 6.1 Visitor

Orang yang mengunjungi website untuk mengetahui software yang tersedia.

Kebutuhan:

* memahami produk dengan cepat
* melihat screenshot
* mengetahui harga
* mengetahui fitur
* mengetahui siapa yang cocok menggunakan software
* merasa yakin sebelum membeli

---

## 6.2 Customer

User yang telah membeli software.

Kebutuhan:

* melihat produk yang dimiliki
* melihat license
* download software
* melihat payment history
* melihat subscription
* mengelola billing
* melihat update/release

---

## 6.3 Admin

Pemilik software/platform.

Kebutuhan:

* mengelola produk
* mengelola harga
* melihat customer
* mengelola order
* melihat payment
* mengelola subscription
* mengelola license
* mengelola software release

---

# 7. Business Model

Platform mendukung dua model pembelian.

## 7.1 Monthly Subscription

Customer membayar secara berkala.

Contoh:

```text
POS Pro

Rp79.000 / month
```

Subscription memiliki status:

```text
ACTIVE
PAST_DUE
CANCELLED
EXPIRED
```

---

## 7.2 Lifetime License

Customer membayar satu kali.

Contoh:

```text
POS Pro Lifetime

Rp1.499.000
One-time payment
```

Setelah pembayaran berhasil:

```text
Order
   ↓
PAID
   ↓
License Generated
   ↓
License ACTIVE
```

---

# 8. Lifetime Definition

V1 harus mendefinisikan dengan jelas arti Lifetime.

Rekomendasi:

**Lifetime License = hak menggunakan versi produk yang termasuk dalam license tanpa batas waktu.**

Namun entitlement terhadap major update harus dapat dikonfigurasi.

Contoh:

```text
Lifetime License
├── Current version access
├── Bug fixes
├── Minor updates
└── Major updates
```

Admin dapat menentukan kebijakan update di kemudian hari.

Hal ini penting agar "Lifetime" tidak otomatis berarti:

> semua fitur baru selamanya tanpa batas.

---

# 9. Product Structure

Setiap software memiliki:

```text
Product
├── Basic Information
├── Description
├── Screenshots
├── Features
├── Use Cases
├── Requirements
├── Pricing
├── Releases
├── FAQ
└── Status
```

Contoh:

```text
POS Pro

Description:
Point of sale software for small businesses.

Plans:
Monthly
Lifetime

Features:
- Product management
- Sales
- Inventory
- Reports

Latest Version:
1.2.0
```

---

# 10. Sitemap

## Public Website

```text
/
├── /products
│   ├── /products/[slug]
│
├── /pricing
├── /about
├── /login
├── /register
├── /forgot-password
├── /checkout/[product]
├── /terms
├── /privacy
└── /refund-policy
```

## Customer

```text
/dashboard
├── overview
├── products
├── purchases
├── licenses
├── downloads
├── subscriptions
├── billing
└── account
```

## Admin

```text
/admin
├── overview
├── products
├── plans
├── orders
├── payments
├── customers
├── subscriptions
├── licenses
├── releases
└── settings
```

---

# 11. Public Homepage

Homepage harus menjawab tiga pertanyaan dengan cepat:

1. Apa yang dibuat?
2. Untuk siapa?
3. Produk apa yang tersedia?

## Hero

Struktur:

```text
[Small Label]

Software built for real businesses.

Simple, focused software
designed to solve everyday problems.

[ Explore software ]
```

Tidak menggunakan headline generik seperti:

> Revolutionizing the future with AI-powered innovation.

---

# 12. Homepage Sections

Urutan:

```text
Hero
↓
Selected Products
↓
Why These Products Exist
↓
Product Showcase
↓
How It Works
↓
About / Studio
↓
FAQ
↓
Final CTA
↓
Footer
```

---

# 13. Product Catalog

Halaman:

```text
/products
```

Menampilkan seluruh software.

Setiap product item minimal mempunyai:

* name
* short description
* category
* screenshot
* starting price
* availability
* CTA

Contoh:

```text
POS Pro

Point of sale software
for small businesses.

From Rp79.000/month

View product →
```

---

# 14. Product Detail Page

Halaman:

```text
/products/[slug]
```

Struktur:

```text
Product Header
↓
Main Screenshot
↓
Product Description
↓
Core Features
↓
Use Cases
↓
Product Preview
↓
Requirements
↓
Pricing
↓
FAQ
↓
CTA
```

---

# 15. Product Header

Contoh:

```text
POS PRO

Point of sale software
for small businesses.

Manage sales, products and inventory
from one simple workspace.

[ Start using POS Pro ]
```

Informasi:

* product name
* category
* short description
* CTA
* pricing hint
* current version jika relevan

---

# 16. Product Screenshots

Screenshot harus menjadi elemen visual utama.

Prioritas:

1. actual software screenshot
2. actual UI
3. product workflow
4. short demo/video jika tersedia

Hindari stock photography yang tidak berhubungan dengan produk.

---

# 17. Features

Fitur ditampilkan berdasarkan manfaat dan fungsi.

Contoh:

```text
Sales

Create and manage transactions
without unnecessary steps.

Inventory

Keep track of stock and product
availability.

Reports

Understand your sales with
simple reports.
```

Jangan membuat fitur hanya sebagai:

```text
✓ Fast
✓ Secure
✓ Powerful
✓ Modern
✓ AI-powered
```

tanpa penjelasan konkret.

---

# 18. Pricing

Pricing harus mendukung dua pilihan.

```text
Choose your plan

MONTHLY
Rp79.000 / month

Flexible monthly access.

[ Start monthly ]


LIFETIME
Rp1.499.000

One-time payment.

[ Buy lifetime ]
```

Pricing harus menjelaskan perbedaan kedua plan.

---

# 19. Pricing Comparison

Jika fitur berbeda:

| Feature           | Monthly | Lifetime |
| ----------------- | ------- | -------- |
| Software access   | ✓       | ✓        |
| Updates           | ✓       | ✓*       |
| Support           | ✓       | ✓*       |
| Cloud features    | ✓       | ✓        |
| Recurring payment | ✓       | —        |
| One-time payment  | —       | ✓        |

`*` tergantung kebijakan produk.

---

# 20. Authentication

Authentication menggunakan:

* email/password
* email verification
* password reset

Social login tidak wajib untuk V1.

Flow:

```text
Register
↓
Verify Email
↓
Login
↓
Dashboard
```

---

# 21. Checkout

Checkout harus sederhana.

Flow:

```text
Product
↓
Choose Plan
↓
Login/Register
↓
Order Summary
↓
Payment
↓
Payment Gateway
↓
Success
```

Checkout menampilkan:

```text
Product
Plan
Price
Discount
Total
Payment method
Terms
```

---

# 22. Order System

Setiap transaksi memiliki:

```text
Order Number
Customer
Product
Plan
Amount
Payment Status
Created At
```

Contoh:

```text
Order #ORD-20260922-001

POS Pro
Lifetime

Total:
Rp1.499.000

Status:
PAID
```

---

# 23. Payment System

Payment gateway harus menggunakan provider yang mendukung kebutuhan Indonesia.

Contoh provider:

* Midtrans
* Xendit
* provider lain yang sesuai kebutuhan

Payment methods dapat mencakup:

* QRIS
* Virtual Account
* E-wallet
* Card
* metode lain yang disediakan provider

---

# 24. Payment Confirmation

Payment tidak dianggap berhasil hanya karena user kembali ke website.

Sistem menggunakan:

**Webhook Payment Gateway**

Flow:

```text
Customer
↓
Payment Gateway
↓
Payment successful
↓
Webhook
↓
Backend verification
↓
Update payment
↓
Update order
↓
Create entitlement
```

---

# 25. Order Status

```text
PENDING
PAID
FAILED
CANCELLED
EXPIRED
REFUNDED
```

Perubahan status harus tercatat.

---

# 26. Subscription System

Untuk Monthly:

```text
Subscription
├── user_id
├── product_id
├── plan_id
├── status
├── started_at
├── current_period_start
├── current_period_end
├── cancelled_at
└── gateway_subscription_id
```

---

# 27. Subscription Flow

```text
Customer
↓
Choose Monthly
↓
Payment
↓
Subscription ACTIVE
↓
Access software
↓
Renewal
↓
Payment successful
↓
New billing period
```

Jika gagal:

```text
Payment Failed
↓
PAST_DUE
↓
Retry / Grace Period
↓
Payment successful
    └── ACTIVE

Payment remains failed
    └── EXPIRED / CANCELLED
```

Status final harus mengikuti kemampuan payment gateway.

---

# 28. Subscription Cancellation

Customer dapat melakukan:

```text
Cancel Subscription
```

Sistem harus menjelaskan:

> Cancellation does not necessarily remove access immediately. Access remains available until the current billing period ends.

Aturan final harus ditentukan berdasarkan business policy.

---

# 29. Lifetime License

Setelah pembayaran Lifetime berhasil:

```text
Generate License
```

Contoh:

```text
License
POS-PRO-XXXX-XXXX-XXXX
```

License memiliki:

```text
id
license_key
user_id
product_id
order_id
type
status
created_at
activated_at
```

---

# 30. License Status

```text
ACTIVE
SUSPENDED
REVOKED
EXPIRED
```

Untuk lifetime normal:

```text
ACTIVE
```

tidak memiliki expiry date kecuali kebijakan produk menentukan sebaliknya.

---

# 31. License Validation

Jika software membutuhkan license validation, aplikasi dapat memanggil API:

```text
POST /api/licenses/validate
```

Request:

```json
{
  "license_key": "POS-PRO-XXXX-XXXX"
}
```

Response:

```json
{
  "valid": true,
  "product": "POS Pro",
  "status": "ACTIVE"
}
```

---

# 32. Download System

Customer yang memiliki entitlement dapat melihat:

```text
Downloads

POS Pro v1.4.0

Windows
[ Download ]

Release Notes
```

File software disimpan di private storage.

Download sebaiknya menggunakan:

**temporary signed URL**

bukan public permanent URL.

---

# 33. Software Release

Admin dapat membuat release:

```text
Version
Release date
Platform
File
Release notes
Minimum requirements
```

Contoh:

```text
POS Pro v1.4.0

Released:
22 September 2026

Changes:
- Improved inventory
- Fixed checkout issue
- Improved printing
```

---

# 34. Customer Dashboard

Dashboard harus berorientasi pada tindakan.

Homepage dashboard:

```text
Your Software

POS Pro
Lifetime
Active

[ Open ] [ Download ]

────────────────────

Recent activity

Purchased POS Pro
22 Sep 2026

────────────────────

Account
```

Tidak perlu memenuhi dashboard dengan grafik jika tidak membantu customer.

---

# 35. Customer — My Products

Menampilkan software yang dimiliki.

```text
My Products

POS Pro
Lifetime

Status: Active

[ View ]

PadelSpace
Monthly

Status: Active

[ Open ]
```

---

# 36. Customer — Purchases

Menampilkan:

```text
Order
Product
Plan
Amount
Status
Date
Invoice
```

Customer dapat membuka detail transaksi.

---

# 37. Customer — Subscriptions

Untuk monthly:

```text
POS Pro

Monthly
Rp79.000/month

Status:
Active

Next billing:
22 Oct 2026

[ Manage subscription ]
[ Cancel subscription ]
```

---

# 38. Customer — Licenses

```text
POS Pro

License:
POS-PRO-XXXX-XXXX

Status:
Active

Purchased:
22 Sep 2026

Type:
Lifetime
```

---

# 39. Admin Dashboard

Admin dashboard:

```text
Overview

Revenue
Orders
Customers
Active subscriptions
Active licenses
Products
```

Statistik hanya ditampilkan jika berguna untuk keputusan.

---

# 40. Admin — Products

Admin dapat:

* create product
* edit product
* publish/unpublish product
* upload screenshots
* edit description
* edit features
* edit FAQ
* manage plans

Product status:

```text
DRAFT
PUBLISHED
ARCHIVED
```

---

# 41. Admin — Plans

Admin dapat membuat:

```text
Monthly
Lifetime
```

Setiap plan memiliki:

```text
name
type
price
billing interval
features
active
```

---

# 42. Admin — Orders

Admin dapat:

* melihat order
* search order
* filter status
* membuka detail order
* melihat payment
* melihat customer
* melihat product

---

# 43. Admin — Customers

Admin dapat melihat:

```text
Customer
Email
Products
Orders
Subscriptions
Licenses
Created date
```

Admin tidak boleh memiliki akses ke password customer.

---

# 44. Admin — Licenses

Admin dapat:

* melihat license
* search license
* suspend
* revoke
* reactivate jika business rules mengizinkan

Contoh:

```text
License
POS-PRO-XXXX

Customer
customer@email.com

Product
POS Pro

Type
Lifetime

Status
Active
```

---

# 45. Admin — Releases

Admin dapat:

```text
Create release
Upload file
Set version
Write release notes
Publish release
Archive release
```

---

# 46. Database Architecture

Database utama:

**PostgreSQL melalui Supabase**

Core tables:

```text
users
profiles
products
product_images
product_features
plans
orders
order_items
payments
subscriptions
licenses
releases
downloads
```

---

# 47. Relational Structure

```text
users
 │
 ├── orders
 │      │
 │      └── order_items
 │              │
 │              └── products
 │
 ├── subscriptions
 │              │
 │              └── plans
 │
 └── licenses
                │
                └── products
```

---

# 48. Recommended Database Entities

## products

```text
id
name
slug
short_description
description
status
category
created_at
updated_at
```

## plans

```text
id
product_id
name
type
price
currency
billing_interval
active
created_at
updated_at
```

`type`:

```text
SUBSCRIPTION
LIFETIME
```

---

## orders

```text
id
order_number
user_id
status
subtotal
discount
total
currency
created_at
updated_at
```

---

## payments

```text
id
order_id
provider
provider_transaction_id
amount
status
paid_at
raw_reference
created_at
updated_at
```

---

## subscriptions

```text
id
user_id
plan_id
provider_subscription_id
status
started_at
current_period_start
current_period_end
cancelled_at
created_at
updated_at
```

---

## licenses

```text
id
user_id
product_id
order_id
license_key
type
status
activated_at
created_at
updated_at
```

---

# 49. Security

Security merupakan requirement wajib.

## Authentication

* secure password hashing melalui auth provider
* email verification
* password reset
* session management

## Authorization

User hanya dapat melihat resource miliknya.

Contoh:

```text
Customer A
```

tidak boleh membaca:

```text
Customer B orders
Customer B licenses
Customer B downloads
```

---

# 50. Supabase Row Level Security

RLS harus diterapkan pada tabel customer-sensitive.

Contoh:

```text
users
orders
order_items
payments
subscriptions
licenses
downloads
```

Admin menggunakan role khusus.

---

# 51. Payment Security

Jangan mempercayai:

```text
price
total
payment status
```

yang dikirim dari client.

Server harus mengambil harga dari database.

Contoh:

```text
Client:
"I want to buy product X for Rp1.000"

Server:
"Database says product price is Rp1.499.000"

Server creates payment:
Rp1.499.000
```

---

# 52. Webhook Security

Webhook harus:

* diverifikasi
* idempotent
* mencatat event
* tidak memproses transaksi yang sama dua kali

Contoh:

```text
Webhook received
↓
Check signature
↓
Check transaction ID
↓
Check whether already processed
↓
Process payment
```

---

# 53. Idempotency

Jika payment gateway mengirim webhook dua kali:

```text
Webhook #1 → process
Webhook #2 → ignore duplicate
```

Order tidak boleh menjadi:

```text
PAID
PAID
PAID
```

dengan tiga license berbeda.

---

# 54. UI/UX Direction

## Design Principle

UI harus terasa:

**intentional, restrained, product-first.**

Bukan:

**generic AI SaaS template.**

---

# 55. Anti AI-Slop Rules

Dilarang menjadikan pola berikut sebagai default:

* gradient ungu/biru di seluruh halaman
* glassmorphism berlebihan
* floating blobs
* excessive rounded cards
* excessive shadows
* random glow effects
* terlalu banyak animated elements
* gradient text tanpa alasan
* stock image manusia tersenyum
* 3-card feature grid di setiap section
* badge "AI-powered" tanpa fungsi
* headline bombastis
* terlalu banyak whitespace yang tidak memiliki tujuan
* animasi hanya untuk terlihat keren

---

# 56. Visual Direction

Arah visual:

```text
Editorial
+
Product UI
+
Minimal
+
Technical
+
Confident
```

Website harus terasa seperti:

> sebuah software studio yang serius membuat produk.

Bukan:

> template startup yang baru dibuat AI.

---

# 57. Typography

Gunakan satu primary font family.

Pilihan:

```text
Geist
Inter
IBM Plex Sans
```

Maksimal dua family jika memang diperlukan.

Hierarchy:

```text
Display
H1
H2
H3
Body
Caption
```

Typography harus menjadi elemen utama untuk membangun karakter visual.

---

# 58. Color System

Gunakan palet terbatas.

Contoh:

```text
Background
Foreground
Muted
Border
Primary
Danger
Success
Warning
```

Tidak perlu menggunakan 10 warna brand.

Produk harus tetap menjadi fokus.

---

# 59. Layout

Gunakan grid dan alignment yang konsisten.

Desktop:

```text
max-width
12-column grid
```

Mobile:

```text
4-column conceptual grid
```

Spacing menggunakan scale konsisten.

---

# 60. Border Radius

Gunakan radius secara terkontrol.

Contoh:

```text
Buttons       → small/medium
Inputs        → small/medium
Cards         → medium
Large panels  → medium
```

Tidak semua elemen harus memiliki radius 24px.

---

# 61. Animation

Animation hanya digunakan jika memiliki tujuan.

Contoh:

* page transition
* hover feedback
* loading state
* modal transition
* payment status
* navigation

Durasi harus singkat.

Hindari:

* perpetual floating
* excessive parallax
* random bouncing
* animation pada setiap element saat scroll

---

# 62. Responsive Design

Website wajib mendukung:

```text
Mobile
Tablet
Desktop
Large Desktop
```

Prioritas:

```text
Mobile usability
+
Desktop product showcase
```

Checkout harus sangat nyaman di mobile.

---

# 63. Accessibility

Target:

**WCAG 2.1 AA**

Minimal:

* semantic HTML
* keyboard navigation
* visible focus
* sufficient contrast
* alt text
* labels untuk form
* error messages yang jelas
* accessible modal
* screen-reader-friendly structure

---

# 64. SEO

Public pages harus SEO-friendly.

Setiap product memiliki:

```text
title
description
slug
canonical URL
Open Graph image
structured metadata
```

Contoh:

```text
/products/pos-pro
```

bukan:

```text
/products?id=123
```

---

# 65. Performance

Target:

* fast initial load
* optimized images
* lazy loading
* minimal client-side JavaScript
* server rendering jika sesuai
* caching untuk public product pages

Next.js digunakan untuk memanfaatkan:

* Server Components
* static rendering
* dynamic rendering jika diperlukan
* image optimization

---

# 66. Recommended Technology Stack

## Frontend

```text
Next.js
TypeScript
Tailwind CSS
shadcn/ui
```

## Backend / BaaS

```text
Supabase
```

## Database

```text
PostgreSQL
```

## Authentication

```text
Supabase Auth
```

## Storage

```text
Supabase Storage
```

## Payment

```text
Midtrans / Xendit
```

## Hosting

```text
Vercel
```

## Repository

```text
GitHub
```

---

# 67. Project Architecture

Recommended:

```text
app/
├── (marketing)/
│   ├── page.tsx
│   ├── products/
│   ├── pricing/
│   └── about/
│
├── (auth)/
│   ├── login/
│   ├── register/
│   └── forgot-password/
│
├── checkout/
│
├── dashboard/
│   ├── page.tsx
│   ├── products/
│   ├── purchases/
│   ├── licenses/
│   ├── subscriptions/
│   └── account/
│
├── admin/
│   ├── page.tsx
│   ├── products/
│   ├── orders/
│   ├── customers/
│   ├── licenses/
│   └── releases/
│
└── api/
    ├── checkout/
    ├── webhook/
    ├── licenses/
    └── downloads/
```

---

# 68. API Requirements

Minimal API:

```text
POST /api/checkout
POST /api/payment/webhook

GET /api/products
GET /api/products/:slug

GET /api/orders
GET /api/orders/:id

GET /api/licenses
POST /api/licenses/validate

GET /api/downloads/:releaseId
```

---

# 69. Checkout Security Flow

Client:

```text
Select plan
```

Server:

```text
Validate product
Validate plan
Get price from database
Create order
Create payment
Return payment information
```

Tidak boleh:

```text
Client → server
price = 1000
```

lalu server mempercayainya.

---

# 70. Customer Purchase Flow

```text
Visitor
 ↓
Product page
 ↓
Choose Monthly / Lifetime
 ↓
Login/Register
 ↓
Checkout
 ↓
Payment
 ↓
Webhook
 ↓
Order PAID
 ↓
Entitlement created
 ↓
Dashboard updated
```

---

# 71. Monthly Purchase Result

```text
Order PAID
        ↓
Subscription CREATED
        ↓
Customer gets access
```

---

# 72. Lifetime Purchase Result

```text
Order PAID
        ↓
License CREATED
        ↓
Customer gets access
```

---

# 73. Error Handling

System harus memiliki state untuk:

```text
Loading
Empty
Success
Error
Unauthorized
Forbidden
Not Found
Payment Failed
Payment Pending
Subscription Expired
License Revoked
```

Tidak boleh hanya menampilkan:

> Something went wrong.

Gunakan error message yang menjelaskan tindakan berikutnya.

---

# 74. Checkout Error Example

Jika payment gagal:

```text
Payment wasn't completed.

Your order has not been charged.

[ Try again ]
[ Back to product ]
```

---

# 75. Empty States

Contoh:

```text
You haven't purchased any software yet.

Explore the products and find something
that fits your workflow.

[ Explore software ]
```

Empty state harus membantu user melakukan tindakan berikutnya.

---

# 76. Admin Permissions

V1 cukup:

```text
ADMIN
CUSTOMER
```

Customer tidak dapat mengakses:

```text
/admin
```

Admin dapat mengakses seluruh administrative resources.

---

# 77. Auditability

Untuk aktivitas penting, sistem sebaiknya menyimpan event.

Contoh:

```text
Payment received
Subscription cancelled
License created
License revoked
Product published
Release uploaded
```

Ini membantu debugging dan keamanan.

---

# 78. Email Notifications

V1 minimal:

### Account

* email verification
* password reset

### Purchase

* payment successful
* purchase confirmation

### Subscription

* subscription activated
* renewal reminder jika diperlukan
* payment failed
* subscription cancelled

### License

* license created

---

# 79. Legal Pages

Website minimal memiliki:

```text
Terms of Service
Privacy Policy
Refund Policy
```

Kebijakan harus disesuaikan dengan model bisnis sebenarnya sebelum production.

---

# 80. Analytics

V1 dapat menggunakan analytics sederhana untuk mengetahui:

```text
Page views
Product views
CTA clicks
Checkout started
Checkout completed
```

Jangan mengumpulkan data yang tidak diperlukan.

---

# 81. Core Metrics

Metric bisnis:

```text
Product views
Checkout conversion
Successful payments
Monthly active subscriptions
Lifetime purchases
Monthly recurring revenue
Revenue
Refunds
Churn
```

Namun dashboard analytics advanced bukan prioritas V1.

---

# 82. Product Conversion Funnel

Sistem nantinya dapat mengukur:

```text
Visitors
   ↓
Product Views
   ↓
Pricing Views
   ↓
Checkout
   ↓
Payment
   ↓
Successful Purchase
```

---

# 83. Testing Requirements

## Unit Testing

Test:

* pricing calculation
* order calculation
* subscription status
* license generation
* license validation

## Integration Testing

Test:

* checkout
* payment webhook
* subscription creation
* lifetime license creation

## E2E Testing

Flow utama:

```text
Register
→ Login
→ Product
→ Choose plan
→ Checkout
→ Payment
→ Dashboard
```

---

# 84. Critical Test Cases

### Lifetime

```text
Payment success
→ Order PAID
→ License created
→ Download available
```

### Monthly

```text
Payment success
→ Order PAID
→ Subscription ACTIVE
→ Access available
```

### Failed Payment

```text
Payment failed
→ Order not PAID
→ No entitlement
```

### Duplicate Webhook

```text
Webhook #1
→ Process

Webhook #2
→ Ignore duplicate
```

### Unauthorized Access

```text
User A
→ tries accessing User B license
→ 403 / not found
```

---

# 85. MVP Definition

V1 dianggap selesai jika user dapat:

```text
1. Visit website
2. Browse software
3. Open product detail
4. Choose Monthly/Lifetime
5. Register/Login
6. Checkout
7. Pay
8. Payment verified
9. Receive entitlement
10. Open dashboard
11. View purchase
12. View license/subscription
13. Download software
```

Dan admin dapat:

```text
1. Login
2. Create product
3. Create plans
4. Publish product
5. View orders
6. View payments
7. View customers
8. View licenses
9. Manage subscriptions
10. Upload releases
```

---

# 86. V1 Development Phases

## Phase 1 — Foundation

```text
Project setup
GitHub
Next.js
TypeScript
Tailwind
Supabase
Environment variables
```

---

## Phase 2 — Design System

```text
Typography
Colors
Spacing
Buttons
Inputs
Navigation
Cards
Modal
Toast
Pricing component
Product components
```

---

## Phase 3 — Marketing Website

```text
Homepage
Product catalog
Product detail
Pricing
About
FAQ
Footer
```

---

## Phase 4 — Authentication

```text
Register
Login
Logout
Email verification
Forgot password
Protected routes
```

---

## Phase 5 — Product & Database

```text
Products
Plans
Features
Images
Releases
```

---

## Phase 6 — Checkout

```text
Plan selection
Order creation
Order summary
Payment integration
```

---

## Phase 7 — Webhook

```text
Payment webhook
Verification
Idempotency
Order status
```

---

## Phase 8 — Entitlement

Monthly:

```text
Subscription
```

Lifetime:

```text
License
```

---

## Phase 9 — Customer Dashboard

```text
Overview
Products
Purchases
Licenses
Subscriptions
Downloads
Account
```

---

## Phase 10 — Admin

```text
Dashboard
Products
Plans
Orders
Customers
Payments
Licenses
Releases
```

---

## Phase 11 — Testing

```text
Unit
Integration
E2E
Security
Responsive
Payment
```

---

## Phase 12 — Deployment

```text
GitHub
↓
Vercel
↓
Supabase Production
↓
Payment Gateway Production
↓
Domain
↓
Monitoring
```

---

# 87. V1 Feature Priority

## P0 — Must Have

```text
Product catalog
Product detail
Monthly plan
Lifetime plan
Authentication
Checkout
Payment gateway
Webhook
Orders
Subscription
License
Customer dashboard
Admin dashboard
Download
```

## P1 — Important

```text
Email notifications
Release management
Invoice/order details
FAQ
Analytics basic
```

## P2 — Future

```text
Coupons
Affiliate
Referral
Reviews
Advanced analytics
Teams
Multi-currency
Mobile app
API access
```

---

# 88. Definition of Done

Feature dianggap selesai apabila:

* UI responsive
* loading state tersedia
* error state tersedia
* authorization benar
* database rule benar
* security check dilakukan
* happy path berhasil
* failure path diuji
* tidak ada hardcoded secret
* production environment terpisah dari development
* dokumentasi tersedia

---

# 89. Environment

Development:

```text
localhost
Supabase development
Payment sandbox
```

Production:

```text
domain.com
Supabase production
Payment production
Vercel production
```

Environment variables:

```text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY

PAYMENT_SECRET_KEY
PAYMENT_WEBHOOK_SECRET
```

Secret tidak boleh masuk GitHub.

---

# 90. Deployment Architecture

```text
                     GitHub
                        │
                        ▼
                      Vercel
                        │
                ┌───────┴────────┐
                │                │
             Next.js          API
                │                │
                └───────┬────────┘
                        │
                     Supabase
                ┌───────┼────────┐
                │       │        │
              Auth   Database  Storage
                        │
                        │
                        ▼
                 Payment Gateway
                        │
                        ▼
                    Webhook
                        │
                        ▼
                    Supabase
```

---

# 91. UX Principles

Setiap halaman harus menjawab:

### What?

Apa yang sedang dilihat user?

### Why?

Mengapa hal tersebut penting?

### What next?

Apa tindakan berikutnya?

Jika sebuah section tidak membantu salah satu dari tiga hal tersebut, pertimbangkan untuk menghapusnya.

---

# 92. UX Rule untuk Pricing

User tidak boleh bertanya:

> "Saya harus membeli yang mana?"

Setiap plan harus memiliki positioning yang jelas.

Contoh:

```text
MONTHLY

For flexibility.

LIFETIME

For permanent ownership.
```

Perbedaan harus dijelaskan dengan bahasa sederhana.

---

# 93. UX Rule untuk Checkout

Semakin dekat user ke pembayaran:

**semakin sedikit distraksi.**

Checkout tidak perlu:

* navbar besar
* animasi
* banyak link
* promotional section
* artikel
* footer kompleks

Fokus:

```text
Product
Plan
Price
Payment
Trust
```

---

# 94. UX Rule untuk Dashboard

Dashboard bukan tempat memamerkan semua data.

Dashboard harus menjawab:

> "Apa yang bisa saya lakukan dengan software yang saya beli?"

Maka prioritas:

```text
My software
Access
Download
License
Subscription
Billing
```

---

# 95. UX Rule untuk Admin

Admin dashboard fokus pada pekerjaan:

```text
Manage
Review
Publish
Monitor
```

Bukan sekadar membuat dashboard dengan banyak chart.

---

# 96. Brand Personality

Brand harus terasa:

```text
Calm
Technical
Confident
Practical
Human
Focused
```

Bukan:

```text
Hype
Over-promising
Corporate
AI-generated
```

---

# 97. Future Expansion

Arsitektur V1 harus memungkinkan:

```text
V1
Software Store
     ↓
V2
Subscription Platform
     ↓
V3
SaaS Platform
     ↓
V4
Software Studio Ecosystem
```

Nantinya satu customer dapat memiliki beberapa produk:

```text
Customer
│
├── POS Pro
│   └── Lifetime
│
├── PadelSpace
│   └── Monthly
│
└── Future Product
    └── Monthly
```

---

# 98. Final Product Flow

Keseluruhan sistem:

```text
                    VISITOR
                       │
                       ▼
                    HOMEPAGE
                       │
                       ▼
                PRODUCT CATALOG
                       │
                       ▼
                PRODUCT DETAIL
                       │
                       ▼
                CHOOSE PLAN
                  /          \
                 /            \
           MONTHLY          LIFETIME
              │                 │
              ▼                 ▼
        SUBSCRIPTION         ONE-TIME
              │                 │
              └────────┬────────┘
                       ▼
                    CHECKOUT
                       │
                       ▼
                PAYMENT GATEWAY
                       │
                       ▼
                    WEBHOOK
                       │
                       ▼
                 PAYMENT VERIFIED
                       │
                ┌──────┴──────┐
                │             │
           SUBSCRIPTION     LICENSE
                │             │
                └──────┬──────┘
                       ▼
                CUSTOMER DASHBOARD
                       │
              ┌────────┼────────┐
              │        │        │
           ACCESS   DOWNLOAD   BILLING
```

---

# 99. Final Technology Decision

Untuk V1:

```text
Frontend
Next.js + TypeScript

UI
Tailwind CSS + shadcn/ui

Backend
Supabase

Database
PostgreSQL

Authentication
Supabase Auth

Storage
Supabase Storage

Payment
Midtrans / Xendit

Hosting
Vercel

Repository
GitHub
```

---

# 100. Final V1 Product Definition

Produk V1 bukan sekadar:

> "website untuk memajang software."

Produk V1 adalah:

> **Software commerce platform milik developer/studio yang memungkinkan pengunjung menemukan software, membeli melalui Monthly atau Lifetime plan, melakukan pembayaran, dan mengelola software yang mereka miliki melalui customer dashboard.**

Dengan tiga sistem inti:

```text
PUBLIC PRODUCT EXPERIENCE
          +
COMMERCE / PAYMENT
          +
CUSTOMER ENTITLEMENT
```

Dan dua jenis entitlement:

```text
MONTHLY
→ Subscription

LIFETIME
→ License
```

Prioritas desain:

```text
Product first
+
Typography
+
Clear hierarchy
+
Real screenshots
+
Restrained motion
+
Consistent design system
```

Bukan:

```text
Gradient
+
Glassmorphism
+
Random animation
+
Huge rounded cards
+
AI-generated visual
```

---

# 101. Recommended Next Step

Setelah PRD ini, urutan pengerjaan yang paling masuk akal adalah:

```text
PRD
 ↓
Database Schema
 ↓
Information Architecture
 ↓
User Flow
 ↓
UI/UX Wireframe
 ↓
Design System
 ↓
High Fidelity UI
 ↓
Technical Architecture
 ↓
Task Breakdown
 ↓
Development
```

**Jangan langsung coding sebelum Database Schema + User Flow + Design System ditentukan.**

Dokumen PRD ini menjadi sumber utama untuk development V1.
