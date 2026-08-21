import LangToggle from './LangToggle.jsx'

/**
 * 顶部栏：品牌标识 + 中英文切换
 */
export default function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-brand">
        <span className="topbar-prompt">$</span>
        <span className="topbar-name">zhaoyunqi</span>
        <span className="topbar-cursor">▊</span>
      </div>
      <LangToggle />
    </header>
  )
}
