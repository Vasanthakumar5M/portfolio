import { SectionTitle } from '../ui/SectionTitle'
import { EditorialCard } from '../ui/EditorialCard'
import { SKILLS } from '../../config/resumeData'

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-12 bg-editorial-text text-editorial-bg">
      <SectionTitle title="Skills" subtitle="The tools and technologies I use to build scalable systems." number="02" />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {Object.entries(SKILLS).map(([category, { items }]) => (
          <div key={category} className="border-t border-editorial-bg/30 pt-6">
            <h3 className="text-2xl font-bold uppercase tracking-widest mb-6 text-editorial-accent">{category}</h3>
            <div className="grid grid-cols-2 gap-4">
              {items.map(skill => (
                <div key={skill} className="font-serif text-lg text-editorial-bg/80">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
