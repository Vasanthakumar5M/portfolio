import { useState, useEffect, useRef } from 'react'

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

export function SectionWrapper({ id, children, className = '' }) {
  const [ref, isVisible] = useInView(0.08)
  return (
    <section
      id={id}
      ref={ref}
      className={`relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 transition-all duration-1000
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
        ${className}`}
    >
      {children}
    </section>
  )
}
