import { useState } from 'react'
import { FolderKanban, Calendar } from 'lucide-react'
import { SectionWrapper } from '../ui/SectionWrapper'
import { SectionTitle } from '../ui/SectionTitle'
import { BentoCard } from '../ui/BentoCard'
import { PROJECTS } from '../../config/resumeData'

export function Projects() {
  const [filter, setFilter] = useState('All')
  const filteredProjects = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.type === filter)

  return (
    <SectionWrapper id="projects">
      <div className="max-w-7xl mx-auto">
        <SectionTitle icon={<FolderKanban size={16} />} title="Projects" subtitle="Selected work and personal builds" />
        
        <div className="flex justify-center gap-2 mb-12">
          {['All', 'Company', 'Personal'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${filter === f
                  ? 'bg-white text-black'
                  : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <BentoCard key={idx} className="p-8 flex flex-col h-full" delay={idx * 100}>
              <div className="flex justify-between items-start mb-6">
                 <div>
                   <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                   <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                     <Calendar size={12} /> {project.duration}
                   </div>
                 </div>
                 <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase
                    ${project.type === 'Company' ? 'bg-purple-500/10 text-neon-purple' : 'bg-cyan-500/10 text-neon-cyan'}`}>
                   {project.type}
                 </span>
              </div>
              
              <ul className="space-y-2 mb-8 flex-1">
                 {project.description.slice(0, 3).map((d, dIdx) => (
                   <li key={dIdx} className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
                     • {d}
                   </li>
                 ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 mt-auto">
                {project.tech.map(t => (
                  <span key={t} className="text-[11px] text-zinc-500 bg-black/50 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </BentoCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
