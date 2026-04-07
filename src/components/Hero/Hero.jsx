import { useState, useEffect } from 'react'
import { ChevronDown, FolderKanban, Send, Database, Terminal, Code2, Server } from 'lucide-react'
import { BentoCard } from '../ui/BentoCard'

export function Hero() {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Full-Stack Developer'

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1))
      i++
      if (i >= fullText.length) clearInterval(timer)
    }, 80)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-purple-900/20 to-transparent blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-cyan-900/10 to-transparent blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Text Content */}
          <div className="animate-slide-up text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-medium mb-8 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
              Available for opportunities
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-none tracking-tighter mb-4">
              Vasanthakumar<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">M</span>
            </h1>

            <div className="h-8 mb-6 font-mono text-xl text-zinc-400">
              $ <span className="text-zinc-100">{typedText}</span><span className="animate-pulse">_</span>
            </div>

            <p className="text-lg text-zinc-400 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed font-light">
              Crafting premium digital experiences and scalable enterprise robust APIs. 
              Currently innovating at TechSmew.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#projects" className="group flex items-center justify-center gap-2 bg-white text-black px-8 py-3.5 rounded-full font-semibold hover:bg-zinc-200 transition-colors">
                <FolderKanban size={18} />
                Explore Work
              </a>
              <a href="#contact" className="group flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/10 transition-colors">
                <Send size={18} />
                Contact Me
              </a>
            </div>
          </div>

          {/* Bento Visuals */}
          <div className="hidden lg:grid grid-cols-2 gap-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
             <BentoCard className="aspect-square p-6 flex flex-col justify-between group">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-neon-purple flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Terminal size={24} />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">React</div>
                  <div className="text-zinc-500 text-sm">Frontend Engineering</div>
                </div>
             </BentoCard>

             <BentoCard className="aspect-square p-6 flex flex-col justify-between group" delay={150}>
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-neon-cyan flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Server size={24} />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">Spring</div>
                  <div className="text-zinc-500 text-sm">Backend Systems</div>
                </div>
             </BentoCard>

             <BentoCard className="col-span-2 aspect-[2/1] p-6 group" delay={300}>
                <div className="flex justify-between items-start h-full">
                   <div>
                     <div className="flex gap-2 mb-4">
                       <div className="w-3 h-3 rounded-full bg-red-500" />
                       <div className="w-3 h-3 rounded-full bg-yellow-500" />
                       <div className="w-3 h-3 rounded-full bg-green-500" />
                     </div>
                     <div className="font-mono text-sm text-green-400">
                       &gt; npm run deploy<br/>
                       &gt; build successful<br/>
                       <span className="text-cyan-400">&gt; systems optimized</span>
                     </div>
                   </div>
                   <Database size={48} className="text-white/10 group-hover:text-white/20 transition-colors" />
                </div>
             </BentoCard>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-zinc-600" />
      </div>
    </section>
  )
}
