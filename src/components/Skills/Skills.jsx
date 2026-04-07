import { SectionTitle } from '../ui/SectionTitle'
import { CyberCard } from '../ui/CyberCard'
import { SKILLS } from '../../config/resumeData'

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 md:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Tech_Specs" subtitle="CAPABILITIES AND LOADOUTS" color="cyber-magenta" />
        
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(SKILLS).map(([category, { items }], idx) => (
            <CyberCard key={category} borderColor="cyber-magenta" title={category.toUpperCase()} delay={idx * 100}>
              <div className="flex flex-wrap gap-3">
                {items.map(skill => (
                  <span key={skill} className="font-mono text-xs px-3 py-1.5 border border-[#333] text-[#ddd] bg-[#1a1a1a] clip-scifi-sm hover:border-cyber-magenta hover:text-cyber-magenta hover:shadow-neon-magenta transition-all cursor-default">
                    {skill}
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
