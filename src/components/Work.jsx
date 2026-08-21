import Accordion from './Accordion.jsx'
import { workExperience, education, achievements } from '../data/resume.js'

export default function Work() {
  return (
    <section className="block">
      <Accordion id="work" index="01" title="工作经历" subtitle="Work Experience" defaultOpen>
        <div className="entry-list">
          {workExperience.map((w) => (
            <article key={w.company} className="entry">
              <header className="entry-head">
                <div>
                  <h3 className="entry-role">{w.role}</h3>
                  <p className="entry-org">{w.company}</p>
                </div>
                <span className="entry-period">{w.period}</span>
              </header>
              {w.highlight && <p className="entry-highlight">🏆 {w.highlight}</p>}
              <ul className="entry-points">
                {w.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Accordion>

      <Accordion id="education" index="02" title="教育背景" subtitle="Education">
        <div className="entry-list">
          {education.map((e) => (
            <article key={e.school} className="entry">
              <header className="entry-head">
                <div>
                  <h3 className="entry-role">{e.degree}</h3>
                  <p className="entry-org">{e.school}</p>
                </div>
                <span className="entry-period">{e.period}</span>
              </header>
              <p className="entry-note">{e.note}</p>
            </article>
          ))}
        </div>
      </Accordion>

      <Accordion id="achievements" index="03" title="荣誉奖项" subtitle="Achievements">
        <div className="entry-list">
          {achievements.map((a) => (
            <article key={a.title} className="entry">
              <header className="entry-head">
                <div>
                  <h3 className="entry-role">{a.title}</h3>
                </div>
                <span className="entry-period">{a.period}</span>
              </header>
              <p className="entry-note">{a.note}</p>
            </article>
          ))}
        </div>
      </Accordion>
    </section>
  )
}
