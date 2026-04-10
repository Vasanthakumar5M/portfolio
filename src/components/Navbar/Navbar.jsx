import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../../config/resumeData'
import { Sun, Moon } from 'lucide-react'

export function Navbar({ theme, toggleTheme }) {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      const sections = ['hero', ...NAV_LINKS.map(l => l.href.slice(1))]
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i])
          return
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cyber-bg/90 border-b border-cyber-cyan/30 shadow-neon-cyan backdrop-blur-sm">
      <div className="px-4 py-2 border-b border-cyber-border-dark flex justify-between items-center bg-cyber-darker">
        <div className="text-[10px] font-mono text-cyber-yellow">NET_STATUS: ONLINE</div>
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="text-cyber-cyan hover:text-cyber-magenta transition-colors" aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <div className="text-[10px] font-mono text-cyber-dim">sys.time: {new Date().toLocaleTimeString()}</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between py-3 gap-4 overflow-x-auto scrollbar-none">

        <a href="#hero" className="font-black text-2xl tracking-widest text-cyber-text shrink-0">
          VASANTH_M
          <span className="text-[10px] ml-1 text-cyber-magenta opacity-80">SYS_ADMIN</span>
        </a>

        <div className="flex items-center gap-2 sm:gap-6 text-xs sm:text-sm font-bold tracking-[0.2em]">
          {NAV_LINKS.map(link => {
            const sectionStr = link.href.slice(1)
            const isActive = activeSection === sectionStr
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-2 py-1 transition-all ${isActive ? 'text-cyber-cyan border-b-2 border-cyber-cyan' : 'text-cyber-dim hover:text-cyber-text'}`}
              >
                {link.label}
              </a>
            )
          })}
        </div>

      </div>
    </nav>
  )
}
