import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ivan Henrique - Portfólio',
  description: 'Portfólio pessoal de Ivan Henrique, desenvolvedor Full Stack especializado em React, Next.js e TypeScript.',
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
    </main>
  )
}
