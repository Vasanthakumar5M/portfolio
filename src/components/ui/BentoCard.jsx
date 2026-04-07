import { useInView } from './SectionWrapper'

export function BentoCard({ children, className = '', delay = 0, hoverEffect = true }) {
  const [ref, isVisible] = useInView(0.1)
  
  return (
    <div
      ref={ref}
      className={`relative rounded-3xl glass-card overflow-hidden transition-all duration-500
        ${hoverEffect ? 'hover:border-zinc-500/50 hover:shadow-[0_0_30px_-10px_rgba(192,132,252,0.3)] hover:-translate-y-1' : ''}
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  )
}
