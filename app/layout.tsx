import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
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
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </head>
      <body
        className={`${inter.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
