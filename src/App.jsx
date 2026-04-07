import React, { useState, useEffect } from 'react'

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
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark')

  return (
    <>
      <div className="crt-overlay" />
      
      <div className="min-h-screen relative z-10 transition-colors duration-300">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        
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
          
          <div className="h-px bg-gradient-to-r from-transparent via-cyber-border-dark to-transparent w-full" />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  )
}

export default App
