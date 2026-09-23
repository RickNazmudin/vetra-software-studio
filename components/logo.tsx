import * as React from "react";
import Link from "next/link";

interface VetraLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  subtitle?: string;
  className?: string;
  href?: string;
  dark?: boolean;
}

export function VetraMark({
  size = 24,
  className = "",
  dark = false,
}: {
  size?: number;
  className?: string;
  dark?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="Vetra Software Studio Logo"
    >
      {/* Outer Hex/Chamfer Plate */}
      <rect 
        x="1" 
        y="1" 
        width="30" 
        height="30" 
        rx="3" 
        fill={dark ? "#12141A" : "#12141A"} 
        stroke={dark ? "#FF6B6B" : "#12141A"} 
        strokeWidth="1.5" 
      />
      
      {/* Precision Coral Signal V-Wave */}
      <path
        d="M7 8.5L12 8.5L16 19L13.5 19L7 8.5Z"
        fill="#FF6B6B"
      />
      <path
        d="M25 8.5L20 8.5L16 19L18.5 19L25 8.5Z"
        fill="#E5484D"
      />
      
      {/* Center Signal Diode Core */}
      <circle cx="16" cy="10" r="2.2" fill="#FF6B6B" />
      <circle cx="16" cy="10" r="1" fill="#12141A" />
      
      {/* Monospace Calibration Tick */}
      <line x1="16" y1="22" x2="16" y2="25" stroke="#FF6B6B" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

export function VetraLogo({
  size = "md",
  showText = true,
  subtitle = "SOFTWARE STUDIO",
  className = "",
  href = "/",
  dark = false,
}: VetraLogoProps) {
  const iconSizes = {
    sm: 24,
    md: 28,
    lg: 34,
    xl: 42,
  };

  const textStyles = {
    sm: { title: "text-xs tracking-[0.22em]", sub: "text-[8px] tracking-[0.2em]" },
    md: { title: "text-sm tracking-[0.22em]", sub: "text-[8.5px] tracking-[0.2em]" },
    lg: { title: "text-base tracking-[0.22em]", sub: "text-[9.5px] tracking-[0.2em]" },
    xl: { title: "text-lg tracking-[0.22em]", sub: "text-[10.5px] tracking-[0.2em]" },
  };

  const textColor = dark ? "text-[#F4F5F6]" : "text-[#12141A]";
  const subColor = dark ? "text-[#FF6B6B]" : "text-[rgba(18,20,26,0.65)]";

  const content = (
    <div className={`inline-flex items-center gap-2.5 group select-none ${className}`}>
      <VetraMark size={iconSizes[size]} dark={dark} className="transition-transform group-hover:scale-105 duration-200" />
      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1">
            <span className={`font-sans font-bold uppercase ${textColor} ${textStyles[size].title}`}>
              VETRA
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B6B] animate-live"></span>
          </div>
          {subtitle && (
            <span className={`font-mono uppercase font-semibold -mt-0.5 ${subColor} ${textStyles[size].sub}`}>
              {subtitle}
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
}

