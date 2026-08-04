"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { siteConfig } from "@/config/site";

type ProviderId = "ton" | "infinitepay" | "mercadopago";
type PaymentType = "pix" | "debit" | "credit";

type Provider = {
  id: ProviderId;
  name: string;
  plan: string;
  note: string;
  href?: string;
  rates: Record<string, number>;
};

const providers: Provider[] = [
  {
    id: "ton",
    name: "Ton",
    plan: "TapTon • Visa e Mastercard • 1 dia útil",
    note: "Taxas oficiais do TapTon para recebimento em 1 dia útil.",
    href: "/go/ton",
    rates: {
      pix: 0,
      debit: 0.57,
      credit_1: 3.05,
      credit_2: 5.75,
      credit_3: 6.55,
      credit_4: 8.29,
      credit_5: 8.55,
      credit_6: 8.65,
      credit_7: 9.95,
      credit_8: 10.09,
      credit_9: 10.79,
      credit_10: 11.49,
      credit_11: 12.19,
      credit_12: 12.29,
    },
  },
  {
    id: "infinitepay",
    name: "InfinitePay",
    plan: "Plano inicial • até R$ 20 mil/mês • 1 dia útil",
    note: "Taxas oficiais para Visa e Mastercard no plano inicial.",
    rates: {
      pix: 0,
      debit: 1.37,
      credit_1: 3.15,
      credit_2: 5.39,
      credit_3: 6.12,
      credit_4: 6.85,
      credit_5: 7.57,
      credit_6: 8.28,
      credit_7: 8.99,
      credit_8: 9.69,
      credit_9: 10.38,
      credit_10: 11.06,
      credit_11: 11.74,
      credit_12: 12.4,
    },
  },
  {
    id: "mercadopago",
    name: "Mercado Pago",
    plan: "Plano promocional • novos clientes",
    note: "Promoção oficial por 30 dias ou até R$ 5 mil em vendas. Parcelas intermediárias ainda serão adicionadas após validação oficial.",
    rates: {
      pix: 0,
      debit: 0.74,
      credit_1: 0.74,
      credit_12: 8.99,
    },
  },
];

function rateKey(type: PaymentType, installments: number) {
  if (type === "pix") return "pix";
  if (type === "debit") return "debit";
  return `credit_${installments}`;
}

