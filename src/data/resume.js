export const profile = {
  name: '赵云琦',
  nameEn: 'ZHAO Yunqi',
  title: 'AI Solutions Architect',
  tagline: 'Ascend 生态 · 端到端 AI 基础设施交付',
  avatar: '云',
  location: 'Hong Kong, CN',
  email: 'zhaoyunqi9901@gmail.com',
  phone: '(852) 6587-2578',
  linkedin: 'linkedin.com/in/yunqi-zhao-513479274',
  linkedinUrl: 'https://linkedin.com/in/yunqi-zhao-513479274',
  github: 'github.com/yzjs99',
  githubUrl: 'https://github.com/yzjs99',
  status: 'Open to opportunities',
}

export const skills = [
  { label: 'Hardware', items: ['Ascend 910B/310', 'CANN', 'ATC', 'OM/ONNX', 'AscendC'] },
  { label: 'Training', items: ['MindSpeed', 'DeepSpeed', 'Megatron-LM', 'LoRA/QLoRA', 'Distillation'] },
  { label: 'Inference', items: ['MindIE', 'vLLM', 'SGLang', 'Ollama', 'OpenWebUI'] },
  { label: 'MLOps', items: ['Kubernetes', 'Docker', 'NFS', 'conda', 'Git'] },
  { label: 'Frameworks', items: ['PyTorch', 'Transformers', 'LLama-Factory', 'ms-swift', 'Dify', 'ComfyUI'] },
  { label: 'Languages', items: ['Python', 'C/C++', 'SQL', 'LaTeX', 'Shell'] },
]

export const workExperience = [
  {
    role: 'Ascend FAE & 智能计算团队负责人',
    company: 'Huawei International (Hong Kong)',
    period: 'Feb 2023 – Jan 2026',
    highlight: '连续三年 A (Best) 绩效 · Best Newcomer Award',
    points: [
      '担任 AI Enablement Service 讲师，在 HKUST、VTC 等科研机构交付 100+ 小时现场与远程演示，支持客户使用 Ascend 服务器并解决相关问题。',
      '智能计算服务行业团队负责人，担任技术风险评估评审，参与 20+ 智能计算项目交付技术风险 (DTR) 评审，带领 10 人团队能力建设。',
      '负责智能计算集群规划与设计 (LLD)，可独立按客户需求交付智能计算集群。',
      '与售前团队协作重大项目拓展，完成 10+ POC 测试。',
    ],
  },
  {
    role: '研发工程师',
    company: 'Taikang Insurance Group · R&D',
    period: 'Jun 2021 – Aug 2021',
    highlight: 'Tai Homeland 项目',
    points: [
      '基于 Django 开发数据库模块，使用 Requests + Beautiful Soup 抓取财经新闻（标题、作者、时间、正文），提取关键词存入 MySQL。',
      '设计定时爬虫算法，确保新闻在更新后 1 分钟内入库。',
      '使用 TF-IDF 关键词提取算法对文章自动分类。',
      '设计增量缓存方法避免频繁数据库查询，最终信息以 O(n) 一次性入库。',
      '所设计模块最终应用于结果交付。',
    ],
  },
]

