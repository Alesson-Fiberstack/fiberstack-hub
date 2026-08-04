"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "./container";
import { Logo } from "../brand/logo";
import { navigation } from "@/config/navigation";
import { ButtonLink } from "../ui/button";
export function Header(){const[open,setOpen]=useState(false);return <header className="sticky top-0 z-50 border-b border-white/[.07] bg-[#05090d]/85 backdrop-blur-2xl"><Container className="flex h-20 items-center justify-between"><Logo/><nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">{navigation.map(i=><Link key={i.href} href={i.href} className="text-sm font-medium text-slate-400 transition hover:text-white">{i.label}</Link>)}</nav><div className="hidden lg:block"><ButtonLink href="/ferramentas" size="sm" className="shadow-[0_0_30px_rgba(0,216,117,.18)]">Explorar ferramentas</ButtonLink></div><button className="grid size-10 place-items-center rounded-xl border border-white/10 text-white lg:hidden" onClick={()=>setOpen(v=>!v)} aria-label="Abrir menu">{open?<X size={20}/>:<Menu size={20}/>}</button></Container>{open&&<div className="border-t border-white/[.07] bg-[#071019] lg:hidden"><Container className="flex flex-col py-4">{navigation.map(i=><Link key={i.href} href={i.href} onClick={()=>setOpen(false)} className="rounded-xl px-3 py-3 text-sm font-medium text-slate-300 hover:bg-white/5">{i.label}</Link>)}</Container></div>}</header>}
