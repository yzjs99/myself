import Accordion from './Accordion.jsx'
import { projects } from '../data/resume.js'

export default function Projects() {
  return (
    <Accordion id="projects" index="04" title="个人项目" subtitle="Selected Projects">
      <div className="entry-list">
        {projects.map((p) => (
          <article key={p.title} className="entry">
            <header className="entry-head">
              <div>
                <h3 className="entry-role">{p.title}</h3>
                <p className="entry-org">{p.org} · {p.role}</p>
              </div>
              <span className="entry-period">{p.period}</span>
            </header>
            <ul className="entry-points">
              {p.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Accordion>
  )
}
