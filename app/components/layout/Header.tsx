"use client"; // Necessário para hooks no Next.js 13+

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-background text-white sticky top-0 z-50 border-b border-gray-500">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-xl font-bold">Ivan Henrique</div>

          {/* Menu Desktop (visível em telas maiores) */}
          <nav className="hidden md:flex space-x-8">
            {["Home", "Sobre", "Projetos", "Contato"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-400 transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Botão Hamburguer (visível apenas em mobile) */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Abrir menu"
          >
            <div className="w-6 h-0.5 bg-white mb-1.5 transition-transform duration-300"></div>
            <div className="w-6 h-0.5 bg-white mb-1.5 transition-opacity duration-300"></div>
            <div className="w-6 h-0.5 bg-white transition-transform duration-300"></div>
          </button>
        </div>

        {/* Menu Mobile (animado) */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-64" : "max-h-0"
          }`}
        >
          <nav className="py-4 space-y-3">
            {["Home", "Sobre", "Projetos", "Contato"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 px-4 hover:bg-gray-800 rounded transition-colors"
                onClick={closeMenu}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}