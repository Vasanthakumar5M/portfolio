import { SectionTitle } from '../ui/SectionTitle'
import { EXPERIENCE } from '../../config/resumeData'

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-12">
      <SectionTitle title="Experience" subtitle="My professional timeline and roles." number="03" />
      
      <div className="max-w-7xl mx-auto">
        {EXPERIENCE.map((exp, idx) => (
          <div key={idx} className="border-t border-editorial-border py-12 grid md:grid-cols-12 gap-8 items-start">
             
             <div className="md:col-span-3">
               <div className="text-sm font-bold uppercase tracking-widest text-editorial-muted mb-2">
                 {exp.duration}
               </div>
               <div className="inline-block border border-editorial-border px-3 py-1 text-xs font-bold uppercase">
                 {exp.company}
               </div>
             </div>
             
             <div className="md:col-span-9">
               <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8">{exp.title}</h3>
               <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-editorial-muted font-serif text-lg leading-relaxed">
                 {exp.points.map((p, i) => (
                   <p key={i}>{p}</p>
                 ))}
               </div>
             </div>

          </div>
        ))}
      </div>
    </section>
  )
}
