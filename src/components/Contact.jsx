import { useState, useEffect } from 'react'

const contactItems = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'yesubureddy4377@gmail.com',
    href: 'mailto:yesubureddy4377@gmail.com',
    color: '#6366f1',
    desc: 'Send me a message anytime',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+91 9849562455',
    href: 'tel:+919849562455',
    color: '#10b981',
    desc: 'Available Mon–Sat, 9am–6pm',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Alamuru, Andhra Pradesh',
    href: null,
    color: '#f59e0b',
    desc: 'Open to remote & relocation',
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
    // Simulate async send (mailto fallback)
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)

    // Open mailto as fallback
    const subject = encodeURIComponent(form.subject)
    const body = encodeURIComponent(`Hi Yesubureddy,\n\n${form.message}\n\n— ${form.name}\n${form.email}`)
    window.location.href = `mailto:yesubureddy4377@gmail.com?subject=${subject}&body=${body}`

    setToast({ message: 'Message prepared! Your email client should open now.', type: 'success' })
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="rounded-3xl border p-7 md:p-10 shadow-sm"
        style={{ background: 'var(--card-bg)', borderColor: 'var(--border-solid)' }}
        noValidate>
        <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-main)' }}>
          Send Me a Message
        </h3>

        <div className="grid md:grid-cols-2 gap-5 mb-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>
              Full Name *
            </label>
            <input
              name="name" type="text" value={form.name} onChange={handleChange}
              placeholder="John Doe"
              className={`form-input ${errors.name ? 'error' : ''}`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>
              Email Address *
            </label>
            <input
              name="email" type="email" value={form.email} onChange={handleChange}
              placeholder="john@example.com"
              className={`form-input ${errors.email ? 'error' : ''}`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email}</p>}
          </div>
        </div>

        <div className="mb-5">
          <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>
            Subject *
          </label>
          <input
            name="subject" type="text" value={form.subject} onChange={handleChange}
            placeholder="Project Inquiry / Job Opportunity / Collaboration"
            className={`form-input ${errors.subject ? 'error' : ''}`}
          />
          {errors.subject && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.subject}</p>}
        </div>

        <div className="mb-7">
          <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>
            Message *
          </label>
          <textarea
            name="message" value={form.message} onChange={handleChange}
            placeholder="Tell me about your project, timeline, and how I can help..."
            rows={6}
            className={`form-input resize-none ${errors.message ? 'error' : ''}`}
          />
          <div className="flex justify-between mt-1">
            {errors.message
              ? <p className="text-red-500 text-xs font-medium">{errors.message}</p>
              : <span />}
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{form.message.length} chars</p>
          </div>
        </div>

        <button type="submit" disabled={loading}
          className="btn-primary w-full justify-center py-4 text-base disabled:opacity-70"
          style={{ borderRadius: '14px' }}>
          {loading ? (
            <>
              <span className="spinner" />
              <span>Preparing message…</span>
            </>
          ) : (
            <>
              <span>✉️</span>
              <span>Send Message</span>
            </>
          )}
        </button>

        <p className="text-center text-[11px] mt-4 font-medium" style={{ color: 'var(--text-muted)' }}>
          Typical response within <span style={{ color: 'var(--primary)' }}>24 hours</span>
        </p>
      </form>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 relative" style={{ background: 'var(--section-alt)', borderTop: '1px solid var(--border)' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(79,70,229,0.05) 0%, transparent 60%)' }} />

      <div className="max-w-[1440px] mx-auto px-4 md:px-12 relative z-10">
        <div className="mb-12 text-center scroll-hidden">
          <div className="section-label mb-4 mx-auto">Get In Touch</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-main)' }}>
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-base max-w-2xl mx-auto font-semibold opacity-90" style={{ color: 'var(--text-sub)' }}>
            I'm currently open to new opportunities. Whether you have a project in mind or just want to say hello — fill out the form or reach out directly!
          </p>
          <div className="section-line mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: info cards + socials */}
          <div className="scroll-hidden flex flex-col gap-6">
            {/* Contact cards */}
            {contactItems.map((item) => (
              <div key={item.label} className="contact-card flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-sm"
                  style={{ background: `${item.color}12`, border: `1px solid ${item.color}25` }}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-1" style={{ color: 'var(--text-muted)' }}>{item.label}</p>
                  {item.href ? (
                    <a href={item.href}
                      className="font-bold transition-colors hover:underline block mb-1"
                      style={{ color: 'var(--text-main)', fontFamily: 'Space Grotesk, sans-serif' }}>
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-bold mb-1" style={{ color: 'var(--text-main)', fontFamily: 'Space Grotesk, sans-serif' }}>{item.value}</p>
                  )}
                  <p className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                </div>
              </div>
            ))}

            {/* Availability note */}
            <div className="rounded-2xl p-6 flex items-start gap-4 border"
              style={{ background: 'var(--card-bg)', borderColor: 'rgba(16,185,129,0.2)', boxShadow: '0 0 20px rgba(16,185,129,0.05)' }}>
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-sm mb-1" style={{ color: 'var(--text-main)' }}>Currently Available</p>
                <p className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                  Best time to reach me: <strong>Mon–Fri, 9am–7pm IST</strong><br />
                  Open for freelance projects, full-time roles, and collaborations.
                </p>
              </div>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-3">
              {[
                {
                  label: 'LinkedIn',
                  href: 'https://linkedin.com/in/yesubu-reddy-chinthapalli4377',
                  color: '#0077B5',
                  bg: 'rgba(0,119,181,0.07)',
                  border: 'rgba(0,119,181,0.2)',
                  icon: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/YesubuReddy',
                  color: 'var(--text-main)',
                  bg: 'var(--bg-sub)',
                  border: 'var(--border-solid)',
                  icon: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>,
                },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-5 py-3 rounded-2xl font-bold text-sm hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"
                  style={{ background: s.bg, border: `1px solid ${s.border}`, color: s.color }}>
                  {s.icon} {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="scroll-hidden">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
