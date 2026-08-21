import { LangProvider, useLang } from './i18n.jsx'
import { SectionProvider } from './context/SectionContext.jsx'
import TopBar from './components/TopBar.jsx'
import Terminal from './components/Terminal.jsx'
import Sidebar from './components/Sidebar.jsx'
import WorkPage from './components/WorkPage.jsx'
import EducationPage from './components/EducationPage.jsx'
import ProjectsPage from './components/ProjectsPage.jsx'

function terminalLinesFor(lang) {
  return lang === 'zh'
    ? [
        '$ whoami',
        '赵云琦 — AI 解决方案架构师',
        '$ cat focus.txt',
        'Ascend 生态 · 端到端 AI 基础设施交付',
        '$ ./status.sh',
        '● 期待新机会 · 中国香港',
      ]
    : [
        '$ whoami',
        'ZHAO Yunqi — AI Solutions Architect',
        '$ cat focus.txt',
        'Ascend Ecosystem · End-to-End AI Infrastructure Delivery',
        '$ ./status.sh',
        '● Open to opportunities · Hong Kong',
      ]
}

function Footer() {
  const { lang } = useLang()
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <p>
        <span className="footer-prompt">$</span>{' '}
        {lang === 'zh'
          ? `使用本地部署的 Qwen3.8-27B 模型构建而成 · React + Vite · © ${year} ZHAO Yunqi`
          : `Built with a locally deployed Qwen3.8-27B model · React + Vite · © ${year} ZHAO Yunqi`}
      </p>
    </footer>
  )
}

function Shell() {
  const { lang } = useLang()
  const terminalLines = terminalLinesFor(lang)

  return (
    <>
      <TopBar />
      <div className="layout">
        <Sidebar />
        <main className="content">
          <Terminal key={lang} lines={terminalLines} />
          <WorkPage workId="cair" />
          <WorkPage workId="huawei" />
          <EducationPage />
          <ProjectsPage />
          <Footer />
        </main>
      </div>
    </>
  )
}

export default function App() {
  return (
    <LangProvider>
      <SectionProvider>
        <Shell />
      </SectionProvider>
    </LangProvider>
  )
}
