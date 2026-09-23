"use client";

import * as React from "react";
import { Search, Layers } from "lucide-react";
import { getAllProducts } from "@/lib/products-data";
import { ProductCard } from "@/components/product-card";
import { useLanguage } from "@/context/language-context";

export default function ProductsPage() {
  const allProducts = getAllProducts();
  const { t, lang } = useLanguage();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<string>("ALL");

  const categories = [
    { key: "ALL", label: t("catalog.allCat") },
    { key: "Retail & Hospitality", label: t("catalog.catRetail") },
    { key: "Sports & Venues", label: t("catalog.catSports") },
    { key: "Finance & Productivity", label: t("catalog.catFinance") },
  ];

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.short_description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "ALL" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-8 py-24 font-mono">
      {/* Header */}
      <div className="mb-12 border-b border-[var(--line)] pb-8">
        <span className="mi text-[10px] tracking-[0.2em] text-[var(--mid)] block mb-2">
          {t("catalog.tag")}
        </span>
        <h1 className="font-sans font-bold text-3xl sm:text-5xl uppercase tracking-tight text-[#12141A] mb-3">
          {t("catalog.title")}
        </h1>
        <p className="text-xs sm:text-sm text-[var(--mid)] max-w-2xl leading-relaxed">
          {t("catalog.desc")}
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3 py-1.5 text-xs font-mono transition-all cursor-pointer border ${
                selectedCategory === cat.key
                  ? "bg-[#12141A] text-[#F4F5F6] border-[#12141A] font-bold"
                  : "bg-transparent text-[var(--mid)] border-[var(--line)] hover:text-[#12141A] hover:bg-black/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[var(--mid)]" />
          <input
            type="text"
            placeholder={t("catalog.search")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-[var(--line)] bg-white pl-9 pr-3 py-1.5 text-xs text-[#12141A] placeholder:text-[var(--mid)] focus:border-[#12141A] focus:outline-none"
          />
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="border border-[var(--line)] bg-white p-12 text-center">
          <Layers className="w-8 h-8 text-[var(--mid)] mx-auto mb-3 opacity-50" />
          <h3 className="font-sans font-bold text-sm text-[#12141A] uppercase mb-1">{t("catalog.notFound")}</h3>
          <p className="text-xs text-[var(--mid)]">
            {lang === "id"
              ? `Tidak ada produk yang cocok dengan pencarian "${searchQuery}".`
              : `No products found matching "${searchQuery}".`}
          </p>
        </div>
      )}
    </div>
  );
}

