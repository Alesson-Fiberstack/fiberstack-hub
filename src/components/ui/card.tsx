import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/90 bg-white/75 p-6 shadow-[0_16px_50px_rgba(15,23,42,.08)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:shadow-[0_22px_65px_rgba(16,185,129,.12)]",
        className,
      )}
      {...props}
    />
  );
}
