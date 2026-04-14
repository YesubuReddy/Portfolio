import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const ROLES = ['Full Stack Developer', 'React Specialist', 'Cloud Engineer', 'Python Developer', 'Problem Solver']

function useTypewriter(texts, speed = 75, pause = 2200) {
  const [display, setDisplay] = useState('')
  const state = useRef({ idx: 0, charIdx: 0, deleting: false })
  useEffect(() => {
    let t
    const tick = () => {
      const { idx, charIdx, deleting } = state.current
      const current = texts[idx]
      if (!deleting && charIdx === current.length) {
        t = setTimeout(() => { state.current.deleting = true; tick() }, pause)
        return
      }
      if (deleting && charIdx === 0) {
        state.current.deleting = false
        state.current.idx = (idx + 1) % texts.length
        t = setTimeout(tick, speed)
        return
      }
      const next = charIdx + (deleting ? -1 : 1)
      state.current.charIdx = next
      setDisplay(texts[state.current.idx].slice(0, next))
      t = setTimeout(tick, deleting ? speed / 2 : speed)
    }
    t = setTimeout(tick, speed)
    return () => clearTimeout(t)
  }, [texts, speed, pause])
  return display
}

function CountUp({ end, suffix = '', duration = 1800 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const ran = useRef(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !ran.current) {
        ran.current = true
        let start = 0
        const step = end / (duration / 16)
        const timer = setInterval(() => {
          start += step
          if (start >= end) { setCount(end); clearInterval(timer) }
          else setCount(Math.floor(start))
        }, 16)
      }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [end, duration])
  return <span ref={ref}>{count}{suffix}</span>
}

const TECH = ['React', 'Node.js', 'Python', 'AWS', 'Django', 'MongoDB', 'Express', 'PostgreSQL', 'TypeScript', 'Docker']

function FloatingShape({ color, size, top, left, delay, duration }) {
  return (
    <motion.div
      className="absolute rounded-full blur-[80px] opacity-20 pointer-events-none"
      style={{ 
        background: color, 
        width: size, 
        height: size, 
        top, 
        left 
      }}
      animate={{
        x: [0, 50, -30, 0],
        y: [0, -50, 40, 0],
        scale: [1, 1.2, 0.9, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    />
  )
}

export default function Hero() {
  const role = useTypewriter(ROLES)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} id="about" className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 sm:px-6 overflow-hidden">
      {/* Mesh Background */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingShape color="var(--primary)" size="600px" top="-10%" left="-10%" delay={0} duration={20} />
        <FloatingShape color="var(--secondary)" size="500px" top="60%" left="70%" delay={2} duration={25} />
        <FloatingShape color="var(--accent)" size="400px" top="20%" left="40%" delay={4} duration={18} />
      </div>
      
      <div className="hero-grid opacity-20" />

      <motion.div style={{ y: y1, opacity }} className="max-w-[1440px] mx-auto w-full px-2 sm:px-4 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-5 sm:space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-emerald-500 text-[10px] font-black tracking-[0.2em] uppercase border border-emerald-500/20 bg-emerald-500/5">
                <span className="status-dot w-1.5 h-1.5 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                Open for Collaboration
              </div>
            </motion.div>

            <div className="space-y-4">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[11px] tracking-[0.3em] font-black uppercase" 
                style={{ fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-muted)' }}
              >
                // Digital Architect
              </motion.p>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] md:leading-[0.95] tracking-tighter"
                style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-main)' }}
              >
                Building <br />
                <span className="gradient-text">Future-Ready</span> <br />
                Solutions.
              </motion.h1>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <div className="h-px w-12 bg-gradient-to-r from-[var(--primary)] to-transparent" />
              <p className="text-2xl font-bold tracking-tight" style={{ color: 'var(--text-main)' }}>
                <span className="gradient-text-cyan">{role}</span>
                <span className="typing-cursor" />
              </p>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-base md:text-lg leading-relaxed font-medium max-w-xl mx-auto lg:mx-0" 
              style={{ color: 'var(--text-sub)' }}
            >
              Aspiring Software Developer with a strong foundation in Python, web development, 
              and problem-solving. Specialized in building scalable applications and 
              AI-driven software that redefine the digital landscape.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="hero-cta-group flex flex-wrap gap-3 sm:gap-4 pt-4 justify-center lg:justify-start"
            >
              <a href="#projects" className="btn-primary px-7 sm:px-10 py-3 sm:py-4 text-sm sm:text-base shadow-2xl shadow-indigo-500/30 group">
                <span className="relative z-10">Explore Work</span>
                <motion.span 
                  className="ml-2 inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >→</motion.span>
              </a>
              <a href="#contact" className="btn-outline px-7 sm:px-10 py-3 sm:py-4 text-sm sm:text-base bg-white/5 backdrop-blur-sm border-white/10 hover:bg-[var(--primary)] hover:text-white transition-all">
                Let's Talk
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 sm:gap-6 pt-4 sm:pt-6 opacity-60 justify-center lg:justify-start"
            >
              <p className="text-xs font-black uppercase tracking-widest">Connect Worldwide</p>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/yesubu-reddy-chinthapalli4377" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a href="https://github.com/YesubuReddy" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative flex flex-col items-center gap-8 mt-8 lg:mt-0 lg:items-end lg:gap-12"
          >
            {/* Main Avatar Container */}
            <div className="relative group">
              <motion.div 
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 bg-gradient-to-tr from-[var(--primary)] to-[var(--secondary)] rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" 
              />
              
              <div className="avatar-ring w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 mx-auto relative z-10">
                <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden border-[8px] border-[var(--bg)] shadow-inner"
                  style={{ background: 'var(--card-bg)' }}>
                  <img
                    src="/profile.jpg"
                    alt="Yesubureddy Chinthapalli"
                    className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-700"
                    onError={e => { e.target.style.display='none'; e.target.parentNode.innerHTML='<div class="w-full h-full flex items-center justify-center text-7xl font-black gradient-text">YC</div>' }}
                  />
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-2 -left-4 px-6 py-3 rounded-2xl glass shadow-2xl z-20"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
              >
                <p className="text-[10px] font-black uppercase tracking-widest text-[var(--primary)]">Status</p>
                <p className="text-sm font-bold text-emerald-500">Live & Ready</p>
              </motion.div>
            </div>

            {/* Premium Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-xs sm:max-w-sm">
              {[
                { end: 1, suffix: '+', label: 'Years Experience' },
                { end: 10, suffix: '+', label: 'Major Projects' },
              ].map((s, i) => (
                <motion.div 
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="rounded-3xl p-6 border bg-white/5 backdrop-blur-md border-white/10 hover:border-white/20 transition-all group"
                >
                  <p className="text-4xl font-black gradient-text group-hover:scale-105 transition-transform">
                    <CountUp end={s.end} suffix={s.suffix} />
                  </p>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] mt-2 opacity-60">{s.label}</p>
                </motion.div>
              ))}
              
              {/* Tech Stack Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="col-span-2 rounded-3xl p-6 border bg-white/5 backdrop-blur-md border-white/10"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 opacity-60 text-center">Engineered With</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {['React', 'Node', 'AWS', 'Python', 'TS'].map(t => (
                    <span key={t} className="px-3 py-1.5 rounded-xl text-[10px] font-bold border border-white/5 bg-white/5">{t}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>


    </section>
  )
}

