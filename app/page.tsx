import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ivan Henrique | Portfólio',
  description: 'Portfólio pessoal de Ivan Henrique.',
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
