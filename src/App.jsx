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
    <>
      <div className="crt-overlay" />
      
      <div className="min-h-screen bg-cyber-bg text-cyber-text selection:bg-cyber-magenta selection:text-white relative z-10">
        <Navbar />
        
        <main>
          <Hero />
          
          <div className="h-px bg-gradient-to-r from-transparent via-cyber-cyan/50 to-transparent w-full" />
          <About />
          
          <div className="h-px bg-gradient-to-r from-transparent via-cyber-yellow/50 to-transparent w-full" />
          <Skills />

          <div className="h-px bg-gradient-to-r from-transparent via-cyber-yellow/50 to-transparent w-full" />
          <Experience />
          
          <div className="h-px bg-gradient-to-r from-transparent via-cyber-cyan/50 to-transparent w-full" />
          <Projects />
          
          <div className="h-px bg-gradient-to-r from-transparent via-cyber-magenta/50 to-transparent w-full" />
          <Education />
          
          <div className="h-px bg-gradient-to-r from-transparent via-[#333] to-transparent w-full" />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  )
}

export default App
