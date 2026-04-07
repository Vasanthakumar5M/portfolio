import { useState, useEffect, useRef } from 'react'
import {
  Menu, X, ChevronDown, ExternalLink, Mail, Phone,
  Code2, Database, Cloud, Brain, Briefcase, GraduationCap,
  FolderKanban, User, Send, ArrowUp, Terminal, Braces,
  Server, Container, MapPin, Calendar
} from 'lucide-react'

/* Custom GitHub icon since lucide-react removed it */
function Github({ size = 24, className = '' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  )
}

/* ─────────────── HOOK: Intersection Observer for scroll animations ─────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [isVisible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el) } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, isVisible]
}

/* ─────────────── DATA ─────────────── */
const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const SKILLS = {
  Languages: { icon: <Code2 size={20} />, items: ['Java', 'MySQL', 'PostgreSQL'] },
  Frameworks: { icon: <Braces size={20} />, items: ['Spring Boot', 'Hibernate', 'React', 'Tailwind CSS'] },
  'Tools & Platforms': { icon: <Cloud size={20} />, items: ['Maven', 'Git', 'Railway', 'Docker', 'Kubernetes', 'Jenkins', 'Keycloak', 'Kafka', 'Redis', 'AWS'] },
  'Core Concepts': { icon: <Brain size={20} />, items: ['OOP', 'DSA', 'RESTful APIs', 'JWT Authentication'] },
}

const EXPERIENCE = [
  {
    title: 'Associate Software Developer',
    company: 'TechSmew Innovations Pvt Ltd',
    duration: 'Oct 2025 – Present',
    current: true,
    points: [
      'Develop and maintain full-stack web applications using React (frontend) and Spring Boot (backend).',
      'Design and build RESTful APIs consumed by React-based frontends for seamless client-server communication.',
      'Manage and optimize PostgreSQL database schemas and queries to support application features.',
      'Collaborate on end-to-end feature development, from UI components to backend business logic.',
    ],
  },
  {
    title: 'Software Developer Intern',
    company: 'TechSmew Innovations Pvt Ltd',
    duration: 'Jul 2025 – Sep 2025',
    current: false,
    points: [
      'Contributed to frontend and backend development tasks during a 3-month internship program.',
      'Gained hands-on experience with React, Spring Boot, and MySQL in a production team environment.',
      'Assisted in API development and database management under senior developer guidance.',
    ],
  },
]

