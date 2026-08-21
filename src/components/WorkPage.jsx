import Page from './Page.jsx'
import ProjectEntry from './ProjectEntry.jsx'
import { workExperience, projects } from '../data/resume.js'
import { sections } from '../data/sections.js'
import { useLang } from '../i18n.jsx'
import { useSection } from '../context/SectionContext.jsx'

/**
 * 单段工作经历页：职位信息 + 该段经历下属的项目
 */
export default function WorkPage({ workId }) {
  const { tx, other } = useLang()
  const { activeId, jumpTo } = useSection()
  const id = `work-${workId}`
  const section = sections.find((s) => s.id === id)
  const work = workExperience.find((w) => w.id === workId)
  const related = projects.filter((p) => p.workId === workId)

  return (
    <Page
      id={id}
      index={section.index}
      title={tx(section.title)}
      subtitle={other(section.title)}
      open={activeId === id}
      onToggle={() => jumpTo(id)}
    >
      <article className="entry">
        <header className="entry-head">
          <div>
            <h3 className="entry-role">{tx(work.role)}</h3>
            <p className="entry-org">{tx(work.company)}</p>
          </div>
          <span className="entry-period">{work.period}</span>
        </header>
        {work.highlight && <p className="entry-highlight">🏆 {tx(work.highlight)}</p>}
        <ul className="entry-points">
          {work.points.map((p, i) => (
            <li key={i}>{tx(p)}</li>
          ))}
        </ul>
      </article>

      {related.length > 0 && (
        <>
          <h4 className="page-subhead">
            {tx({ zh: '相关项目', en: 'Related Projects' })}
          </h4>
          <div className="entry-list">
            {related.map((p) => (
              <ProjectEntry key={tx(p.title)} p={p} />
            ))}
          </div>
        </>
      )}
    </Page>
  )
}
