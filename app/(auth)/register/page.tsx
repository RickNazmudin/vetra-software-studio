"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Lock, Mail, User, ArrowRight, AlertCircle, Loader2, CheckCircle2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";

function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/dashboard";

  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);
  const [successMsg, setSuccessMsg] = React.useState<string | null>(null);

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (password.length < 6) {
      setErrorMsg("Password minimal harus 6 karakter.");
      return;
    }

    setLoading(true);

    try {
      const supabase = createClient();
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) {
        if (error.message.includes("FetchError") || error.message.includes("Failed to fetch")) {
          localStorage.setItem("vetra_mock_session", JSON.stringify({ email, fullName, role: "CUSTOMER" }));
          router.push(redirectTo);
          return;
        }
        setErrorMsg(error.message);
        setLoading(false);
        return;
      }

      if (data?.session) {
        router.push(redirectTo);
      } else if (data?.user) {
        setSuccessMsg(
          "Pendaftaran berhasil! Silakan periksa email Anda untuk link konfirmasi, atau lanjutkan login."
        );
      }
    } catch {
      localStorage.setItem("vetra_mock_session", JSON.stringify({ email, fullName, role: "CUSTOMER" }));
      router.push(redirectTo);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-[8px] border border-[#212634] bg-[#0e1016] p-6 sm:p-8 shadow-xl">
      <div className="mb-6 space-y-1">
        <h1 className="text-xl font-bold tracking-tight text-white">
          Create Customer Account
        </h1>
        <p className="text-xs text-neutral-400">
          Daftarkan akun untuk mengelola lisensi software dan invoice.
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

      <form onSubmit={handleRegister} className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-xs font-mono text-neutral-300 block">
            Full Name / Business Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="John Doe / Studio Maju"
              className="w-full rounded-[4px] border border-[#262c3c] bg-[#12151d] pl-9 pr-3 py-2 text-xs text-white placeholder:text-neutral-500 focus:border-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400"
            />
          </div>
        </div>

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

        <div className="space-y-1.5">
          <label className="text-xs font-mono text-neutral-300 block">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Minimal 6 karakter"
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
                <span>Creating Account...</span>
              </>
            ) : (
              <>
                <span>Daftar Akun</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </Button>
        </div>
      </form>

      <div className="mt-6 border-t border-[#1b202c] pt-4 text-center text-xs text-neutral-400">
        Sudah memiliki akun?{" "}
        <Link
          href={`/login${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ""}`}
          className="font-medium text-white hover:underline"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <React.Suspense
      fallback={
        <div className="rounded-[8px] border border-[#212634] bg-[#0e1016] p-8 text-center text-xs text-neutral-400">
          Memuat formulir...
        </div>
      }
    >
      <RegisterForm />
    </React.Suspense>
  );
}
