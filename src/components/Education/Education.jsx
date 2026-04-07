import { SectionTitle } from '../ui/SectionTitle'
import { EDUCATION } from '../../config/resumeData'

export function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-12">
      <SectionTitle title="Education" subtitle="Academic background and qualifications." number="05" />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {EDUCATION.map((edu, idx) => (
          <div key={idx} className="border border-editorial-border p-8 md:p-12">
             <div className="text-sm font-bold uppercase tracking-widest text-editorial-muted mb-6">
               {edu.duration}
             </div>
             <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 leading-tight">
               {edu.degree}
             </h3>
             <p className="font-serif text-lg text-editorial-muted mb-8">
               {edu.institution}
             </p>
             <div className="inline-block bg-editorial-text text-editorial-bg px-4 py-2 font-bold uppercase tracking-widest text-sm">
               {edu.score}
             </div>
          </div>
        ))}
      </div>
    </section>
  )
}
