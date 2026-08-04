"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { siteConfig } from "@/config/site";

type ProviderId = "ton" | "infinitepay" | "mercadopago";
type PaymentType = "pix" | "debit" | "credit";
type TonPlanId = "tapton" | "mega" | "black";
type CardBrandId = "visa_master" | "elo_amex";
type ReceiptId = "instant" | "one_day";

type Provider = {
  id: ProviderId;
  name: string;
  plan: string;
  note: string;
  href?: string;
  rates: Record<string, number>;
};

type TonRateTable = {
  label: string;
  note: string;
  rates: Record<string, number>;
};

const tapTonRates: Record<string, number> = {
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
};

const megaVisaMaster: Record<string, number> = {
  pix: 0,
  debit: 0.57,
  credit_1: 0.57,
  credit_2: 3.97,
  credit_3: 3.97,
  credit_4: 4.97,
  credit_5: 5.97,
  credit_6: 6.97,
  credit_7: 7.97,
  credit_8: 7.97,
  credit_9: 7.97,
  credit_10: 7.97,
  credit_11: 7.97,
  credit_12: 7.97,
  credit_13: 14.87,
  credit_14: 14.87,
  credit_15: 14.87,
  credit_16: 14.87,
  credit_17: 14.87,
  credit_18: 14.87,
  credit_19: 14.87,
  credit_20: 14.87,
  credit_21: 14.87,
};

const megaEloAmex: Record<string, number> = {
  pix: 0,
  debit: 2.57,
  credit_1: 4.34,
  credit_2: 7.02,
  credit_3: 7.58,
  credit_4: 8.38,
  credit_5: 9.38,
  credit_6: 10.38,
  credit_7: 10.98,
  credit_8: 11.38,
  credit_9: 12.38,
  credit_10: 12.88,
  credit_11: 13.74,
  credit_12: 13.78,
  credit_13: 14.87,
  credit_14: 15.51,
  credit_15: 16.15,
  credit_16: 16.79,
  credit_17: 17.43,
  credit_18: 18.07,
  credit_19: 18.71,
  credit_20: 19.35,
  credit_21: 19.99,
};

const blackVisaMasterOneDay: Record<string, number> = {
  pix: 0,
  debit: 0.74,
  credit_1: 2.68,
  credit_2: 3.93,
  credit_3: 4.45,
  credit_4: 4.97,
  credit_5: 5.48,
  credit_6: 5.98,
  credit_7: 6.5,
  credit_8: 6.98,
  credit_9: 7.5,
  credit_10: 7.98,
  credit_11: 8.48,
  credit_12: 8.98,
  credit_13: 11.98,
  credit_14: 12.46,
  credit_15: 12.96,
  credit_16: 13.48,
  credit_17: 14.01,
  credit_18: 14.58,
  credit_19: 15.22,
  credit_20: 15.86,
  credit_21: 16.5,
};

const blackInstant: Record<string, number> = {
  pix: 0,
  debit: 2.28,
  credit_1: 5.48,
  credit_2: 10.88,
  credit_3: 11.98,
  credit_4: 12.58,
  credit_5: 13.28,
  credit_6: 13.98,
  credit_7: 14.98,
  credit_8: 15.58,
  credit_9: 16.18,
  credit_10: 16.88,
  credit_11: 17.88,
  credit_12: 18.28,
  credit_13: 21.28,
  credit_14: 22.13,
  credit_15: 23.02,
  credit_16: 23.94,
  credit_17: 24.89,
  credit_18: 25.89,
  credit_19: 26.53,
  credit_20: 27.17,
  credit_21: 27.81,
};

const blackEloAmexOneDay: Record<string, number> = {
  pix: 0,
  debit: 1.87,
  credit_1: 4.45,
  credit_2: 5.8,
  credit_3: 6.31,
  credit_4: 6.82,
  credit_5: 7.32,
  credit_6: 7.82,
  credit_7: 8.33,
  credit_8: 8.82,
  credit_9: 9.31,
  credit_10: 9.8,
  credit_11: 10.28,
  credit_12: 10.76,
  credit_13: 13.76,
  credit_14: 14.31,
  credit_15: 14.88,
  credit_16: 15.48,
  credit_17: 16.1,
  credit_18: 16.74,
  credit_19: 17.38,
  credit_20: 18.02,
  credit_21: 18.66,
};

