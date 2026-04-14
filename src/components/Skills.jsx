import { useRef } from 'react'
import { useSkillBarAnimation } from '../hooks/useScrollReveal'

const skills = {
  'Programming Languages': {
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    items: ['C', 'Java', 'Python'],
    color: '#6366f1',
  },
  'Web Languages': {
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TailwindCSS'],
    color: '#06b6d4',
  },
  'Frameworks': {
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    items: ['React.js', 'Redux', 'Node.js', 'Express.js', 'Django', 'Flask', 'Bootstrap'],
    color: '#8b5cf6',
  },
  'Machine Learning': {
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    items: ['Basic algorithms', 'Data preprocessing', 'Model building'],
    color: '#ef4444',
  },
  'Databases': {
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'],
    color: '#10b981',
  },
  'Tools & Technologies': {
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    items: ['Postman', 'Git', 'GitHub', 'VS Code', 'Eclipse', 'AWS'],
    color: '#f59e0b',
  },
}

const proficiency = [
  { name: 'Full Stack Development', pct: 88 },
  { name: 'React.js / Node.js', pct: 85 },
  { name: 'Python / Django', pct: 80 },
  { name: 'Cloud (AWS)', pct: 72 },
  { name: 'Database Management', pct: 82 },
  { name: 'Problem Solving', pct: 90 },
]

export default function Skills() {
  const barsRef = useRef(null)
  useSkillBarAnimation(barsRef)

  return (
    <section id="skills" className="py-16 px-6 relative" style={{ background: 'var(--bg)' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(79,70,229,0.03) 0%, transparent 70%)' }} />

      <div className="max-w-[1440px] mx-auto px-4 md:px-12 relative z-10">
        <div className="mb-12 text-center scroll-hidden">
          <div className="section-label mb-4 mx-auto">Technical Expertise</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-main)' }}>
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="section-line mx-auto" />
        </div>

        {/* Skill category cards — 2×3 grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {Object.entries(skills).map(([cat, { logo, items, color }]) => (
            <div key={cat}
              className="scroll-hidden rounded-2xl p-7 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden border group"
              style={{ background: 'var(--card-bg)', borderColor: 'var(--border-solid)', boxShadow: 'var(--shadow-sm)' }}>
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: color }} />
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: `radial-gradient(circle at top right, ${color}08, transparent 70%)` }} />

              <div className="flex items-center gap-4 mb-5 relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center p-2.5 shadow-sm group-hover:scale-110 transition-transform"
                  style={{ background: `${color}10`, border: `1px solid ${color}20` }}>
                  <img src={logo} alt={cat} className="w-full h-full object-contain" />
                </div>
                <h3 className="font-bold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-main)' }}>{cat}</h3>
              </div>
              <div className="flex flex-wrap gap-2 relative z-10">
                {items.map(skill => (
                  <span key={skill} className="skill-tag text-[11px] font-bold hover:shadow-sm"
                    style={{ transition: 'all 0.2s' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency bars */}
        <div ref={barsRef} className="scroll-hidden rounded-2xl p-8 md:p-10 border"
          style={{ background: 'var(--card-bg)', borderColor: 'var(--border-solid)', boxShadow: 'var(--shadow-sm)' }}>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-sm border"
              style={{ background: 'rgba(79,70,229,0.07)', borderColor: 'rgba(79,70,229,0.15)' }}>📊</div>
            <h3 className="font-bold text-2xl" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-main)' }}>
              Core Proficiency
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-7">
            {proficiency.map(item => (
              <div key={item.name} className="space-y-2.5">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm" style={{ color: 'var(--text-sub)' }}>{item.name}</span>
                  <span className="font-black text-sm" style={{ color: 'var(--primary)', fontFamily: 'Space Grotesk, sans-serif' }}>
                    {item.pct}%
                  </span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--bg-sub)', border: '1px solid var(--border-solid)' }}>
                  <div className="skill-bar-fill" style={{ width: `${item.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
