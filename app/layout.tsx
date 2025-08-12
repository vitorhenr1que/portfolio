import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Vitor Henrique — Desenvolvedor Web | Portfólio & Contato",
  description: "Portfólio de alta conversão do desenvolvedor Vitor Henrique. Websites rápidos, responsivos e modernos. Peça um orçamento hoje!",
  openGraph: {
    title: "Vitor Henrique — Desenvolvedor Web",
    description: "Websites rápidos, responsivos e modernos. Peça um orçamento hoje!",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#7C3AED",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}