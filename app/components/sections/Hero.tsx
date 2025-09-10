// sections/Hero.js
import styles from './Hero.module.css';
import Button from '../ui/Button'; // Importando o componente Button

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          DESENVOLVEDOR FULLSTACK
        </h1>

        <h1 className={styles.subtitle}>
          DO ZERO AO DEPLOY
        </h1>

        <Button>VER PROJETOS</Button> {/* Usando o componente Button */}
      </div>
    </section>
  );
}
