"use client";

import * as React from "react";
import { UploadCloud, Plus, FileText, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminReleasesPage() {
  const [releases, setReleases] = React.useState([
    { id: "1", product: "TOKOin-POS", version: "2.1.0", date: "2026-09-22", platform: "Web Cloud / Windows / macOS", active: true },
    { id: "2", product: "Brew & Bite", version: "2.4.0", date: "2026-09-22", platform: "Web Cloud / Android KDS / Windows POS", active: true },
    { id: "3", product: "ModaKita", version: "3.0.0", date: "2026-09-22", platform: "Web Storefront & Admin / Android APK", active: true },
    { id: "4", product: "PadelSpace (Landing Page)", version: "1.2.0", date: "2026-09-22", platform: "Next.js Web / Global CDN / Source Zip", active: true },
    { id: "5", product: "PadelSpace (Booking System)", version: "2.0.0", date: "2026-09-22", platform: "Player Web App / Admin Dashboard", active: true },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#181c25] pb-4">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white">Releases & Binary Uploads</h1>
          <p className="text-xs text-neutral-400">
            Unggah file installer baru, atur nomor versi, dan publikasikan changelog resmi.
          </p>
        </div>

        <Button size="sm" className="gap-1.5 text-xs font-semibold" onClick={() => alert("Modal Upload New Release Binary")}>
          <Plus className="w-3.5 h-3.5" />
          <span>Publish New Release</span>
        </Button>
      </div>

      <div className="rounded-[8px] border border-[#202534] bg-[#0c0e14] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#181c25] bg-[#11141c] text-neutral-400 font-mono">
                <th className="p-4">Software</th>
                <th className="p-4">Version</th>
                <th className="p-4">Platforms</th>
                <th className="p-4">Release Date</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#181c25] text-neutral-300">
              {releases.map((rel) => (
                <tr key={rel.id} className="hover:bg-[#11131a]">
                  <td className="p-4 font-bold text-white">{rel.product}</td>
                  <td className="p-4 font-mono text-emerald-400">v{rel.version}</td>
                  <td className="p-4 text-neutral-300">{rel.platform}</td>
                  <td className="p-4 font-mono text-neutral-400">{rel.date}</td>
                  <td className="p-4">
                    <span className="px-2 py-0.5 rounded-[3px] bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 text-[10px] font-mono font-bold uppercase">
                      ACTIVE
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <Button variant="secondary" size="sm" className="text-xs" onClick={() => alert(`Edit release notes v${rel.version}`)}>
                      Edit Notes
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
