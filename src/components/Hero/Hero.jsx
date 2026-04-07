export function Hero() {
  return (
    <section id="hero" className="min-h-screen pt-32 pb-16 px-4 md:px-12 flex flex-col justify-center relative overflow-hidden">
      
      <div className="absolute top-1/4 left-8 text-[10px] text-cyber-magenta font-mono opacity-50 hidden lg:block tracking-widest">
        SYS_OVERRIDE_ENABLED<br/>
        MEM_ALLOC: 4096MB<br/>
        CORE_TEPM: 48C
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-12">
        <div className="animate-cyber-slide">
          <div className="inline-block bg-cyber-yellow text-cyber-bg font-bold px-3 py-1 text-xs tracking-widest mb-6">
            WARNING: SYSTEM ACTIVE
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-2 leading-none glitch text-cyber-text" data-text="VASANTHA">
            VASANTHA<br/>KUMAR<span className="text-cyber-cyan">_</span>
          </h1>

          <div className="border-l-4 border-cyber-magenta pl-6 my-8 py-2">
            <h2 className="text-2xl text-cyber-magenta tracking-widest font-bold mb-4">
               FULL-STACK DEV {`[ENG_L1]`}
            </h2>
            <p className="text-cyber-muted text-sm md:text-base leading-relaxed max-w-md font-mono">
               Building scalable web applications, enterprise RESTful APIs, and neural-net compliant systems at TechSmew Innovations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mt-12">
             <a href="#projects" className="relative group inline-block font-mono font-bold tracking-widest text-sm text-center">
                <div className="absolute inset-0 bg-cyber-cyan opacity-20 group-hover:opacity-100 transition-opacity clip-scifi" />
                <div className="absolute inset-0 border border-cyber-cyan text-cyber-cyan group-hover:text-cyber-bg transition-colors clip-scifi" />
                <div className="relative px-8 py-4 uppercase text-cyber-cyan group-hover:text-cyber-bg z-10 transition-colors">
                   Initialize_Projects
                </div>
             </a>
             
             <a href="#contact" className="relative group inline-block font-mono font-bold tracking-widest text-sm text-center">
                <div className="absolute inset-0 bg-cyber-magenta opacity-20 group-hover:opacity-100 transition-opacity clip-scifi" />
                <div className="absolute inset-0 border border-cyber-magenta text-cyber-magenta group-hover:text-cyber-bg transition-colors clip-scifi" />
                <div className="relative px-8 py-4 uppercase text-cyber-magenta group-hover:text-cyber-bg z-10 transition-colors">
                   Comm_Link
                </div>
             </a>
          </div>
        </div>

        <div className="hidden lg:flex justify-end items-center opacity-70 animate-cyber-slide" style={{animationDelay: '0.2s'}}>
           <div className="w-[400px] h-[400px] text-[10px] font-mono text-cyber-cyan flex flex-col items-end">
              <span>SCANNING DEPLOYMENT PORTS...</span>
              <span>PORT 8080 [OPEN]</span>
              <span>PORT 3000 [OPEN]</span>
              <span>[████████████████████] 100%</span>
              <div className="mt-8 border border-cyber-cyan p-4 clip-scifi-sm bg-cyber-cyan/10">
                 <pre className="text-right">
{`const sysAuth = async () => {
   await db.connect(POSTGRES);
   return "ACCESS GRANTED";
};
// LOGGING...
sysAuth().then(console.log);`}
                 </pre>
              </div>
           </div>
        </div>
      </div>
    </section>
  )
}
