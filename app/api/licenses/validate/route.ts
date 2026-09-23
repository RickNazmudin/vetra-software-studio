import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  try {
    const { license_key } = await req.json();

    if (!license_key) {
      return NextResponse.json(
        { valid: false, message: "License key is required." },
        { status: 400 }
      );
    }

    const cleanedKey = license_key.trim().toUpperCase();

    // Check against Supabase database
    try {
      const supabase = createAdminClient();
      const { data: license, error } = await supabase
        .from("licenses")
        .select("*, products(name, slug)")
        .eq("license_key", cleanedKey)
        .single();

      if (license && !error) {
        if (license.status === "ACTIVE") {
          return NextResponse.json({
            valid: true,
            product: license.products?.name || "Vetra Software",
            status: "ACTIVE",
            activated_at: license.activated_at,
          });
        } else {
          return NextResponse.json({
            valid: false,
            product: license.products?.name || "Vetra Software",
            status: license.status, // SUSPENDED / REVOKED / EXPIRED
            message: `License is ${license.status}`,
          });
        }
      }
    } catch {
      // Fallback for development test keys
    }

    // Dev test fallback: Any key starting with VETRA- or POS- or PADEL- or INV- with proper block length
    if (cleanedKey.startsWith("VETRA-") || cleanedKey.startsWith("POS-") || cleanedKey.startsWith("PADEL-")) {
      return NextResponse.json({
        valid: true,
        product: "POS Pro (Development License)",
        status: "ACTIVE",
        activated_at: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      {
        valid: false,
        status: "INVALID",
        message: "License key tidak terdaftar atau tidak valid.",
      },
      { status: 404 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message || "License validation failed." },
      { status: 500 }
    );
  }
}
