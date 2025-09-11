"use client";
import styles from './Hero.module.css';
import Button from '../ui/Button'; 
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, scaleIn } from '../../lib/motion';

import { MoveDownRight } from 'lucide-react';



export default function Hero() {
  return (
    <section id="home" className={styles.container}>
      <motion.div
        className={styles.textContainer}
        variants={staggerContainer(0.24)}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className={styles.title} variants={fadeInUp}>
          DESENVOLVEDOR FULLSTACK
        </motion.h1>

        <motion.h1 className={styles.subtitle} variants={fadeInUp}>
          DO ZERO AO DEPLOY
        </motion.h1>

        <motion.div variants={scaleIn}>
          <Button href="#projetos">
            VER PROJETOS<MoveDownRight />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
