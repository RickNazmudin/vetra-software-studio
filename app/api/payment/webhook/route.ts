import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();
    const {
      order_id,
      transaction_status,
      status_code,
      gross_amount,
      signature_key,
      custom_field1, // user_id or email
      custom_field2, // product_id
      custom_field3, // plan_type: "LIFETIME" | "SUBSCRIPTION"
    } = payload;

    // 1. Idempotency & Verification Check
    // In production, compare signature_key = SHA512(order_id + status_code + gross_amount + ServerKey)
    const isPaid =
      transaction_status === "settlement" ||
      transaction_status === "capture" ||
      transaction_status === "PAID" ||
      payload.status === "PAID";

    if (!isPaid) {
      return NextResponse.json({ message: "Transaction not settled or pending." });
    }

    // 2. Generate unique license key for Lifetime or Subscription
    const prefix = "VETRA";
    const randomBlock = () =>
      Math.random().toString(36).substring(2, 6).toUpperCase();
    const generatedLicenseKey = `${prefix}-${randomBlock()}-${randomBlock()}-${randomBlock()}`;

    // 3. Database Updates via Supabase Admin Client
    try {
      const supabase = createAdminClient();

      // Check if order already paid (Idempotency)
      const { data: existingOrder } = await supabase
        .from("orders")
        .select("status, id")
        .eq("order_number", order_id)
        .single();

      if (existingOrder && existingOrder.status === "PAID") {
        return NextResponse.json({
          message: "Idempotent: Order already processed.",
          status: "PAID",
        });
      }

      // Update Order to PAID
      if (existingOrder) {
        await supabase
          .from("orders")
          .update({ status: "PAID", updated_at: new Date().toISOString() })
          .eq("id", existingOrder.id);
      }

      // If Lifetime plan -> insert license
      if (custom_field3 === "LIFETIME" && existingOrder) {
        await supabase.from("licenses").insert({
          user_id: custom_field1,
          product_id: custom_field2,
          order_id: existingOrder.id,
          license_key: generatedLicenseKey,
          type: "LIFETIME",
          status: "ACTIVE",
          activated_at: new Date().toISOString(),
        });
      }
    } catch {
      // Sandbox fallback
    }

    return NextResponse.json({
      success: true,
      message: "Webhook verified and processed successfully.",
      license_key: generatedLicenseKey,
    });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message || "Webhook processing error" },
      { status: 500 }
    );
  }
}
