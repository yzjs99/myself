import Reveal from './Reveal.jsx'

const contacts = [
  { icon: '✉️', label: '邮箱', value: 'zhaoyunqi@example.com', href: 'mailto:zhaoyunqi@example.com' },
  { icon: '🐙', label: 'GitHub', value: 'github.com/zhaoyunqi', href: 'https://github.com' },
  { icon: '💬', label: '微信', value: 'zhaoyunqi_dev', href: null },
]

export default function Contact() {
  return (
    <section id="contact">
      <Reveal>
        <p className="section-title">Contact</p>
        <h2 className="section-heading">联系我</h2>
        <p className="contact-text">
          无论是技术交流、项目合作还是随便聊聊，都欢迎通过以下方式找到我。
          通常会在 1-2 天内回复。
        </p>
        <div className="contact-links">
          {contacts.map((c) =>
            c.href ? (
              <a
                key={c.label}
                className="contact-link"
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                <span>{c.icon}</span>
                {c.value}
              </a>
            ) : (
              <span key={c.label} className="contact-link">
                <span>{c.icon}</span>
                {c.value}
              </span>
            ),
          )}
        </div>
      </Reveal>
    </section>
  )
}
