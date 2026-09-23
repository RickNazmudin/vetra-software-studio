"use client";

import * as React from "react";
import { User, Lock, Save, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AccountPage() {
  const [saved, setSaved] = React.useState(false);

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="border-b border-[#181c25] pb-4">
        <h1 className="text-xl font-bold tracking-tight text-white">Account Settings</h1>
        <p className="text-xs text-neutral-400">
          Informasi profil pemilik akun dan pengaturan keamanan portal.
        </p>
      </div>

      {saved && (
        <div className="flex items-center gap-2 p-3 rounded-[4px] bg-emerald-950/40 border border-emerald-800 text-xs text-emerald-300">
          <CheckCircle2 className="w-4 h-4" />
          <span>Pengaturan akun berhasil disimpan.</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        <div className="rounded-[6px] border border-[#202534] bg-[#0c0e14] p-6 space-y-4">
          <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
            Informasi Profil
          </h3>

          <div className="space-y-1.5">
            <label className="text-xs font-mono text-neutral-300 block">
              Nama Lengkap / Studio
            </label>
            <input
              type="text"
              defaultValue="Vetra Customer"
              className="w-full rounded-[4px] border border-[#252b3b] bg-[#121620] px-3 py-2 text-xs text-white focus:border-neutral-300 focus:outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono text-neutral-300 block">
              Email Address
            </label>
            <input
              type="email"
              defaultValue="customer@business.com"
              disabled
              className="w-full rounded-[4px] border border-[#252b3b] bg-[#10121a] px-3 py-2 text-xs text-neutral-400 cursor-not-allowed"
            />
          </div>
        </div>

        <div className="rounded-[6px] border border-[#202534] bg-[#0c0e14] p-6 space-y-4">
          <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
            Keamanan & Kata Sandi
          </h3>

          <div className="space-y-1.5">
            <label className="text-xs font-mono text-neutral-300 block">
              Kata Sandi Baru
            </label>
            <input
              type="password"
              placeholder="Kosongkan jika tidak ingin mengubah"
              className="w-full rounded-[4px] border border-[#252b3b] bg-[#121620] px-3 py-2 text-xs text-white focus:border-neutral-300 focus:outline-none"
            />
          </div>
        </div>

        <Button type="submit" size="sm" className="gap-2 font-semibold">
          <Save className="w-3.5 h-3.5" />
          <span>Simpan Perubahan</span>
        </Button>
      </form>
    </div>
  );
}
