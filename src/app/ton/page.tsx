import {
  ArrowRight,
  BadgeCheck,
  CreditCard,
  ExternalLink,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FAQ, type FAQItem } from "@/components/machine/faq";
import { MachineCard, type MachineCardProps } from "@/components/machine/machine-card";
import {
  MachineComparison,
  type ComparisonRow,
} from "@/components/machine/machine-comparison";
import { OfferCTA } from "@/components/machine/offer-cta";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Maquininhas Ton com desconto | FiberStack",
  description:
    "Conheça os modelos de maquininhas Ton, compare perfis de uso e acesse a oferta pelo link de indicação da FiberStack.",
};

const benefits = [
  {
    icon: WalletCards,
    title: "Sem aluguel",
    description:
      "Você adquire a maquininha e não paga mensalidade de aluguel.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia vitalícia",
    description:
      "Condição divulgada pela Ton para as maquininhas elegíveis.",
  },
  {
    icon: CreditCard,
    title: "Taxas competitivas",
    description:
      "As campanhas podem oferecer taxas promocionais a partir de 0,57%.",
  },
  {
    icon: BadgeCheck,
    title: "Desconto na adesão",
    description:
      "O link pode liberar desconto promocional de até 72%, conforme a campanha vigente.",
  },
];

const machines: MachineCardProps[] = [
  {
    name: "T1",
    profile: "Para começar",
    highlight: "Modelo compacto para vendas ocasionais.",
    features: [
      "Uso simples no dia a dia",
      "Boa opção para autônomos",
      "Consulte conectividade e condições na oferta oficial",
    ],
    href: siteConfig.tonReferralUrl,
  },
  {
    name: "T2+",
    profile: "Pequenos negócios",
    highlight: "Equilíbrio entre mobilidade e praticidade.",
    features: [
      "Indicada para rotina de vendas",
      "Formato portátil",
      "Consulte recursos do modelo na página oficial",
    ],
    href: siteConfig.tonReferralUrl,
    recommended: true,
  },
  {
    name: "T3",
    profile: "Maior volume de vendas",
    highlight: "Estrutura mais completa para balcão e atendimento.",
    features: [
      "Pensada para uso frequente",
      "Opção para estabelecimentos físicos",
      "Consulte impressão e conectividade antes da compra",
    ],
    href: siteConfig.tonReferralUrl,
  },
  {
    name: "T3 Smart",
    profile: "Operação completa",
    highlight: "Modelo inteligente para negócios que querem mais recursos.",
    features: [
      "Tela ampla e experiência moderna",
      "Indicada para operação profissional",
      "Confira aplicativos e funções disponíveis na oferta",
    ],
    href: siteConfig.tonReferralUrl,
  },
];

const comparisonRows: ComparisonRow[] = [
  {
    label: "Perfil indicado",
    values: [
      "Vendas ocasionais",
      "Pequeno negócio",
      "Uso frequente",
      "Operação completa",
    ],
  },
  {
    label: "Mobilidade",
    values: ["Alta", "Alta", "Média", "Média"],
  },
  {
    label: "Estrutura",
    values: ["Essencial", "Intermediária", "Completa", "Inteligente"],
  },
  {
    label: "Melhor para",
    values: ["Autônomos", "Rotina diária", "Loja física", "Negócio profissional"],
  },
];

const faqItems: FAQItem[] = [
  {
    question: "A Ton cobra aluguel mensal?",
    answer:
      "A comunicação da Ton destaca a compra da maquininha sem cobrança de aluguel. Confirme as condições do modelo e da campanha antes de finalizar.",
  },
  {
    question: "Preciso ter CNPJ para comprar?",
    answer:
      "A disponibilidade para CPF ou CNPJ pode depender do cadastro e do produto. A página oficial informa os requisitos atualizados.",
  },
  {
    question: "Qual modelo é melhor para quem está começando?",
    answer:
      "Modelos mais simples costumam atender vendas ocasionais, enquanto modelos completos fazem mais sentido para maior volume. Compare sua rotina, conectividade e necessidade de impressão.",
  },
  {
    question: "Quanto tempo demora para chegar?",
    answer:
      "O prazo varia conforme endereço, estoque e modalidade de envio. O prazo estimado aparece durante a compra na página oficial.",
  },
  {
    question: "As taxas de 0,57% são permanentes?",
    answer:
      "Taxas promocionais dependem do plano, campanha, modalidade de pagamento e período de recebimento. Consulte a tabela atualizada antes da contratação.",
  },
  {
    question: "O desconto do link é garantido?",
    answer:
      "O link direciona para a campanha disponível no momento. Percentuais, preços e modelos podem mudar sem aviso prévio.",
  },
];

