import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Calculator,
  CreditCard,
  Sparkles,
  WandSparkles,
} from "lucide-react";

import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Central de ferramentas",
  description:
    "Compare maquininhas, simule taxas e acesse ferramentas digitais da FiberStack.",
};

const tools = [
  {
    title: "Comparador de maquininhas",
    description:
      "Compare taxas, recebimento e recursos para encontrar a opção mais adequada ao seu negócio.",
    href: "/comparador-maquininhas",
    icon: CreditCard,
    label: "Comparar agora",
    visual: "machine",
  },
  {
    title: "Calculadora de taxas",
    description:
      "Descubra o desconto da operação e quanto você recebe líquido em cada empresa.",
    href: "/calculadora-taxas",
    icon: Calculator,
    label: "Simular taxas",
    visual: "calculator",
  },
  {
    title: "Ferramentas de IA",
    description:
      "Recursos inteligentes para conteúdo, atendimento, produtividade e vendas.",
    href: "#proximamente",
    icon: Sparkles,
    label: "Ver novidades",
    visual: "ai",
  },
] as const;

function CardVisual({ visual }: { visual: (typeof tools)[number]["visual"] }) {
  if (visual === "machine") {
    return (
      <div className="pointer-events-none absolute inset-x-0 bottom-14 h-52 overflow-hidden">
        <div className="absolute bottom-1 right-4 h-36 w-28 rotate-[-10deg] rounded-[1.6rem] border border-white/90 bg-gradient-to-br from-zinc-700 via-zinc-900 to-black p-3 shadow-2xl sm:right-8 sm:h-40 sm:w-32">
          <div className="flex h-14 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 shadow-inner">
            <CreditCard className="h-7 w-7" />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-1.5">
            {Array.from({ length: 9 }).map((_, index) => (
              <span key={index} className="h-2.5 rounded-sm bg-zinc-500/80" />
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 right-24 h-20 w-36 rotate-6 rounded-xl border border-white/80 bg-gradient-to-br from-emerald-600 to-emerald-900 shadow-xl sm:right-28">
          <span className="absolute left-4 top-4 h-3 w-5 rounded-sm bg-amber-200/80" />
        </div>
      </div>
    );
  }

  if (visual === "calculator") {
    return (
      <div className="pointer-events-none absolute inset-x-0 bottom-14 h-52 overflow-hidden">
        <div className="absolute bottom-0 right-3 w-44 rotate-[-7deg] rounded-[1.8rem] border border-white/90 bg-gradient-to-br from-white/95 to-zinc-200/90 p-4 shadow-2xl backdrop-blur sm:right-7 sm:w-48">
          <div className="rounded-xl border border-zinc-300 bg-zinc-100 px-3 py-3 text-right font-mono text-xl font-bold text-zinc-700 shadow-inner">
            1.234,56
          </div>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {Array.from({ length: 16 }).map((_, index) => (
              <span
                key={index}
                className={`h-7 rounded-md border border-white/80 shadow-sm ${
                  index === 3 || index === 7 || index === 11 || index === 15
                    ? "bg-emerald-300"
                    : index === 12
                      ? "bg-amber-200"
                      : "bg-white/90"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-14 h-52 overflow-hidden">
      <div className="absolute bottom-4 right-8 flex h-36 w-36 items-center justify-center rounded-[2rem] bg-gradient-to-br from-cyan-300 via-violet-400 to-fuchsia-500 opacity-90 shadow-[0_25px_80px_rgba(124,58,237,.45)] sm:right-12">
        <div className="absolute inset-4 rotate-45 rounded-3xl border border-white/70" />
        <div className="absolute inset-8 -rotate-12 rounded-2xl border border-white/80" />
        <WandSparkles className="relative h-14 w-14 text-white drop-shadow-lg" />
      </div>
      <div className="absolute bottom-0 right-5 h-28 w-44 rounded-full bg-cyan-300/30 blur-3xl" />
    </div>
  );
}

export default function ToolsPage() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(16,185,129,.09),transparent_34%),radial-gradient(circle_at_20%_75%,rgba(59,130,246,.07),transparent_28%)]" />

      <Container>
        <div className="relative">
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-600">
            Recursos FiberStack
          </span>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Central de ferramentas
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
            Ferramentas práticas para comparar opções, calcular custos e tomar decisões melhores para o seu negócio.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {tools.map(({ icon: Icon, ...tool }) => (
              <article
                key={tool.title}
                id={tool.href.startsWith("#") ? tool.href.slice(1) : undefined}
                className="group relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/90 bg-white/70 p-6 shadow-[0_24px_70px_rgba(24,24,27,.10)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(16,185,129,.16)] sm:p-7"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white/85 to-emerald-50/55" />
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-emerald-200/25 blur-3xl" />
                <div className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#18181b_1px,transparent_1px)] [background-size:13px_13px]" />

                <div className="relative z-10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-200 bg-white/90 text-emerald-700 shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 max-w-[17rem] text-2xl font-bold tracking-tight">
                    {tool.title}
                  </h2>
                  <p className="mt-3 max-w-[19rem] leading-6 text-zinc-600">
                    {tool.description}
                  </p>
                </div>

                <CardVisual visual={tool.visual} />

                <div className="absolute inset-x-6 bottom-6 z-20 sm:inset-x-7">
                  {tool.href.startsWith("#") ? (
                    <span className="flex h-12 w-full items-center justify-between rounded-2xl border border-zinc-200 bg-white/90 px-5 text-sm font-semibold text-zinc-500 shadow-sm backdrop-blur">
                      Em breve
                      <Sparkles className="h-4 w-4" />
                    </span>
                  ) : (
                    <Link
                      href={tool.href}
                      className="flex h-12 w-full items-center justify-between rounded-2xl border border-zinc-200 bg-white/95 px-5 text-sm font-bold text-zinc-900 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-500 hover:text-white"
                    >
                      {tool.label}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
