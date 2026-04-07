import { SectionTitle } from '../ui/SectionTitle'
import { CyberCard } from '../ui/CyberCard'
import { EXPERIENCE } from '../../config/resumeData'

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 md:px-12 bg-[#09090b]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Exp_Log" subtitle="CAREER TIMELINE" color="cyber-yellow" />
        
        <div className="space-y-6">
          {EXPERIENCE.map((exp, idx) => (
             <CyberCard key={idx} borderColor="cyber-yellow" title={`LOG_${idx + 1}`} delay={idx * 150}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                   <div>
                     <h3 className="text-2xl font-black text-white">{exp.title}</h3>
                     <span className="text-cyber-yellow font-bold text-sm tracking-widest">{exp.company}</span>
                   </div>
                   <div className="font-mono text-xs text-[#888] border border-[#333] px-2 py-1 bg-[#111]">
                     {exp.duration}
                   </div>
                </div>
                
                <ul className="space-y-3 font-mono text-sm text-[#ccc]">
                   {exp.points.map((p, pIdx) => (
                      <li key={pIdx} className="flex gap-4">
                         <span className="text-cyber-yellow mt-0.5">&gt;</span>
                         <span className="leading-relaxed">{p}</span>
                      </li>
                   ))}
                </ul>
             </CyberCard>
          ))}
        </div>
      </div>
    </section>
  )
}
