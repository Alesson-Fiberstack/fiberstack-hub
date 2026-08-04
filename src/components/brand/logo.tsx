import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="FiberStack - início">
      <span className="grid size-10 place-items-center rounded-2xl border border-white/10 bg-white/[.04] shadow-[0_0_30px_rgba(0,215,200,.12)]">
        <Image src="/brand/fiberstack-mark.svg" width={31} height={31} alt="" priority />
      </span>
      <span className="leading-none">
        <span className="block text-lg font-extrabold tracking-[-.04em] text-white">Fiber<span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Stack</span></span>
        <span className="mt-1 block text-[8px] font-bold uppercase tracking-[.34em] text-slate-500">Soluções</span>
      </span>
    </Link>
  );
}
