import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../../config/resumeData'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileOpen, setMobileOpen] = useState(false)

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-editorial-bg/90 backdrop-blur-md border-b border-editorial-border">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-16 md:h-20">
        
        <a href="#hero" className="font-black text-xl tracking-tighter uppercase whitespace-nowrap">
          Vasanthakumar<span className="text-editorial-accent">.</span>M
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
          {NAV_LINKS.map(link => {
            const sectionStr = link.href.slice(1)
            const isActive = activeSection === sectionStr
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative transition-colors ${isActive ? 'text-editorial-accent' : 'text-editorial-text hover:text-editorial-accent'}`}
              >
                {link.label}
              </a>
            )
          })}
        </div>
        
        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-editorial-text p-2 border border-editorial-border"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden border-t border-editorial-border bg-editorial-bg overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-96' : 'max-h-0 border-transparent'}`}>
        <div className="flex flex-col p-4">
           {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-lg font-black uppercase py-4 border-b border-editorial-border/20 last:border-0 ${activeSection === link.href.slice(1) ? 'text-editorial-accent' : 'text-editorial-text'}`}
              >
                {link.label}
              </a>
           ))}
        </div>
      </div>
    </nav>
  )
}
