import Terminal from './components/Terminal.jsx'
import Sidebar from './components/Sidebar.jsx'
import Work from './components/Work.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

const terminalLines = [
  '$ whoami',
  'ZHAO Yunqi — AI Solutions Architect',
  '$ cat focus.txt',
  'Ascend 生态 · 端到端 AI 基础设施交付',
  '$ ./status.sh',
  '● Open to opportunities · Hong Kong',
]

export default function App() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <Terminal lines={terminalLines} />
        <Work />
        <Projects />
        <Contact />
        <footer className="footer">
          <p>
            <span className="footer-prompt">$</span> built with React + Vite · ©{' '}
            {new Date().getFullYear()} ZHAO Yunqi
          </p>
        </footer>
      </main>
    </div>
  )
}
