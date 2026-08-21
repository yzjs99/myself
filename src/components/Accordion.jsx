import { useState } from 'react'

/**
 * 可下拉展开的区块
 */
export default function Accordion({ id, index, title, subtitle, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className={`accordion${open ? ' open' : ''}`} id={id}>
      <button className="accordion-head" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span className="accordion-index">{index}</span>
        <span className="accordion-titles">
          <span className="accordion-title">{title}</span>
          {subtitle && <span className="accordion-subtitle">{subtitle}</span>}
        </span>
        <span className="accordion-chevron">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      <div className="accordion-body">
        <div className="accordion-inner">{children}</div>
      </div>
    </div>
  )
}
