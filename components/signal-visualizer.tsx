"use client";

import * as React from "react";
import { Play, Pause } from "lucide-react";

export function SignalVisualizer() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const [playing, setPlaying] = React.useState<boolean>(true);
  const [secs, setSecs] = React.useState<number>(161);
  const [activeStation, setActiveStation] = React.useState<string>("VETRA CORE // 01");

  const stations = [
    { id: "01", name: "VETRA CORE // 01", sub: "Engine v2.4 · Live Stream", speed: 2.2 },
    { id: "02", name: "LOCAL RUNTIME // 02", sub: "Offline Standalone · 320k", speed: 1.4 },
    { id: "03", name: "LICENSE MESH // 03", sub: "Zero Cloud Lock-in", speed: 3.1 },
  ];

  React.useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const g = cv.getContext("2d");
    if (!g) return;

    let W = 0, H = 0, raf = 0, t = 0;
    const BARS = 56;
    let seed = 991;
    const rnd = () => (seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296;
    const base = Array.from({ length: BARS }, () => 0.18 + rnd() * 0.82);

    function size() {
      if (!cv) return;
      const r = cv.getBoundingClientRect();
      W = cv.width = Math.max(2, Math.round(r.width));
      H = cv.height = Math.max(2, Math.round(r.height));
    }

    function draw() {
      if (!g) return;
      g.clearRect(0, 0, W, H);
      const bw = W / BARS;
      for (let i = 0; i < BARS; i++) {
        const live = playing ? (0.35 + 0.65 * Math.abs(Math.sin(t * 2.2 + i * 0.34))) : 0.16;
        const h = Math.max(2, base[i] * live * H);
        g.fillStyle = i / BARS < 0.45 ? "rgba(244,245,246,.95)" : "rgba(244,245,246,.38)";
        g.fillRect(i * bw, (H - h) / 2, Math.max(1, bw - 2), h);
      }
    }

    function frame() {
      raf = 0;
      if (document.hidden) return;
      if (playing) {
        t += 0.016;
        setSecs((prev) => prev + 0.016);
      }
      draw();
      go();
    }

    function go() {
      if (!raf) raf = requestAnimationFrame(frame);
    }

    window.addEventListener("resize", () => {
      size();
      draw();
    });

    size();
    go();

    return () => {
      cancelAnimationFrame(raf);
    };
  }, [playing]);

  const mins = Math.floor(secs / 60);
  const remSecs = Math.floor(secs % 60);
  const timeStr = `${String(mins).padStart(2, "0")}:${String(remSecs).padStart(2, "0")}`;

  const currentStation = stations.find((s) => s.name === activeStation) || stations[0];

  return (
    <div className="w-full max-w-lg space-y-3 font-mono">
      {/* Main Nullwave Tactile Player Bar */}
      <div className="bg-[#12141A] text-[#F4F5F6] p-4 sm:p-5 grid grid-cols-[auto_1fr_auto] gap-4 sm:gap-5 items-center shadow-xl border border-black/20">
        {/* Play / Pause circular hardware button */}
        <button
          type="button"
          onClick={() => setPlaying(!playing)}
          className="w-11 h-11 rounded-full bg-[#F4F5F6] text-[#12141A] flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 transition-transform shrink-0"
          aria-label={playing ? "Pause transmission" : "Play transmission"}
        >
          {playing ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
        </button>

        {/* Metadata & Canvas Waveform */}
        <div className="min-w-0">
          <div className="flex items-baseline justify-between mb-1">
            <b className="font-sans font-bold text-xs uppercase tracking-wider truncate text-[#F4F5F6]">
              {currentStation.name}
            </b>
            <span className="text-[9px] uppercase tracking-widest text-[#F4F5F6]/55 shrink-0 ml-2 hidden sm:inline">
              320 KBPS AAC
            </span>
          </div>
          <div className="text-[9.5px] uppercase tracking-widest text-[#F4F5F6]/55 mb-2 truncate">
            {currentStation.sub}
          </div>
          <canvas ref={canvasRef} className="w-full h-8 block" />
        </div>

        {/* Live Elapsed Time */}
        <div className="text-right shrink-0">
          <span className="text-xs tracking-wider text-[#F4F5F6]/60 font-mono tabular-nums">
            {timeStr}
          </span>
          <div className="flex items-center gap-1 mt-1 justify-end">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5484D] animate-live"></span>
            <span className="text-[8.5px] uppercase tracking-widest text-[#FF6B6B]">ON AIR</span>
          </div>
        </div>
      </div>

      {/* Tactile Station Switcher Row */}
      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[rgba(18,20,26,0.6)]">
        <span className="text-[9px] text-[var(--mid)] mr-1">BUS:</span>
        {stations.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setActiveStation(s.name)}
            className={`px-2.5 py-1 text-[9.5px] font-mono transition-all border cursor-pointer ${
              activeStation === s.name
                ? "bg-[#12141A] text-[#F4F5F6] border-[#12141A] font-bold"
                : "bg-transparent text-[rgba(18,20,26,0.6)] border-[rgba(18,20,26,0.14)] hover:text-[#12141A] hover:bg-black/5"
            }`}
          >
            {s.id} {s.name.split(" ")[0]}
          </button>
        ))}
      </div>
    </div>
  );
}

