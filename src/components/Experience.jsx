import Reveal from './Reveal.jsx'

const items = [
  {
    date: '2023 — 至今',
    role: '数据科学家',
    org: '某医疗科技公司',
    desc: '负责医学影像标注数据的分析流水线建设，覆盖数据质量监控、标注一致性评估与模型效果分析。',
  },
  {
    date: '2021 — 2023',
    role: '算法工程师',
    org: '某互联网公司',
    desc: '参与推荐系统特征工程与离线评估，搭建 A/B 实验分析看板，支撑策略迭代决策。',
  },
  {
    date: '2017 — 2021',
    role: '硕士 · 计算机科学与技术',
    org: '某大学',
    desc: '研究方向为医学图像分割与深度学习，发表相关论文两篇。',
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <Reveal>
        <p className="section-title">Experience</p>
        <h2 className="section-heading">经历</h2>
        <div className="timeline">
          {items.map((it) => (
            <div key={it.date} className="timeline-item">
              <p className="timeline-date">{it.date}</p>
              <h3 className="timeline-role">{it.role}</h3>
              <p className="timeline-org">{it.org}</p>
              <p className="timeline-desc">{it.desc}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
