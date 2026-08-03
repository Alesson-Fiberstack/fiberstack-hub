"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "./container";
import { Logo } from "../brand/logo";
import { navigation } from "@/config/navigation";
import { ButtonLink } from "../ui/button";

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-xl">
    <Container className="flex h-16 items-center justify-between">
      <Logo />
      <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegação principal">
        {navigation.map((item) => <Link key={item.href} href={item.href} className="text-sm font-medium text-zinc-600 transition hover:text-black">{item.label}</Link>)}
      </nav>
      <div className="hidden lg:block"><ButtonLink href="/ferramentas" size="sm">Explorar ferramentas</ButtonLink></div>
      <button className="grid size-10 place-items-center rounded-lg border border-zinc-200 lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Abrir menu" aria-expanded={open}>{open ? <X size={20} /> : <Menu size={20} />}</button>
    </Container>
    {open ? <div className="border-t border-zinc-100 bg-white lg:hidden"><Container className="flex flex-col gap-1 py-4">{navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-50">{item.label}</Link>)}</Container></div> : null}
  </header>;
}
