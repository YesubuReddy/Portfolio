import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const NAV_LINKS = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Certs', href: '#certifications', id: 'certifications' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('about')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const ids = NAV_LINKS.map(l => l.id)
      const pos = window.scrollY + window.innerHeight / 3
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && el.offsetTop <= pos) { setActive(ids[i]); break }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [menuOpen])

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-2xl border-b py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
      style={{ 
        background: scrolled ? 'var(--nav-bg)' : 'transparent', 
        borderColor: scrolled ? 'var(--border)' : 'transparent' 
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between gap-4">
        {/* Logo */}
        <motion.a 
          href="#about" 
          className="flex items-center gap-3 group flex-shrink-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div
            className="w-11 h-11 rounded-2xl flex items-center justify-center text-white font-black text-base shadow-xl transition-all duration-500 group-hover:rotate-[10deg] group-hover:scale-110"
            style={{ 
              background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
              boxShadow: '0 10px 20px -5px rgba(79,70,229,0.3)'
            }}
          >
            YC
          </div>
          <div className="hidden sm:block overflow-hidden">
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <span className="font-bold text-base block leading-none" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-main)' }}>
                Yesubureddy
              </span>
              <span style={{ color: 'var(--primary)' }} className="text-xs font-black uppercase tracking-tighter opacity-80">
                Engineering Excellence
              </span>
            </motion.div>
          </div>
        </motion.a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1 p-1 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
          {NAV_LINKS.map((link, idx) => (
            <motion.a
              key={link.href}
              href={link.href}
              className={`relative px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
                active === link.id ? 'text-white' : 'hover:bg-white/10'
              }`}
              style={{ color: active === link.id ? 'white' : 'var(--text-sub)' }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <span className="relative z-10">{link.label}</span>
              {active === link.id && (
                <motion.div 
                  layoutId="nav-pill"
                  className="absolute inset-0 z-0 rounded-xl"
                  style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))' }}
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <motion.button
            onClick={toggleTheme}
            className="theme-toggle w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-[var(--primary)] transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
            style={{ color: 'var(--text-sub)' }}
          >
            <AnimatePresence mode='wait' initial={false}>
              <motion.div
                key={theme}
                initial={{ y: -20, opacity: 0, rotate: -90 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: 20, opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'light' ? <MoonIcon /> : <SunIcon />}
              </motion.div>
            </AnimatePresence>
          </motion.button>

          <a
            href="mailto:yesubureddy4377@gmail.com"
            className="hidden sm:flex btn-primary text-xs px-6 py-3 shadow-xl hover:shadow-indigo-500/25 active:scale-95 transition-all"
            style={{ borderRadius: '14px', fontSize: '0.85rem' }}
          >
            <span>Hire Me</span>
            <span className="ml-1 opacity-60">✦</span>
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 pr-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 transition-all duration-300 w-6 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ background: 'var(--text-main)' }} />
            <span className={`block h-0.5 transition-all duration-300 w-4 ml-auto ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} style={{ background: 'var(--text-main)' }} />
            <span className={`block h-0.5 transition-all duration-300 w-6 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ background: 'var(--text-main)' }} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[80%] max-w-xs shadow-2xl flex flex-col"
              style={{ background: 'var(--bg)', borderLeft: '1px solid var(--border)' }}
            >
              <div className="p-8 pb-4 flex items-center justify-between">
                <span className="text-xl font-black gradient-text">Menu</span>
                <button onClick={() => setMenuOpen(false)} className="p-2 rounded-xl bg-white/5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>

              <div className="p-8 space-y-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className={`block py-4 text-2xl font-black tracking-tight border-b border-white/5 transition-all duration-300`}
                    style={{ color: active === link.id ? 'var(--primary)' : 'var(--text-main)' }}
                    onClick={() => setMenuOpen(false)}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto p-8 space-y-3">
                <a
                  href="/resume.pdf"
                  download
                  className="btn-outline w-full py-4 justify-center text-sm font-black uppercase tracking-widest shadow-lg"
                  style={{ borderRadius: '18px' }}
                >
                  Download CV
                </a>
                <a
                  href="mailto:yesubureddy4377@gmail.com"
                  className="btn-primary w-full py-4 justify-center text-sm font-black uppercase tracking-widest shadow-indigo-500/20"
                  style={{ borderRadius: '18px' }}
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

