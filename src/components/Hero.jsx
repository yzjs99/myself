import Reveal from './Reveal.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <Reveal>
        <div className="hero-avatar">云</div>
        <h1>
          你好，我是<span className="accent">赵云琦</span>
        </h1>
        <p className="hero-tagline">
          数据科学家 · 医疗 AI 方向
          <br />
          专注于医学影像数据分析、标注质量评估与可视化。
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            查看项目
          </a>
          <a href="#contact" className="btn btn-ghost">
            联系我
          </a>
        </div>
      </Reveal>
    </section>
  )
}
