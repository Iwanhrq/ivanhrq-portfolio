'use client';
import styles from './ProjectsHeader.module.css';

type ProjectItem = {
  id: number | string;
  title: string;
};

type ProjectsHeaderProps = {
  items: ProjectItem[];
  /** Optional offset in pixels when scrolling to a project */
  scrollOffset?: number;
};

export default function ProjectsHeader({ items, scrollOffset = 0 }: ProjectsHeaderProps) {
  const scrollTo = (id: string | number) => {
    const el = document.getElementById(`project-${id}`);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - scrollOffset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <div className={styles.floatingHeader}>
      <nav className={styles.nav} aria-label="Projetos">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollTo(item.id)}
            className={styles.navItem}
          >
            {item.title}
          </button>
        ))}
      </nav>
    </div>
  );
}


