import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/config/site";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "FiberStack — Tecnologia e soluções digitais", template: "%s | FiberStack" },
  description: siteConfig.description,
  openGraph: { type: "website", locale: "pt_BR", siteName: siteConfig.name, title: siteConfig.name, description: siteConfig.description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${geist.variable} antialiased`}><Header /><main>{children}</main><Footer /></body></html>;
}
