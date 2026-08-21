const links = [
  { href: '#about', label: '关于' },
  { href: '#experience', label: '经历' },
  { href: '#projects', label: '项目' },
  { href: '#blog', label: '博客' },
  { href: '#contact', label: '联系' },
]

export default function Nav({ dark, onToggle }) {
  return (
    <nav className="nav">
      <a href="#top" className="nav-logo">
        赵云琦<span style={{ color: 'var(--accent)' }}>.</span>
      </a>
      <div className="nav-links">
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
        <button
          className="theme-btn"
          onClick={onToggle}
          title={dark ? '切换到浅色模式' : '切换到深色模式'}
        >
          {dark ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  )
}
