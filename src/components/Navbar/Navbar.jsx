import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../../config/resumeData'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = NAV_LINKS.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i])
          return
        }
      }
      setActiveSection('')
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full w-full max-w-5xl px-4
        ${scrolled ? 'py-3' : 'py-5'}`}
    >
      <div className={`flex items-center justify-between px-6 transition-all duration-500 rounded-2xl
        ${scrolled ? 'bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl py-3' : 'bg-transparent py-2'}`}>
        
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center font-bold text-white text-lg group-hover:scale-110 transition-transform duration-300">
            V
          </div>
          <span className="text-white font-semibold hidden sm:block tracking-tight text-lg">
            Vasanthakumar
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full px-2 py-1 border border-white/5">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300
                ${activeSection === link.href.slice(1)
                  ? 'bg-white/10 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-zinc-400 hover:text-white p-2"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-[110%] left-4 right-4 overflow-hidden transition-all duration-500 rounded-2xl bg-zinc-900 border border-white/10 shadow-2xl
          ${mobileOpen ? 'max-h-96 opacity-100 p-2' : 'max-h-0 opacity-0 p-0 border-transparent'}`}
      >
        <div className="space-y-1">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors
                ${activeSection === link.href.slice(1)
                  ? 'text-white bg-white/10'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
