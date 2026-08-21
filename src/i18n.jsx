import { createContext, useContext, useEffect, useState } from 'react'

const LangContext = createContext({ lang: 'zh', setLang: () => {}, tx: (v) => v, other: (v) => v })

/**
 * 全站语言上下文：lang 为 'zh' | 'en'
 * tx(value)  — 取当前语言文本（value 为 { zh, en } 或纯字符串）
 * other(value) — 取另一种语言的文本（用于副标题对照显示）
 */
export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('site-lang') === 'en' ? 'en' : 'zh'
    } catch {
      return 'zh'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('site-lang', lang)
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
  }, [lang])

  const tx = (v) => (v && typeof v === 'object' ? v[lang] ?? v.zh : v)
  const other = (v) => (v && typeof v === 'object' ? v[lang === 'zh' ? 'en' : 'zh'] : v)

  return (
    <LangContext.Provider value={{ lang, setLang, tx, other }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
