import type { ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base = "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
const variants: Record<Variant, string> = {
  primary: "bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)]",
  secondary: "bg-black text-white hover:bg-zinc-800",
  outline: "border border-[var(--border)] bg-white text-black hover:bg-zinc-50",
  ghost: "text-zinc-700 hover:bg-zinc-100",
};
const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-[52px] px-6 text-base",
};

export function buttonClassName(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

export function Button({ variant = "primary", size = "md", className, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size }) {
  return <button className={buttonClassName(variant, size, className)} {...props} />;
}

export function ButtonLink({ href, children, variant = "primary", size = "md", className, target }: { href: string; children: React.ReactNode; variant?: Variant; size?: Size; className?: string; target?: string }) {
  return <Link href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined} className={buttonClassName(variant, size, className)}>{children}</Link>;
}
