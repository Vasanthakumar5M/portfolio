import { SectionTitle } from '../ui/SectionTitle'
import { CyberCard } from '../ui/CyberCard'
import { EDUCATION } from '../../config/resumeData'

export function Education() {
  return (
    <section id="education" className="py-24 px-4 md:px-12 bg-[#09090b]">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Edu_Record" subtitle="ACADEMIC BACKGROUND" color="cyber-yellow" />
        
        <div className="grid sm:grid-cols-2 gap-6">
          {EDUCATION.map((edu, idx) => (
             <CyberCard key={idx} borderColor="cyber-yellow" title="CERTIFICATE" delay={idx * 150}>
                <div className="text-[10px] font-mono text-[#888] mb-4">DATE: {edu.duration}</div>
                <h3 className="text-xl font-black text-white mb-2 leading-tight">{edu.degree}</h3>
                <p className="text-sm font-bold tracking-widest text-[#bbb] mb-6">{edu.institution}</p>
                <div className="inline-block border border-cyber-yellow text-cyber-yellow bg-cyber-yellow/10 font-mono text-xs px-2 py-1">
                  SCORE: {edu.score}
                </div>
             </CyberCard>
          ))}
        </div>
      </div>
    </section>
  )
}
