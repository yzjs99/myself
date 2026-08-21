import Reveal from './Reveal.jsx'

const skills = [
  'Python',
  'PyTorch',
  '医学影像分析',
  '数据可视化',
  'React',
  'SQL',
  '机器学习',
  '深度学习',
]

export default function About() {
  return (
    <section id="about">
      <Reveal>
        <p className="section-title">About</p>
        <h2 className="section-heading">关于我</h2>
        <div className="about-text">
          <p>
            我是一名数据科学家，目前专注于医疗 AI 领域，尤其是医学影像的标注、
            分析与模型评估。日常工作中，我处理大规模标注数据集，构建分析流水线，
            并用可视化手段让数据结论清晰可传达。
          </p>
          <p>
            我相信好的工程来自对细节的尊重：干净的数据、可复现的流程、
            以及一份别人看得懂的文档。工作之外，我喜欢写博客记录思考，
            也乐于分享踩坑经验。
          </p>
        </div>
        <div className="skill-tags">
          {skills.map((s) => (
            <span key={s} className="skill-tag">
              {s}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
