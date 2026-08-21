import Page from './Page.jsx'
import ProjectEntry from './ProjectEntry.jsx'
import { projects, profile } from '../data/resume.js'
import { sections } from '../data/sections.js'
import { useLang } from '../i18n.jsx'
import { useSection } from '../context/SectionContext.jsx'

const INTRO = {
  zh: '无论是技术交流、项目合作还是随便聊聊，都欢迎通过以下方式找到我，通常 1-2 天内回复。',
  en: 'Whether it is a technical exchange, a project collaboration, or just a casual chat — reach me through any channel below. I usually reply within 1-2 days.',
}

/** 个人项目（未归属某段工作经历的）+ 联系方式 合并页 */
export default function ProjectsPage() {
  const { tx, other } = useLang()
  const { activeId, jumpTo } = useSection()
  const section = sections.find((s) => s.id === 'projects')
  const standalone = projects.filter((p) => !p.workId)

  const channels = [
    { icon: '✉️', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: '📞', label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, '')}` },
    { icon: '💼', label: 'LinkedIn', value: profile.linkedin, href: profile.linkedinUrl },
    { icon: '🐙', label: 'GitHub', value: profile.github, href: profile.githubUrl },
  ]

  return (
    <Page
      id="projects"
      index={section.index}
      title={tx(section.title)}
      subtitle={other(section.title)}
      open={activeId === 'projects'}
      onToggle={() => jumpTo('projects')}
    >
      <h4 className="page-subhead">{tx({ zh: '个人项目', en: 'Selected Projects' })}</h4>
      <div className="entry-list">
        {standalone.map((p) => (
          <ProjectEntry key={tx(p.title)} p={p} />
        ))}
      </div>

      <h4 className="page-subhead">{tx({ zh: '联系方式', en: 'Get in Touch' })}</h4>
      <p className="contact-intro">{tx(INTRO)}</p>
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
    </Page>
  )
}
