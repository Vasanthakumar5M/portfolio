export function SectionTitle({ title, subtitle, number }) {
  return (
    <div className="mb-16 border-b-2 border-editorial-text pb-6 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div className="flex items-start gap-4">
        {number && (
          <span className="text-xl md:text-2xl font-bold text-editorial-muted leading-none pt-1">— {number}</span>
        )}
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">{title}</h2>
      </div>
      {subtitle && (
        <p className="text-editorial-muted text-sm md:text-base max-w-sm text-right font-medium">{subtitle}</p>
      )}
    </div>
  )
}
