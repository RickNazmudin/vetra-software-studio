import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "success" | "warning";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variants = {
    default:
      "bg-neutral-800 text-neutral-200 border-neutral-700",
    secondary:
      "bg-[#16181f] text-neutral-400 border-[#262b35]",
    outline:
      "border-[#303644] text-neutral-300 bg-transparent",
    success:
      "bg-emerald-950/40 text-emerald-400 border-emerald-800/60",
    warning:
      "bg-amber-950/40 text-amber-300 border-amber-800/60",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-2 py-0.5 text-[11px] font-mono tracking-tight uppercase border rounded-[3px]",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