const PROJECTS = [
  {
    name: 'HRM Application',
    type: 'Company',
    company: 'TechSmew Innovations Pvt Ltd',
    duration: '2025 – Present',
    description: [
      'Actively developing a Human Resource Management system to automate and streamline core HR operations.',
      'Building modules for employee management, including onboarding, profiles, and department tracking.',
      'Implementing payroll and attendance management with automated calculation and reporting features.',
      'Developing a leave management module to handle leave requests, approvals, and balance tracking.',
      'Integrated Apache Kafka for event-driven communication between HR modules and other internal services.',
      'Utilizing Docker, Kubernetes, and Jenkins for containerization and CI/CD pipeline management.',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Kafka', 'Maven', 'Docker', 'Kubernetes', 'Jenkins', 'Git'],
  },
  {
    name: 'CRM Application',
    type: 'Company',
    company: 'TechSmew Innovations Pvt Ltd',
    duration: '2025 – Present',
    description: [
      'Building an enterprise CRM application to streamline customer relationship and sales management.',
      'Developing frontend dashboards and UI components using React for managing customer data and workflows.',
      'Designing and implementing Spring Boot backend APIs for CRM operations including CRUD, filtering, and reporting.',
      'Structuring PostgreSQL database schemas to support scalable CRM data models.',
      'Integrated Apache Kafka for event-driven messaging and asynchronous communication between services.',
      'Integrated Keycloak for identity and access management, handling authentication and role-based authorization.',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Kafka', 'Maven', 'Docker', 'Kubernetes', 'Jenkins', 'Keycloak', 'Git'],
  },
  {
    name: 'E-Commerce Jewellery Platform',
    type: 'Company',
    company: 'TechSmew Innovations Pvt Ltd',
    duration: '2025',
    description: [
      'Designed and developed a full-stack e-commerce platform with a modern, responsive UI using React.',
      'Built RESTful backend APIs using Spring Boot to handle product listings, user interactions, and data management.',
      'Developed a dedicated Product Admin Panel enabling admins to upload, manage, and organize products efficiently.',
      'Implemented Redis caching to optimize product data retrieval and improve overall application performance.',
      'Containerized and deployed the application using Docker and Kubernetes, with CI/CD pipelines via Jenkins.',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Redis', 'Maven', 'Docker', 'Kubernetes', 'Jenkins', 'Git'],
  },
  {
    name: 'Smart Document Vault',
    type: 'Personal',
    company: null,
    duration: 'Mar 2025',
    description: [
      'Built a secure document management system using Spring Boot, with JWT-based authentication and role-based access control.',
      'Developed RESTful APIs for uploading, downloading, filtering, and organizing documents by folder, type, and date.',
      'Used Spring Data JPA with MySQL for efficient persistence and implemented modular, scalable service and controller layers.',
      'Integrated Swagger UI for API documentation and testing, and deployed on Railway cloud.',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'MySQL', 'Maven', 'Swagger', 'Railway', 'Git'],
  },
  {
    name: 'Banking Application',
    type: 'Personal',
    company: null,
    duration: 'Sep 2024',
    description: [
      'Developed RESTful APIs to facilitate transactions, account management, and user authentication.',
      'Implemented user authentication with secure password handling for data protection.',
      'Designed and optimized MySQL database schemas for effective data management.',
    ],
    tech: ['Java', 'Spring Boot', 'MySQL'],
  },
]

const EDUCATION = [
  {
    institution: 'University College of Engineering BIT Campus, Tiruchirappalli',
    degree: 'B.Tech in Information Technology',
    duration: 'Nov 2020 – Jun 2024',
    score: 'CGPA: 8.13',
  },
  {
    institution: 'Government Higher Secondary School, Maramadakki',
    degree: 'HSC – State Board, Tamil Nadu',
    duration: 'Jun 2019 – Apr 2020',
    score: '79.5%',
  },
]

/* ─────────────── COMPONENTS ─────────────── */

/* --- Animated background particles --- */
function ParticleField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-accent-500/10 animate-float"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${Math.random() * 4 + 4}s`,
          }}
        />
      ))}
    </div>
  )
}

/* --- Section wrapper with scroll animation --- */
function Section({ id, children, className = '' }) {
  const [ref, isVisible] = useInView(0.08)
  return (
    <section
      id={id}
      ref={ref}
      className={`relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 transition-all duration-1000
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
        ${className}`}
    >
      {children}
    </section>
  )
}

/* --- Section heading --- */
function SectionTitle({ icon, title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-medium mb-4">
        {icon}
        <span>{title}</span>
      </div>
      {subtitle && <p className="text-slate-400 max-w-2xl mx-auto mt-2">{subtitle}</p>}
    </div>
  )
}

