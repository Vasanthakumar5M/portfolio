import { Briefcase, Calendar } from 'lucide-react'
import { SectionWrapper } from '../ui/SectionWrapper'
import { SectionTitle } from '../ui/SectionTitle'
import { BentoCard } from '../ui/BentoCard'
import { EXPERIENCE } from '../../config/resumeData'

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-4xl mx-auto">
        <SectionTitle icon={<Briefcase size={16} />} title="Experience" subtitle="My professional journey" />
        
        <div className="space-y-6">
          {EXPERIENCE.map((exp, idx) => (
            <BentoCard key={idx} className="p-8" hoverEffect={false}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                 <div>
                   <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                   <span className="text-neon-cyan font-medium">{exp.company}</span>
                 </div>
                 <div className="flex items-center gap-2 text-zinc-400 bg-white/5 px-3 py-1.5 rounded-full text-sm">
                   <Calendar size={14} />
                   {exp.duration}
                 </div>
              </div>
              <ul className="space-y-3">
                 {exp.points.map((point, pIdx) => (
                   <li key={pIdx} className="flex gap-4 text-zinc-300">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neon-purple shrink-0" />
                      <span className="leading-relaxed">{point}</span>
                   </li>
                 ))}
              </ul>
            </BentoCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
