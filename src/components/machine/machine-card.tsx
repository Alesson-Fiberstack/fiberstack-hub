import { Check, ExternalLink } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export type MachineCardProps = {
  name: string;
  profile: string;
  highlight: string;
  features: string[];
  href: string;
};

export function MachineCard({
  name,
  profile,
  highlight,
  features,
  href,
}: MachineCardProps) {
  return (
    <Card className="relative">

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
