import { useState } from 'react'

const projects = [
  {
    title: 'Job Recommendation System',
    description: 'Built a machine learning-based system to recommend jobs based on user skills using Python and basic ML algorithms.',
    longDesc: 'Developed a sophisticated ML system designed to intelligently match candidates to relevant jobs. By leveraging basic machine learning algorithms and advanced data filtering techniques, the system significantly improved recommendation accuracy, providing users with highly personalized job suggestions based on their specific skill sets.',
    tags: ['Python', 'Machine Learning', 'Data Filtering'],
    category: 'ai',
    icon: '🤖',
    gradient: 'from-indigo-500 to-violet-600',
    glowColor: 'rgba(99,102,241,0.25)',
    githubUrl: 'https://github.com/YesubuReddy/Job-Recommendation-System',
    liveUrl: '#',
    highlights: ['ML-based skill matching', 'Python-driven analysis', 'Advanced data filtering', 'Personalized UX'],
  },
  {
    title: 'AI-Powered Chatbot',
    description: 'Developed an AI-powered chatbot using AWS services with natural language responses and web integration.',
    longDesc: 'Created a highly scalable and intelligent chatbot assistant using a suite of AWS services. The project involved implementing basic natural language processing for human-like responses and seamlessly integrating the bot with a responsive web interface to provide real-time user support.',
    tags: ['AWS', 'Natural Language', 'Web Integration'],
    category: 'cloud',
    icon: '💬',
    gradient: 'from-violet-500 to-purple-600',
    glowColor: 'rgba(139,92,246,0.25)',
    featured: true,
    githubUrl: 'https://github.com/YesubuReddy',
    liveUrl: '#',
    highlights: ['AWS Service Integration', 'Natural Language Understanding', 'Web Interface Integration', 'Scalable Architecture'],
  },
  {
    title: 'Digital Signature Authentication',
    description: 'Developed a digital signature authentication system using Flask and AWS with secure encryption.',
    longDesc: 'Engineered a secure authentication system utilizing digital signatures to verify user identities. Built with Flask and deployed on AWS, the system implements robust encryption techniques to ensure secure user verification and features a clean, simple interface for a smooth authentication workflow.',
    tags: ['Flask', 'AWS', 'Encryption', 'Security'],
    category: 'web',
    icon: '🔐',
    gradient: 'from-sky-500 to-indigo-600',
    glowColor: 'rgba(6,182,212,0.25)',
    featured: false,
    githubUrl: 'https://github.com/YesubuReddy',
    liveUrl: '#',
    highlights: ['Digital Signature logic', 'Flask-based Backend', 'AWS Cloud Deployment', 'Secure Encryption'],
  },
  {
    title: 'PG Website',
    description: 'A specialized web application for managing and showcasing gents-only PG accommodations with booking functionality.',
    longDesc: 'Designed and developed a comprehensive solution for PG owners to showcase their properties. The platform allows potential residents to view detailed room information and amenities. It features a robust backend for managing resident data and booking requests, ensuring a streamlined communication channel between users and property owners.',
    tags: ['React.js', 'Flask', 'SQLite', 'Web Development'],
    category: 'web',
    icon: '🏠',
    gradient: 'from-emerald-500 to-teal-600',
    glowColor: 'rgba(16,185,129,0.25)',
    featured: true,
    githubUrl: 'https://github.com/YesubuReddy/PG-Website',
    liveUrl: '#',
    highlights: ['PG Management System', 'Responsive Room Showcase', 'Flask & SQLite Backend', 'Amenity Tracking'],
  },
  {
    title: 'CRUD Application',
    description: 'A full-stack CRUD-based web application developed to understand frontend-backend interaction and database management.',
    longDesc: 'Developed a comprehensive CRUD-based web application focusing on the interaction between frontend, backend, and database. The project highlights data management operations (Create, Read, Update, and Delete) using Flask for the backend and SQLite for persistent storage, providing a solid foundation in real-world application architecture.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Flask', 'SQLite'],
    category: 'web',
    icon: '📝',
    gradient: 'from-amber-400 to-orange-500',
    glowColor: 'rgba(251,191,36,0.25)',
    featured: false,
    githubUrl: 'https://github.com/YesubuReddy/CRUD',
    liveUrl: '#',
    highlights: ['Full CRUD Functionality', 'Flask Backend API', 'SQLite Database Integration', 'Professional UI Design'],
  },
  {
    title: 'TaskZen',
    description: 'A modern task management application designed for efficiency and streamlined task tracking.',
    longDesc: 'Developed TaskZen, a structured task management system that enables users to organize their daily workflows with ease. The application features comprehensive CRUD operations, allowing for the creation, editing, and deletion of tasks, all within a responsive and intuitive user interface built with React and Vite.',
    tags: ['React.js', 'Vite', 'CSS3', 'Task Management'],
    category: 'web',
    icon: '✅',
    gradient: 'from-cyan-400 to-blue-500',
    glowColor: 'rgba(34,211,238,0.25)',
    featured: false,
    githubUrl: 'https://github.com/YesubuReddy/TaskZen',
    liveUrl: '#',
    highlights: ['Efficient Task tracking', 'React-based Dynamic UI', 'Full CRUD Operations', 'Responsive Experience'],
  },
  {
    title: 'Emosync',
    description: 'An intelligent emotion-based application that detects user emotions and provides personalized responses.',
    longDesc: 'Developed Emosync, an AI-powered application designed to analyze and understand human emotions in real-time. By integrating advanced computer vision techniques and machine learning models, the system identifies emotional states and responds with tailored content, creating a deeply personalized and empathetic user experience.',
    tags: ['Python', 'OpenCV', 'TensorFlow', 'Flask', 'AI/ML'],
    category: 'ai',
    icon: '🎭',
    gradient: 'from-rose-400 to-pink-600',
    glowColor: 'rgba(251,113,133,0.25)',
    featured: true,
    githubUrl: 'https://github.com/YesubuReddy/Emosync',
    liveUrl: '#',
    highlights: ['Real-time Emotion Detection', 'AI/ML Model Integration', 'Tailored User Responses', 'Computer Vision (OpenCV)'],
  },
]

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Web Apps', value: 'web' },
  { label: 'AI / ML', value: 'ai' },
  { label: 'Cloud', value: 'cloud' },
]

