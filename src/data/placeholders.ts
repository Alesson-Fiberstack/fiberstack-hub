import { Bot, Calculator, CreditCard, Gauge, Lightbulb, Store } from "lucide-react";

export const features = [
  { title: "Comparador de maquininhas", description: "Analise recursos e encontre a opção mais adequada ao seu negócio.", href: "/comparador-maquininhas", icon: CreditCard },
  { title: "Calculadora de taxas", description: "Simule o custo das vendas e veja quanto realmente sobra no caixa.", href: "/calculadora-taxas", icon: Calculator },
  { title: "Ferramentas de IA", description: "Recursos para conteúdo, atendimento, vendas e produtividade.", href: "/ferramentas", icon: Bot },
];

export const benefits = [
  { title: "Decisões mais claras", description: "Compare opções com critérios objetivos.", icon: Gauge },
  { title: "Mais produtividade", description: "Use tecnologia para reduzir tarefas repetitivas.", icon: Lightbulb },
  { title: "Feito para pequenos negócios", description: "Conteúdo direto para quem vende e empreende.", icon: Store },
];

export const providers = [
  { name: "Ton", highlight: "Indicação disponível", description: "Maquininhas sem aluguel e opções para diferentes perfis de venda.", recommended: true },
  { name: "Mercado Pago", highlight: "Em análise", description: "Ecossistema integrado com conta e soluções de pagamento.", recommended: false },
  { name: "InfinitePay", highlight: "Em análise", description: "Soluções digitais e recebimentos para empreendedores.", recommended: false },
  { name: "PagBank", highlight: "Em análise", description: "Maquininhas, conta digital e serviços financeiros.", recommended: false },
];
