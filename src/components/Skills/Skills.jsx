import { Code2, Braces, Cloud, Brain } from 'lucide-react'
import { SectionWrapper } from '../ui/SectionWrapper'
import { SectionTitle } from '../ui/SectionTitle'
import { BentoCard } from '../ui/BentoCard'
import { SKILLS } from '../../config/resumeData'

const iconMap = {
  Code2: <Code2 size={24} />,
  Braces: <Braces size={24} />,
  Cloud: <Cloud size={24} />,
  Brain: <Brain size={24} />
}

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="max-w-7xl mx-auto">
        <SectionTitle icon={<Code2 size={16} />} title="Skills" subtitle="Tools and technologies in my utility belt" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(SKILLS).map(([category, { iconName, items }], idx) => (
             <BentoCard key={category} className="p-8" delay={idx * 100}>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
                  {iconMap[iconName]}
                </div>
                <h3 className="text-xl font-bold text-white mb-6">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm hover:bg-zinc-800 transition-colors cursor-default"
                    >
                      {skill}
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
