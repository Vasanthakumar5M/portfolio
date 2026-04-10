import { SectionTitle } from '../ui/SectionTitle'
import { CyberCard } from '../ui/CyberCard'
import avatarImg from '../../assets/generic_avatar.png'

export function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-12 bg-cyber-bg">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Bio_Data" subtitle="USER/VASANTHAKUMAR_M" color="cyber-yellow" />

        <div className="grid lg:grid-cols-12 gap-8 items-start">

          <div className="lg:col-span-4 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyber-magenta to-cyber-cyan opacity-30 blur-lg group-hover:opacity-60 transition duration-1000" />
            <div className="relative aspect-square border border-cyber-border clip-scifi bg-cyber-darker flex flex-col items-center justify-center p-4 overflow-hidden group/avatar">
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg to-transparent z-10 opacity-50"></div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-full h-full text-cyber-cyan p-6 mix-blend-luminosity group-hover/avatar:text-cyber-yellow group-hover/avatar:mix-blend-normal transition-all duration-700 z-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
              </svg>
              <div className="absolute bottom-4 left-4 right-4 border-t border-cyber-cyan pt-2 flex justify-between text-[10px] font-mono text-cyber-cyan z-20">
                <span className="bg-cyber-bg/80 px-1">ID: 9812-B</span>
                <span className="animate-blink bg-cyber-bg/80 px-1">LIVE</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6">
            <CyberCard borderColor="cyber-yellow" title="PROFILE_SUMMARY">
              <h3 className="text-3xl font-bold text-cyber-text mb-6">Building robust <span className="text-cyber-magenta">backend</span> systems with a feel for <span className="text-cyber-cyan">frontend</span>.</h3>
              <div className="font-mono text-sm leading-relaxed text-cyber-muted space-y-4">
                <p>
                  &gt; Hey there! I'm Vasanthakumar, an Associate Software Developer at TechSmew Innovations. Backend engineering is my core — designing systems that are fast, reliable, and built to scale.
                </p>
                <p>
                  &gt; I specialize in RESTful API design, PostgreSQL optimization, and microservices architecture with Spring Boot — the engine behind every great product.
                </p>
                <p>
                  &gt; On the frontend, I work with React to bring interfaces to life. From containerized deployments with Docker to end-to-end feature delivery — I can own the full stack when needed.
                </p>
              </div>
            </CyberCard>
          </div>
        </div>
      </div>
    </section>
  )
}
