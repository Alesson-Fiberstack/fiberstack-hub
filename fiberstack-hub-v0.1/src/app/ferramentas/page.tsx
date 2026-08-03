import { Calculator, CreditCard, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";

const tools = [
  { title: "Comparador de maquininhas", description: "Compare opções para o seu negócio.", href: "/comparador-maquininhas", icon: CreditCard },
  { title: "Calculadora de taxas", description: "Simule custos e valor líquido.", href: "/calculadora-taxas", icon: Calculator },
  { title: "Ferramentas de IA", description: "Novos recursos serão adicionados gradualmente.", href: "#", icon: Sparkles },
];
export default function ToolsPage() { return <section className="py-16"><Container><h1 className="text-4xl font-bold sm:text-5xl">Central de ferramentas</h1><p className="mt-4 max-w-2xl text-lg text-zinc-600">Recursos simples para apoiar vendas, produtividade e decisões do dia a dia.</p><div className="mt-10 grid gap-5 md:grid-cols-3">{tools.map(({ icon: Icon, ...tool }) => <Card key={tool.title}><Icon className="text-emerald-600" /><h2 className="mt-5 text-xl font-bold">{tool.title}</h2><p className="mt-3 text-zinc-600">{tool.description}</p><div className="mt-6"><ButtonLink href={tool.href} variant="outline">Acessar</ButtonLink></div></Card>)}</div></Container></section>; }
