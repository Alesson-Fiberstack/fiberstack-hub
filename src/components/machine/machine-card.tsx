import { Check, ExternalLink } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export type MachineCardProps = {
  name: string;
  profile: string;
  highlight: string;
  features: string[];
  href: string;
  recommended?: boolean;
};

export function MachineCard({
  name,
  profile,
  highlight,
  features,
  href,
  recommended = false,
}: MachineCardProps) {
  return (
    <Card
      className={
        recommended
          ? "relative border-emerald-300 ring-2 ring-emerald-100"
          : "relative"
      }
    >
      {recommended ? (
        <span className="absolute right-5 top-5 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
          Melhor custo-benefício
        </span>
      ) : null}

      <p className="text-sm font-bold uppercase tracking-[.14em] text-emerald-300">
        {profile}
      </p>
      <h3 className="mt-3 text-2xl font-bold text-white">{name}</h3>
      <p className="mt-2 font-semibold text-slate-300">{highlight}</p>

      <ul className="mt-6 grid gap-3 text-sm text-slate-400">
        {features.map((feature) => (
          <li key={feature} className="flex gap-2">
            <Check className="mt-0.5 shrink-0 text-emerald-400" size={18} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-7">
        <ButtonLink href={href} target="_blank">
          Ver oferta <ExternalLink size={16} />
        </ButtonLink>
      </div>
    </Card>
  );
}
