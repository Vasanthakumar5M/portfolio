import { Mail } from 'lucide-react'
import { GithubIcon } from '../ui/GithubIcon'

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-zinc-950/80 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} <span className="text-zinc-300">Vasanthakumar M</span>. 
          Built with React & Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Vasanthakumar5M" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
            <GithubIcon size={18} />
          </a>
          <a href="mailto:mvasanthakumar381@gmail.com" className="text-zinc-500 hover:text-white transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
