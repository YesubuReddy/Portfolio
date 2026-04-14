const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yesubu-reddy-chinthapalli4377',
    color: '#0077B5',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/YesubuReddy',
    color: '#e2e8f0',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:yesubureddy4377@gmail.com',
    color: '#818cf8',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
  },
]

const techStack = ['React', 'Node.js', 'Python', 'Flask', 'AWS', 'PostgreSQL', 'MongoDB', 'TypeScript']

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden" style={{ background: 'var(--footer-bg)' }}>
      {/* Top separator glow */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.6) 40%, rgba(139,92,246,0.6) 60%, transparent)' }} />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[160px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.12) 0%, transparent 70%)', filter: 'blur(50px)' }} />

      {/* ── MOBILE LAYOUT (< md) ── */}
      <div className="md:hidden relative z-10 px-5 pt-10 pb-6">

        {/* Brand row */}
        <div className="flex flex-col items-center text-center gap-3 mb-8">
          <a href="#about" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-base shadow-lg"
              style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' }}>
              YC
            </div>
            <div className="text-left">
              <p className="text-white font-black text-base leading-none" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Yesubureddy</p>
              <p className="text-indigo-400 text-[9px] font-black uppercase tracking-widest mt-0.5">Full Stack Developer</p>
            </div>
          </a>
          <p className="text-xs leading-relaxed max-w-[260px]" style={{ color: 'var(--footer-text)' }}>
            Building scalable web apps and cloud solutions with passion and attention to detail.
          </p>
          {/* Available pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider border"
            style={{ background: 'rgba(16,185,129,0.07)', borderColor: 'rgba(16,185,129,0.2)', color: '#34d399' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for projects
          </div>
        </div>

        {/* Social icons row */}
        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              aria-label={s.label}
              className="flex flex-col items-center gap-1.5 group">
              <span className="w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-200 group-hover:scale-110 group-active:scale-95"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: s.color }}>
                {s.icon}
              </span>
              <span className="text-[9px] font-bold uppercase tracking-wider" style={{ color: '#475569' }}>{s.label}</span>
            </a>
          ))}
        </div>

        {/* Nav grid 2-col */}
        <div className="mb-8 pb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-center mb-4" style={{ color: '#334155' }}>Quick Links</p>
          <div className="grid grid-cols-2 gap-y-3 gap-x-4">
            {navLinks.map(link => (
              <a key={link.href} href={link.href}
                className="footer-link text-sm text-center py-2 rounded-xl transition-colors"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact info cards */}
        <div className="flex flex-col gap-3 mb-8">
          {[
            { emoji: '✉️', label: 'Email', value: 'yesubureddy4377@gmail.com', href: 'mailto:yesubureddy4377@gmail.com' },
            { emoji: '📞', label: 'Phone', value: '+91 9849562455', href: 'tel:+919849562455' },
            { emoji: '📍', label: 'Location', value: 'Alamuru, Andhra Pradesh', href: null },
          ].map(item => (
            <div key={item.label} className="flex items-center gap-3 rounded-xl px-4 py-3"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <span className="text-lg flex-shrink-0">{item.emoji}</span>
              <div className="min-w-0">
                <p className="text-[9px] font-black uppercase tracking-widest mb-0.5" style={{ color: '#475569' }}>{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-slate-300 font-semibold text-xs hover:text-indigo-400 transition-colors block truncate">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-slate-300 font-semibold text-xs truncate">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="mb-6 pb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="text-[9px] font-black uppercase tracking-widest text-center mb-3" style={{ color: '#334155' }}>Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map(tech => (
              <span key={tech}
                className="text-[10px] font-bold px-2.5 py-1 rounded-lg"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', color: '#475569' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="text-center space-y-1.5">
          <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#334155' }}>
            © {year} <span className="text-slate-400">Yesubureddy Chinthapalli</span>
          </p>
          <p className="text-[10px] font-semibold uppercase tracking-widest flex items-center justify-center gap-1.5" style={{ color: '#334155' }}>
            Crafted with
            <span className="text-indigo-400 font-black">React</span>
            &
            <span className="text-cyan-400 font-black">Vite</span>
            <span className="text-red-400">♥</span>
          </p>
        </div>
      </div>

      {/* ── DESKTOP LAYOUT (md+) ── */}
      <div className="hidden md:block max-w-[1440px] mx-auto px-12 pt-12 pb-4 relative z-10">
        <div className="grid grid-cols-4 gap-8 mb-10">

          {/* Col 1 — Brand */}
          <div className="space-y-4">
            <a href="#about" className="flex items-center gap-3 group w-fit">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm shadow-lg transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' }}>
                YC
              </div>
              <div>
                <p className="text-white font-black text-base leading-none" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Yesubureddy</p>
                <p className="text-indigo-400 text-[9px] font-black uppercase tracking-widest mt-0.5">Full Stack Developer</p>
              </div>
            </a>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--footer-text)', maxWidth: '220px' }}>
              Building scalable web apps and cloud solutions with passion.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider border"
              style={{ background: 'rgba(16,185,129,0.07)', borderColor: 'rgba(16,185,129,0.2)', color: '#34d399' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for projects
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="text-white font-black text-[11px] uppercase tracking-[0.2em] mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="footer-link text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:w-2" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Connect */}
          <div>
            <h4 className="text-white font-black text-[11px] uppercase tracking-[0.2em] mb-5">Connect</h4>
            <ul className="space-y-3">
              {socialLinks.map(s => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm font-semibold transition-all duration-200 group"
                    style={{ color: 'var(--footer-text)' }}>
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: s.color }}>
                      {s.icon}
                    </span>
                    <span className="group-hover:text-white transition-colors">{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Get in Touch */}
          <div>
            <h4 className="text-white font-black text-[11px] uppercase tracking-[0.2em] mb-5">Get in Touch</h4>
            <div className="space-y-4">
              {[
                { label: 'Email', value: 'yesubureddy4377@gmail.com', href: 'mailto:yesubureddy4377@gmail.com' },
                { label: 'Phone', value: '+91 9849562455', href: 'tel:+919849562455' },
                { label: 'Location', value: 'Alamuru, Andhra Pradesh', href: null },
              ].map(item => (
                <div key={item.label}>
                  <p className="text-[9px] font-black uppercase tracking-widest mb-1" style={{ color: '#475569' }}>{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-slate-300 font-semibold text-xs hover:text-indigo-400 transition-colors break-all">{item.value}</a>
                  ) : (
                    <p className="text-slate-300 font-semibold text-xs">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech stack strip */}
        <div className="py-5 flex flex-wrap items-center gap-2"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <span className="text-[9px] font-black uppercase tracking-widest mr-1" style={{ color: '#334155' }}>Tech Stack:</span>
          {techStack.map(tech => (
            <span key={tech}
              className="text-[10px] font-bold px-2.5 py-1 rounded-lg transition-colors duration-200 hover:border-indigo-500/30 hover:text-slate-300 cursor-default"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', color: '#475569' }}>
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between gap-3 pt-5">
          <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#334155' }}>
            © {year} <span className="text-slate-400">Yesubureddy Chinthapalli</span> · All rights reserved
          </p>
          <p className="text-[10px] font-semibold uppercase tracking-widest flex items-center gap-1.5" style={{ color: '#334155' }}>
            Crafted with
            <span className="text-indigo-400 font-black">React</span>
            &
            <span className="text-cyan-400 font-black">Vite</span>
            <span className="text-red-400">♥</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
