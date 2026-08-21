import Reveal from './Reveal.jsx'

const posts = [
  {
    title: '医学影像标注数据质量评估：从 Kappa 到 ICC',
    date: '2026-07-12',
    desc: '多标注者一致性指标怎么选？结合真实标注场景聊聊适用边界。',
  },
  {
    title: '用 Pandas 高效处理百万级标注记录',
    date: '2026-05-03',
    desc: '分组聚合、内存优化与常见性能陷阱的实战总结。',
  },
  {
    title: '个人网站搭建手记：Vite + React 极简方案',
    date: '2026-03-20',
    desc: '从零搭建这个网站的完整过程，包括部署到 Vercel 的细节。',
  },
]

export default function Blog() {
  return (
    <section id="blog">
      <Reveal>
        <p className="section-title">Blog</p>
        <h2 className="section-heading">博客</h2>
        <div className="blog-list">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 60}>
              <a className="blog-item" href="#blog">
                <div>
                  <h3>{post.title}</h3>
                  <p>{post.desc}</p>
                </div>
                <span className="blog-date">{post.date}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
