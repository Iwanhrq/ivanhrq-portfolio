export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  image: string
  link: string
  github?: string
  live?: string
}

export interface Skill {
  name: string
  level: number // 1-5
  category: 'frontend' | 'backend' | 'tools' | 'languages'
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
  linkedin?: string
  github?: string
  twitter?: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}
