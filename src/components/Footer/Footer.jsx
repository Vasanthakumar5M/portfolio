export function Footer() {
  return (
    <footer className="border-t-2 border-[#222] bg-[#09090b] py-6 px-4 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[10px] text-[#666] tracking-widest uppercase">
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
