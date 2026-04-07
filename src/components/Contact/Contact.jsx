import { SectionTitle } from '../ui/SectionTitle'

export function Contact() {
  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-12 bg-editorial-text text-editorial-bg">
      <SectionTitle title="Contact" subtitle="Let's build something exceptional." number="06" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        <div>
           <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-none text-editorial-accent">
             Get In Touch.
           </h3>
           <p className="font-serif text-xl text-editorial-bg/70 max-w-md leading-relaxed">
             Whether you have a project idea, a job opportunity, or just want to say hello — my inbox is always open.
           </p>
        </div>

        <div className="grid gap-8 w-full md:w-auto">
          <a href="mailto:mvasanthakumar381@gmail.com" className="group">
             <p className="text-sm font-bold uppercase tracking-widest text-editorial-bg/50 mb-1">Email</p>
             <p className="text-2xl md:text-4xl font-serif hover:text-editorial-accent transition-colors">mvasanthakumar381@gmail.com</p>
          </a>
          <a href="tel:+919786450906" className="group">
             <p className="text-sm font-bold uppercase tracking-widest text-editorial-bg/50 mb-1">Phone</p>
             <p className="text-2xl md:text-4xl font-serif hover:text-editorial-accent transition-colors">+91-9786450906</p>
          </a>
          <a href="https://github.com/Vasanthakumar5M" target="_blank" rel="noopener noreferrer" className="group">
             <p className="text-sm font-bold uppercase tracking-widest text-editorial-bg/50 mb-1">Github</p>
             <p className="text-2xl md:text-4xl font-serif hover:text-editorial-accent transition-colors">github.com/Vasanthakumar5M</p>
          </a>
        </div>

      </div>
    </section>
  )
}
