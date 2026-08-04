import { Check, ExternalLink, CreditCard, WalletCards, Landmark, Infinity as InfinityIcon } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";

export const metadata = {
  title: "Comparador de maquininhas",
  description: "Compare opções de maquininhas para pequenos negócios.",
};

const providers = [
  {
    name: "Ton",
    highlight: "Recomendada",
    description: "Maquininhas sem aluguel, conta digital e opções para diferentes perfis de venda.",
    recommended: true,
    icon: CreditCard,
    accent: "from-emerald-500 to-green-700",
    href: "/ton",
    button: "Ver detalhes da Ton",
  },
  {
    name: "Mercado Pago",
    highlight: "Em análise",
    description: "Ecossistema integrado com conta, link de pagamento e soluções para pequenos negócios.",
    recommended: false,
    icon: WalletCards,
    accent: "from-sky-400 to-blue-700",
    href: "#",
    button: "Em breve",
  },
  {
    name: "InfinitePay",
    highlight: "Em análise",
    description: "Soluções digitais, recebimentos rápidos e recursos para empreendedores.",
    recommended: false,
    icon: InfinityIcon,
    accent: "from-indigo-500 to-violet-700",
    href: "#",
    button: "Em breve",
  },
  {
    name: "PagBank",
    highlight: "Em análise",
    description: "Maquininhas, conta digital e serviços financeiros para vender e receber.",
    recommended: false,
    icon: Landmark,
    accent: "from-lime-400 to-emerald-700",
    href: "#",
    button: "Em breve",
  },
];

export default function ComparadorPage() {
  return (
    <section className="relative py-16 sm:py-20">
      <Container>
        <div className="relative max-w-3xl">
          <Badge>Comparador</Badge>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Compare maquininhas para o seu negócio
          </h1>
          <p className="mt-5 text-lg leading-8 text-zinc-600">
            Compare recursos, recebimento e propostas em uma visão simples. Confirme sempre taxas e condições no site oficial antes da contratação.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {providers.map((provider) => {
            const Icon = provider.icon;
            return (
              <article
                key={provider.name}
                className={`tech-surface group min-h-[310px] rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(16,185,129,.16)] sm:p-7 ${
                  provider.recommended ? "ring-2 ring-emerald-300" : ""
                }`}
              >
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold">{provider.name}</h2>
                      <p className="mt-2 text-sm font-semibold text-emerald-700">{provider.highlight}</p>
                    </div>
                    <div className={`grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${provider.accent} text-white shadow-lg`}>
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>

                  <p className="mt-5 max-w-xl leading-7 text-zinc-600">{provider.description}</p>

                  <ul className="mt-5 grid gap-3 text-sm text-zinc-700">
                    <li className="flex gap-2"><Check size={18} className="shrink-0 text-emerald-600" /> Estrutura preparada para comparação detalhada</li>
                    <li className="flex gap-2"><Check size={18} className="shrink-0 text-emerald-600" /> Dados oficiais serão atualizados por modalidade</li>
                  </ul>

                  <div className="mt-auto pt-7">
                    {provider.recommended ? (
                      <ButtonLink href={provider.href}>{provider.button} <ExternalLink size={16} /></ButtonLink>
                    ) : (
                      <ButtonLink href="#" variant="outline">{provider.button}</ButtonLink>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-xs leading-5 text-zinc-500">
          Aviso: a FiberStack pode receber comissão por compras realizadas por links de indicação. Isso não aumenta o preço para o usuário. Taxas, descontos e condições podem mudar.
        </p>
      </Container>
    </section>
  );
}