const tonTables: Record<TonPlanId, Partial<Record<CardBrandId, Partial<Record<ReceiptId, TonRateTable>>>>> = {
  tapton: {
    visa_master: {
      one_day: {
        label: "TapTon • Visa e Mastercard • 1 dia útil",
        note: "Taxas oficiais do TapTon para recebimento em 1 dia útil.",
        rates: tapTonRates,
      },
    },
  },
  mega: {
    visa_master: {
      instant: {
        label: "Ton Mega+ • Visa e Mastercard • na hora",
        note: "Período promocional do plano Ton Mega+.",
        rates: megaVisaMaster,
      },
      one_day: {
        label: "Ton Mega+ • Visa e Mastercard • 1 dia útil",
        note: "Período promocional do plano Ton Mega+.",
        rates: megaVisaMaster,
      },
    },
    elo_amex: {
      instant: {
        label: "Ton Mega+ • Elo e Amex • na hora",
        note: "Período promocional do plano Ton Mega+.",
        rates: megaEloAmex,
      },
      one_day: {
        label: "Ton Mega+ • Elo e Amex • 1 dia útil",
        note: "Período promocional do plano Ton Mega+.",
        rates: megaEloAmex,
      },
    },
  },
  black: {
    visa_master: {
      instant: {
        label: "Ton Black • Visa e Mastercard • na hora",
        note: "Plano voltado a MEI/PJ com vendas mensais acima de R$ 80 mil.",
        rates: blackInstant,
      },
      one_day: {
        label: "Ton Black • Visa e Mastercard • 1 dia útil",
        note: "Plano voltado a MEI/PJ com vendas mensais acima de R$ 80 mil.",
        rates: blackVisaMasterOneDay,
      },
    },
    elo_amex: {
      instant: {
        label: "Ton Black • Elo e Amex • na hora",
        note: "Plano voltado a MEI/PJ com vendas mensais acima de R$ 80 mil.",
        rates: blackInstant,
      },
      one_day: {
        label: "Ton Black • Elo e Amex • 1 dia útil",
        note: "Plano voltado a MEI/PJ com vendas mensais acima de R$ 80 mil.",
        rates: blackEloAmexOneDay,
      },
    },
  },
};

