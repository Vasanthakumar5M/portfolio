import React, { useState, useEffect, useRef } from 'react'

export function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [isVisible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el) } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, isVisible]
}

export function CyberCard({ children, className = '', title, borderColor = 'cyber-cyan', delay = 0 }) {
  const [ref, isVisible] = useInView(0.1)
  
  const borderColors = {
    'cyber-cyan': 'border-cyber-cyan shadow-neon-cyan',
    'cyber-magenta': 'border-cyber-magenta shadow-neon-magenta',
    'cyber-yellow': 'border-cyber-yellow shadow-neon-yellow' /* I will add neon-yellow to css if needed or just drop it, standard is enough */
  }
  
  return (
    <div 
      ref={ref}
      className={`relative p-[1px] bg-cyber-surface group transition-all duration-300 clip-scifi
        ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}
        ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`absolute inset-0 border-2 ${borderColors[borderColor]} opacity-50 group-hover:opacity-100 transition-opacity clip-scifi pointer-events-none`} />
      
      <div className="bg-cyber-surface w-full h-full p-6 md:p-8 clip-scifi relative z-10 transition-colors">
        {title && (
          <div className="mb-6 pb-2 border-b-2 border-cyber-border-dark flex justify-between items-center font-mono">
            <span className={`text-[10px] font-bold tracking-[0.2em] uppercase text-${borderColor}`}>{title}_SYS</span>
            <span className="text-[10px] text-cyber-dim tracking-widest">v1.0.9</span>
          </div>
        )}
        {children}
      </div>
      
      {/* Decorative corner accents */}
      <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${borderColors[borderColor]} z-20`} />
      <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${borderColors[borderColor]} z-20`} />
    </div>
  )
}
