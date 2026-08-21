// 右侧四个页面的统一配置 — 导航、页面、滚动监听共用此单一数据源
// title 用于页面大标题，nav 用于顶部导航的短标签
export const sections = [
  {
    id: 'work-cair',
    index: '01',
    title: { zh: 'CAIR · 中科院香港创新院', en: 'CAIR · HK Institute of Science & Innovation' },
    nav: { zh: 'CAIR', en: 'CAIR' },
  },
  {
    id: 'work-huawei',
    index: '02',
    title: { zh: '华为国际（香港）', en: 'Huawei International (HK)' },
    nav: { zh: '华为', en: 'Huawei' },
  },
  {
    id: 'education',
    index: '03',
    title: { zh: '教育背景与荣誉奖项', en: 'Education & Achievements' },
    nav: { zh: '教育荣誉', en: 'Education' },
  },
  {
    id: 'projects',
    index: '04',
    title: { zh: '个人项目与联系方式', en: 'Projects & Contact' },
    nav: { zh: '项目联系', en: 'Projects' },
  },
]

export const SECTION_IDS = sections.map((s) => s.id)
