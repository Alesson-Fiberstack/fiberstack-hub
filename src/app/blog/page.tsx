import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";

const posts = ["Como escolher uma maquininha para começar", "Taxas de cartão: entenda o custo real", "Como usar IA em um pequeno negócio"];
export default function BlogPage() { return <section className="py-16"><Container><h1 className="text-4xl font-bold sm:text-5xl">Conteúdos FiberStack</h1><p className="mt-4 text-zinc-600">Guias objetivos sobre tecnologia, vendas e ferramentas digitais.</p><div className="mt-10 grid gap-5 md:grid-cols-3">{posts.map((post) => <Card key={post}><p className="text-xs font-bold uppercase tracking-wider text-emerald-600">Em produção</p><h2 className="mt-4 text-xl font-bold">{post}</h2><p className="mt-3 text-sm leading-6 text-zinc-600">Conteúdo será publicado nas próximas versões.</p></Card>)}</div></Container></section>; }
