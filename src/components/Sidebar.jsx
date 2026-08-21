import { profile, skills } from '../data/resume.js'
import { useLang } from '../i18n.jsx'

export default function Sidebar() {
  const { lang, tx, other } = useLang()

  const contactItems = [
    { icon: '📍', label: lang === 'zh' ? '位置' : 'Location', value: tx(profile.location) },
    { icon: '✉️', label: lang === 'zh' ? '邮箱' : 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: '📞', label: lang === 'zh' ? '电话' : 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, '')}` },
    { icon: '💼', label: 'LinkedIn', value: profile.linkedin, href: profile.linkedinUrl },
    { icon: '🐙', label: 'GitHub', value: profile.github, href: profile.githubUrl },
  ]

  return (
    <aside className="sidebar">
      <div className="avatar-wrap">
        <div className="avatar">{profile.avatar}</div>
        <span className="status-dot" title={tx(profile.status)} />
      </div>

      <h1 className="side-name">{tx(profile.name)}</h1>
      <p className="side-name-en">{other(profile.name)}</p>
      <p className="side-title">{tx(profile.title)}</p>
      <p className="side-tagline">{tx(profile.tagline)}</p>

      <div className="side-divider" />

      <ul className="contact-list">
        {contactItems.map((c) => (
          <li key={c.label}>
            {c.href ? (
              <a className="contact-row" href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <span className="contact-icon">{c.icon}</span>
                <span className="contact-value">{c.value}</span>
              </a>
            ) : (
              <span className="contact-row">
                <span className="contact-icon">{c.icon}</span>
                <span className="contact-value">{c.value}</span>
              </span>
            )}
          </li>
        ))}
      </ul>

      <div className="side-divider" />

      <div className="skills-block">
        <p className="skills-heading">// skill stack</p>
        {skills.map((s) => (
          <div key={tx(s.label)} className="skill-row">
            <span className="skill-label">{tx(s.label)}</span>
            <div className="skill-chips">
              {s.items.map((it) => (
                <span key={it} className="chip">{it}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}