export default function CalculadoraPage() {
  const [providerId, setProviderId] = useState<ProviderId>("ton");
  const [value, setValue] = useState(1000);
  const [paymentType, setPaymentType] = useState<PaymentType>("credit");
  const [installments, setInstallments] = useState(1);

  const provider = providers.find((item) => item.id === providerId) ?? providers[0];
  const key = rateKey(paymentType, installments);
  const rate = provider.rates[key];

  const result = useMemo(() => {
    if (rate === undefined) return null;
    const fee = value * (rate / 100);
    return { fee, net: value - fee };
  }, [rate, value]);

  const comparison = providers
    .map((item) => {
      const itemRate = item.rates[key];
      if (itemRate === undefined) return null;
      const fee = value * (itemRate / 100);
      return { ...item, rate: itemRate, fee, net: value - fee };
    })
    .filter(Boolean)
    .sort((a, b) => (a?.fee ?? 0) - (b?.fee ?? 0));

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">Simulação real de taxas</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Compare quanto você recebe em cada maquininha</h1>
          <p className="mt-4 text-lg text-zinc-600">
            Escolha a empresa, forma de pagamento e parcelamento. A calculadora mostra a taxa, o desconto e o valor líquido da venda.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {providers.map((item) => {
            const active = item.id === providerId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setProviderId(item.id)}
                className={`rounded-2xl border p-5 text-left transition ${
                  active
                    ? "border-emerald-500 bg-emerald-50 ring-2 ring-emerald-100"
                    : "border-zinc-200 bg-white hover:border-zinc-300"
                }`}
              >
                <span className="block text-xl font-bold">{item.name}</span>
                <span className="mt-1 block text-sm text-zinc-600">{item.plan}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="p-6 sm:p-8">
            <div className="rounded-xl bg-zinc-50 p-4">
              <p className="font-semibold">{provider.name}</p>
              <p className="mt-1 text-sm text-zinc-600">{provider.note}</p>
            </div>

            <label className="mt-6 block text-sm font-semibold">Valor da venda</label>
            <input
              type="number"
              value={value}
              min={0}
              step="0.01"
              onChange={(event) => setValue(Math.max(0, Number(event.target.value)))}
              className="mt-2 h-12 w-full rounded-xl border border-zinc-300 px-4 text-lg outline-none focus:border-emerald-500"
            />

            <label className="mt-5 block text-sm font-semibold">Forma de pagamento</label>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {([
                ["pix", "Pix"],
                ["debit", "Débito"],
                ["credit", "Crédito"],
              ] as const).map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => {
                    setPaymentType(id);
                    if (id !== "credit") setInstallments(1);
                  }}
                  className={`h-12 rounded-xl border text-sm font-semibold transition ${
                    paymentType === id
                      ? "border-emerald-500 bg-emerald-500 text-white"
                      : "border-zinc-300 bg-white hover:border-zinc-400"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {paymentType === "credit" && (
              <>
                <label className="mt-5 block text-sm font-semibold">Parcelas</label>
                <select
                  value={installments}
                  onChange={(event) => setInstallments(Number(event.target.value))}
                  className="mt-2 h-12 w-full rounded-xl border border-zinc-300 bg-white px-4 outline-none focus:border-emerald-500"
                >
                  {Array.from({ length: 12 }, (_, index) => index + 1).map((number) => (
                    <option key={number} value={number}>
                      {number === 1 ? "Crédito à vista" : `${number}x`}
                    </option>
                  ))}
                </select>
              </>
            )}

            <p className="mt-6 text-xs leading-relaxed text-zinc-500">
              Taxas podem mudar conforme promoção, faturamento, bandeira e prazo de recebimento. Confira sempre a condição final no site oficial antes de contratar.
            </p>
          </Card>

          <Card className="bg-zinc-950 p-6 text-white sm:p-8">
            {result ? (
              <>
                <p className="text-sm text-zinc-400">Taxa aplicada</p>
                <p className="mt-1 text-3xl font-bold text-emerald-400">{rate.toFixed(2).replace(".", ",")}%</p>

                <div className="mt-8 border-t border-zinc-800 pt-6">
                  <p className="text-sm text-zinc-400">Desconto da taxa</p>
                  <p className="mt-2 text-3xl font-bold">{formatCurrency(result.fee)}</p>
                </div>

                <div className="mt-8 rounded-2xl bg-white/5 p-5">
                  <p className="text-sm text-zinc-400">Você recebe</p>
                  <p className="mt-2 text-4xl font-bold text-emerald-400">{formatCurrency(result.net)}</p>
                </div>

                {provider.id === "ton" && (
                  <div className="mt-6">
                    <ButtonLink href={provider.href ?? siteConfig.tonReferralUrl} target="_blank" className="w-full">
                      Ver oferta da Ton
                    </ButtonLink>
                  </div>
                )}
              </>
            ) : (
              <div className="flex min-h-72 flex-col justify-center">
                <p className="text-xl font-bold">Taxa ainda não disponível</p>
                <p className="mt-3 text-zinc-400">
                  Essa combinação ainda não foi publicada na fonte oficial usada pela FiberStack. Escolha outra modalidade ou empresa.
                </p>
              </div>
            )}
          </Card>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight">Comparação para esta venda</h2>
          <p className="mt-2 text-zinc-600">Resultados disponíveis para a mesma modalidade selecionada.</p>

          <div className="mt-5 overflow-hidden rounded-2xl border border-zinc-200 bg-white">
            {comparison.length > 0 ? (
              comparison.map((item, index) =>
                item ? (
                  <div
                    key={item.id}
                    className="grid gap-3 border-b border-zinc-200 p-5 last:border-0 sm:grid-cols-[1fr_auto_auto_auto] sm:items-center"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-bold">{item.name}</p>
                        {index === 0 && (
                          <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700">Menor taxa</span>
                        )}
                      </div>
                      <p className="mt-1 text-xs text-zinc-500">{item.plan}</p>
                    </div>
                    <p className="text-sm"><span className="text-zinc-500">Taxa:</span> <strong>{item.rate.toFixed(2).replace(".", ",")}%</strong></p>
                    <p className="text-sm"><span className="text-zinc-500">Custo:</span> <strong>{formatCurrency(item.fee)}</strong></p>
                    <p className="text-lg font-bold text-emerald-600">{formatCurrency(item.net)}</p>
                  </div>
                ) : null,
              )
            ) : (
              <p className="p-6 text-zinc-600">Nenhuma comparação disponível para esta modalidade.</p>
            )}
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-amber-50 p-5 text-sm text-amber-900">
          <strong>Atualização:</strong> taxas consultadas em agosto de 2026. Ton TapTon: Visa/Mastercard, recebimento em 1 dia útil. InfinitePay: plano inicial de até R$ 20 mil/mês, Visa/Mastercard, recebimento em 1 dia útil. Mercado Pago: plano promocional para novos clientes.
        </div>
      </Container>
    </section>
  );
}
