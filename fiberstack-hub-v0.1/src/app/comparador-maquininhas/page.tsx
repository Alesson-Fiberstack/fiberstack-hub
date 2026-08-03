import { Check, ExternalLink } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { providers } from "@/data/placeholders";
import { siteConfig } from "@/config/site";

export const metadata = { title: "Comparador de maquininhas", description: "Compare opções de maquininhas para pequenos negócios." };

export default function ComparadorPage() {
  return <section className="py-16 sm:py-20"><Container><div className="max-w-3xl"><Badge>Comparador</Badge><h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">Compare maquininhas para o seu negócio</h1><p className="mt-5 text-lg leading-8 text-zinc-600">Visão inicial de recursos e propostas. Confirme sempre taxas e condições no site oficial antes da contratação.</p></div><div className="mt-10 grid gap-5 md:grid-cols-2">{providers.map((provider) => <Card key={provider.name} className={provider.recommended ? "border-emerald-300 ring-2 ring-emerald-100" : ""}><div className="flex items-start justify-between gap-4"><div><h2 className="text-2xl font-bold">{provider.name}</h2><p className="mt-2 text-sm font-semibold text-emerald-700">{provider.highlight}</p></div>{provider.recommended ? <Badge>Recomendada</Badge> : null}</div><p className="mt-5 leading-7 text-zinc-600">{provider.description}</p><ul className="mt-5 grid gap-3 text-sm text-zinc-700"><li className="flex gap-2"><Check size={18} className="text-emerald-600" /> Estrutura preparada para comparação detalhada</li><li className="flex gap-2"><Check size={18} className="text-emerald-600" /> Dados serão atualizados após validação oficial</li></ul><div className="mt-7">{provider.name === "Ton" ? <ButtonLink href={siteConfig.tonReferralUrl} target="_blank">Ver oferta da Ton <ExternalLink size={16} /></ButtonLink> : <ButtonLink href="#" variant="outline">Em breve</ButtonLink>}</div></Card>)}</div><p className="mt-8 text-xs leading-5 text-zinc-500">Aviso: a FiberStack pode receber comissão por compras realizadas por links de indicação. Isso não aumenta o preço para o usuário. Taxas, descontos e condições podem mudar.</p></Container></section>;
}
