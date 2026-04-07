import { SectionTitle } from '../ui/SectionTitle'
import { CyberCard } from '../ui/CyberCard'
import { PROJECTS } from '../../config/resumeData'

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 md:px-12 bg-cyber-deep">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Work_Dir" subtitle="SELECTED DEPLOYMENTS" color="cyber-cyan" />
        
        <div className="grid lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
             <CyberCard key={idx} borderColor="cyber-cyan" title={project.type.toUpperCase() + '_PRJ'} delay={idx * 150} className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                   <h3 className="text-2xl font-black text-cyber-text hover:text-cyber-cyan transition-colors cursor-pointer">{project.name}</h3>
                   <span className="font-mono text-[10px] text-cyber-dim">{project.duration}</span>
                </div>
                
                {project.company && (
                  <div className="text-xs font-bold text-cyber-cyan tracking-widest mb-4">CONFIDENTIAL: {project.company}</div>
                )}
                
                <ul className="font-mono text-sm text-cyber-muted space-y-2 mb-6 flex-1">
                   {project.description.slice(0, 3).map((desc, dIdx) => (
                      <li key={dIdx} className="flex gap-2">
                         <span className="text-cyber-cyan opacity-80">-</span> {desc}
                      </li>
                   ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-cyber-border-dark">
                   {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyber-muted hover:text-cyber-cyan transition-colors cursor-default">
                         #{t}
                      </span>
                   ))}
                </div>
             </CyberCard>
          ))}
        </div>
      </div>
    </section>
  )
}
