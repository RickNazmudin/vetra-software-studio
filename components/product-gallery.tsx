"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, Maximize2, X, Image as ImageIcon } from "lucide-react";
import { useLanguage } from "@/context/language-context";

interface ProductGalleryProps {
  productName: string;
  version?: string;
  screenshots?: string[];
}

export function ProductGallery({ productName, version, screenshots }: ProductGalleryProps) {
  const { lang } = useLanguage();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);

  const validScreenshots = screenshots && screenshots.length > 0 ? screenshots : [];
  const activeImage = validScreenshots[activeIndex] || validScreenshots[0];

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? validScreenshots.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev === validScreenshots.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation for lightbox
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setIsLightboxOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, validScreenshots.length]);

  if (validScreenshots.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      {/* Main Showcase Frame */}
      <div className="rounded-[8px] border border-[#232938] bg-[#0c0e13] overflow-hidden shadow-2xl transition-all">
        {/* Mock Window Titlebar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#12151c] border-b border-[#1f2430]">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80"></div>
            </div>
            <span className="text-[11px] font-mono text-neutral-400 ml-2 truncate max-w-[200px] sm:max-w-md">
              {productName} — UI Preview{version ? ` (v${version})` : ""}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-neutral-400">
              {activeIndex + 1} / {validScreenshots.length}
            </span>
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="p-1 rounded hover:bg-[#1f2431] text-neutral-400 hover:text-white transition-colors"
              title="Fullscreen Preview"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Main Display Image */}
        <div
          onClick={() => setIsLightboxOpen(true)}
          className="group relative aspect-[16/10] w-full cursor-zoom-in bg-[#08090c] flex items-center justify-center overflow-hidden select-none"
        >
          <img
            src={activeImage}
            alt={`${productName} Screenshot ${activeIndex + 1}`}
            className="w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.01]"
          />

          {/* Navigation Arrows */}
          {validScreenshots.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 backdrop-blur-md text-white/80 hover:text-white hover:bg-black/90 border border-white/10 transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 backdrop-blur-md text-white/80 hover:text-white hover:bg-black/90 border border-white/10 transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Click to expand hint overlay */}
          <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-[4px] bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-mono text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center gap-1.5">
            <Maximize2 className="w-3 h-3" />
            <span>{lang === "id" ? "Klik untuk memperbesar" : "Click to expand"}</span>
          </div>
        </div>
      </div>

      {/* Thumbnails Filmstrip Carousel */}
      {validScreenshots.length > 1 && (
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 pt-1 scrollbar-thin scrollbar-thumb-[#232938]">
          {validScreenshots.map((shot, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative shrink-0 w-24 sm:w-28 aspect-[16/10] rounded-[4px] overflow-hidden border transition-all ${
                  isActive
                    ? "border-blue-500 ring-2 ring-blue-500/30 shadow-lg"
                    : "border-[#1e232e] opacity-60 hover:opacity-100 hover:border-[#333a4a]"
                }`}
              >
                <img
                  src={shot}
                  alt={`Thumb ${idx + 1}`}
                  className="w-full h-full object-cover object-top"
                />
                <span className="absolute bottom-1 right-1 text-[9px] font-mono bg-black/80 px-1 rounded text-neutral-300">
                  {idx + 1}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 select-none"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Screenshot Title info */}
          <div className="absolute top-4 left-4 z-50 flex items-center gap-2 text-white text-xs font-mono bg-black/60 px-3 py-1.5 rounded-md border border-white/10">
            <span>{productName}</span>
            <span className="text-neutral-400">•</span>
            <span className="text-neutral-400">
              {activeIndex + 1} of {validScreenshots.length}
            </span>
          </div>

          {/* Lightbox Main Image */}
          <div
            className="relative max-w-6xl max-h-[85vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage}
              alt={`${productName} fullscreen`}
              className="max-h-[85vh] w-auto max-w-full rounded-md shadow-2xl border border-[#2a3040] object-contain"
            />

            {/* Lightbox navigation buttons */}
            {validScreenshots.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/80 hover:bg-black text-white border border-white/15 transition-all shadow-xl"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/80 hover:bg-black text-white border border-white/15 transition-all shadow-xl"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
