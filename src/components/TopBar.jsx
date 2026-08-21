import LangToggle from './LangToggle.jsx'
import { sections } from '../data/sections.js'
import { useLang } from '../i18n.jsx'
import { useSection } from '../context/SectionContext.jsx'

/**
 * 顶部栏：品牌标识 + 区块导航（点击瞬间跳转）+ 中英文切换
 */
export default function TopBar() {
  const { tx } = useLang()
  const { activeId, jumpTo } = useSection()

  return (
    <header className="topbar">
      <div className="topbar-brand">
        <span className="topbar-prompt">$</span>
        <span className="topbar-name">zhaoyunqi</span>
        <span className="topbar-cursor">▊</span>
      </div>
      <nav className="topbar-nav" aria-label="sections">
        {sections.map((s) => (
          <button
            key={s.id}
            type="button"
            className={`topbar-nav-link${activeId === s.id ? ' active' : ''}`}
            onClick={() => jumpTo(s.id)}
          >
            <span className="topbar-nav-index">{s.index}</span>
            <span className="topbar-nav-label">{tx(s.nav)}</span>
          </button>
        ))}
      </nav>
      <LangToggle />
    </header>
  )
}
