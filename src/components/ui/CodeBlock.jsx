import React from 'react'

export function CodeBlock({ children, title, lang = 'javascript', delay = 0 }) {
  return (
    <div className="rounded-lg bg-ide-bg border border-ide-border overflow-hidden shadow-xl" style={{ animationDelay: `${delay}ms` }}>
      {/* Window Header / Mac Traffic Lights */}
      <div className="flex items-center px-4 py-2 bg-[#2d2d2d] border-b border-ide-border">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="mx-auto text-xs text-syntax-comment font-mono">{title}</div>
      </div>
      {/* Editor Body */}
      <div className="p-4 md:p-6 overflow-x-auto text-sm md:text-base leading-relaxed font-mono">
        {children}
      </div>
    </div>
  )
}
