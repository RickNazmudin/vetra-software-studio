"use client";

import * as React from "react";
import Link from "next/link";
import { Plus, Edit, Eye, CheckCircle2 } from "lucide-react";
import { getAllProducts } from "@/lib/products-data";
import { formatIDR } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function AdminProductsPage() {
  const products = getAllProducts();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#181c25] pb-4">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white">Product & Plan Catalog</h1>
          <p className="text-xs text-neutral-400">
            Kelola software, harga paket Monthly/Lifetime, dan status publikasi.
          </p>
        </div>

        <Button size="sm" className="gap-1.5 text-xs font-semibold" onClick={() => alert("Modal New Product Studio")}>
          <Plus className="w-3.5 h-3.5" />
          <span>Add New Product</span>
        </Button>
      </div>

      <div className="space-y-4">
        {products.map((p) => {
          const monthly = p.plans?.find((x) => x.type === "SUBSCRIPTION");
          const lifetime = p.plans?.find((x) => x.type === "LIFETIME");

          return (
            <div
              key={p.id}
              className="rounded-[6px] border border-[#202534] bg-[#0c0e14] p-5 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                {p.thumbnail && (
                  <div className="w-20 sm:w-24 aspect-[16/10] rounded-[4px] overflow-hidden border border-[#202636] shrink-0 bg-[#08090d] hidden sm:block">
                    <img
                      src={p.thumbnail}
                      alt={p.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                )}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-white">{p.name}</h3>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-[3px] bg-neutral-800 text-neutral-300">
                      v{p.version}
                    </span>
                    <span className="px-2 py-0.5 rounded-[3px] bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 text-[10px] font-mono font-bold uppercase">
                      PUBLISHED
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 max-w-xl">
                    {p.short_description}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-mono text-neutral-300 pt-1">
                    {monthly && <span>Monthly: {formatIDR(monthly.price)}</span>}
                    {lifetime && <span>Lifetime: {formatIDR(lifetime.price)}</span>}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Link href={`/products/${p.slug}`}>
                  <Button variant="outline" size="sm" className="gap-1 text-xs">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Store</span>
                  </Button>
                </Link>
                <Button variant="secondary" size="sm" className="gap-1 text-xs" onClick={() => alert(`Edit produk: ${p.name}`)}>
                  <Edit className="w-3.5 h-3.5" />
                  <span>Edit Product</span>
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
