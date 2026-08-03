import Link from "next/link";
import { Container } from "./container";
import { Logo } from "../brand/logo";
import { siteConfig } from "@/config/site";

export function Footer() {
  return <footer className="border-t border-zinc-200 bg-zinc-950 text-zinc-300">
    <Container className="grid gap-10 py-12 md:grid-cols-2">
      <div><Logo /><p className="mt-4 max-w-md text-sm leading-6 text-zinc-400">Tecnologia, comparativos e ferramentas práticas para pequenos negócios venderem mais e trabalharem melhor.</p></div>
      <div className="grid grid-cols-2 gap-6 text-sm"><div><p className="font-semibold text-white">Navegação</p><div className="mt-3 grid gap-2"><Link href="/ferramentas">Ferramentas</Link><Link href="/comparador-maquininhas">Maquininhas</Link><Link href="/blog">Blog</Link></div></div><div><p className="font-semibold text-white">Contato</p><div className="mt-3 grid gap-2"><a href={`mailto:${siteConfig.email}`}>E-mail</a><a href={siteConfig.socialLinks.tiktok} target="_blank" rel="noreferrer">TikTok</a><a href={siteConfig.socialLinks.github} target="_blank" rel="noreferrer">GitHub</a></div></div></div>
    </Container>
    <Container className="border-t border-white/10 py-5 text-xs text-zinc-500">© {new Date().getFullYear()} FiberStack Soluções. Alguns links podem gerar comissão sem custo adicional para você.</Container>
  </footer>;
}
