import { Send, Mail, Phone } from 'lucide-react'
import { SectionWrapper } from '../ui/SectionWrapper'
import { SectionTitle } from '../ui/SectionTitle'
import { BentoCard } from '../ui/BentoCard'
import { GithubIcon } from '../ui/GithubIcon'

export function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <SectionTitle icon={<Send size={16} />} title="Contact" subtitle="Let's build something great" />

        <BentoCard className="p-8 md:p-12 relative overflow-hidden" hoverEffect={false}>
           <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/20 blur-[100px] pointer-events-none" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-cyan/20 blur-[100px] pointer-events-none" />

           <p className="text-zinc-300 text-lg mb-10 leading-relaxed font-light relative z-10">
             Interested in collaborating or have a role that matches my skills? 
             I'm always open to discussing new opportunities.
           </p>

           <div className="grid sm:grid-cols-3 gap-4 mb-10 relative z-10">
              {[
                { icon: <Mail size={20} />, label: 'Email', value: 'mvasanthakumar381@gmail.com', href: 'mailto:mvasanthakumar381@gmail.com' },
                { icon: <Phone size={20} />, label: 'Phone', value: '+91-9786450906', href: 'tel:+919786450906' },
                { icon: <GithubIcon size={20} />, label: 'GitHub', value: 'Vasanthakumar5M', href: 'https://github.com/Vasanthakumar5M' },
              ].map(contact => (
                <a 
                  key={contact.label} 
                  href={contact.href}
                  target={contact.label === 'GitHub' ? '_blank' : undefined}
                  rel={contact.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                  className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-black/40 border border-white/5 hover:bg-white/5 hover:border-white/20 transition-all duration-300"
                >
                  <div className="text-zinc-400 group-hover:text-white transition-colors">{contact.icon}</div>
                  <div>
                    <div className="text-[11px] text-zinc-500 uppercase tracking-widest mb-1">{contact.label}</div>
                    <div className="text-sm font-medium text-zinc-300">{contact.value}</div>
                  </div>
                </a>
              ))}
           </div>

           <a href="mailto:mvasanthakumar381@gmail.com" className="relative z-10 inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-zinc-200 transition-colors">
              <Mail size={18} /> Send an Email
           </a>
        </BentoCard>
      </div>
    </SectionWrapper>
  )
}
