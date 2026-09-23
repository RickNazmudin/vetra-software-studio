import Link from "next/link";
import { VetraLogo } from "@/components/logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#08090c] text-neutral-200">
      {/* Top Simple Header */}
      <div className="w-full border-b border-[#181c25] bg-[#0b0d12] px-6 py-4">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <VetraLogo size="sm" subtitle="SOFTWARE STUDIO" href="/" dark={true} />

          <Link
            href="/products"
            className="text-xs font-mono text-neutral-400 hover:text-white transition-colors"
          >
            ← Back to Store
          </Link>
        </div>
      </div>

      {/* Centered Auth Card */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 my-8">
        <div className="w-full max-w-md">{children}</div>
      </div>

      {/* Simple Footer */}
      <div className="border-t border-[#181c25] py-4 text-center text-[11px] font-mono text-neutral-400">
        Secured by Vetra Authentication & Row Level Security
      </div>
    </div>
  );
}
