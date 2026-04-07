import { User, MapPin, Briefcase, GraduationCap, Code2, Database } from 'lucide-react'
import { SectionWrapper } from '../ui/SectionWrapper'
import { SectionTitle } from '../ui/SectionTitle'
import { BentoCard } from '../ui/BentoCard'

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-7xl mx-auto">
        <SectionTitle icon={<User size={16} />} title="About" subtitle="Get to know me and my background" />
        
        <div className="grid md:grid-cols-3 gap-6">
          <BentoCard className="md:col-span-2 p-8 lg:p-10">
             <h3 className="text-2xl font-bold text-white mb-6">Building digital <span className="text-neon-purple">products</span>, brands, and <span className="text-neon-cyan">experiences</span>.</h3>
             <p className="text-zinc-400 leading-relaxed mb-6">
                Hey there! I'm <span className="text-zinc-200">Vasanthakumar</span>, an Associate Software Developer at TechSmew Innovations. 
                I thrive on turning complex problems into elegant, scalable software. My day-to-day involves building full-stack web applications — crafting responsive UIs with React and engineering robust backend systems with Spring Boot.
             </p>
             <p className="text-zinc-400 leading-relaxed">
                From designing RESTful APIs and optimizing PostgreSQL queries to containerizing applications with Docker and Kubernetes, I enjoy working across the entire development lifecycle. I'm passionate about clean code, microservice architectures, and the craft of building software that truly makes a difference.
             </p>
          </BentoCard>

          <div className="flex flex-col gap-6">
             <BentoCard className="flex-1 p-8 flex flex-col justify-center items-center text-center">
                <div className="w-24 h-24 rounded-full border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center mb-6">
                   <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-neon-purple to-neon-cyan">VM</div>
                </div>
                <div className="text-white font-bold text-lg mb-1">Vasanthakumar M</div>
                <div className="text-zinc-500 text-sm">Full-Stack Developer</div>
             </BentoCard>

             <BentoCard className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm text-zinc-300">
                    <MapPin size={16} className="text-neon-pink" /> Tamil Nadu, India
                  </li>
                  <li className="flex items-center gap-3 text-sm text-zinc-300">
                    <Briefcase size={16} className="text-neon-cyan" /> TechSmew Innovations
                  </li>
                  <li className="flex items-center gap-3 text-sm text-zinc-300">
                    <GraduationCap size={16} className="text-neon-purple" /> B.Tech IT '24
                  </li>
                </ul>
             </BentoCard>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
