import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { benefits, features } from "@/data/placeholders";

export default function Home() {
  return <>
    <section className="overflow-hidden border-b border-zinc-200 bg-[radial-gradient(circle_at_top_right,rgba(0,200,83,.13),transparent_36%)] py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
        <div><Badge><Sparkles size={13} /> FiberStack Hub</Badge><h1 className="mt-6 max-w-4xl text-5xl font-extrabold tracking-[-.045em] text-zinc-950 sm:text-6xl lg:text-7xl">Tecnologia para vender mais e trabalhar melhor.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">Ferramentas, comparativos e conteúdos objetivos para pequenos empreendedores economizarem tempo e tomarem decisões melhores.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><ButtonLink href="/comparador-maquininhas" size="lg">Comparar maquininhas <ArrowRight size={18} /></ButtonLink><ButtonLink href="/ferramentas" variant="outline" size="lg">Explorar ferramentas</ButtonLink></div></div>
        <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-[0_30px_80px_rgba(0,0,0,.1)]"><div className="rounded-2xl bg-zinc-950 p-6 text-white"><p className="text-sm text-zinc-400">Central FiberStack</p><p className="mt-2 text-2xl font-bold">Decisões melhores para o seu negócio</p><div className="mt-8 grid gap-3">{["Compare soluções", "Calcule custos", "Descubra ferramentas"].map((item) => <div key={item} className="flex items-center gap-3 rounded-xl bg-white/10 p-4"><CheckCircle2 className="text-emerald-400" size={20} />{item}</div>)}</div></div></div>
      </Container>
    </section>
    <section className="py-20"><Container><SectionHeading eyebrow="Comece por aqui" title="Ferramentas práticas para quem empreende" description="Cada recurso é criado para resolver um problema real e facilitar sua rotina." /><div className="mt-10 grid gap-5 md:grid-cols-3">{features.map(({ icon: Icon, ...feature }) => <Card key={feature.title}><div className="grid size-11 place-items-center rounded-xl bg-emerald-50 text-emerald-600"><Icon size={22} /></div><h3 className="mt-5 text-xl font-bold">{feature.title}</h3><p className="mt-3 leading-7 text-zinc-600">{feature.description}</p><Link href={feature.href} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-emerald-700">Acessar <ArrowRight size={16} /></Link></Card>)}</div></Container></section>
    <section className="bg-zinc-50 py-20"><Container><SectionHeading align="center" eyebrow="Por que usar" title="Menos dúvida. Mais resultado." /><div className="mt-10 grid gap-5 md:grid-cols-3">{benefits.map(({ icon: Icon, ...item }) => <div key={item.title} className="text-center"><div className="mx-auto grid size-12 place-items-center rounded-2xl bg-black text-white"><Icon size={22} /></div><h3 className="mt-5 text-lg font-bold">{item.title}</h3><p className="mt-2 text-zinc-600">{item.description}</p></div>)}</div></Container></section>
    <section className="py-20"><Container><div className="rounded-3xl bg-zinc-950 px-6 py-14 text-center text-white sm:px-12"><h2 className="text-3xl font-bold sm:text-4xl">Comece pela ferramenta certa.</h2><p className="mx-auto mt-4 max-w-xl text-zinc-400">Compare maquininhas e encontre uma solução adequada ao seu momento.</p><div className="mt-8"><ButtonLink href="/comparador-maquininhas" size="lg">Abrir comparador</ButtonLink></div></div></Container></section>
  </>;
}
