import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/config/site";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: "FiberStack | Ferramentas para empreendedores",
    template: "%s | FiberStack",
  },

  description:
    "Compare maquininhas, calcule taxas, descubra ferramentas para empresas e acompanhe conteúdos exclusivos sobre empreendedorismo.",

  keywords: [
    "FiberStack",
    "maquininha",
    "maquineta",
    "Ton",
    "Mercado Pago",
    "Stone",
    "PagBank",
    "InfinitePay",
    "comparador de maquininhas",
    "calculadora de taxas",
    "empreendedor",
    "MEI",
    "vendas",
    "pagamentos",
  ],

  authors: [
    {
      name: "FiberStack",
      url: siteConfig.url,
    },
  ],

  creator: "FiberStack",
  publisher: "FiberStack",

  verification: {
    google: "9H-FPpasXm9AI6-n_2jTxANiTCoMM_-An8qoq70VJcg",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: siteConfig.url,
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: "FiberStack",
    title: "FiberStack | Ferramentas para empreendedores",
    description:
      "Compare maquininhas, calcule taxas e encontre as melhores soluções para seu negócio.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FiberStack",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "FiberStack | Ferramentas para empreendedores",
    description:
      "Compare maquininhas, calcule taxas e descubra ferramentas para o seu negócio.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}