// sections/Hero.js
import styles from './About.module.css';
import Button from '../ui/Button';
import minhaImagem from '../caminho/para/sua-imagem.jpg'; // Importe sua imagem aqui

export default function About() {
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.left}>
          <img
            alt="Descrição da imagem"
            className={styles.profileImage}
          />
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>SOBRE MIM</h1>
          <p className={styles.description}>Meu nome é Ivan Henrique. Atualmente, estou no último ano do curso de Desenvolvimento de Sistemas
            integrado ao ensino médio na ETEC de Hortolândia. Tenho dedicado meus estudos em programação em temas como desenvolvimento web,
            mobile e interface focada na experiência do usuário. Busco aprender cada vez mais todos os aspectos que compõem um desenvolvedor.
          </p>
          <Button>MEU LINKEDIN</Button> {/* Usando o componente Button */}
        </div>
      </div>
    </section>
  );
}