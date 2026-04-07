import { SectionTitle } from '../ui/SectionTitle'

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-12">
      <SectionTitle title="About" subtitle="Turning complex problems into elegant, scalable software." number="01" />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
           <div className="w-full aspect-[3/4] border border-editorial-border bg-editorial-border/5 relative flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 opacity-20 filter grayscale bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMDAwIi8+PC9zdmc+')] mix-blend-multiply" />
              <div className="relative z-10 text-9xl font-black text-editorial-text tracking-tighter opacity-10 group-hover:opacity-100 transition-opacity duration-700">VM</div>
           </div>
        </div>
        
        <div className="md:col-span-7 flex flex-col justify-center">
           <h3 className="text-3xl md:text-5xl font-serif text-editorial-text leading-tight mb-8">
             Building digital experiences and robust enterprise backend systems.
           </h3>
           <div className="grid sm:grid-cols-2 gap-8 text-lg text-editorial-muted leading-relaxed font-serif">
             <p>
                Hey there! I'm <span className="font-sans font-bold text-editorial-text">Vasanthakumar</span>, an Associate Software Developer at TechSmew Innovations. I thrive on turning complex problems into elegant, scalable software.
             </p>
             <p>
                My day-to-day involves building full-stack web applications — crafting responsive UIs with React and engineering robust backend systems with Spring Boot.
             </p>
             <p>
                From designing RESTful APIs and optimizing PostgreSQL queries to containerizing applications with Docker and Kubernetes, I enjoy working across the entire development lifecycle.
             </p>
             <p>
                I'm passionate about clean code, microservice architectures, and the craft of building software that truly makes a difference.
             </p>
           </div>
        </div>
      </div>
    </section>
  )
}
