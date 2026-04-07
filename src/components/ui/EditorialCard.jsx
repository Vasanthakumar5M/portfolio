import React from 'react'

export function EditorialCard({ children, className = '', title }) {
  return (
    <div className={`border border-editorial-border bg-white ${className}`}>
      {title && (
        <div className="border-b border-editorial-border px-6 py-3 bg-editorial-text text-editorial-bg font-bold uppercase tracking-widest text-xs">
          {title}
        </div>
      )}
      <div className="p-6 md:p-8">
        {children}
      </div>
    </div>
  )
}
