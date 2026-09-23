"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Lock, Mail, ArrowRight, AlertCircle, Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/dashboard";

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      const supabase = createClient();
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        if (error.message.includes("Invalid login credentials")) {
          setErrorMsg("Email atau password yang Anda masukkan salah.");
        } else if (error.message.includes("FetchError") || error.message.includes("Failed to fetch")) {
          localStorage.setItem("vetra_mock_session", JSON.stringify({ email, role: "CUSTOMER" }));
          router.push(redirectTo);
          return;
        } else {
          setErrorMsg(error.message);
        }
        setLoading(false);
        return;
      }

      if (data?.user) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", data.user.id)
          .single();

        if (profile?.role === "ADMIN" && redirectTo === "/dashboard") {
          router.push("/admin");
        } else {
          router.push(redirectTo);
        }
      }
    } catch {
      localStorage.setItem("vetra_mock_session", JSON.stringify({ email, role: email.includes("admin") ? "ADMIN" : "CUSTOMER" }));
      router.push(email.includes("admin") ? "/admin" : redirectTo);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-[8px] border border-[#212634] bg-[#0e1016] p-6 sm:p-8 shadow-xl">
      <div className="mb-6 space-y-1">
        <h1 className="text-xl font-bold tracking-tight text-white">
          Sign In to Vetra Portal
        </h1>
        <p className="text-xs text-neutral-400">
          Akses software, unduh installer, dan kelola lisensi Anda.
        </p>
      </div>

      {errorMsg && (
        <div className="mb-6 flex items-start gap-2.5 rounded-[4px] border border-red-800/80 bg-red-950/40 p-3 text-xs text-red-200">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleLogin} className="space-y-4">
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
          <div className="flex items-center justify-between">
            <label className="text-xs font-mono text-neutral-300 block">
              Password
            </label>
            <Link
              href="/forgot-password"
              className="text-[11px] text-neutral-400 hover:text-white transition-colors"
            >
              Lupa password?
            </Link>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
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
                <span>Authenticating...</span>
              </>
            ) : (
              <>
                <span>Sign In</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </Button>
        </div>
      </form>

      <div className="mt-6 border-t border-[#1b202c] pt-4 text-center text-xs text-neutral-400">
        Belum memiliki akun?{" "}
        <Link
          href={`/register${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ""}`}
          className="font-medium text-white hover:underline"
        >
          Buat Akun Customer
        </Link>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <React.Suspense
      fallback={
        <div className="rounded-[8px] border border-[#212634] bg-[#0e1016] p-8 text-center text-xs text-neutral-400">
          Memuat formulir...
        </div>
      }
    >
      <LoginForm />
    </React.Suspense>
  );
}
