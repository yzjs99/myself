import Page from './Page.jsx'
import { education, achievements } from '../data/resume.js'
import { sections } from '../data/sections.js'
import { useLang } from '../i18n.jsx'
import { useSection } from '../context/SectionContext.jsx'

/** 教育背景 + 荣誉奖项 合并页 */
export default function EducationPage() {
  const { tx, other } = useLang()
  const { activeId, jumpTo } = useSection()
  const section = sections.find((s) => s.id === 'education')

  return (
    <Page
      id="education"
      index={section.index}
      title={tx(section.title)}
      subtitle={other(section.title)}
      open={activeId === 'education'}
      onToggle={() => jumpTo('education')}
    >
      <h4 className="page-subhead">{tx({ zh: '教育背景', en: 'Education' })}</h4>
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

      <h4 className="page-subhead">{tx({ zh: '荣誉奖项', en: 'Achievements' })}</h4>
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
    </Page>
  )
}
