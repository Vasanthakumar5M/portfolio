import { SectionTitle } from '../ui/SectionTitle'

export function Contact() {
  return (
    <section id="contact" className="py-32 px-4 md:px-12 bg-[#050505] relative overflow-hidden">
      
      {/* Decorative center piece */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#222] rounded-full flex items-center justify-center opacity-20 pointer-events-none">
         <div className="w-[600px] h-[600px] border border-cyber-magenta rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <SectionTitle title="Comm_Link" subtitle="ESTABLISH SECURE CONNECTION" color="cyber-magenta" />
        
        <p className="font-mono text-[#ccc] text-sm md:text-base leading-relaxed mb-12 max-w-xl mx-auto">
           &gt; Interested in collaborating or have a role that matches my skills? I'm always open to discussing new opportunities.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
           <a href="mailto:mvasanthakumar381@gmail.com" className="relative group inline-block font-mono font-bold tracking-widest text-sm text-center">
              <div className="absolute inset-0 bg-cyber-magenta opacity-20 group-hover:opacity-100 transition-opacity clip-scifi" />
              <div className="absolute inset-0 border border-cyber-magenta text-cyber-magenta group-hover:text-black transition-colors clip-scifi shadow-neon-magenta" />
              <div className="relative px-12 py-5 uppercase text-cyber-magenta group-hover:text-black z-10 transition-colors">
                 PING_MAIL
              </div>
           </a>
           
           <a href="https://github.com/Vasanthakumar5M" target="_blank" rel="noopener noreferrer" className="relative group inline-block font-mono font-bold tracking-widest text-sm text-center">
              <div className="absolute inset-0 bg-cyber-cyan opacity-20 group-hover:opacity-100 transition-opacity clip-scifi" />
              <div className="absolute inset-0 border border-cyber-cyan text-cyber-cyan group-hover:text-black transition-colors clip-scifi shadow-neon-cyan" />
              <div className="relative px-12 py-5 uppercase text-cyber-cyan group-hover:text-black z-10 transition-colors">
                 GITHUB_REPO
              </div>
           </a>
        </div>
      </div>
    </section>
  )
}
