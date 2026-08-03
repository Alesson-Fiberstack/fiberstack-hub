import Link from "next/link";

export function Logo() {
  return <Link href="/" className="inline-flex items-center gap-2 text-lg font-extrabold tracking-tight text-zinc-950" aria-label="FiberStack - início">
    <span className="grid size-8 place-items-center rounded-lg bg-black text-white"><span className="size-2.5 rounded-sm bg-[var(--primary)]" /></span>
    FiberStack
  </Link>;
}
