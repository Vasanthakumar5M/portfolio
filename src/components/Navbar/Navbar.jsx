import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../../config/resumeData'

export function Navbar() {
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
      <div className="px-4 py-2 border-b border-[#222] flex justify-between items-center bg-[#111]">
        <div className="text-[10px] font-mono text-cyber-yellow">NET_STATUS: ONLINE</div>
        <div className="text-[10px] font-mono text-[#666]">sys.time: {new Date().toLocaleTimeString()}</div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between py-3 gap-4 overflow-x-auto scrollbar-none">
        
        <a href="#hero" className="font-black text-2xl tracking-widest text-white shrink-0">
          V_KUMAR
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
                className={`relative px-2 py-1 transition-all ${isActive ? 'text-cyber-cyan border-b-2 border-cyber-cyan' : 'text-[#888] hover:text-white'}`}
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
