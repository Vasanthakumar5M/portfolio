export function Footer() {
  return (
    <footer className="border-t-2 border-cyber-border-dark bg-cyber-bg py-6 px-4 md:px-12 relative z-10 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[10px] text-cyber-dim tracking-widest uppercase">
        <p>
          SYS.COPYRIGHT © {new Date().getFullYear()} VASANTHAKUMAR M
        </p>
        <p>
          RENDERED IN REACT_V19 + TAILWIND_CSS
        </p>
      </div>
    </footer>
  )
}
