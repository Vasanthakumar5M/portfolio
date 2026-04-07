export function Hero() {
  return (
    <section id="hero" className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-12 flex flex-col justify-end relative">
      
      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="h-full w-px bg-editorial-border absolute left-1/4" />
        <div className="h-full w-px bg-editorial-border absolute left-2/4" />
        <div className="h-full w-px bg-editorial-border absolute left-3/4" />
      </div>

      <div className="max-w-[1920px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end border-b border-editorial-border pb-12">
          
          <div className="md:col-span-8 animate-slide-up">
            <h1 className="text-7xl sm:text-8xl md:text-[9rem] lg:text-[11rem] font-black uppercase tracking-tighter leading-[0.85] mb-6">
              VASANTHA<br/>
              KUMAR<span className="text-editorial-accent">.</span><br/>
              M<span className="text-editorial-accent">.</span>
            </h1>
          </div>

          <div className="md:col-span-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="border border-editorial-border p-6 bg-editorial-text text-editorial-bg inline-block mb-8">
              <p className="font-bold uppercase tracking-widest text-sm mb-1">Role / Focus</p>
              <h2 className="text-2xl font-serif">Full-Stack<br/>Developer</h2>
            </div>
            <p className="text-editorial-muted font-medium max-w-sm mb-8 text-lg leading-relaxed">
              I build scalable web applications and enterprise RESTful APIs, currently engineering solutions at TechSmew Innovations.
            </p>
            <div className="flex gap-4">
               <a href="#projects" className="border border-editorial-border px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-editorial-text hover:text-editorial-bg transition-colors">
                 See Projects
               </a>
               <a href="#contact" className="border border-editorial-border px-8 py-4 font-bold uppercase tracking-widest text-xs text-editorial-bg bg-editorial-accent border-editorial-accent hover:opacity-90 transition-opacity">
                 Contact Me
               </a>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
           {['React', 'Spring Boot', 'PostgreSQL', 'Docker'].map((tech, idx) => (
             <div key={tech} className="font-bold uppercase tracking-widest text-sm text-editorial-text border-t-2 border-editorial-text pt-2 animate-slide-up" style={{ animationDelay: `${300 + (idx * 100)}ms` }}>
               / {tech}
             </div>
           ))}
        </div>
      </div>
    </section>
  )
}
