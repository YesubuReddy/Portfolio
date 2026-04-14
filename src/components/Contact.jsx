import { useState, useEffect } from 'react'

const contactItems = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'yesubureddy4377@gmail.com',
    href: 'mailto:yesubureddy4377@gmail.com',
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.08)',
    border: 'rgba(99,102,241,0.2)',
    desc: 'Send me a message anytime',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+91 9849562455',
    href: 'tel:+919849562455',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.2)',
    desc: 'Available Mon–Sat, 9am–6pm',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Alamuru, Andhra Pradesh',
    href: null,
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.2)',
    desc: 'Open to remote & relocation',
  },
]

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yesubu-reddy-chinthapalli4377',
    color: '#0077B5',
    bg: 'rgba(0,119,181,0.07)',
    border: 'rgba(0,119,181,0.2)',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/YesubuReddy',
    color: 'var(--text-main)',
    bg: 'var(--bg-sub)',
    border: 'var(--border-solid)',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
]

function Toast({ message, type, onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 4000)
    return () => clearTimeout(t)
  }, [onClose])

  const icons = { success: '✅', error: '❌', info: 'ℹ️' }
  const colors = { success: '#10b981', error: '#ef4444', info: '#6366f1' }

  return (
    <div className="toast" style={{ borderLeft: `4px solid ${colors[type]}` }}>
      <span className="text-xl flex-shrink-0">{icons[type]}</span>
      <p className="flex-1">{message}</p>
      <button onClick={onClose} className="text-lg opacity-60 hover:opacity-100 transition-opacity ml-2">✕</button>
    </div>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState(null)
  const [focused, setFocused] = useState(null)

  const validate = () => {
    const errs = {}
    if (!form.name.trim() || form.name.trim().length < 2) errs.name = 'Please enter your full name (min 2 chars)'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email address'
    if (!form.subject.trim() || form.subject.trim().length < 3) errs.subject = 'Subject is required (min 3 chars)'
    if (!form.message.trim() || form.message.trim().length < 20) errs.message = 'Message must be at least 20 characters'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)

    const subject = encodeURIComponent(form.subject)
    const body = encodeURIComponent(`Hi Yesubureddy,\n\n${form.message}\n\n— ${form.name}\n${form.email}`)
    window.location.href = `mailto:yesubureddy4377@gmail.com?subject=${subject}&body=${body}`

    setToast({ message: 'Message prepared! Your email client should open now.', type: 'success' })
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const inputClass = (field) =>
    `form-input transition-all duration-200 ${errors[field] ? 'error' : ''} ${focused === field ? 'ring-2 ring-[var(--primary)] ring-opacity-30' : ''}`

  return (
    <>
      <form onSubmit={handleSubmit} noValidate
        className="relative rounded-3xl overflow-hidden"
        style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--border-solid)',
          boxShadow: 'var(--shadow-lg)',
        }}>
        {/* Gradient top accent */}
        <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, var(--primary), var(--secondary), var(--accent))' }} />

        <div className="p-6 md:p-9">
          {/* Form header */}
          <div className="flex items-center gap-3 mb-7">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-sm text-white"
              style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))' }}>
              ✉️
            </div>
            <div>
              <h3 className="text-lg font-black" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-main)' }}>
                Send Me a Message
              </h3>
              <p className="text-[11px] font-semibold" style={{ color: 'var(--text-muted)' }}>I'll reply within 24 hours</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest mb-1.5" style={{ color: 'var(--text-muted)' }}>
                Full Name *
              </label>
              <input
                name="name" type="text" value={form.name} onChange={handleChange}
                onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                placeholder="John Doe"
                className={inputClass('name')}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest mb-1.5" style={{ color: 'var(--text-muted)' }}>
                Email Address *
              </label>
              <input
                name="email" type="email" value={form.email} onChange={handleChange}
                onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                placeholder="john@example.com"
                className={inputClass('email')}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-[10px] font-black uppercase tracking-widest mb-1.5" style={{ color: 'var(--text-muted)' }}>
              Subject *
            </label>
            <input
              name="subject" type="text" value={form.subject} onChange={handleChange}
              onFocus={() => setFocused('subject')} onBlur={() => setFocused(null)}
              placeholder="Project Inquiry / Job Opportunity / Collaboration"
              className={inputClass('subject')}
            />
            {errors.subject && <p className="text-red-500 text-xs mt-1 font-medium">{errors.subject}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-[10px] font-black uppercase tracking-widest mb-1.5" style={{ color: 'var(--text-muted)' }}>
              Message *
            </label>
            <textarea
              name="message" value={form.message} onChange={handleChange}
              onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
              placeholder="Tell me about your project, timeline, and how I can help..."
              rows={5}
              className={`${inputClass('message')} resize-none`}
            />
            <div className="flex justify-between mt-1">
              {errors.message
                ? <p className="text-red-500 text-xs font-medium">{errors.message}</p>
                : <span />}
              <p className="text-xs ml-auto" style={{ color: form.message.length >= 20 ? 'var(--primary)' : 'var(--text-muted)' }}>
                {form.message.length}/500
              </p>
            </div>
          </div>

          <button type="submit" disabled={loading}
            className="w-full py-4 rounded-2xl font-black text-sm uppercase tracking-widest text-white transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-2.5 relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
              boxShadow: '0 8px 30px -5px rgba(79,70,229,0.4)',
            }}>
            {/* Shine effect */}
            <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            {loading ? (
              <>
                <span className="spinner" />
                <span>Sending…</span>
              </>
            ) : (
              <>
                <span>🚀</span>
                <span>Send Message</span>
              </>
            )}
          </button>

          <p className="text-center text-[10px] mt-3 font-semibold" style={{ color: 'var(--text-muted)' }}>
            🔒 Your info is safe. Typical response within <span style={{ color: 'var(--primary)' }}>24 hours</span>
          </p>
        </div>
      </form>

      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />
      )}
    </>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 md:px-6 relative overflow-hidden" style={{ background: 'var(--section-alt)', borderTop: '1px solid var(--border)' }}>

      {/* Decorative background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-20 blur-[100px]"
          style={{ background: 'radial-gradient(circle, var(--primary), transparent)' }} />
        <div className="absolute top-10 left-0 w-[300px] h-[300px] rounded-full opacity-10 blur-[80px]"
          style={{ background: 'var(--accent)' }} />
        <div className="absolute top-0 right-0 w-[250px] h-[250px] rounded-full opacity-10 blur-[80px]"
          style={{ background: 'var(--secondary)' }} />
      </div>

      <div className="max-w-[1440px] mx-auto px-0 md:px-12 relative z-10">
        {/* Section header */}
        <div className="mb-14 text-center scroll-hidden">
          <div className="section-label mb-4 mx-auto">Get In Touch</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 leading-tight"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-main)' }}>
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-sm md:text-base max-w-xl mx-auto font-semibold leading-relaxed px-4" style={{ color: 'var(--text-sub)' }}>
            I'm currently open to new opportunities. Whether you have a project in mind,
            a question, or just want to say hello — I'd love to hear from you!
          </p>
          <div className="section-line mx-auto mt-5" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT COLUMN */}
          <div className="scroll-hidden flex flex-col gap-5">

            {/* Quick-action CTA banner */}
            <div className="relative rounded-3xl p-6 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(79,70,229,0.08), rgba(124,58,237,0.08))',
                border: '1px solid rgba(79,70,229,0.15)',
              }}>
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10 blur-[50px] pointer-events-none"
                style={{ background: 'var(--primary)' }} />
              <p className="text-[10px] font-black uppercase tracking-[0.25em] mb-2" style={{ color: 'var(--primary)' }}>
                🟢 Currently Available for Work
              </p>
              <p className="font-bold text-base mb-1" style={{ color: 'var(--text-main)', fontFamily: 'Space Grotesk, sans-serif' }}>
                Open to Full-Time Roles &amp; Freelance
              </p>
              <p className="text-xs font-medium mb-5" style={{ color: 'var(--text-muted)' }}>
                Best time to reach me: <strong>Mon–Fri, 9am–7pm IST</strong>
              </p>
              <div className="flex flex-wrap gap-2">
                {['React Developer', 'Full Stack Dev', 'Python Engineer'].map(r => (
                  <span key={r}
                    className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tight"
                    style={{ background: 'rgba(79,70,229,0.1)', color: 'var(--primary)', border: '1px solid rgba(79,70,229,0.2)' }}>
                    {r}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact info cards */}
            <div className="flex flex-col gap-3">
              {contactItems.map((item) => (
                <div key={item.label}
                  className="contact-card flex items-center gap-4 group hover:scale-[1.01] transition-transform duration-200"
                  style={{ borderColor: item.border }}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: item.bg, border: `1px solid ${item.border}` }}>
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] mb-0.5" style={{ color: 'var(--text-muted)' }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href}
                        className="font-bold text-sm hover:underline block truncate transition-colors"
                        style={{ color: 'var(--text-main)', fontFamily: 'Space Grotesk, sans-serif' }}>
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-bold text-sm truncate" style={{ color: 'var(--text-main)', fontFamily: 'Space Grotesk, sans-serif' }}>{item.value}</p>
                    )}
                    <p className="text-[10px] font-medium mt-0.5" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center border opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ borderColor: item.border, background: item.bg, color: item.color }}>
                    →
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--text-muted)' }}>Connect with me</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-5 py-3 rounded-2xl font-bold text-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                    style={{ background: s.bg, border: `1px solid ${s.border}`, color: s.color }}>
                    {s.icon} {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Response time promise */}
            <div className="rounded-2xl px-5 py-4 flex items-center gap-4"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--border-solid)' }}>
              {['⚡', '🕐', '🌍'].map((emoji, i) => (
                <div key={i} className="flex-1 text-center">
                  <p className="text-2xl mb-1">{emoji}</p>
                  <p className="text-[9px] font-black uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                    {['Fast Reply', '24h Response', 'Remote Ready'][i]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN — Form */}
          <div className="scroll-hidden">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
