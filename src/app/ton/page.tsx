import { ArrowRight, BadgeCheck, CreditCard, ExternalLink, ShieldCheck, WalletCards } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Maquininhas Ton com desconto | FiberStack",
  description: "Conheça as maquininhas Ton, veja os principais benefícios e acesse a oferta pelo link de indicação da FiberStack.",
};

const benefits = [
  { icon: WalletCards, title: "Sem aluguel", description: "Você adquire a maquininha e não paga mensalidade de aluguel." },
  { icon: ShieldCheck, title: "Garantia vitalícia", description: "Condição divulgada pela Ton para as maquininhas elegíveis." },
  { icon: CreditCard, title: "Taxas competitivas", description: "As campanhas podem oferecer taxas promocionais a partir de 0,57%." },
  { icon: BadgeCheck, title: "Desconto na adesão", description: "O link pode liberar desconto promocional de até 72%, conforme a campanha vigente." },
];

export default function TonPage() {
  return (
    <>
      <section className="overflow-hidden border-b border-zinc-200 bg-[radial-gradient(circle_at_top_right,rgba(0,200,83,.16),transparent_40%)] py-16 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
          <div>
            <Badge>Oferta de parceiro</Badge>
            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-[-.04em] text-zinc-950 sm:text-6xl">Maquininha Ton com desconto pelo link da FiberStack</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">Veja os principais benefícios, confira as condições oficiais e escolha o modelo mais adequado ao seu negócio.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={siteConfig.tonReferralUrl} target="_blank" size="lg">Ver oferta oficial <ExternalLink size={18} /></ButtonLink>
              <ButtonLink href="/comparador-maquininhas" variant="outline" size="lg">Comparar maquininhas <ArrowRight size={18} /></ButtonLink>
            </div>
            <p className="mt-4 text-xs leading-5 text-zinc-500">A FiberStack pode receber comissão quando uma compra é concluída pelo link indicado. Isso não aumenta o preço para você.</p>
          </div>
          <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-[0_30px_80px_rgba(0,0,0,.1)]">
            <div className="rounded-2xl bg-zinc-950 p-6 text-white">
              <p className="text-sm text-emerald-400">Resumo da oferta</p>
              <p className="mt-2 text-2xl font-bold">Venda sem aluguel e com suporte para começar</p>
              <div className="mt-6 grid gap-3 text-sm text-zinc-200">
                <div className="rounded-xl bg-white/10 p-4">Desconto promocional de até 72% na adesão</div>
                <div className="rounded-xl bg-white/10 p-4">Taxas promocionais a partir de 0,57%</div>
                <div className="rounded-xl bg-white/10 p-4">Garantia vitalícia em modelos elegíveis</div>
                <div className="rounded-xl bg-white/10 p-4">Sem cobrança de aluguel</div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-emerald-700">Benefícios principais</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Uma solução simples para receber pagamentos</h2>
            <p className="mt-4 text-zinc-600">As condições variam por plano, modelo e campanha. Sempre confira os dados finais na página oficial antes de comprar.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {benefits.map(({ icon: Icon, title, description }) => (
              <Card key={title}>
                <div className="grid size-11 place-items-center rounded-xl bg-emerald-50 text-emerald-700"><Icon size={22} /></div>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-zinc-600">{description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      <section className="pb-20">
        <Container>
          <div className="rounded-3xl bg-zinc-950 px-6 py-14 text-center text-white sm:px-12">
            <h2 className="text-3xl font-bold sm:text-4xl">Confira o preço e o desconto disponíveis hoje</h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">A página oficial mostra os modelos, valores, taxas e condições atualizadas para sua compra.</p>
            <div className="mt-8"><ButtonLink href={siteConfig.tonReferralUrl} target="_blank" size="lg">Acessar oferta da Ton <ExternalLink size={18} /></ButtonLink></div>
          </div>
        </Container>
      </section>
    </>
  );
}
