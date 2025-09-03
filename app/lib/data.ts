import { Project, Skill, ContactInfo, SocialLink } from '../types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'Plataforma completa de e-commerce com React, Node.js e MongoDB. Inclui sistema de pagamentos, carrinho de compras e painel administrativo.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express'],
    image: '🛒',
    link: '#',
    github: 'https://github.com/ivanhrq/ecommerce',
    live: 'https://ecommerce-demo.vercel.app'
  },
  {
    id: '2',
    title: 'Task Manager App',
    description: 'Aplicativo de gerenciamento de tarefas com drag & drop, categorização e notificações em tempo real.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: '✅',
    link: '#',
    github: 'https://github.com/ivanhrq/task-manager',
    live: 'https://task-manager-demo.vercel.app'
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description: 'Site pessoal responsivo e moderno com design minimalista e animações suaves.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: '🎨',
    link: '#',
    github: 'https://github.com/ivanhrq/portfolio',
    live: 'https://ivanhrq.vercel.app'
  }
]

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 5, category: 'frontend' },
  { name: 'Next.js', level: 5, category: 'frontend' },
  { name: 'TypeScript', level: 4, category: 'frontend' },
  { name: 'Tailwind CSS', level: 5, category: 'frontend' },
  { name: 'HTML/CSS', level: 5, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 4, category: 'backend' },
  { name: 'Express', level: 4, category: 'backend' },
  { name: 'Python', level: 3, category: 'backend' },
  { name: 'SQL', level: 4, category: 'backend' },
  { name: 'MongoDB', level: 4, category: 'backend' },
  
  // Tools
  { name: 'Git', level: 5, category: 'tools' },
  { name: 'Docker', level: 3, category: 'tools' },
  { name: 'VS Code', level: 5, category: 'tools' },
  { name: 'Figma', level: 3, category: 'tools' },
  { name: 'Postman', level: 4, category: 'tools' }
]

export const contactInfo: ContactInfo = {
  email: 'ivan@email.com',
  phone: '+55 (11) 99999-9999',
  location: 'São Paulo, Brasil',
  linkedin: 'https://linkedin.com/in/ivanhrq',
  github: 'https://github.com/ivanhrq',
  twitter: 'https://twitter.com/ivanhrq'
}

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/ivanhrq', icon: '🐙' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/ivanhrq', icon: '💼' },
  { name: 'Twitter', url: 'https://twitter.com/ivanhrq', icon: '🐦' },
  { name: 'Instagram', url: 'https://instagram.com/ivanhrq', icon: '📸' }
]
