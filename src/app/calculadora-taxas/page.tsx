"use client";
import { useMemo, useState } from "react";
import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export default function CalculadoraPage() {
  const [value, setValue] = useState(5000);
  const [rate, setRate] = useState(2.99);
  const result = useMemo(() => ({ fee: value * rate / 100, net: value - value * rate / 100 }), [value, rate]);
  return <section className="py-16"><Container><div className="max-w-3xl"><h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Calculadora simples de taxas</h1><p className="mt-4 text-zinc-600">Informe o volume vendido e a taxa percentual. A simulação é educativa e não representa uma proposta comercial.</p></div><div className="mt-10 grid gap-6 lg:grid-cols-2"><Card><label className="text-sm font-semibold">Valor vendido no mês</label><input type="number" value={value} min={0} onChange={(e) => setValue(Number(e.target.value))} className="mt-2 h-12 w-full rounded-xl border border-zinc-300 px-4 outline-none focus:border-emerald-500" /><label className="mt-5 block text-sm font-semibold">Taxa estimada (%)</label><input type="number" value={rate} min={0} step="0.01" onChange={(e) => setRate(Number(e.target.value))} className="mt-2 h-12 w-full rounded-xl border border-zinc-300 px-4 outline-none focus:border-emerald-500" /></Card><Card className="bg-zinc-950 text-white"><p className="text-sm text-zinc-400">Custo estimado</p><p className="mt-2 text-4xl font-bold">{formatCurrency(result.fee)}</p><p className="mt-8 text-sm text-zinc-400">Valor líquido estimado</p><p className="mt-2 text-2xl font-bold text-emerald-400">{formatCurrency(result.net)}</p><div className="mt-8"><ButtonLink href={siteConfig.tonReferralUrl} target="_blank" className="w-full">Conhecer as opções da Ton</ButtonLink></div></Card></div></Container></section>;
}
