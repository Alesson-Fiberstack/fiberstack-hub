import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
export default function ContatoPage() { return <section className="py-16"><Container className="max-w-4xl"><h1 className="text-4xl font-bold sm:text-5xl">Contato</h1><p className="mt-5 text-lg text-slate-400">Fale com a FiberStack por e-mail.</p><div className="mt-8"><ButtonLink href={`mailto:${siteConfig.email}`}>Enviar e-mail</ButtonLink></div></Container></section>; }
