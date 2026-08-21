import Accordion from './Accordion.jsx'
import { profile } from '../data/resume.js'

const channels = [
  { icon: '✉️', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: '📞', label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, '')}` },
  { icon: '💼', label: 'LinkedIn', value: profile.linkedin, href: profile.linkedinUrl },
  { icon: '🐙', label: 'GitHub', value: profile.github, href: profile.githubUrl },
]

export default function Contact() {
  return (
    <Accordion id="contact" index="05" title="联系方式" subtitle="Get in Touch">
      <p className="contact-intro">
        无论是技术交流、项目合作还是随便聊聊，都欢迎通过以下方式找到我，通常 1-2 天内回复。
      </p>
      <div className="contact-grid">
        {channels.map((c) => (
          <a
            key={c.label}
            className="contact-card"
            href={c.href}
            target={c.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
          >
            <span className="contact-card-icon">{c.icon}</span>
            <span className="contact-card-label">{c.label}</span>
            <span className="contact-card-value">{c.value}</span>
          </a>
        ))}
      </div>
    </Accordion>
  )
}
