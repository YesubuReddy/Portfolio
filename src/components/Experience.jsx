import { useState } from 'react'

const experiences = [
  {
    role: 'Software Programmer',
    company: 'Pinkmoon Technologies Private Limited',
    period: '11/2025 – Present',
    location: 'Vijayawada',
    type: 'Full-time',
    icon: '💻',
    current: true,
    achievement: '⬆ Improved UI responsiveness',
    points: [
      'Worked on web-based applications using HTML, CSS, JavaScript, and backend technologies',
      'Developed 5+ frontend components using React.js, improving UI responsiveness',
      'Assisted in debugging and improving performance of internal applications',
      'Collaborated with team members to understand project requirements',
      'Gained exposure to real-time project workflows and client requirements'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Backend'],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Incrivelsoft Private Limited',
    period: '12/2023 – 03/2024',
    location: 'Remote, Hyderabad, India',
    type: 'Internship',
    icon: '🚀',
    current: false,
    achievement: '🚢 Shipped 3 production features',
    points: [
      'Built and deployed responsive web interfaces using React.js with modern UI/UX design patterns',
      'Worked on backend APIs with Node.js / Express.js following RESTful conventions',
      'Gained hands-on experience with cloud services and agile development methodologies',
      'Participated in daily standups, code reviews, and sprint planning ceremonies',
    ],
    technologies: ['React', 'Node.js', 'REST API', 'Agile', 'Vite', 'Git'],
  },
]

function ExperienceCard({ exp }) {
  const [expanded, setExpanded] = useState(false)
  const visiblePoints = expanded ? exp.points : exp.points.slice(0, 2)

  return (
    <div className="scroll-hidden relative group">
      {/* Timeline icon — desktop only */}
      <div className="hidden md:flex absolute md:-left-[76px] top-8 w-14 h-14 rounded-2xl items-center justify-center text-2xl shadow-xl z-20 transition-all duration-500 group-hover:scale-110 text-white"
        style={{
          background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
          boxShadow: '0 10px 25px -5px rgba(79,70,229,0.35)',
        }}>
        {exp.icon}
        {exp.current && (
          <div className="absolute inset-0 rounded-2xl border-2 animate-ping opacity-30" style={{ borderColor: 'var(--primary)' }} />
        )}
      </div>

      <div className="rounded-2xl border transition-all duration-400 overflow-hidden relative"
        style={{
          background: 'var(--card-bg)',
          borderColor: exp.current ? 'rgba(79,70,229,0.2)' : 'var(--border-solid)',
          boxShadow: 'var(--shadow-md)',
        }}>
        {/* Top progress accent */}
        {exp.current && (
          <div className="absolute top-0 left-0 right-0 h-1"
            style={{ background: 'linear-gradient(90deg, var(--primary), var(--secondary))' }} />
        )}

        <div className="p-4 md:p-7">
          {/* Mobile header: icon + role inline */}
          <div className="flex items-start gap-3 mb-3 md:hidden">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 text-white"
              style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))' }}>
              {exp.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                <h3 className="text-base font-bold leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-main)' }}>
                  {exp.role}
                </h3>
                <span className="px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-widest text-white flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))' }}>
                  {exp.type}
                </span>
                {exp.current && (
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-widest bg-emerald-50 text-emerald-700 border border-emerald-100 flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Active
                  </span>
                )}
              </div>
              <p className="font-bold text-xs" style={{ color: 'var(--primary)' }}>{exp.company}</p>
            </div>
          </div>

          {/* Mobile: period + location row */}
          <div className="flex flex-wrap gap-1.5 mb-3 md:hidden">
            <span className="flex items-center gap-1 px-2 py-1 rounded-lg border text-[9px] font-bold"
              style={{ background: 'var(--bg-sub)', borderColor: 'var(--border-solid)', color: 'var(--text-sub)' }}>
              📅 {exp.period}
            </span>
            <span className="flex items-center gap-1 px-2 py-1 rounded-lg border text-[9px] font-bold"
              style={{ background: 'var(--bg-sub)', borderColor: 'var(--border-solid)', color: 'var(--text-sub)' }}>
              📍 {exp.location}
            </span>
          </div>

          {/* Mobile achievement chip */}
          <div className="mb-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold md:hidden"
            style={{ background: 'rgba(79,70,229,0.07)', color: 'var(--primary)', border: '1px solid rgba(79,70,229,0.15)' }}>
            {exp.achievement}
          </div>

          {/* Desktop Header (unchanged) */}
          <div className="hidden md:flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-5">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                <h3 className="text-xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-main)' }}>
                  {exp.role}
                </h3>
                <span className="px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest text-white"
                  style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))' }}>
                  {exp.type}
                </span>
                {exp.current && (
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest bg-emerald-50 text-emerald-700 border border-emerald-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Active
                  </span>
                )}
              </div>
              <p className="font-bold text-sm tracking-wide" style={{ color: 'var(--primary)' }}>{exp.company}</p>
              <div className="mt-2.5 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold"
                style={{ background: 'rgba(79,70,229,0.07)', color: 'var(--primary)', border: '1px solid rgba(79,70,229,0.15)' }}>
                {exp.achievement}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border text-[10px] font-bold"
                style={{ background: 'var(--bg-sub)', borderColor: 'var(--border-solid)', color: 'var(--text-sub)' }}>
                📅 {exp.period}
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border text-[10px] font-bold"
                style={{ background: 'var(--bg-sub)', borderColor: 'var(--border-solid)', color: 'var(--text-sub)' }}>
                📍 {exp.location}
              </div>
            </div>
          </div>

          {/* Bullet points */}
          <div className="space-y-2 mb-4">
            {visiblePoints.map((point, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm leading-relaxed font-semibold" style={{ color: 'var(--text-sub)' }}>
                <div className="w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-white text-[8px] md:text-[9px] font-bold"
                  style={{ background: 'var(--primary)' }}>✓</div>
                {point}
              </div>
            ))}
          </div>

          {/* Expand toggle */}
          {exp.points.length > 2 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-[11px] font-bold mb-4 flex items-center gap-1 transition-colors hover:opacity-80"
              style={{ color: 'var(--primary)' }}
            >
              {expanded ? '▲ Show less' : `▼ Show ${exp.points.length - 2} more`}
            </button>
          )}

          {/* Tech tags */}
          <div className="pt-3 flex flex-wrap gap-1.5 md:gap-2" style={{ borderTop: '1px solid var(--border)' }}>
            {exp.technologies.map(tech => (
              <span key={tech}
                className="px-2 py-1 md:px-3 md:py-1.5 rounded-lg text-[9px] md:text-[10px] font-bold uppercase tracking-tight border transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: 'var(--bg-sub)', color: 'var(--text-sub)', borderColor: 'var(--border-solid)' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-12 md:py-16 px-4 md:px-6 relative" style={{ background: 'var(--section-alt)' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(79,70,229,0.03) 0%, transparent 70%)' }} />

      <div className="max-w-[1440px] mx-auto px-0 md:px-12 relative z-10">
        <div className="mb-8 md:mb-12 text-center scroll-hidden">
          <div className="section-label mb-4 mx-auto">Career Journey</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-main)' }}>
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="section-line mx-auto" />
        </div>

        <div className="relative">
          {/* Timeline line — desktop only */}
          <div className="absolute md:left-12 top-16 bottom-16 w-0.5 hidden md:block rounded-full"
            style={{ background: 'linear-gradient(180deg, var(--primary) 0%, var(--secondary) 60%, transparent 100%)', opacity: 0.25 }} />

          <div className="space-y-5 md:space-y-10">
            {experiences.map((exp, idx) => (
              <div key={idx} className="md:pl-24">
                <ExperienceCard exp={exp} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
