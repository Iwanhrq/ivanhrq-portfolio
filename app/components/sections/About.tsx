"use client";
import styles from './About.module.css';
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import { slideInLeft, slideInRight, fadeIn, viewportOnce } from '../../lib/motion';
import { MoveUpRight } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className={styles.container}>
      <motion.div
        className={styles.box}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div className={styles.left} variants={slideInLeft}>
          <img
            src="/images/ivan.jpg"
            alt="Ivan Henrique - Desenvolvedor Full Stack"
            className={styles.profileImage}
          />
        </motion.div>
        <motion.div className={styles.right} variants={slideInRight}>
          <h1 className={styles.title}>SOBRE MIM</h1>
          <p className={styles.description}>Meu nome é Ivan Henrique e atualmente estou no último ano do curso de Desenvolvimento de Sistemas
            integrado ao ensino médio na ETEC de Hortolândia. Tenho dedicado meus estudos à programação, com foco em desenvolvimento web,
            mobile e interfaces voltadas para a experiência do usuário. Busco aprender cada vez mais sobre todos os aspectos que compõem
            a formação de um desenvolvedor.
          </p>
          <motion.div variants={fadeIn}>
            <Button href="https://www.linkedin.com/in/ivanhrq" target="_blank">
              MEU LINKEDIN<MoveUpRight />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}