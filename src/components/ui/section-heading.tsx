import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, description, align = "left" }: { eyebrow?: string; title: string; description?: string; align?: "left" | "center" }) {
  return <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
    {eyebrow ? <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">{eyebrow}</p> : null}
    <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">{title}</h2>
    {description ? <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">{description}</p> : null}
  </div>;
}