export const projects = [
  {
    title: '医疗多模态大模型训练',
    org: 'CAIR · 中科院香港创新院',
    role: 'Technical Director & On Site FAE',
    period: 'Jun 2025 – Present',
    points: [
      '负责计算、存储、网络设备的技审、设计与部署交付。',
      '部署 ModelMate 并按实际需求扩展功能（高权限命令执行、容器 NFS 挂载路径等）。',
      '使用 MindSpeed-MM 与 LLama-Factory 在医疗数据集上训练 Qwen2.5-VL-7B，对比两框架精度差异并定位根因，协助华为研发定位问题。',
      '最终基于 LLama-Factory 训练的医疗多模态模型达到 SOTA 精度，在 Slake、Path-VQA 等多个测试集上超越 Lingshu。',
      '使用 MindCluster 进行集群任务调度。',
    ],
  },
  {
    title: '高危动作识别智能体',
    org: 'CLP Power Hong Kong',
    role: 'AI Engineer',
    period: 'Aug 2025 – Oct 2025',
    points: [
      '带领客户开发图像识别智能体，用于内部识别工人违规操作。使用 YOLO、Qwen2.5-VL-72B/7B、Qwen3-32B 模型，在有限硬件下实现最大吞吐并保持 90% 精度。',
      '系统处理约 5000 路视频流与 10000 路图像流，采用 64k+512 上下文。配置优化后模型最大数据处理能力提升 20%。',
      '新增自愈配置，使模型在数据峰值崩溃时自动恢复，防止业务中断；高负载下降低新请求处理概率防止崩溃。模型崩溃频率从每天 4 次降至平均 5 天 1 次，按期上线。',
    ],
  },
  {
    title: '20P 算力集群运维与 POC 交付',
    org: 'Hong Kong Huawei AiLab',
    role: 'Maintainer & IT Engineer & Instructor',
    period: 'Mar 2024 – Present',
    points: [
      '主导并参与 20P 算力集群的日常维护、权限配置与改造。',
      '按客户需求搭建 POC 环境，进行功能与性能测试优化。使用 MindIE 部署 LLM/LVLM，测试 TTFT、TPOT、最大并发、E2E 时延、最大上下文等基准，并集成客户自研应用。',
      '执行集群训练，迁移模型训练代码，在保证精度的同时引入高性能训练策略缩短训练时间。',
      '提供 openwebUI 接口可视化 LLM 推理结果；使用 ComfyUI 部署 Stable Diffusion 类模型；基于 Dify 结合 embedding 与 rerank 模型构建 RAG。',
      '向客户介绍 NPU 环境使用，可视化界面与技术讲解获内部员工与客户 CEO 高度认可。',
    ],
  },
  {
    title: '无人机配送地址识别',
    org: '与美团合作项目',
    role: 'NLP · 地址实体识别',
    period: 'Jan – Aug 2023',
    points: [
      '从美团数据库收集 20,000+ 真实用户地址数据。',
      '数据预处理：Python 读取 Excel，实现 BIO 实体标注，使用 BERT(中文)、BiLSTM+CRF、RoBERTa、GPT-2/3 训练，LoRA 微调。',
      '调优 batch-size、学习率、LoRA-Rank，训练模型预测实体起止位置。',
      '使用数据增强（调换顺序、修改门牌号与交叉地址）扩充训练数据。',
    ],
  },
  {
    title: 'EEG 病理预测',
    org: '中日友好医院合作项目',
    role: '算法研究',
    period: '2022',
    points: [
      '项目目标提升癫痫等疾病的诊断准确率。',
      '使用小波变换 (WT) 优化基于 Transformer (ViT 及其优化变体) 的 EEG 病理预测算法。',
      '引入频域信息进行降噪与正则化，辅助模型训练。',
      '设计更优函数优化频域提取过程，最终模型较当时最优结果相对提升 4%。',
    ],
  },
]

export const education = [
  {
    school: 'City University of Hong Kong',
    degree: 'MSc Computer Science',
    period: 'Sep 2022 – Oct 2023',
    note: 'cGPA 3.45/4.3 · 课程：Data Engineering, ML, AI, NLP',
  },
  {
    school: 'Beijing University of Chemical Technology',
    degree: 'BSc Computer Science & Technology (实验班)',
    period: 'Sep 2018 – Jun 2022',
    note: '计算机算法与设计 A+ · 数据结构 / C++ / 软件工程 / 计算机网络 / 编译原理',
  },
]

export const achievements = [
  {
    title: '互联网+ 创新创业大赛 · 国家级奖',
    period: '2022',
    note: '5 人团队设计实时虚拟试衣算法，负责 OpenPose 人体特征点提取并组织为 3D 生成模型输入。',
  },
  {
    title: 'ACM-ICPC 河北程序设计竞赛 · 金牌',
    period: '2021',
    note: '三人组队，解决线段树、图论、动态规划类算法题。',
  },
]
