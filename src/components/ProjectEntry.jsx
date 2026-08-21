import { useLang } from '../i18n.jsx'

/** 单个项目条目（工作经历页与个人项目页共用） */
export default function ProjectEntry({ p }) {
  const { tx } = useLang()
  return (
    <article className="entry">
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
  )
}
