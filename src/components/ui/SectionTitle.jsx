import React from 'react'

export function SectionTitle({ title, subtitle, color = 'cyber-cyan' }) {
  const textColors = {
    'cyber-cyan': 'text-cyber-cyan',
    'cyber-magenta': 'text-cyber-magenta',
    'cyber-yellow': 'text-cyber-yellow',
  }

  return (
    <div className="mb-16 relative">
      <div className="flex items-end gap-4 mb-2">
        <h2 className={`text-4xl md:text-5xl font-black uppercase tracking-widest ${textColors[color]} glitch`} data-text={title}>
          {title}
        </h2>
        <span className="text-xs font-mono text-cyber-dim mb-2 hidden md:block">INIT_SEQ_COMPLETE</span>
      </div>
      
      <div className="flex items-center gap-4">
        <div className={`h-[2px] bg-cyber-${color.split('-')[1]} shadow-neon-${color.split('-')[1]} w-16`} />
        {subtitle && (
          <p className="text-cyber-dim font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase">{subtitle}</p>
        )}
        <div className={`h-[2px] bg-cyber-border flex-1`} />
      </div>
    </div>
  )
}
