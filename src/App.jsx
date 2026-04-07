import React from 'react'

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

function App() {
  return (
    <div className="min-h-screen bg-editorial-bg text-editorial-text selection:bg-editorial-accent selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
