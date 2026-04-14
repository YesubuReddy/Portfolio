import { useRef, useState, useEffect } from 'react'

function CountUpStat({ end, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const ran = useRef(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !ran.current) {
        ran.current = true
        let start = 0
        const step = end / (1600 / 16)
        const timer = setInterval(() => {
          start += step
          if (start >= end) { setCount(end); clearInterval(timer) }
          else setCount(Math.floor(start))
        }, 16)
      }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [end])
  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { label: 'Years Experience', value: 1, suffix: '+', icon: '⏳' },
  { label: 'Projects Completed', value: 10, suffix: '+', icon: '🚀' },
  { label: 'Technologies', value: 15, suffix: '+', icon: '🛠️' },
  { label: 'Certifications', value: 6, suffix: '', icon: '🏆' },
]

const features = [
  'Building scalable full-stack web applications',
  'Designing intuitive and responsive user interfaces',
  'Architecting cloud infrastructure on AWS',
  'Implementing ML/AI-powered solutions',
  'Writing clean, maintainable, and tested code',
]

export default function About() {
  return (
    <section id="about-section" className="py-16 px-6 relative" style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 relative z-10">
        <div className="mb-12 text-center scroll-hidden">
          <div className="section-label mb-4 mx-auto">Who I Am</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-main)' }}>
            Crafting Digital <span className="gradient-text">Experiences</span> with Purpose
          </h2>
          <div className="section-line mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: text + features */}
          <div className="scroll-hidden">
            <div className="space-y-5 leading-relaxed mb-8 text-base" style={{ color: 'var(--text-sub)' }}>
              <p className="font-semibold text-lg">
                Hello! I'm <strong style={{ color: 'var(--text-main)' }}>Yesubureddy Chinthapalli</strong>, a dedicated Full-Stack Developer with a passion for building
                scalable web applications and intelligent systems.
              </p>
              <p>
                My journey in tech began with a curiosity about how things work on the internet, which led me to
                master modern frameworks like React and Node.js. I specialize in creating seamless user experiences
                and robust backend architectures.
              </p>
            </div>

            {/* Feature list */}
            <div className="space-y-3 mb-10">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-semibold" style={{ color: 'var(--text-sub)' }}>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white"
                    style={{ background: 'var(--primary)' }}>✓</div>
                  {f}
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx}
                  className="rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border group"
                  style={{ background: 'var(--card-bg)', borderColor: 'var(--border-solid)', boxShadow: 'var(--shadow-sm)' }}>
                  <div className="text-3xl mb-3">{stat.icon}</div>
                  <div className="text-3xl font-black mb-1 gradient-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    <CountUpStat end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual card */}
          <div className="scroll-hidden">
            <div className="rounded-[32px] p-8 border relative overflow-hidden"
              style={{ background: 'var(--card-bg)', borderColor: 'var(--border-solid)', boxShadow: 'var(--shadow-lg)' }}>
              {/* Decorative blobs */}
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-10 pointer-events-none"
                style={{ background: 'radial-gradient(circle, var(--primary), transparent)', filter: 'blur(30px)' }} />
              <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full opacity-10 pointer-events-none"
                style={{ background: 'radial-gradient(circle, var(--secondary), transparent)', filter: 'blur(30px)' }} />

              {/* Code snippet illustration */}
              <div className="rounded-xl p-5 font-mono text-sm mb-6 relative"
                style={{ background: 'var(--bg-sub)', border: '1px solid var(--border-solid)' }}>
                <div className="flex gap-1.5 mb-4">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="space-y-1.5 text-xs" style={{ color: 'var(--text-muted)' }}>
                  <p><span style={{ color: '#818cf8' }}>const</span> <span style={{ color: '#34d399' }}>developer</span> = {'{'}</p>
                  <p className="pl-4"><span style={{ color: '#f472b6' }}>name</span>: <span style={{ color: '#fb923c' }}>"Yesubureddy"</span>,</p>
                  <p className="pl-4"><span style={{ color: '#f472b6' }}>role</span>: <span style={{ color: '#fb923c' }}>"Full Stack Dev"</span>,</p>
                  <p className="pl-4"><span style={{ color: '#f472b6' }}>stack</span>: [<span style={{ color: '#fb923c' }}>"React", "Node", "AWS"</span>],</p>
                  <p className="pl-4"><span style={{ color: '#f472b6' }}>available</span>: <span style={{ color: '#34d399' }}>true</span>,</p>
                  <p>{'}'}</p>
                </div>
              </div>

              {/* Pillars */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Frontend', icon: '⚡', color: '#818cf8' },
                  { label: 'Backend', icon: '⚙️', color: '#34d399' },
                  { label: 'Cloud', icon: '☁️', color: '#fb923c' },
                ].map(p => (
                  <div key={p.label} className="rounded-xl p-4 text-center transition-all duration-300 hover:-translate-y-1"
                    style={{ background: 'var(--bg-sub)', border: '1px solid var(--border-solid)' }}>
                    <div className="text-2xl mb-2">{p.icon}</div>
                    <p className="text-xs font-bold" style={{ color: p.color }}>{p.label}</p>
                  </div>
                ))}
              </div>

              {/* "Currently at" badge */}
              <div className="mt-6 flex items-center gap-3 rounded-xl p-4"
                style={{ background: 'var(--bg-sub)', border: '1px solid var(--border-solid)' }}>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Currently at</p>
                  <p className="text-sm font-bold" style={{ color: 'var(--text-main)' }}>Pinkmoon Technologies Private Limited</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
