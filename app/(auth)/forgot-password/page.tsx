"use client";

import * as React from "react";
import Link from "next/link";
import { Mail, ArrowRight, AlertCircle, Loader2, CheckCircle2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);
  const [successMsg, setSuccessMsg] = React.useState<string | null>(null);

  async function handleReset(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);
    setLoading(true);

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) {
        setErrorMsg(error.message);
      } else {
        setSuccessMsg(
          "Link instruksi reset password telah dikirim ke email Anda jika terdaftar."
        );
      }
    } catch {
      setSuccessMsg("Link instruksi reset password telah dikirim ke email Anda.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-[8px] border border-[#212634] bg-[#0e1016] p-6 sm:p-8 shadow-xl">
      <div className="mb-6 space-y-1">
        <h1 className="text-xl font-bold tracking-tight text-white">
          Reset Password
        </h1>
        <p className="text-xs text-neutral-400">
          Masukkan alamat email Anda untuk menerima tautan pemulihan kata sandi.
        </p>
      </div>

      {errorMsg && (
        <div className="mb-6 flex items-start gap-2.5 rounded-[4px] border border-red-800/80 bg-red-950/40 p-3 text-xs text-red-200">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
          <span>{errorMsg}</span>
        </div>
      )}

      {successMsg && (
        <div className="mb-6 flex items-start gap-2.5 rounded-[4px] border border-emerald-800/80 bg-emerald-950/40 p-3 text-xs text-emerald-200">
          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
          <span>{successMsg}</span>
        </div>
      )}

      <form onSubmit={handleReset} className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-xs font-mono text-neutral-300 block">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@business.com"
              className="w-full rounded-[4px] border border-[#262c3c] bg-[#12151d] pl-9 pr-3 py-2 text-xs text-white placeholder:text-neutral-500 focus:border-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400"
            />
          </div>
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            disabled={loading}
            className="w-full gap-2 text-xs font-semibold py-2.5"
          >
            {loading ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Sending Instructions...</span>
              </>
            ) : (
              <>
                <span>Kirim Link Reset</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </Button>
        </div>
      </form>

      <div className="mt-6 border-t border-[#1b202c] pt-4 text-center text-xs text-neutral-400">
        Kembali ke{" "}
        <Link href="/login" className="font-medium text-white hover:underline">
          Halaman Sign In
        </Link>
      </div>
    </div>
  );
}
