import Accordion from './Accordion.jsx'
import { workExperience, education, achievements } from '../data/resume.js'
import { useLang } from '../i18n.jsx'

export default function Work() {
  const { tx, other } = useLang()

  const T = {
    work: { zh: '工作经历', en: 'Work Experience' },
    education: { zh: '教育背景', en: 'Education' },
    achievements: { zh: '荣誉奖项', en: 'Achievements' },
  }

  return (
    <section className="block">
      <Accordion id="work" index="01" title={tx(T.work)} subtitle={other(T.work)} defaultOpen>
        <div className="entry-list">
          {workExperience.map((w) => (
            <article key={tx(w.company)} className="entry">
              <header className="entry-head">
                <div>
                  <h3 className="entry-role">{tx(w.role)}</h3>
                  <p className="entry-org">{tx(w.company)}</p>
                </div>
                <span className="entry-period">{w.period}</span>
              </header>
              {w.highlight && <p className="entry-highlight">🏆 {tx(w.highlight)}</p>}
              <ul className="entry-points">
                {w.points.map((p, i) => (
                  <li key={i}>{tx(p)}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Accordion>

      <Accordion id="education" index="02" title={tx(T.education)} subtitle={other(T.education)}>
        <div className="entry-list">
          {education.map((e) => (
            <article key={tx(e.school)} className="entry">
              <header className="entry-head">
                <div>
                  <h3 className="entry-role">{tx(e.degree)}</h3>
                  <p className="entry-org">{tx(e.school)}</p>
                </div>
                <span className="entry-period">{e.period}</span>
              </header>
              <p className="entry-note">{tx(e.note)}</p>
            </article>
          ))}
        </div>
      </Accordion>

      <Accordion id="achievements" index="03" title={tx(T.achievements)} subtitle={other(T.achievements)}>
        <div className="entry-list">
          {achievements.map((a) => (
            <article key={tx(a.title)} className="entry">
              <header className="entry-head">
                <div>
                  <h3 className="entry-role">{tx(a.title)}</h3>
                </div>
                <span className="entry-period">{a.period}</span>
              </header>
              <p className="entry-note">{tx(a.note)}</p>
            </article>
          ))}
        </div>
      </Accordion>
    </section>
  )
}
