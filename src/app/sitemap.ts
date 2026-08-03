import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/ferramentas", "/comparador-maquininhas", "/calculadora-taxas", "/blog", "/sobre", "/contato"].map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : .7 })); }
