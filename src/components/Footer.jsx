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
    icon: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/YesubuReddy',
    icon: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>,
  },
]

const techBadges = ['React', 'Node.js', 'Python', 'AWS', 'PostgreSQL', 'MongoDB', 'Docker', 'TypeScript']

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative pt-14 pb-8 overflow-hidden" style={{ background: 'var(--footer-bg)' }}>
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #4f46e5 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">

          {/* Column 1: Brand */}
          <div className="space-y-5">
            <a href="#about" className="flex items-center gap-3 group w-fit">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg transition-all duration-300 group-hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' }}>YC</div>
              <div>
                <p className="text-white font-bold text-lg leading-none" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Yesubureddy</p>
                <p className="text-indigo-400 text-[10px] font-black uppercase tracking-widest mt-1">Full Stack Developer</p>
              </div>
            </a>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'var(--footer-text)' }}>
              Crafting digital experiences with precision and passion. Specialized in building scalable web applications and cloud solutions.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for new projects
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:pl-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Quick Links
            </h4>
            <div className="grid grid-cols-1 gap-3.5">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} className="footer-link text-sm w-fit flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Connect
            </h4>
            <div className="flex flex-col gap-4">
              {socialLinks.map(social => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 footer-link text-sm w-fit group">
                  <span className="text-slate-500 group-hover:text-indigo-400 transition-colors">{social.icon}</span>
                  {social.label}
                </a>
              ))}
              <a href="mailto:yesubureddy4377@gmail.com"
                className="flex items-center gap-3 footer-link text-sm w-fit group">
                <span className="text-slate-500 group-hover:text-indigo-400 transition-colors text-base">✉</span>
                Email Me
              </a>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Get in Touch
            </h4>
            <div className="space-y-5">
              <div>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1.5">Email</p>
                <a href="mailto:yesubureddy4377@gmail.com" className="text-slate-200 font-bold hover:text-indigo-400 transition-colors text-sm break-all">
                  yesubureddy4377@gmail.com
                </a>
              </div>
              <div>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1.5">Phone</p>
                <a href="tel:+919849562455" className="text-slate-200 font-bold hover:text-indigo-400 transition-colors text-sm">
                  +91 9849562455
                </a>
              </div>
              <div>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1.5">Location</p>
                <p className="text-slate-200 font-bold text-sm">Alamuru, Andhra Pradesh, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech stack badges row */}
        <div className="flex flex-wrap gap-2 mb-10 py-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center mr-2">Built with:</span>
          {techBadges.map(tech => (
            <span key={tech} className="text-[10px] font-bold px-3 py-1.5 rounded-lg border"
              style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)', color: '#64748b' }}>
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-[11px] font-medium uppercase tracking-widest" style={{ color: 'var(--footer-text)' }}>
            © {year} • <span className="text-slate-300">Yesubureddy Chinthapalli</span> • All rights reserved
          </p>
          <div className="flex items-center gap-4">
            <p className="text-[11px] font-medium uppercase tracking-widest" style={{ color: 'var(--footer-text)' }}>
              Built with <span className="text-indigo-400">React</span> & <span className="text-cyan-400">Vite</span> ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
