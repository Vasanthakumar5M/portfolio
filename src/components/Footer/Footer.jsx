export function Footer() {
  return (
    <footer className="border-t border-editorial-border py-8 px-4 sm:px-6 lg:px-12 bg-editorial-bg text-editorial-text">
      <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-bold uppercase tracking-widest">
        <p>
          © {new Date().getFullYear()} Vasanthakumar M
        </p>
        <p className="text-editorial-muted font-serif normal-case font-normal">
          Designed with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