function ProjectModal({ project, onClose }) {
  return (
    <div className="modal-backdrop" onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal-panel">
        {/* Header */}
        <div className={`p-6 bg-gradient-to-br ${project.gradient} relative`}>
          <button onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-xl bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors text-base font-bold">
            ✕
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl">{project.icon}</div>
            <div>
              <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{project.title}</h3>
              {project.featured && (
                <span className="text-[10px] font-black uppercase tracking-widest bg-white/20 text-white px-2.5 py-0.5 rounded-full mt-1 inline-block">⭐ Featured</span>
              )}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6" style={{ background: 'var(--card-bg)' }}>
          <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-sub)' }}>{project.longDesc}</p>

          <h4 className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>Key Highlights</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
            {project.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-2 rounded-xl p-2.5 text-sm font-semibold"
                style={{ background: 'var(--bg-sub)', color: 'var(--text-sub)', border: '1px solid var(--border-solid)' }}>
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[9px] flex-shrink-0"
                  style={{ background: 'var(--primary)' }}>✓</span>
                {h}
              </div>
            ))}
          </div>

          <h4 className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>Tech Stack</h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
              <span key={tag} className="skill-tag font-bold">{tag}</span>
            ))}
          </div>

          <div className="flex gap-3">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className="btn-primary flex-1 justify-center py-3 text-sm" style={{ borderRadius: '14px' }}>
              <span>Live Demo</span><span>↗</span>
            </a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              className="btn-outline flex-1 justify-center py-3 text-sm" style={{ borderRadius: '14px' }}>
              <span>View Code</span>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, onOpenModal }) {
  return (
    <div
      className="project-card flex-shrink-0 flex flex-col group overflow-hidden relative"
      style={{ width: '260px' }}
    >
      {/* Icon header — compact on mobile */}
      <div className={`relative h-32 flex items-center justify-center bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)' }} />
        <span className="text-5xl filter drop-shadow-xl">{project.icon}</span>
        {project.featured && (
          <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest bg-white/90 text-amber-600 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />Featured
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-sm font-bold mb-1.5 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-main)' }}>
          {project.title}
        </h3>
        <p className="text-xs leading-relaxed mb-3 flex-1 font-medium line-clamp-3" style={{ color: 'var(--text-sub)' }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="skill-tag font-bold py-0.5 px-2 text-[9px]">{tag}</span>
          ))}
        </div>
        <div className="flex gap-2 pt-3" style={{ borderTop: '1px solid var(--border)' }}>
          <button
            onClick={() => onOpenModal(project)}
            className="flex-1 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all text-white flex items-center justify-center gap-1 hover:-translate-y-0.5"
            style={{ background: 'var(--primary)' }}>
            Details ↗
          </button>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            className="flex-1 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-1 hover:-translate-y-0.5 border"
            style={{ background: 'var(--bg-sub)', color: 'var(--text-sub)', borderColor: 'var(--border-solid)' }}>
            Code 📁
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [modal, setModal] = useState(null)

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-16 px-6 relative" style={{ background: 'var(--bg)' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 20% 50%, rgba(79,70,229,0.03) 0%, transparent 70%)' }} />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="mb-10 text-center scroll-hidden px-4 md:px-12">
          <div className="section-label mb-4 mx-auto">Portfolio Highlights</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-main)' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-line mx-auto mb-8" />

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {FILTERS.map(f => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`filter-tab ${filter === f.value ? 'active' : ''}`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── MOBILE: horizontal swipe scroll ── */}
        <div className="block sm:hidden">
          {filtered.length === 0 ? (
            <div className="text-center py-16 px-4" style={{ color: 'var(--text-muted)' }}>
              <div className="text-5xl mb-4">🔍</div>
              <p className="font-bold">No projects in this category yet</p>
            </div>
          ) : (
            <>
              {/* Hint */}
              <p className="text-center text-[10px] font-bold uppercase tracking-widest mb-3 opacity-50" style={{ color: 'var(--text-muted)' }}>
                ← Swipe to explore →
              </p>
              <div
                className="flex gap-4 overflow-x-auto pb-4 px-4"
                style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}
              >
                {filtered.map(project => (
                  <div key={project.title} style={{ scrollSnapAlign: 'start' }}>
                    <ProjectCard project={project} onOpenModal={setModal} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* ── TABLET / DESKTOP: regular grid ── */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 px-4 md:px-12">
          {filtered.map(project => (
            <div key={project.title} className="flex flex-col">
              <ProjectCard project={project} onOpenModal={setModal} />
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center py-20" style={{ color: 'var(--text-muted)' }}>
              <div className="text-5xl mb-4">🔍</div>
              <p className="font-bold">No projects in this category yet</p>
            </div>
          )}
        </div>

        {/* GitHub CTA */}
        <div className="mt-14 text-center scroll-hidden px-4 md:px-12">
          <a href="https://github.com/YesubuReddy" target="_blank" rel="noopener noreferrer"
            className="btn-outline inline-flex px-10 py-4 shadow-sm">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            <span>View All on GitHub</span>
          </a>
        </div>
      </div>

      {/* Modal */}
      {modal && <ProjectModal project={modal} onClose={() => setModal(null)} />}
    </section>
  )
}
