import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

// Layout
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'

// Sections
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Skills } from './components/Skills/Skills'
import { Experience } from './components/Experience/Experience'
import { Projects } from './components/Projects/Projects'
import { Education } from './components/Education/Education'
import { Contact } from './components/Contact/Contact'

// Global styles
import './index.css'

function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', toggle)
    return () => window.removeEventListener('scroll', toggle)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white flex items-center justify-center shadow-2xl hover:bg-white hover:text-black transition-all duration-300
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-neon-purple/30">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
