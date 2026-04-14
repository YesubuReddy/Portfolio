const education = [
  {
    degree: 'B.Tech – Information Technology',
    institution: 'Swarnandhra College Of Engineering And Technology',
    period: '11/2021 – 03/2025',
    location: 'Narsapur, India',
    grade: '7.52',
    gradeLabel: 'CGPA',
    icon: '🎓',
    highlight: true,
    color: 'var(--primary)',
    coursework: ['Data Structures', 'DBMS', 'OS', 'Computer Networks', 'Machine Learning', 'Web Technologies'],
  },
  {
    degree: 'M.P.C (Intermediate)',
    institution: 'Sri Chaitanya Junior College',
    period: '2020 – 2021',
    location: 'Rajamundry, India',
    grade: '59%',
    gradeLabel: 'Score',
    icon: '📚',
    highlight: false,
    color: '#8b5cf6',
    coursework: ['Mathematics', 'Physics', 'Chemistry'],
  },
  {
    degree: 'SSC (10th Grade)',
    institution: 'Sri Siddhartha E.M High School',
    period: '2018 – 2019',
    location: 'Alamuru, India',
    grade: '9.8',
    gradeLabel: 'CGPA',
    icon: '🏫',
    highlight: false,
    color: '#0891b2',
    coursework: ['Mathematics', 'Science', 'English', 'Social Studies'],
  },
]

export default function Education() {
  return (
    <section id="education" className="py-16 px-6 relative overflow-hidden" style={{ background: 'var(--bg)' }}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 relative z-10">
        <div className="mb-12 text-center scroll-hidden">
          <div className="section-label mb-4 mx-auto">Academic Foundation</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-main)' }}>
            Educational <span className="gradient-text">Milestones</span>
          </h2>
          <div className="section-line mx-auto" />
        </div>

        <div className="grid gap-6">
          {education.map((edu, idx) => (
            <div key={idx}
              className="scroll-hidden rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 border"
              style={{
                background: 'var(--card-bg)',
                borderColor: edu.highlight ? 'rgba(79,70,229,0.25)' : 'var(--border-solid)',
                boxShadow: edu.highlight ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
              }}>
              {/* Highlight stripe */}
              {edu.highlight && (
                <div className="h-1.5" style={{ background: 'linear-gradient(90deg, var(--primary), var(--secondary))' }} />
              )}

              <div className="p-7 md:p-9 flex flex-col md:flex-row md:items-center gap-7">
                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl shrink-0 shadow-md"
                  style={{
                    background: edu.highlight ? 'linear-gradient(135deg, var(--primary), var(--secondary))' : 'var(--bg-sub)',
                    border: `1px solid ${edu.highlight ? 'transparent' : 'var(--border-solid)'}`,
                  }}>
                  {edu.icon}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-main)' }}>
                    {edu.degree}
                  </h3>
                  <p className="font-bold text-sm mb-3" style={{ color: 'var(--primary)' }}>{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-sm font-medium mb-4" style={{ color: 'var(--text-muted)' }}>
                    <span className="flex items-center gap-1.5">📅 {edu.period}</span>
                    <span className="flex items-center gap-1.5">📍 {edu.location}</span>
                  </div>
                  {/* Coursework tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map(c => (
                      <span key={c} className="skill-tag text-[10px] font-bold">{c}</span>
                    ))}
                  </div>
                </div>

                {/* Grade badge */}
                <div className="shrink-0 w-28 h-28 rounded-2xl flex flex-col items-center justify-center border relative overflow-hidden"
                  style={{ background: 'var(--bg-sub)', borderColor: 'var(--border-solid)' }}>
                  {edu.highlight && (
                    <div className="absolute inset-0 opacity-5"
                      style={{ background: 'radial-gradient(circle, var(--primary), transparent)' }} />
                  )}
                  <p className="text-[9px] font-black uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>{edu.gradeLabel}</p>
                  <p className="font-black text-3xl" style={{ fontFamily: 'Space Grotesk, sans-serif', color: edu.highlight ? 'var(--primary)' : 'var(--text-main)' }}>
                    {edu.grade}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
