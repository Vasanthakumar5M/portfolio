export function SectionTitle({ icon, title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-neon-cyan text-sm font-medium mb-4">
        {icon}
        <span>{title}</span>
      </div>
      {subtitle && <p className="text-zinc-400 max-w-2xl mx-auto mt-2">{subtitle}</p>}
    </div>
  )
}