/* --- Glowing card --- */
function GlowCard({ children, className = '', delay = 0 }) {
  const [ref, isVisible] = useInView(0.1)
  return (
    <div
      ref={ref}
      className={`group relative rounded-2xl border border-white/5 bg-navy-900/60 backdrop-blur-sm
        hover:border-accent-500/30 transition-all duration-500 hover:shadow-[0_0_40px_-12px_rgba(99,102,241,0.3)]
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative">{children}</div>
    </div>
  )
}

/* ─────────────── NAVBAR ─────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = NAV_LINKS.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i])
          return
        }
      }
      setActiveSection('')
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled ? 'bg-navy-950/80 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent-500 to-cyan-500 flex items-center justify-center font-bold text-white text-lg group-hover:scale-110 transition-transform duration-300">
            V
          </div>
          <span className="text-white font-semibold text-lg hidden sm:block">
            Vasanthakumar<span className="text-accent-400">.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                ${activeSection === link.href.slice(1)
                  ? 'text-accent-400 bg-accent-500/10'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-slate-400 hover:text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-navy-950/95 backdrop-blur-xl border-b border-white/5
          ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-4 py-4 space-y-1">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors
                ${activeSection === link.href.slice(1)
                  ? 'text-accent-400 bg-accent-500/10'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

/* ─────────────── HERO ─────────────── */
function Hero() {
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleField />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-600/20 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="text-center lg:text-left animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            Available for opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
            Vasanthakumar
            <span className="block bg-gradient-to-r from-accent-400 via-cyan-400 to-accent-400 bg-clip-text text-transparent animate-gradient">
              M
            </span>
          </h1>

          <div className="text-xl sm:text-2xl text-slate-300 font-medium mb-6 font-mono">
            {'> '}<span className="text-accent-400">{typedText}</span>
            <span className="inline-block w-0.5 h-6 bg-accent-400 ml-1 animate-pulse" />
          </div>

          <p className="text-slate-400 text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            Passionate full-stack developer building scalable web applications and RESTful APIs.
            Currently crafting enterprise solutions at TechSmew Innovations with React &amp; Spring Boot.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 hover:scale-105 transition-all duration-300"
            >
              <FolderKanban size={18} />
              View My Work
              <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 hover:border-accent-500/30 hover:scale-105 transition-all duration-300"
            >
              <Send size={18} />
              Contact Me
            </a>
          </div>
        </div>

        {/* Right: Animated developer illustration */}
        <div className="hidden lg:flex justify-center items-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="relative w-80 h-80">
            {/* Orbiting ring */}
            <div className="absolute inset-0 rounded-full border border-accent-500/20 animate-spin-slow" />
            <div className="absolute inset-4 rounded-full border border-cyan-500/10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />

            {/* Center terminal */}
            <div className="absolute inset-12 rounded-2xl bg-navy-800/80 border border-white/10 backdrop-blur-sm overflow-hidden shadow-2xl">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-navy-900/80 border-b border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="text-xs text-slate-500 ml-2 font-mono">terminal</span>
              </div>
              <div className="p-3 font-mono text-xs leading-relaxed">
                <p className="text-green-400">$ whoami</p>
                <p className="text-slate-300">vasanthakumar</p>
                <p className="text-green-400 mt-1">$ cat skills.txt</p>
                <p className="text-cyan-400">React</p>
                <p className="text-accent-400">Spring Boot</p>
                <p className="text-yellow-400">PostgreSQL</p>
                <p className="text-green-400 mt-1">$ status</p>
                <p className="text-emerald-400">● building...</p>
              </div>
            </div>

            {/* Orbiting icons */}
            {[
              { icon: <Server size={16} />, delay: '0s' },
              { icon: <Database size={16} />, delay: '5s' },
              { icon: <Container size={16} />, delay: '10s' },
              { icon: <Terminal size={16} />, delay: '15s' },
            ].map((item, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 -mt-4 -ml-4 animate-orbit"
                style={{ animationDelay: item.delay }}
              >
                <div className="w-8 h-8 rounded-lg bg-navy-800 border border-accent-500/30 flex items-center justify-center text-accent-400 shadow-lg">
                  {item.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-slate-500 text-xs font-medium tracking-wider uppercase">Scroll</span>
        <ChevronDown size={18} className="text-accent-400" />
      </div>
    </section>
  )
}

/* ─────────────── ABOUT ─────────────── */
function About() {
  return (
    <Section id="about">
      <div className="max-w-7xl mx-auto">
        <SectionTitle icon={<User size={16} />} title="About Me" />

        <div className="grid lg:grid-cols-5 gap-10 items-center">
          {/* Avatar / Visual */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl bg-gradient-to-br from-accent-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center overflow-hidden">
                <div className="text-8xl font-black bg-gradient-to-br from-accent-400 to-cyan-400 bg-clip-text text-transparent select-none">
                  VM
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-16 h-16 rounded-xl bg-accent-500/20 border border-accent-500/30 flex items-center justify-center animate-float">
                <Code2 size={24} className="text-accent-400" />
              </div>
              <div className="absolute -bottom-3 -left-3 w-14 h-14 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                <Database size={20} className="text-cyan-400" />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-3">
            <GlowCard className="p-8">
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Hey there! I'm <span className="text-white font-semibold">Vasanthakumar</span>, an Associate Software Developer at
                <span className="text-accent-400 font-semibold"> TechSmew Innovations Pvt Ltd</span>. I thrive on turning complex problems
                into elegant, scalable software. My day-to-day involves building full-stack web applications — crafting responsive
                UIs with <span className="text-cyan-400 font-medium">React</span> and engineering robust backend systems with
                <span className="text-cyan-400 font-medium"> Spring Boot</span>.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                From designing RESTful APIs and optimizing PostgreSQL queries to containerizing applications with Docker and Kubernetes,
                I enjoy working across the entire development lifecycle. I'm passionate about clean code, microservice architectures,
                and the craft of building software that truly makes a difference.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { label: 'Based in', value: 'Tamil Nadu, India', icon: <MapPin size={14} /> },
                  { label: 'Experience', value: 'Full-Stack Dev', icon: <Briefcase size={14} /> },
                  { label: 'Education', value: 'B.Tech IT', icon: <GraduationCap size={14} /> },
                ].map(item => (
                  <div key={item.label} className="bg-navy-800/50 border border-white/5 rounded-xl p-3 text-center">
                    <div className="flex justify-center text-accent-400 mb-1">{item.icon}</div>
                    <p className="text-xs text-slate-500 mb-0.5">{item.label}</p>
                    <p className="text-sm text-white font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </GlowCard>
          </div>
        </div>
      </div>
    </Section>
  )
}

/* ─────────────── SKILLS ─────────────── */
function Skills() {
  return (
    <Section id="skills" className="bg-navy-900/40">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          icon={<Code2 size={16} />}
          title="Skills & Technologies"
          subtitle="Technologies and tools I use to bring ideas to life"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(SKILLS).map(([category, { icon, items }], catIdx) => (
            <GlowCard key={category} className="p-6" delay={catIdx * 150}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent-500/15 flex items-center justify-center text-accent-400">
                  {icon}
                </div>
                <h3 className="text-white font-semibold text-sm">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-navy-800/80 border border-white/5 text-slate-300 text-xs font-medium
                      hover:border-accent-500/40 hover:text-accent-400 hover:bg-accent-500/5 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </Section>
  )
}

/* ─────────────── EXPERIENCE ─────────────── */
function Experience() {
  return (
    <Section id="experience">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          icon={<Briefcase size={16} />}
          title="Work Experience"
          subtitle="My professional journey and contributions"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500/50 via-accent-500/20 to-transparent" />

          <div className="space-y-10">
            {EXPERIENCE.map((exp, idx) => (
              <GlowCard key={idx} className="ml-14 md:ml-20 p-6 md:p-8" delay={idx * 200}>
                {/* Timeline dot */}
                <div className="absolute -left-[3.55rem] md:-left-[4.55rem] top-8">
                  <div className={`w-5 h-5 rounded-full border-2 ${exp.current ? 'border-accent-400 bg-accent-500/30 shadow-[0_0_12px_rgba(99,102,241,0.5)]' : 'border-slate-600 bg-navy-900'}`}>
                    {exp.current && (
                      <div className="w-full h-full rounded-full bg-accent-400 animate-ping opacity-30" />
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-white font-bold text-lg">{exp.title}</h3>
                    <p className="text-accent-400 font-medium text-sm">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 text-sm shrink-0">
                    <Calendar size={14} />
                    <span>{exp.duration}</span>
                    {exp.current && (
                      <span className="ml-2 px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500/60 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

/* ─────────────── PROJECTS ─────────────── */
function Projects() {
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'Company', 'Personal']

  const filteredProjects = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.type === filter)

  return (
    <Section id="projects" className="bg-navy-900/40">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          icon={<FolderKanban size={16} />}
          title="Projects"
          subtitle="Real-world applications and personal explorations"
        />

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300
                ${filter === f
                  ? 'bg-accent-500 text-white shadow-lg shadow-accent-500/25'
                  : 'bg-navy-800/60 text-slate-400 border border-white/5 hover:text-white hover:border-accent-500/30'
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <GlowCard key={project.name} className="p-6 flex flex-col" delay={idx * 100}>
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{project.name}</h3>
                  <p className="text-slate-500 text-sm flex items-center gap-1.5">
                    <Calendar size={12} />
                    {project.duration}
                  </p>
                </div>
                <span className={`shrink-0 px-3 py-1 rounded-full text-xs font-semibold border
                  ${project.type === 'Company'
                    ? 'bg-accent-500/10 text-accent-400 border-accent-500/20'
                    : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                  }`}
                >
                  {project.type}
                </span>
              </div>

              {project.company && (
                <p className="text-accent-400/80 text-sm font-medium mb-3">{project.company}</p>
              )}

              {/* Description */}
              <ul className="space-y-2 mb-5 flex-1">
                {project.description.slice(0, 3).map((d, dIdx) => (
                  <li key={dIdx} className="flex gap-2 text-slate-400 text-sm leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-accent-500/50 shrink-0" />
                    {d}
                  </li>
                ))}
                {project.description.length > 3 && (
                  <li className="text-slate-500 text-xs italic">+{project.description.length - 3} more details</li>
                )}
              </ul>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {project.tech.map(t => (
                  <span key={t} className="px-2 py-0.5 rounded-md bg-navy-800/80 border border-white/5 text-[11px] font-medium text-slate-500 hover:text-accent-400 hover:border-accent-500/30 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </Section>
  )
}

/* ─────────────── EDUCATION ─────────────── */
function EducationSection() {
  return (
    <Section id="education">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          icon={<GraduationCap size={16} />}
          title="Education"
          subtitle="Academic foundation that shaped my journey"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {EDUCATION.map((edu, idx) => (
            <GlowCard key={idx} className="p-8" delay={idx * 200}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center text-accent-400 shrink-0">
                  <GraduationCap size={22} />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-1">{edu.degree}</h3>
                  <p className="text-slate-400 text-sm mb-3 leading-relaxed">{edu.institution}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="inline-flex items-center gap-1.5 text-slate-500 text-sm">
                      <Calendar size={13} />
                      {edu.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-500/10 text-accent-400 text-sm font-semibold border border-accent-500/20">
                      {edu.score}
                    </span>
                  </div>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </Section>
  )
}

/* ─────────────── CONTACT ─────────────── */
function Contact() {
  return (
    <Section id="contact" className="bg-navy-900/40">
      <div className="max-w-3xl mx-auto text-center">
        <SectionTitle
          icon={<Send size={16} />}
          title="Get In Touch"
          subtitle="I'm always open to new opportunities and interesting conversations"
        />

        <GlowCard className="p-8 md:p-12">
          <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Whether you have a project idea, a job opportunity, or just want to say hello — my inbox is always open.
            Let's build something amazing together!
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              {
                icon: <Mail size={22} />,
                label: 'Email',
                value: 'mvasanthakumar381@gmail.com',
                href: 'mailto:mvasanthakumar381@gmail.com',
              },
              {
                icon: <Phone size={22} />,
                label: 'Phone',
                value: '+91-9786450906',
                href: 'tel:+919786450906',
              },
              {
                icon: <Github size={22} />,
                label: 'GitHub',
                value: 'Vasanthakumar5M',
                href: 'https://github.com/Vasanthakumar5M',
              },
            ].map(contact => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.label === 'GitHub' ? '_blank' : undefined}
                rel={contact.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                className="group flex flex-col items-center gap-3 p-5 rounded-xl bg-navy-800/40 border border-white/5
                  hover:border-accent-500/30 hover:bg-accent-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-400 group-hover:scale-110 group-hover:bg-accent-500/20 transition-all duration-300">
                  {contact.icon}
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">{contact.label}</p>
                  <p className="text-sm text-slate-300 font-medium group-hover:text-accent-400 transition-colors break-all">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <a
            href="mailto:mvasanthakumar381@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 hover:scale-105 transition-all duration-300"
          >
            <Mail size={18} />
            Say Hello
          </a>
        </GlowCard>
      </div>
    </Section>
  )
}

/* ─────────────── FOOTER ─────────────── */
function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-navy-950/80 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} <span className="text-slate-400">Vasanthakumar M</span>. Built with React & Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Vasanthakumar5M"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-accent-400 transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:mvasanthakumar381@gmail.com"
            className="text-slate-500 hover:text-accent-400 transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}

/* ─────────────── SCROLL TO TOP ─────────────── */
function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', toggle)
    return () => window.removeEventListener('scroll', toggle)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-xl bg-accent-500/80 backdrop-blur text-white flex items-center justify-center shadow-lg shadow-accent-500/25
        hover:bg-accent-500 hover:scale-110 transition-all duration-300
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} />
    </button>
  )
}

/* ─────────────── APP ─────────────── */
function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-white font-sans antialiased selection:bg-accent-500/30">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <EducationSection />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