const providers: Provider[] = [
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
  const [tonPlan, setTonPlan] = useState<TonPlanId>("tapton");
  const [cardBrand, setCardBrand] = useState<CardBrandId>("visa_master");
  const [receipt, setReceipt] = useState<ReceiptId>("one_day");

  const tonTable = tonTables[tonPlan]?.[cardBrand]?.[receipt];
  const fallbackTonTable = tonTables[tonPlan]?.visa_master?.one_day;
  const activeTonTable = tonTable ?? fallbackTonTable;

  const externalProvider = providers.find((item) => item.id === providerId);
  const activeProvider: Provider = providerId === "ton"
    ? {
        id: "ton",
        name: "Ton",
        plan: activeTonTable?.label ?? "Configuração indisponível",
        note: activeTonTable?.note ?? "Escolha outra combinação de plano, bandeira ou recebimento.",
        href: "/go/ton",
        rates: activeTonTable?.rates ?? {},
      }
    : externalProvider ?? providers[0];

  const key = rateKey(paymentType, installments);
  const rate = activeProvider.rates[key];

  const result = useMemo(() => {
    if (rate === undefined) return null;
    const fee = value * (rate / 100);
    return { fee, net: value - fee };
  }, [rate, value]);

  const comparisonProviders: Provider[] = [
    {
      id: "ton",
      name: "Ton",
      plan: activeTonTable?.label ?? "Configuração indisponível",
      note: activeTonTable?.note ?? "",
      href: "/go/ton",
      rates: activeTonTable?.rates ?? {},
    },
    ...providers,
  ];

  const comparison = comparisonProviders
    .map((item) => {
      const itemRate = item.rates[key];
      if (itemRate === undefined) return null;
      const fee = value * (itemRate / 100);
      return { ...item, rate: itemRate, fee, net: value - fee };
    })
    .filter(Boolean)
    .sort((a, b) => (a?.fee ?? 0) - (b?.fee ?? 0));

  const maxInstallments = providerId === "ton" && tonPlan !== "tapton" ? 21 : 12;

  function chooseTonPlan(plan: TonPlanId) {
    setTonPlan(plan);
    if (plan === "tapton") {
      setCardBrand("visa_master");
      setReceipt("one_day");
      if (installments > 12) setInstallments(12);
    }
  }

  return (
    <section className="relative py-16 sm:py-24"><div className="tech-grid" />
      <Container className="relative">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">Simulação real de taxas</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Compare quanto você recebe em cada maquininha</h1>
          <p className="mt-4 text-lg text-slate-400">
            Escolha a empresa, plano, bandeira, recebimento e parcelamento. A calculadora mostra a taxa, o desconto e o valor líquido da venda.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {(["ton", "infinitepay", "mercadopago"] as ProviderId[]).map((id) => {
            const active = id === providerId;
            const item = id === "ton"
              ? { name: "Ton", plan: activeTonTable?.label ?? "Escolha o plano" }
              : providers.find((provider) => provider.id === id)!;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setProviderId(id)}
                className={`rounded-2xl border p-5 text-left transition ${
                  active
                    ? "border-emerald-400/60 bg-emerald-400/10 ring-2 ring-emerald-400/10"
                    : "border-white/10 bg-white/[.03] hover:border-white/20"
                }`}
              >
                <span className="block text-xl font-bold">{item.name}</span>
                <span className="mt-1 block text-sm text-slate-400">{item.plan}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="p-6 sm:p-8">
            <div className="rounded-xl border border-white/10 bg-white/[.03] p-4">
              <p className="font-semibold">{activeProvider.name}</p>
              <p className="mt-1 text-sm text-slate-400">{activeProvider.note}</p>
            </div>

            {providerId === "ton" && (
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="block text-sm font-semibold">Plano Ton</label>
                  <select
                    value={tonPlan}
                    onChange={(event) => chooseTonPlan(event.target.value as TonPlanId)}
                    className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-[#071019] px-4 text-white outline-none focus:border-emerald-500"
                  >
                    <option value="tapton">TapTon</option>
                    <option value="mega">Ton Mega+</option>
                    <option value="black">Ton Black</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold">Bandeira</label>
                  <select
                    value={cardBrand}
                    disabled={tonPlan === "tapton"}
                    onChange={(event) => setCardBrand(event.target.value as CardBrandId)}
                    className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-[#071019] px-4 text-white outline-none disabled:cursor-not-allowed disabled:opacity-50 focus:border-emerald-500"
                  >
                    <option value="visa_master">Visa e Mastercard</option>
                    <option value="elo_amex">Elo e Amex</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold">Recebimento</label>
                  <select
                    value={receipt}
                    disabled={tonPlan === "tapton"}
                    onChange={(event) => setReceipt(event.target.value as ReceiptId)}
                    className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-[#071019] px-4 text-white outline-none disabled:cursor-not-allowed disabled:opacity-50 focus:border-emerald-500"
                  >
                    <option value="instant">Na hora</option>
                    <option value="one_day">1 dia útil</option>
                  </select>
                </div>
              </div>
            )}

            <label className="mt-6 block text-sm font-semibold">Valor da venda</label>
            <input
              type="number"
              value={value}
              min={0}
              step="0.01"
              onChange={(event) => setValue(Math.max(0, Number(event.target.value)))}
              className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-[#071019] px-4 text-lg text-white outline-none focus:border-emerald-500"
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
                      ? "border-emerald-400 bg-gradient-to-r from-emerald-500 to-cyan-500 text-[#03130c]"
                      : "border-white/10 bg-white/[.03] hover:border-white/20"
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
                  className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-[#071019] px-4 text-white outline-none focus:border-emerald-500"
                >
                  {Array.from({ length: maxInstallments }, (_, index) => index + 1).map((number) => (
                    <option key={number} value={number}>
                      {number === 1 ? "Crédito à vista" : `${number}x`}
                    </option>
                  ))}
                </select>
              </>
            )}

            <p className="mt-6 text-xs leading-relaxed text-slate-500">
              Taxas podem mudar conforme promoção, faturamento, bandeira e prazo de recebimento. Confira sempre a condição final no site oficial antes de contratar.
            </p>
          </Card>

          <Card className="bg-[#03070a] p-6 text-white sm:p-8">
            {result ? (
              <>
                <p className="text-sm text-zinc-400">Taxa aplicada</p>
                <p className="mt-1 text-3xl font-bold text-emerald-400">{rate.toFixed(2).replace(".", ",")}%</p>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-sm text-zinc-400">Desconto da taxa</p>
                  <p className="mt-2 text-3xl font-bold">{formatCurrency(result.fee)}</p>
                </div>

                <div className="mt-8 rounded-2xl bg-white/5 p-5">
                  <p className="text-sm text-zinc-400">Você recebe</p>
                  <p className="mt-2 text-4xl font-bold text-emerald-400">{formatCurrency(result.net)}</p>
                </div>

                {activeProvider.id === "ton" && (
                  <div className="mt-6">
                    <ButtonLink href={activeProvider.href ?? siteConfig.tonReferralUrl} target="_blank" className="w-full">
                      Ver oferta da Ton
                    </ButtonLink>
                  </div>
                )}
              </>
            ) : (
              <div className="flex min-h-72 flex-col justify-center">
                <p className="text-xl font-bold">Taxa ainda não disponível</p>
                <p className="mt-3 text-zinc-400">
                  Essa combinação ainda não foi publicada na fonte usada pela FiberStack. Escolha outra modalidade, plano ou empresa.
                </p>
              </div>
            )}
          </Card>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight">Comparação para esta venda</h2>
          <p className="mt-2 text-slate-400">Resultados disponíveis para a mesma modalidade selecionada.</p>

          <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[.03]">
            {comparison.length > 0 ? (
              comparison.map((item, index) =>
                item ? (
                  <div
                    key={item.id}
                    className="grid gap-3 border-b border-white/[.08] p-5 last:border-0 sm:grid-cols-[1fr_auto_auto_auto] sm:items-center"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-bold">{item.name}</p>
                        {index === 0 && (
                          <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-bold text-emerald-300">Menor taxa</span>
                        )}
                      </div>
                      <p className="mt-1 text-xs text-slate-500">{item.plan}</p>
                    </div>
                    <p className="text-sm"><span className="text-zinc-500">Taxa:</span> <strong>{item.rate.toFixed(2).replace(".", ",")}%</strong></p>
                    <p className="text-sm"><span className="text-zinc-500">Custo:</span> <strong>{formatCurrency(item.fee)}</strong></p>
                    <p className="text-lg font-bold text-emerald-400">{formatCurrency(item.net)}</p>
                  </div>
                ) : null,
              )
            ) : (
              <p className="p-6 text-slate-400">Nenhuma comparação disponível para esta modalidade.</p>
            )}
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-amber-400/15 bg-amber-400/[.06] p-5 text-sm text-amber-200">
          <strong>Atualização:</strong> taxas consultadas em agosto de 2026. Ton: TapTon, Ton Mega+ e Ton Black, com filtros de bandeira e prazo de recebimento. InfinitePay: plano inicial de até R$ 20 mil/mês, Visa/Mastercard, recebimento em 1 dia útil. Mercado Pago: plano promocional para novos clientes.
        </div>
      </Container>
    </section>
  );
}
