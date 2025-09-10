// sections/Projects.js
import styles from './Projects.module.css';
import Button from '../ui/Button';

// Dados dos projetos (substitua pelos seus dados reais)
const projectsData = [
  {
    id: 1,
    title: "Projeto Alpha",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consequatur neque, non, autem quas et explicabo at minus asperiores odio perferendis.",
    image: "/path/to/image1.jpg"
  },
  {
    id: 2,
    title: "Projeto Beta",
    description: "Debitis repellat reprehenderit ab ea facilis ratione expedita? Quia. Lorem ipsum dolor sit amet consectetur.",
    image: "/path/to/image2.jpg"
  },
  {
    id: 3,
    title: "Projeto Gamma",
    description: "Autem quas et explicabo at minus asperiores odio perferendis. Facere consequatur neque, non, autem quas.",
    image: "/path/to/image3.jpg"
  },
  {
    id: 4,
    title: "Projeto Delta",
    description: "Reprehenderit ab ea facilis ratione expedita? Quia. Debitis repellat reprehenderit ab ea facilis ratione.",
    image: "/path/to/image4.jpg"
  },
  {
    id: 5,
    title: "Projeto Epsilon",
    description: "Minus asperiores odio perferendis. Facere consequatur neque, non, autem quas et explicabo at minus.",
    image: "/path/to/image5.jpg"
  }
];

export default function Projects() {
  return (
    <section className={styles.container}>
      <div className={styles.projectsWrapper}>
        {projectsData.map((project, index) => (
          <div 
            key={project.id} 
            className={`${styles.projectItem} ${index % 2 === 0 ? styles.normalOrder : styles.reverseOrder}`}
          >
            <div className={styles.imageContainer}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
            </div>
            <div className={styles.textContainer}>
              <h2 className={styles.title}>{project.title}</h2>
              <p className={styles.description}>{project.description}</p>
              <Button>Ver mais</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}