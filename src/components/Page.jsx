/**
 * 页面区块：简单标题 + 下拉框（受控）
 * 展开状态由 SectionContext 统一管理，滚动时自动展开当前页、收起其余页。
 */
export default function Page({ id, index, title, subtitle, open, onToggle, children }) {
  return (
    <section className={`page${open ? ' open' : ''}`} id={id}>
      <button className="page-head" onClick={onToggle} aria-expanded={open}>
        <span className="page-index">{index}</span>
        <div className="page-titles">
          <h2 className="page-title">{title}</h2>
          {subtitle && <span className="page-subtitle">{subtitle}</span>}
        </div>
        <span className="page-chevron">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      <div className="page-body">
        <div className="page-inner">{children}</div>
      </div>
    </section>
  )
}
