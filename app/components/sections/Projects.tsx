'use client';
import styles from './Projects.module.css';
import Button from '../ui/Button';
import ProjectsHeader from '../layout/ProjectsHeader';
import { MoveUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, slideInLeft, slideInRight, viewportOnce, scaleIn } from '../../lib/motion';
const projectsData = [
  {
    id: 1,
    title: "Neuro27",
    description: "No projeto Neuro27, participei do desenvolvimento de um aplicativo mobile interativo, criado como parte do meu Trabalho de Conclusão de Curso (TCC). Nosso objetivo é educar sobre o funcionamento dos neurotransmissores e sua influência nas emoções humanas, tornando a neurociência mais acessível e envolvente. O aplicativo oferece conteúdo educativo, visualizações dinâmicas e autenticação segura, e está atualmente em desenvolvimento. Este foi um projeto em grupo.",
    image: "/images/neuro27.png",
    repo: "https://github.com/iwanhrq/neuro27",
    techIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      "https://img.icons8.com/?size=100&id=7ImWFDcPfSlz&format=png&color=ffffff",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff"
    ]
  },
  {
    id: 2,
    title: "Vion",
    description: "Para o projeto Vion, colaborei na criação do site oficial de divulgação do aplicativo Vion, desenvolvido para o Desafio de Dados 2025 da Fundação Telefônica Vivo. O site apresenta informações sobre o aplicativo, incluindo screenshots, animações 3D interativas e links para acesso ao app completo, proporcionando uma experiência imersiva e responsiva. Além disso, fui respnsável pelo desenvolvimento do aplicativo. . Este também foi um projeto em grupo.",
    image: "/images/vion.png",
    repo: "https://github.com/marianaararipe/website-vion",
    techIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      "https://img.icons8.com/?size=100&id=7ImWFDcPfSlz&format=png&color=ffffff",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff"
    ]
  },
  {
    id: 3,
    title: "ETEC de Hortolândia",
    description: "No Site Institucional - ETEC de Hortolândia, trabalhei no desenvolvimento de um site para apresentar informações sobre a ETEC de Hortolândia, como os cursos oferecidos e outros detalhes relevantes sobre a instituição. Meu objetivo era criar uma plataforma clara, acessível e responsiva para que os visitantes pudessem conhecer melhor a escola.",
    image: "/images/etechortolandia.png",
    repo: "https://github.com/iwanhrq/etec-hortolandia",
    techIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff"
    ]
  },
  {
    id: 4,
    title: "Vivo Conecta",
    description: "No Vivo Conecta – Desafio dos Dados, fiz parte da equipe 'Error 504' que desenvolveu o website da fase final do Desafio dos Dados – Vivo, onde conquistamos o 3º lugar nacional. O site detalha nossa solução para um problema real, aplicando ciência de dados, desenvolvimento web e visualização de informações. Nosso principal objetivo foi utilizar IA e análise de dados para identificar e priorizar áreas com maior potencial para expansão da cobertura de telefonia e internet no Brasil, promovendo inclusão digital. Os entregáveis incluíram um relatório detalhado, vídeo explicativo, site responsivo e infográfico interativo. Este foi um projeto em grupo.",
    image: "/images/vivoconecta.png",
    repo: "https://github.com/Iwanhrq/projeto-vivo",
    techIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff"
    ]
  },
  {
    id: 5,
    title: "HidroFlow",
    description: "No HidroFlow – Sistema de Irrigação Automatizada, participei do desenvolvimento de uma solução inteligente que reutiliza a água condensada de aparelhos de ar-condicionado para irrigar hortas escolares. O projeto promove o uso consciente da água e incentiva práticas sustentáveis. Minha colaboração foi focada no aplicativo mobile, que permite o monitoramento da umidade do solo e o acionamento manual da irrigação. Este foi um projeto em grupo.",
    image: "/images/hidroflow.png",
    repo: "https://github.com/iwanhrq/hidroflow",
    techIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      "https://img.icons8.com/?size=100&id=7ImWFDcPfSlz&format=png&color=ffffff",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff"
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <ProjectsHeader items={projectsData.map(p => ({ id: p.id, title: p.title }))} />
      <motion.div
        className={styles.projectsWrapper}
        variants={staggerContainer(0.24)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            id={`project-${project.id}`}
            className={`${styles.projectItem} ${index % 2 === 0 ? styles.normalOrder : styles.reverseOrder}`}
            variants={index % 2 === 0 ? slideInLeft : slideInRight}
          >
            <motion.div className={styles.imageContainer} variants={scaleIn}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
            </motion.div>
            <div className={styles.textContainer}>
              <motion.h2 className={styles.title} variants={fadeInUp}>{project.title}</motion.h2>
              <motion.p className={styles.description} variants={fadeInUp}>{project.description}</motion.p>

              <motion.h2 className={styles.subtitle} variants={fadeInUp}>Tecnologias Utilizadas</motion.h2>

              {project.techIcons?.length > 0 && (
                <motion.ul className={styles.techList} variants={staggerContainer(0.06)}>
                  {project.techIcons.map((url, idx) => (
                    <motion.li key={idx} className={styles.techItem} variants={fadeInUp}>
                      <img src={url} alt="tech icon" className={styles.techImg} />
                    </motion.li>
                  ))}
                </motion.ul>
              )}

              <motion.div variants={scaleIn}>
                <Button href={project.repo} target="_blank">
                  REPOSITÓRIO<MoveUpRight />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}