export default function TonPage() {
  return (
    <>
      <section className="overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(0,200,83,.16),transparent_40%)] py-16 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
          <div>
            <Badge>Oferta de parceiro</Badge>
            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-[-.04em] text-white sm:text-6xl">
              Maquininhas Ton com desconto pelo link da FiberStack
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Compare os perfis dos principais modelos, confira os benefícios e
              acesse as condições oficiais antes de escolher.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={siteConfig.tonReferralUrl}
                target="_blank"
                size="lg"
              >
                Ver oferta oficial <ExternalLink size={18} />
              </ButtonLink>
              <ButtonLink
                href="/comparador-maquininhas"
                variant="outline"
                size="lg"
              >
                Comparar marcas <ArrowRight size={18} />
              </ButtonLink>
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              A FiberStack pode receber comissão quando uma compra é concluída
              pelo link indicado. Isso não aumenta o preço para você.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[.035] p-5 shadow-[0_30px_80px_rgba(0,0,0,.1)]">
            <div className="rounded-2xl bg-[#03070a] p-6 text-white">
              <p className="text-sm text-emerald-400">Resumo da oferta</p>
              <p className="mt-2 text-2xl font-bold">
                Venda sem aluguel e escolha o modelo certo para sua rotina
              </p>
              <div className="mt-6 grid gap-3 text-sm text-zinc-200">
                <div className="rounded-xl bg-white/[.035]/10 p-4">
                  Desconto promocional de até 72% na adesão
                </div>
                <div className="rounded-xl bg-white/[.035]/10 p-4">
                  Taxas promocionais a partir de 0,57%
                </div>
                <div className="rounded-xl bg-white/[.035]/10 p-4">
                  Garantia vitalícia em modelos elegíveis
                </div>
                <div className="rounded-xl bg-white/[.035]/10 p-4">
                  Sem cobrança de aluguel
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-emerald-300">
              Benefícios principais
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Uma solução simples para receber pagamentos
            </h2>
            <p className="mt-4 text-slate-400">
              As condições variam por plano, modelo e campanha. Confirme os
              dados finais na página oficial antes de comprar.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {benefits.map(({ icon: Icon, title, description }) => (
              <Card key={title}>
                <div className="grid size-11 place-items-center rounded-xl bg-emerald-400/10 text-emerald-300">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white/[.02] py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-emerald-300">
              Escolha seu modelo
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Uma opção para cada fase do negócio
            </h2>
            <p className="mt-4 text-slate-400">
              Os nomes, recursos e disponibilidade devem ser confirmados no
              catálogo oficial antes da compra.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {machines.map((machine) => (
              <MachineCard key={machine.name} {...machine} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-emerald-300">
              Comparação rápida
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Entenda qual perfil combina com cada modelo
            </h2>
          </div>

          <div className="mt-10">
            <MachineComparison
              columns={["T1", "T2+", "T3", "T3 Smart"]}
              rows={comparisonRows}
            />
          </div>
        </Container>
      </section>

      <section className="bg-white/[.02] py-16 sm:py-20">
        <Container>
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-emerald-300">
              Dúvidas frequentes
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              O que saber antes de comprar
            </h2>
          </div>

          <FAQ items={faqItems} />
        </Container>
      </section>

      <OfferCTA
        title="Confira o preço e o desconto disponíveis hoje"
        description="A página oficial apresenta os modelos, valores, taxas, prazo de entrega e condições atualizadas."
        href={siteConfig.tonReferralUrl}
        buttonLabel="Quero conferir a oferta da Ton"
      />
    </>
  );
}
