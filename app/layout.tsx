import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HydrationBoundary from "./components/ui/HydrationBoundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ivan Henrique - Portfólio",
  description: "Desenvolvedor Full Stack - Portfólio pessoal com projetos e habilidades",
  keywords: ["desenvolvedor", "full stack", "react", "next.js", "typescript", "portfólio"],
  authors: [{ name: "Ivan Henrique" }],
  creator: "Ivan Henrique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <HydrationBoundary>
          {children}
        </HydrationBoundary>
      </body>
    </html>
  );
}
