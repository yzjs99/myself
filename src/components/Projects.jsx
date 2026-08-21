import Reveal from './Reveal.jsx'

const projects = [
  {
    icon: '📊',
    title: '标注数据统计分析平台',
    desc: '面向医学影像标注数据的统计分析工具，自动聚合标注结果、生成质量报告与可视化图表，支持批量导出。',
    tags: ['Python', 'Pandas', 'Matplotlib'],
    links: { code: 'https://github.com', demo: null },
  },
  {
    icon: '🩻',
    title: '影像标注一致性评估',
    desc: '计算多标注者间一致性指标（Kappa / ICC），定位标注分歧样本，辅助标注规范迭代。',
    tags: ['Python', 'Scikit-learn'],
    links: { code: 'https://github.com', demo: null },
  },
  {
    icon: '📈',
    title: '模型效果分析看板',
    desc: '将模型评估指标（敏感度、特异度、AUC）按病种与批次维度聚合，输出可交互的评估看板。',
    tags: ['React', 'ECharts', 'FastAPI'],
    links: { code: 'https://github.com', demo: 'https://example.com' },
  },
  {
    icon: '🔧',
    title: '数据清洗流水线',
    desc: '基于规则 + 统计异常检测的数据清洗流水线，处理百万级标注记录，异常检出率提升 30%。',
    tags: ['Python', 'SQL', 'Airflow'],
    links: { code: 'https://github.com', demo: null },
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <Reveal>
        <p className="section-title">Projects</p>
        <h2 className="section-heading">项目作品</h2>
        <div className="project-grid">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="project-card">
                <div className="project-top">
                  <span className="project-icon">{p.icon}</span>
                  <div className="project-links">
                    {p.links.code && (
                      <a href={p.links.code} target="_blank" rel="noreferrer">
                        代码
                      </a>
                    )}
                    {p.links.demo && (
                      <a href={p.links.demo} target="_blank" rel="noreferrer">
                        演示
                      </a>
                    )}
                  </div>
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
