import Accordion from './Accordion.jsx'
import { projects } from '../data/resume.js'
import { useLang } from '../i18n.jsx'

export default function Projects() {
  const { tx, other } = useLang()
  const T = { projects: { zh: '个人项目', en: 'Selected Projects' } }

  return (
    <Accordion id="projects" index="04" title={tx(T.projects)} subtitle={other(T.projects)}>
      <div className="entry-list">
        {projects.map((p) => (
          <article key={tx(p.title)} className="entry">
            <header className="entry-head">
              <div>
                <h3 className="entry-role">{tx(p.title)}</h3>
                <p className="entry-org">{tx(p.org)} · {tx(p.role)}</p>
              </div>
              <span className="entry-period">{p.period}</span>
            </header>
            <ul className="entry-points">
              {p.points.map((pt, i) => (
                <li key={i}>{tx(pt)}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Accordion>
  )
}
