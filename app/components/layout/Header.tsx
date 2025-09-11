"use client"; // Necessário para hooks no Next.js 13+

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer, slideInRight } from "../../lib/motion";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <motion.div
        className={styles.container}
        variants={staggerContainer(0.22)}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.row}>
          {/* Logo */}
          <motion.div className={styles.logo} variants={fadeInUp}>
            Ivan Henrique
          </motion.div>

          {/* Menu Desktop (visível em telas maiores) */}
          <motion.nav className={styles.desktopNav} variants={fadeIn}>
            {["Home", "Sobre", "Projetos", "Contato"].map((item) => (
              <motion.div key={item} variants={fadeInUp}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className={styles.desktopLink}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Botão Hamburguer (visível apenas em mobile) */}
          <button
            className={styles.hamburgerButton}
            onClick={toggleMenu}
            aria-label="Abrir menu"
          >
            <div className={`${styles.bar} ${styles.barTransform}`}></div>
            <div className={`${styles.bar} ${styles.barOpacity}`}></div>
            <div className={`${styles.bar} ${styles.barTransform}`}></div>
          </button>
        </div>

        {/* Menu Mobile (animado) */}
        <motion.div
          className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : styles.closed}`}
          variants={slideInRight}
          initial={false}
          animate={isMenuOpen ? "visible" : "hidden"}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <nav className={styles.mobileNav}>
            {["Home", "Sobre", "Projetos", "Contato"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={styles.mobileLink}
                onClick={closeMenu}
              >
                {item}
              </Link>
            ))}
          </nav>
        </motion.div>
      </motion.div>
    </header>
  );
}