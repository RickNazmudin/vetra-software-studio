import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "link";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer rounded-[4px]";

    const variants = {
      primary:
        "bg-white text-neutral-950 hover:bg-neutral-200 active:bg-neutral-300 font-semibold shadow-xs",
      secondary:
        "bg-[#1a1d24] text-neutral-200 hover:bg-[#262b35] hover:text-white border border-[#2d323f]",
      outline:
        "border border-[#2a2e39] text-neutral-300 hover:bg-[#16181f] hover:text-white hover:border-[#3e4555]",
      ghost:
        "text-neutral-400 hover:text-neutral-100 hover:bg-[#16181f]",
      danger:
        "bg-red-950/60 text-red-300 border border-red-800/80 hover:bg-red-900/80 hover:text-red-100",
      link: "text-neutral-300 underline-offset-4 hover:underline hover:text-white p-0 h-auto",
    };

    const sizes = {
      sm: "h-8 px-3 text-xs tracking-tight",
      md: "h-9 px-4 text-xs tracking-tight",
      lg: "h-11 px-5 text-sm tracking-tight",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
