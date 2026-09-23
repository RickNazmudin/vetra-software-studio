"use client";

import * as React from "react";
import { Key, ShieldAlert, CheckCircle2, Ban } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";

export default function AdminLicensesPage() {
  const { t, lang } = useLanguage();
  const [licenses, setLicenses] = React.useState([
    { id: "lic-1", key: "VETRA-TOKO-9921-8842", customer: "retail.nusantara@gmail.com", product: "TOKOin-POS", type: "LIFETIME", status: "ACTIVE" },
    { id: "lic-2", key: "VETRA-TOKO-7741-2290", customer: "cafe.senja@bisnis.id", product: "TOKOin-POS", type: "SUBSCRIPTION", status: "ACTIVE" },
    { id: "lic-3", key: "VETRA-TOKO-4412-0091", customer: "butik.cantika@yahoo.com", product: "TOKOin-POS", type: "LIFETIME", status: "ACTIVE" },
  ]);

  function toggleStatus(id: string) {
    setLicenses((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const next = item.status === "ACTIVE" ? "SUSPENDED" : "ACTIVE";
          return { ...item, status: next };
        }
        return item;
      })
    );
  }

  return (
    <div className="space-y-6 font-mono">
      <div className="border-b border-[#181c25] pb-4">
        <h1 className="text-xl font-bold tracking-tight text-white font-sans">
          {lang === "id" ? "Audit Kunci Lisensi" : "License Key Auditor"}
        </h1>
        <p className="text-xs text-neutral-400">
          {lang === "id"
            ? "Kelola integritas lisensi, suspend lisensi bermasalah, atau verifikasi status aktivasi."
            : "Audit license integrity, suspend abusive license keys, and verify activations."}
        </p>
      </div>

      <div className="rounded-[8px] border border-[#202534] bg-[#0c0e14] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#181c25] bg-[#11141c] text-neutral-400 font-mono">
                <th className="p-4">License Key</th>
                <th className="p-4">{lang === "id" ? "Email Pengguna" : "Customer Email"}</th>
                <th className="p-4">Software</th>
                <th className="p-4">{lang === "id" ? "Tipe" : "Type"}</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">{lang === "id" ? "Aksi" : "Actions"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#181c25] text-neutral-300">
              {licenses.map((lic) => (
                <tr key={lic.id} className="hover:bg-[#11131a]">
                  <td className="p-4 font-mono font-bold text-white">{lic.key}</td>
                  <td className="p-4 text-neutral-200">{lic.customer}</td>
                  <td className="p-4 font-semibold text-white">{lic.product}</td>
                  <td className="p-4 font-mono text-neutral-400">{lic.type}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-0.5 rounded-[3px] text-[10px] font-mono font-bold uppercase border ${
                        lic.status === "ACTIVE"
                          ? "bg-emerald-950/60 text-emerald-400 border-emerald-800/40"
                          : "bg-red-950/60 text-red-400 border-red-800/40"
                      }`}
                    >
                      {lic.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <Button
                      variant={lic.status === "ACTIVE" ? "danger" : "outline"}
                      size="sm"
                      onClick={() => toggleStatus(lic.id)}
                      className="text-xs cursor-pointer"
                    >
                      {lic.status === "ACTIVE" 
                        ? (lang === "id" ? "Bekukan Lisensi" : "Suspend License") 
                        : (lang === "id" ? "Aktifkan Kembali" : "Reactivate")}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

