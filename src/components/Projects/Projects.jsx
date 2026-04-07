import { SectionTitle } from '../ui/SectionTitle'
import { PROJECTS } from '../../config/resumeData'

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#EBEBE8]">
      <SectionTitle title="Work" subtitle="Selected projects and applications." number="04" />
      
      <div className="max-w-7xl mx-auto">
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="border-b border-editorial-border py-12 flex flex-col md:flex-row gap-8 justify-between group">
             
             <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter group-hover:text-editorial-accent transition-colors">
                    {project.name}
                  </h3>
                  {project.company && (
                     <span className="text-sm font-serif italic text-editorial-muted">({project.company})</span>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-bold uppercase tracking-widest bg-white border border-editorial-border px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>
             </div>
             
             <div className="flex-1 md:max-w-md">
                <p className="font-serif text-lg text-editorial-muted leading-relaxed line-clamp-3 md:line-clamp-none">
                  {project.description[0]} {project.description[1]}
                </p>
             </div>

          </div>
        ))}
      </div>
    </section>
  )
}
