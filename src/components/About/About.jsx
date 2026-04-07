import { SectionTitle } from '../ui/SectionTitle'
import { CyberCard } from '../ui/CyberCard'

export function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-12 bg-cyber-bg">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Bio_Data" subtitle="USER/VASANTHAKUMAR_M" color="cyber-yellow" />
        
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-4 relative group">
             <div className="absolute -inset-1 bg-gradient-to-r from-cyber-magenta to-cyber-cyan opacity-30 blur-lg group-hover:opacity-60 transition duration-1000" />
             <div className="relative aspect-square border border-cyber-border clip-scifi bg-cyber-darker flex flex-col items-center justify-center p-8">
                 <div className="text-9xl font-black text-cyber-border-dark">VM</div>
                 <div className="absolute bottom-4 left-4 right-4 border-t border-cyber-cyan pt-2 flex justify-between text-[10px] font-mono text-cyber-cyan">
                    <span>ID: 9812-B</span>
                    <span className="animate-blink">LIVE</span>
                 </div>
             </div>
          </div>
          
          <div className="lg:col-span-8 flex flex-col gap-6">
             <CyberCard borderColor="cyber-yellow" title="PROFILE_SUMMARY">
               <h3 className="text-3xl font-bold text-cyber-text mb-6">Building digital <span className="text-cyber-yellow">products</span> and <span className="text-cyber-magenta">enterprise</span> systems.</h3>
               <div className="font-mono text-sm leading-relaxed text-cyber-muted space-y-4">
                 <p>
                   &gt; Hey there! I'm Vasanthakumar, an Associate Software Developer at TechSmew Innovations. I thrive on turning complex problems into elegant, scalable software. 
                 </p>
                 <p>
                   &gt; My day-to-day involves building full-stack web applications — crafting responsive UIs with React and engineering robust backend systems with Spring Boot.
                 </p>
                 <p>
                   &gt; From designing RESTful APIs and optimizing PostgreSQL queries to containerizing applications with Docker and Kubernetes, I enjoy working across the entire development lifecycle.
                 </p>
               </div>
             </CyberCard>
          </div>
        </div>
      </div>
    </section>
  )
}
