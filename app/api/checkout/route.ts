import { NextRequest, NextResponse } from "next/server";
import { getProductBySlug } from "@/lib/products-data";
import { createAdminClient } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { productSlug, planId, customerEmail, customerName, paymentMethod } = body;

    if (!productSlug || !planId || !customerEmail) {
      return NextResponse.json(
        { error: "Parameter pesanan tidak lengkap." },
        { status: 400 }
      );
    }

    // 1. Fetch official price from verified product repository (Server-side validation)
    const product = getProductBySlug(productSlug);
    if (!product) {
      return NextResponse.json({ error: "Produk tidak ditemukan." }, { status: 404 });
    }

    const plan = product.plans?.find((p) => p.id === planId);
    if (!plan) {
      return NextResponse.json({ error: "Paket plan tidak valid." }, { status: 400 });
    }

    const orderNumber = `VETRA-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 1000).toString().padStart(3, "0")}`;
    const amount = plan.price;

    // 2. Generate simulated or real payment token / QRIS payload
    const paymentId = `PAY-${Date.now()}`;
    const qrCodeMock = `00020101021226600016ID.VETRA.QRIS01189360099900000000010215${orderNumber}520454995303360540${amount}5802ID5913VETRA STUDIO6007JAKARTA6304`;

    // 3. Persist order into Supabase database if connected, or return mock response
    try {
      const supabase = createAdminClient();
      await supabase.from("orders").insert({
        order_number: orderNumber,
        status: "PENDING",
        subtotal: amount,
        discount: 0,
        total: amount,
        currency: "IDR",
      });
    } catch {
      // Allow seamless execution in dev sandbox mode
    }

    return NextResponse.json({
      success: true,
      order: {
        orderNumber,
        productName: product.name,
        planName: plan.name,
        planType: plan.type,
        amount,
        customerEmail,
        customerName,
        status: "PENDING",
        paymentId,
        paymentMethod: paymentMethod || "QRIS",
        qrisData: qrCodeMock,
        expiryTime: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message || "Internal server error." },
      { status: 500 }
    );
  }
}
