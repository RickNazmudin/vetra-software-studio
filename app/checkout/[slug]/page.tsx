"use client";

import * as React from "react";
import Link from "next/link";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import {
  ShieldCheck,
  QrCode,
  CreditCard,
  Building2,
  CheckCircle2,
  ArrowRight,
  Copy,
  Check,
  Loader2,
  Lock,
  ArrowLeft,
  Key,
  RefreshCw,
  Sparkles,
  Zap,
} from "lucide-react";
import confetti from "canvas-confetti";
import { getProductBySlug } from "@/lib/products-data";
import { formatIDR } from "@/lib/utils";
import { VetraLogo } from "@/components/logo";
import { useLanguage } from "@/context/language-context";

function CheckoutContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { t, lang } = useLanguage();

  const slug = params.slug as string;
  const planQuery = searchParams.get("plan") || searchParams.get("planId") || searchParams.get("planType");

  const product = getProductBySlug(slug);

  // Auto-detect plan from URL query param (e.g. ?plan=lifetime or ?plan=subscription or ?planId=...)
  const initialPlanId = React.useMemo(() => {
    if (!product?.plans || product.plans.length === 0) return "";
    if (planQuery) {
      const byType = product.plans.find((p) => p.type.toLowerCase() === planQuery.toLowerCase());
      if (byType) return byType.id;

      const byId = product.plans.find((p) => p.id.toLowerCase() === planQuery.toLowerCase());
      if (byId) return byId.id;

      const byName = product.plans.find((p) => p.name.toLowerCase() === planQuery.toLowerCase());
      if (byName) return byName.id;
    }
    return product.plans[0].id;
  }, [product, planQuery]);

  const [selectedPlanId, setSelectedPlanId] = React.useState<string>(initialPlanId);

  // Sync if initialPlanId changes
  React.useEffect(() => {
    if (initialPlanId) {
      setSelectedPlanId(initialPlanId);
    }
  }, [initialPlanId]);

  const selectedPlan = product?.plans?.find((p) => p.id === selectedPlanId) || product?.plans?.[0];

  const [customerEmail, setCustomerEmail] = React.useState("");
  const [customerName, setCustomerName] = React.useState("");
  const [paymentMethod, setPaymentMethod] = React.useState<"QRIS" | "VA" | "CARD">("QRIS");
  
  const [stage, setStage] = React.useState<"FORM" | "PAYING" | "SUCCESS">("FORM");
  const [loading, setLoading] = React.useState(false);
  const [orderData, setOrderData] = React.useState<{
    orderNumber: string;
    licenseKey: string;
    amount: number;
  } | null>(null);
  const [copiedKey, setCopiedKey] = React.useState(false);

  if (!product || !selectedPlan) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F4F5F6] text-[#12141A] p-6 font-mono">
        <div className="text-center space-y-4 max-w-md border border-[var(--line)] bg-white p-8">
          <span className="mi text-[#FF6B6B]">404 // NOT FOUND</span>
          <h2 className="text-2xl font-bold uppercase tracking-tight text-[#12141A] font-sans">
            {t("checkout.notFoundTitle")}
          </h2>
          <p className="text-xs text-[var(--mid)]">
            {t("checkout.notFoundDesc")}
          </p>
          <div className="pt-2">
            <Link href="/products" className="btn-nullwave justify-center text-center">
              <span>{t("checkout.backToCatalog")}</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  async function handleCreateOrder(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productSlug: product?.slug,
          planId: selectedPlan?.id,
          customerEmail,
          customerName,
          paymentMethod,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStage("PAYING");
      } else {
        setStage("PAYING");
      }
    } catch {
      setStage("PAYING");
    } finally {
      setLoading(false);
    }
  }

  async function handleSimulatePaymentSuccess() {
    setLoading(true);
    const mockOrderNumber = `VETRA-${Date.now().toString(36).toUpperCase()}`;
    const generatedKey = `VETRA-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    try {
      await fetch("/api/payment/webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          order_id: mockOrderNumber,
          transaction_status: "settlement",
          status: "PAID",
          gross_amount: selectedPlan?.price,
          custom_field1: customerEmail,
          custom_field2: product?.id,
          custom_field3: selectedPlan?.type,
        }),
      });
    } catch {}

    setOrderData({
      orderNumber: mockOrderNumber,
      licenseKey: generatedKey,
      amount: selectedPlan!.price,
    });

    setStage("SUCCESS");
    setLoading(false);

    const savedPurchases = JSON.parse(localStorage.getItem("vetra_customer_orders") || "[]");
    savedPurchases.unshift({
      orderNumber: mockOrderNumber,
      productName: product?.name,
      productSlug: product?.slug,
      planType: selectedPlan?.type,
      planName: selectedPlan?.name,
      amount: selectedPlan?.price,
      licenseKey: generatedKey,
      date: new Date().toISOString(),
      status: "PAID",
    });
    localStorage.setItem("vetra_customer_orders", JSON.stringify(savedPurchases));

    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#FF6B6B", "#12141A", "#8B9099", "#E5484D"],
      });
    } catch {}
  }

  function handleCopyKey() {
    if (orderData?.licenseKey) {
      navigator.clipboard.writeText(orderData.licenseKey);
      setCopiedKey(true);
      setTimeout(() => setCopiedKey(false), 2500);
    }
  }

  return (
    <div className="min-h-screen bg-[#F4F5F6] text-[#12141A] font-mono flex flex-col justify-between selection:bg-[#FF6B6B] selection:text-[#12141A]">
      {/* INDUSTRIAL TOPBAR */}
      <header className="border-b border-[var(--line)] bg-[#F4F5F6] px-4 sm:px-8 py-4">
        <div className="mx-auto max-w-5xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <VetraLogo size="md" subtitle={t("checkout.secureCheckout")} href="/" />
          </div>

          <div className="flex items-center gap-3 sm:gap-6">
            <Link
              href={`/products/${product.slug}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[var(--mid)] hover:text-[#12141A] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{t("checkout.productDetail")}: {product.name}</span>
            </Link>
            <div className="inline-flex items-center gap-2 border border-[var(--line)] bg-white px-2.5 py-1 text-[11px] font-mono text-[#12141A]">
              <Lock className="w-3.5 h-3.5 text-[#FF6B6B]" />
              <span className="font-bold">256-BIT SSL ENCRYPTED</span>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CHECKOUT BODY */}
      <main className="mx-auto max-w-5xl px-4 sm:px-8 py-10 w-full flex-1">
        {stage === "FORM" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT COLUMN: CUSTOMER DATA & PAYMENT */}
            <div className="lg:col-span-7 space-y-6">
              {/* SECTION 1: CUSTOMER FORM */}
              <div className="border border-[var(--line)] bg-white p-6 sm:p-8 space-y-5">
                <div className="border-b border-[var(--line)] pb-4">
                  <span className="mi text-[#FF6B6B] block">STEP 01</span>
                  <h1 className="text-xl font-bold uppercase tracking-tight text-[#12141A] font-sans">
                    {t("checkout.buyerData")}
                  </h1>
                  <p className="text-xs text-[var(--mid)] mt-1">
                    {t("checkout.buyerDesc")}
                  </p>
                </div>

                <form id="checkout-form" onSubmit={handleCreateOrder} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#12141A] font-bold block uppercase tracking-wider">
                      {t("checkout.fullNameLabel")}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t("checkout.fullNamePlaceholder")}
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full border border-[var(--line)] bg-[#F4F5F6] px-3.5 py-2.5 text-xs text-[#12141A] font-mono placeholder:text-[var(--mid)] focus:bg-white focus:border-[#12141A] focus:outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#12141A] font-bold block uppercase tracking-wider">
                      {t("checkout.emailLabel")}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t("checkout.emailPlaceholder")}
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className="w-full border border-[var(--line)] bg-[#F4F5F6] px-3.5 py-2.5 text-xs text-[#12141A] font-mono placeholder:text-[var(--mid)] focus:bg-white focus:border-[#12141A] focus:outline-none transition-all"
                    />
                  </div>
                </form>
              </div>

              {/* SECTION 2: PAYMENT METHOD SELECTION */}
              <div className="border border-[var(--line)] bg-white p-6 sm:p-8 space-y-4">
                <div className="border-b border-[var(--line)] pb-4">
                  <span className="mi text-[#FF6B6B] block">STEP 02</span>
                  <h2 className="text-lg font-bold uppercase tracking-tight text-[#12141A] font-sans">
                    {t("checkout.paymentMethod")}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("QRIS")}
                    className={`flex flex-col text-left p-4 border transition-all cursor-pointer relative ${
                      paymentMethod === "QRIS"
                        ? "border-[#12141A] bg-[#12141A] text-[#F4F5F6]"
                        : "border-[var(--line)] bg-[#F4F5F6] text-[#12141A] hover:border-[#12141A]"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-3">
                      <QrCode className={`w-5 h-5 ${paymentMethod === "QRIS" ? "text-[#FF6B6B]" : "text-[#12141A]"}`} />
                      {paymentMethod === "QRIS" && (
                        <span className="text-[9px] font-mono font-bold bg-[#FF6B6B] text-[#12141A] px-1.5 py-0.5">
                          ACTIVE
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-bold font-sans uppercase tracking-tight">{t("checkout.qrisTitle")}</span>
                    <span className={`text-[10px] mt-1 leading-tight ${paymentMethod === "QRIS" ? "text-[rgba(244,245,246,0.7)]" : "text-[var(--mid)]"}`}>
                      {t("checkout.qrisSubtitle")}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("VA")}
                    className={`flex flex-col text-left p-4 border transition-all cursor-pointer relative ${
                      paymentMethod === "VA"
                        ? "border-[#12141A] bg-[#12141A] text-[#F4F5F6]"
                        : "border-[var(--line)] bg-[#F4F5F6] text-[#12141A] hover:border-[#12141A]"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-3">
                      <Building2 className={`w-5 h-5 ${paymentMethod === "VA" ? "text-[#FF6B6B]" : "text-[#12141A]"}`} />
                      {paymentMethod === "VA" && (
                        <span className="text-[9px] font-mono font-bold bg-[#FF6B6B] text-[#12141A] px-1.5 py-0.5">
                          ACTIVE
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-bold font-sans uppercase tracking-tight">{t("checkout.vaTitle")}</span>
                    <span className={`text-[10px] mt-1 leading-tight ${paymentMethod === "VA" ? "text-[rgba(244,245,246,0.7)]" : "text-[var(--mid)]"}`}>
                      {t("checkout.vaSubtitle")}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("CARD")}
                    className={`flex flex-col text-left p-4 border transition-all cursor-pointer relative ${
                      paymentMethod === "CARD"
                        ? "border-[#12141A] bg-[#12141A] text-[#F4F5F6]"
                        : "border-[var(--line)] bg-[#F4F5F6] text-[#12141A] hover:border-[#12141A]"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-3">
                      <CreditCard className={`w-5 h-5 ${paymentMethod === "CARD" ? "text-[#FF6B6B]" : "text-[#12141A]"}`} />
                      {paymentMethod === "CARD" && (
                        <span className="text-[9px] font-mono font-bold bg-[#FF6B6B] text-[#12141A] px-1.5 py-0.5">
                          ACTIVE
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-bold font-sans uppercase tracking-tight">{t("checkout.cardTitle")}</span>
                    <span className={`text-[10px] mt-1 leading-tight ${paymentMethod === "CARD" ? "text-[rgba(244,245,246,0.7)]" : "text-[var(--mid)]"}`}>
                      {t("checkout.cardSubtitle")}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: ORDER SUMMARY */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border border-[var(--line)] bg-white p-6 sm:p-8 space-y-5">
                <div className="flex items-center justify-between border-b border-[var(--line)] pb-3">
                  <span className="mi text-[#FF6B6B]">{t("checkout.summary")}</span>
                  <span className="text-[10px] font-mono bg-[#12141A] text-[#F4F5F6] px-2 py-0.5 uppercase">
                    v{product.version}
                  </span>
                </div>

                {/* Product Name & Category */}
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--mid)]">
                    {product.category}
                  </span>
                  <h3 className="text-2xl font-bold uppercase text-[#12141A] font-sans tracking-tight">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[var(--mid)] mt-0.5 line-clamp-2">
                    {product.tagline}
                  </p>
                </div>

                {/* Plan Toggle Selector on Checkout */}
                {product.plans && product.plans.length > 1 && (
                  <div className="border border-[var(--line)] bg-[#F4F5F6] p-2 space-y-2">
                    <span className="text-[10px] font-mono font-bold text-[var(--mid)] uppercase tracking-wider block">
                      {t("checkout.switchPlan")}:
                    </span>
                    <div className="grid grid-cols-2 gap-1.5">
                      {product.plans.map((p) => {
                        const isSelected = p.id === selectedPlan.id;
                        return (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => setSelectedPlanId(p.id)}
                            className={`px-2.5 py-1.5 text-[11px] font-mono text-left transition-all border ${
                              isSelected
                                ? "bg-[#12141A] text-[#F4F5F6] border-[#12141A] font-bold"
                                : "bg-white text-[#12141A] border-[var(--line)] hover:border-[#12141A]"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="truncate">{p.type === "LIFETIME" ? "Lifetime" : "Monthly"}</span>
                              {isSelected && <span className="text-[#FF6B6B]">▪</span>}
                            </div>
                            <div className={`text-[10px] font-mono ${isSelected ? "text-[rgba(244,245,246,0.7)]" : "text-[var(--mid)]"}`}>
                              {formatIDR(p.price)}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Selected Plan Details */}
                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#12141A] text-[#F4F5F6] text-[10px] font-mono uppercase tracking-wider w-full">
                  {selectedPlan.type === "LIFETIME" ? (
                    <>
                      <Key className="w-3.5 h-3.5 text-[#FF6B6B]" />
                      <span>{selectedPlan.name} (PERPETUAL / SEUMUR HIDUP)</span>
                    </>
                  ) : (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 text-[#FF6B6B]" />
                      <span>{selectedPlan.name} (MONTHLY SUBSCRIPTION)</span>
                    </>
                  )}
                </div>

                {/* Cost Breakdown */}
                <div className="space-y-2.5 border-t border-[var(--line)] pt-4 text-xs font-mono">
                  <div className="flex justify-between text-[var(--mid)]">
                    <span>{t("checkout.price")}</span>
                    <span className="text-[#12141A] font-bold">{formatIDR(selectedPlan.price)}</span>
                  </div>
                  <div className="flex justify-between text-[var(--mid)]">
                    <span>{t("checkout.adminFee")}</span>
                    <span className="text-[#12141A]">{t("checkout.adminFeeFree")}</span>
                  </div>
                  <div className="flex justify-between text-[var(--mid)]">
                    <span>{t("checkout.vat")}</span>
                    <span className="text-[var(--mid)]">{t("checkout.vatIncluded")}</span>
                  </div>
                  <div className="flex justify-between items-baseline text-base font-bold text-[#12141A] border-t border-[var(--line)] pt-3">
                    <span className="font-sans uppercase tracking-tight">{t("checkout.total")}</span>
                    <span className="text-xl sm:text-2xl font-mono text-[#12141A] tracking-tight">
                      {formatIDR(selectedPlan.price)}
                    </span>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    form="checkout-form"
                    disabled={loading}
                    className="w-full btn-nullwave justify-center text-center py-3.5"
                  >
                    {loading ? (
                      <span className="inline-flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>{t("checkout.processing")}</span>
                      </span>
                    ) : (
                      <span>{t("checkout.proceed")}</span>
                    )}
                  </button>
                </div>

                <p className="text-[10px] text-[var(--mid)] text-center leading-relaxed font-mono">
                  {t("checkout.disclaimer")}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* STAGE 2: PAYING (QRIS / GATEWAY WAITING) */}
        {stage === "PAYING" && (
          <div className="max-w-md mx-auto border border-[var(--line)] bg-white p-6 sm:p-8 text-center space-y-6">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#12141A] bg-[#F4F5F6] border border-[var(--line)] px-2.5 py-1 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B6B] animate-live"></span>
                {t("checkout.waitingPayment")}
              </span>
              <h2 className="text-2xl font-bold uppercase tracking-tight text-[#12141A] font-sans mt-2">
                {t("checkout.scanQris")}
              </h2>
              <p className="text-xs text-[var(--mid)]">
                {t("checkout.scanQrisDesc")}
              </p>
            </div>

            {/* QR BOX INDUSTRIAL */}
            <div className="mx-auto w-64 p-4 bg-[#F4F5F6] border-2 border-[#12141A] relative shadow-sm">
              <div className="w-full bg-white p-3 border border-[var(--line)] flex flex-col items-center justify-center">
                <QrCode className="w-40 h-40 text-[#12141A]" />
                <span className="text-[9px] font-mono font-bold tracking-widest text-[#12141A] mt-2">
                  {t("checkout.qrisStandard")}
                </span>
              </div>
            </div>

            <div className="space-y-1 border-t border-[var(--line)] pt-4">
              <span className="text-xs text-[var(--mid)] uppercase tracking-wider block">
                {t("checkout.totalNominal")}
              </span>
              <div className="text-3xl font-bold font-mono text-[#12141A] tracking-tight">
                {formatIDR(selectedPlan.price)}
              </div>
              <span className="text-[10px] font-mono text-[var(--mid)] block mt-0.5">
                {t("checkout.recipient")}
              </span>
            </div>

            <div className="border-t border-[var(--line)] pt-5 space-y-3">
              <button
                type="button"
                onClick={handleSimulatePaymentSuccess}
                disabled={loading}
                className="w-full btn-nullwave justify-center text-center py-3 bg-[#12141A] text-[#F4F5F6] hover:bg-[#FF6B6B] hover:text-[#12141A]"
              >
                {loading ? (
                  <span className="inline-flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{t("checkout.verifyingWebhook")}</span>
                  </span>
                ) : (
                  <span>{t("checkout.simulateSuccess")}</span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setStage("FORM")}
                className="text-xs font-mono text-[var(--mid)] hover:text-[#12141A] block w-full text-center transition-colors underline underline-offset-4"
              >
                {t("checkout.changeMethod")}
              </button>
            </div>
          </div>
        )}

        {/* STAGE 3: SUCCESS & LICENSE GENERATION */}
        {stage === "SUCCESS" && orderData && (
          <div className="max-w-xl mx-auto border-2 border-[#12141A] bg-white p-6 sm:p-10 space-y-6 shadow-sm">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-[#12141A] text-[#FF6B6B] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <span className="mi text-[#FF6B6B] block">ORDER COMPLETED // 200 OK</span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#12141A] font-sans">
                {t("checkout.successTitle")}
              </h2>
              <p className="text-xs text-[var(--mid)] max-w-md mx-auto">
                {t("checkout.successOrder")} #{orderData.orderNumber} {t("checkout.successDesc")}
              </p>
            </div>

            {/* LICENSE KEY CARD */}
            <div className="border border-[var(--line)] bg-[#F4F5F6] p-5 space-y-3 font-mono">
              <div className="flex items-center justify-between text-xs font-bold text-[#12141A]">
                <span className="uppercase tracking-wider">{t("checkout.licenseLabel")}</span>
                <span className="text-[#FF6B6B] text-[10px] bg-[#12141A] px-2 py-0.5 text-white">
                  {t("checkout.statusActive")}
                </span>
              </div>

              <div className="flex items-center justify-between bg-[#12141A] text-[#F4F5F6] px-4 py-3 border border-[#12141A]">
                <code className="font-mono text-sm sm:text-base font-bold tracking-wider text-[#FF6B6B] select-all">
                  {orderData.licenseKey}
                </code>
                <button
                  type="button"
                  onClick={handleCopyKey}
                  className="inline-flex items-center gap-1.5 text-xs font-mono bg-white text-[#12141A] hover:bg-[#FF6B6B] px-2.5 py-1 transition-colors ml-3 cursor-pointer"
                >
                  {copiedKey ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#12141A]" />
                      <span className="font-bold">{t("checkout.copied")}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t("checkout.copyLicense")}</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-[var(--mid)] leading-relaxed">
                {t("checkout.activationNote")} <strong className="text-[#12141A]">{product.name}</strong>.
              </p>
            </div>

            {/* ACTION LINKS */}
            <div className="space-y-3 pt-2">
              <Link href="/dashboard" className="block w-full">
                <button type="button" className="w-full btn-nullwave justify-center text-center py-3.5">
                  <span>{t("checkout.openDashboard")}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </Link>
              <Link href="/products" className="block text-center text-xs font-mono text-[var(--mid)] hover:text-[#12141A] transition-colors">
                {t("checkout.backToStore")}
              </Link>
            </div>
          </div>
        )}
      </main>

      {/* TACTILE FOOTER STRIP */}
      <footer className="border-t border-[var(--line)] bg-[#F4F5F6] px-4 sm:px-8 py-3">
        <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] font-mono text-[var(--mid)]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B6B] animate-live"></span>
            <span>VETRA CHECKOUT ENGINE v1.4</span>
          </div>
          <span>TRANSACTION VERIFIED BY 256-BIT WEBHOOK DAEMON</span>
        </div>
      </footer>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <React.Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#F4F5F6] text-xs text-[#12141A] font-mono">
          <Loader2 className="w-5 h-5 animate-spin mr-2 text-[#FF6B6B]" />
          <span>Memuat halaman checkout...</span>
        </div>
      }
    >
      <CheckoutContent />
    </React.Suspense>
  );
}
