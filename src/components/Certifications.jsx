const certs = [
  {
    name: 'App Development In Bharat Internship',
    issuer: 'Bharat Internship',
    icon: '📱',
    gradient: 'linear-gradient(135deg,#3b82f6,#06b6d4)',
    glow: 'rgba(6,182,212,0.2)',
    color: '#06b6d4',
    year: '2023',
    link: '#',
  },
  {
    name: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    icon: '☁️',
    gradient: 'linear-gradient(135deg,#0ea5e9,#3b82f6)',
    glow: 'rgba(14,165,233,0.2)',
    color: '#0ea5e9',
    year: '2023',
    link: '#',
  },
  {
    name: 'CyberSecurity Virtual Internship',
    issuer: 'Virtual Program',
    icon: '🔐',
    gradient: 'linear-gradient(135deg,#ef4444,#f97316)',
    glow: 'rgba(239,68,68,0.2)',
    color: '#ef4444',
    year: '2023',
    link: '#',
  },
  {
    name: 'FullStack Developer – IIDT Blackbucks',
    issuer: 'IIDT Blackbucks',
    icon: '💻',
    gradient: 'linear-gradient(135deg,#8b5cf6,#a855f7)',
    glow: 'rgba(139,92,246,0.2)',
    color: '#8b5cf6',
    year: '2024',
    link: '#',
  },
  {
    name: 'AWS Cloud Computing – APSSDC',
    issuer: 'APSSDC / AWS',
    icon: '⚡',
    gradient: 'linear-gradient(135deg,#f59e0b,#f97316)',
    glow: 'rgba(245,158,11,0.2)',
    color: '#f59e0b',
    year: '2024',
    link: '#',
  },
  {
    name: 'Developer Job Simulation – Accenture',
    issuer: 'Accenture',
    icon: '🏢',
    gradient: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
    glow: 'rgba(99,102,241,0.2)',
    color: '#6366f1',
    year: '2024',
    link: '#',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 px-6 relative overflow-hidden" style={{ background: 'var(--section-alt)', borderBottom: '1px solid var(--border)' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 50% 0%, rgba(79,70,229,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-[1440px] mx-auto px-4 md:px-12 relative z-10">
        <div className="mb-12 text-center scroll-hidden">
          <div className="section-label mb-4 mx-auto">Verified Expertise</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-main)' }}>
            Licenses & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="section-line mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {certs.map((cert, idx) => (
            <div key={cert.name}
              className="scroll-hidden relative border rounded-2xl p-5 group transition-all duration-300 hover:-translate-y-2"
              style={{
                background: 'var(--card-bg)',
                borderColor: 'var(--border-solid)',
                boxShadow: 'var(--shadow-sm)',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 20px 40px ${cert.glow}, var(--shadow-lg)`; e.currentTarget.style.borderColor = cert.color + '40' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.borderColor = 'var(--border-solid)' }}
            >
              {/* Gradient top stripe on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"
                style={{ background: cert.gradient }} />

              {/* Verified badge */}
              <div className="absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-black"
                style={{ background: cert.gradient }}>✓</div>

              <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5 transition-transform duration-300 group-hover:scale-110 shadow-sm"
                style={{ background: cert.glow, border: `1px solid ${cert.color}25` }}>
                {cert.icon}
              </div>

              <div className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: cert.color }}>
                {cert.issuer} · {cert.year}
              </div>

              <h3 className="font-bold text-sm leading-snug mb-4 group-hover:text-indigo-500 transition-colors" style={{ color: 'var(--text-main)' }}>
                {cert.name}
              </h3>

              <a href={cert.link}
                className="inline-flex items-center gap-1.5 text-[11px] font-bold transition-all hover:gap-2.5"
                style={{ color: cert.color }}>
                View Certificate
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Summary bar */}
        <div className="scroll-hidden rounded-3xl p-7 flex flex-col sm:flex-row items-center justify-between gap-6 border"
          style={{ background: 'var(--card-bg)', borderColor: 'var(--border-solid)', boxShadow: 'var(--shadow-sm)' }}>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm border"
              style={{ background: 'var(--bg-sub)', borderColor: 'var(--border-solid)' }}>🏆</div>
            <div>
              <h4 className="font-bold text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-main)' }}>6 Professional Certifications</h4>
              <p className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>Microsoft, AWS, Accenture & more</p>
            </div>
          </div>
          <div className="flex gap-8">
            {[{ val: '6+', label: 'Certs' }, { val: '3+', label: 'Providers' }, { val: '2+', label: 'Cloud' }].map(({ val, label }) => (
              <div key={label} className="text-center group">
                <p className="text-2xl font-black gradient-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{val}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest mt-1" style={{ color: 'var(--text-muted)' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
