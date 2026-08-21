import { useLang } from '../i18n.jsx'

/**
 * 中英文切换按钮（分段控件样式）
 */
export default function LangToggle() {
  const { lang, setLang } = useLang()
  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button
        className={lang === 'zh' ? 'active' : ''}
        onClick={() => setLang('zh')}
        aria-pressed={lang === 'zh'}
      >
        中
      </button>
      <button
        className={lang === 'en' ? 'active' : ''}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
    </div>
  )
}
