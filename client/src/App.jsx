import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [isLightMode, setIsLightMode] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('light-theme', isLightMode)
  }, [isLightMode])

  return (
    <div className="min-h-screen bg-(--page-bg) text-(--text-main) transition-colors duration-500">
      <Navbar isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}