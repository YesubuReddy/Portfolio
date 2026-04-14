const services = [
  {
    title: 'Front-End Development',
    desc: 'Building responsive, pixel-perfect, and highly interactive user interfaces using React.js and modern CSS frameworks that delight users.',
    icon: '✨',
    tags: ['React', 'Next.js', 'Tailwind', 'Animations'],
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.08)',
  },
  {
    title: 'Back-End Development',
    desc: 'Designing robust server-side logic, RESTful APIs, and efficient database architectures to power complex, data-driven applications.',
    icon: '⚙️',
    tags: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    color: '#10b981',
    bg: 'rgba(16,185,129,0.08)',
  },
  {
    title: 'Cloud & DevOps',
    desc: 'Deploying and managing scalable cloud infrastructure with a focus on performance, security, and automated CI/CD pipelines.',
    icon: '☁️',
    tags: ['AWS', 'Docker', 'Firebase', 'CI/CD'],
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
  },
  {
    title: 'AI & Machine Learning',
    desc: 'Integrating intelligent features using Python-based ML models, NLP pipelines, and cloud AI services for smarter applications.',
    icon: '🤖',
    tags: ['Python', 'TensorFlow', 'NLP', 'AWS Lex'],
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.08)',
  },
]

const process = [
  { step: '01', label: 'Discover', icon: '🔍', desc: 'Understand goals & requirements' },
  { step: '02', label: 'Design', icon: '🎨', desc: 'Wireframe & system architecture' },
  { step: '03', label: 'Build', icon: '🔧', desc: 'Develop with clean, tested code' },
  { step: '04', label: 'Deploy', icon: '🚀', desc: 'Ship fast, monitor & iterate' },
]

export default function Services() {
  return (
    <section id="services" className="py-16 px-6 relative" style={{ background: 'var(--section-alt)' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(79,70,229,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-[1440px] mx-auto px-4 md:px-12 relative z-10">
        <div className="mb-12 scroll-hidden text-center">
          <div className="section-label mb-4 mx-auto">Specializations</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-main)' }}>
            What I <span className="gradient-text">Offer</span>
          </h2>
          <div className="section-line mx-auto" />
        </div>

        {/* Service cards — 2×2 grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {services.map((service, idx) => (
            <div key={idx}
              className="rounded-2xl p-6 border transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl group relative overflow-hidden"
              style={{ background: 'var(--card-bg)', borderColor: 'var(--border-solid)', boxShadow: 'var(--shadow-sm)' }}>
              {/* Hover gradient border effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${service.color}0A, transparent)` }} />
              <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }} />

              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ background: service.bg, border: `1px solid ${service.color}20` }}>
                {service.icon}
              </div>
              <h3 className="text-base font-bold mb-3 relative z-10" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-main)' }}>
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5 relative z-10 font-medium" style={{ color: 'var(--text-sub)' }}>
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-1.5 relative z-10">
                {service.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider"
                    style={{ background: service.bg, color: service.color, border: `1px solid ${service.color}20` }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Process steps */}
        <div className="scroll-hidden">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-main)' }}>
              How I <span className="gradient-text">Work</span>
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map((p, i) => (
              <div key={i} className="relative flex flex-col items-center text-center p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
                style={{ background: 'var(--card-bg)', borderColor: 'var(--border-solid)' }}>
                {/* Connector arrow */}
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-2 z-10">
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" style={{ color: 'var(--primary)', opacity: 0.3 }}>
                      <path d="M19.7071 8.70711C20.0976 8.31658 20.0976 7.68342 19.7071 7.29289L13.3431 0.928933C12.9526 0.538408 12.3195 0.538408 11.9289 0.928933C11.5384 1.31946 11.5384 1.95262 11.9289 2.34315L17.5858 8L11.9289 13.6569C11.5384 14.0474 11.5384 14.6805 11.9289 15.0711C12.3195 15.4616 12.9526 15.4616 13.3431 15.0711L19.7071 8.70711ZM0 9H19V7H0V9Z" fill="currentColor"/>
                    </svg>
                  </div>
                )}
                <div className="text-[10px] font-black uppercase tracking-widest mb-3" style={{ color: 'var(--primary)' }}>Step {p.step}</div>
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{p.icon}</div>
                <h4 className="font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-main)' }}>{p.label}</h4>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
