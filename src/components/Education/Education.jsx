import { GraduationCap, Calendar } from 'lucide-react'
import { SectionWrapper } from '../ui/SectionWrapper'
import { SectionTitle } from '../ui/SectionTitle'
import { BentoCard } from '../ui/BentoCard'
import { EDUCATION } from '../../config/resumeData'

export function Education() {
  return (
    <SectionWrapper id="education">
      <div className="max-w-4xl mx-auto">
        <SectionTitle icon={<GraduationCap size={16} />} title="Education" subtitle="Academic background" />
        
        <div className="grid sm:grid-cols-2 gap-6">
          {EDUCATION.map((edu, idx) => (
             <BentoCard key={idx} className="p-8" delay={idx * 150}>
               <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white mb-6">
                 <GraduationCap size={20} />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
               <p className="text-zinc-400 text-sm mb-6 leading-relaxed">{edu.institution}</p>
               
               <div className="flex flex-col gap-3 pt-6 border-t border-white/5">
                 <div className="flex items-center gap-2 text-sm text-zinc-500">
                   <Calendar size={14} /> {edu.duration}
                 </div>
                 <div className="inline-block bg-white/10 text-white w-max px-3 py-1 rounded-lg text-sm font-medium">
                   {edu.score}
                 </div>
               </div>
             </BentoCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
