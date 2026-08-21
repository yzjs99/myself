import { profile, skills } from '../data/resume.js'

const contactItems = [
  { icon: '📍', label: '位置', value: profile.location },
  { icon: '✉️', label: '邮箱', value: profile.email, href: `mailto:${profile.email}` },
  { icon: '📞', label: '电话', value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, '')}` },
  { icon: '💼', label: 'LinkedIn', value: profile.linkedin, href: profile.linkedinUrl },
  { icon: '🐙', label: 'GitHub', value: profile.github, href: profile.githubUrl },
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="avatar-wrap">
        <div className="avatar">{profile.avatar}</div>
        <span className="status-dot" title={profile.status} />
      </div>

      <h1 className="side-name">{profile.name}</h1>
      <p className="side-name-en">{profile.nameEn}</p>
      <p className="side-title">{profile.title}</p>
      <p className="side-tagline">{profile.tagline}</p>

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
          <div key={s.label} className="skill-row">
            <span className="skill-label">{s.label}</span>
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
