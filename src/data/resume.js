// 简历数据 — 所有文案均为 { zh, en } 双语结构
export const profile = {
  name: { zh: '赵云琦', en: 'ZHAO Yunqi' },
  nameEn: 'ZHAO Yunqi',
  title: { zh: 'AI 解决方案架构师', en: 'AI Solutions Architect' },
  tagline: {
    zh: 'Ascend 生态 · 端到端 AI 基础设施交付',
    en: 'Ascend Ecosystem · End-to-End AI Infrastructure Delivery',
  },
  avatar: '云',
  location: { zh: '中国 · 香港', en: 'Hong Kong, CN' },
  email: 'zhaoyunqi9901@gmail.com',
  phone: '(852) 6587-2578',
  linkedin: 'linkedin.com/in/yunqi-zhao-513479274',
  linkedinUrl: 'https://linkedin.com/in/yunqi-zhao-513479274',
  github: 'github.com/yzjs99',
  githubUrl: 'https://github.com/yzjs99',
  status: { zh: '期待新机会', en: 'Open to opportunities' },
}

export const skills = [
  { label: { zh: '硬件', en: 'Hardware' }, items: ['Ascend 910B/310', 'CANN', 'ATC', 'OM/ONNX', 'AscendC'] },
  { label: { zh: '训练', en: 'Training' }, items: ['MindSpeed', 'DeepSpeed', 'Megatron-LM', 'LoRA/QLoRA', 'Distillation'] },
  { label: { zh: '推理', en: 'Inference' }, items: ['MindIE', 'vLLM', 'SGLang', 'Ollama', 'OpenWebUI'] },
  { label: { zh: 'MLOps', en: 'MLOps' }, items: ['Kubernetes', 'Docker', 'NFS', 'conda', 'Git'] },
  { label: { zh: '框架', en: 'Frameworks' }, items: ['PyTorch', 'Transformers', 'LLama-Factory', 'ms-swift', 'Dify', 'ComfyUI'] },
  { label: { zh: '语言', en: 'Languages' }, items: ['Python', 'C/C++', 'SQL', 'LaTeX', 'Shell'] },
]

export const workExperience = [
  {
    role: { zh: 'Ascend FAE & 智能计算团队负责人', en: 'Ascend FAE & Intelligent Computing Team Lead' },
    company: { zh: '华为国际（香港）', en: 'Huawei International (Hong Kong)' },
    period: 'Feb 2023 – Jan 2026',
    highlight: {
      zh: '连续三年 A (Best) 绩效 · Best Newcomer Award',
      en: '3 consecutive years of A (Best) performance · Best Newcomer Award',
    },
    points: [
      {
        zh: '担任 AI Enablement Service 讲师，在 HKUST、VTC 等科研机构交付 100+ 小时现场与远程演示，支持客户使用 Ascend 服务器并解决相关问题。',
        en: 'Served as an AI Enablement Service instructor, delivering 100+ hours of on-site and remote demos at HKUST, VTC and other research institutions, supporting customers with Ascend servers and resolving related issues.',
      },
      {
        zh: '智能计算服务行业团队负责人，担任技术风险评估评审，参与 20+ 智能计算项目交付技术风险 (DTR) 评审，带领 10 人团队能力建设。',
        en: 'Led the Intelligent Computing industry team as a technical risk assessment reviewer, participated in DTR reviews for 20+ intelligent computing project deliveries, and drove capability building for a 10-person team.',
      },
      {
        zh: '负责智能计算集群规划与设计 (LLD)，可独立按客户需求交付智能计算集群。',
        en: 'Owned LLD planning and design of intelligent computing clusters, independently delivering clusters tailored to customer requirements.',
      },
      {
        zh: '与售前团队协作重大项目拓展，完成 10+ POC 测试。',
        en: 'Collaborated with pre-sales teams on major project expansion, completing 10+ POC tests.',
      },
    ],
  },
  {
    role: { zh: '研发工程师', en: 'R&D Engineer' },
    company: { zh: '泰康保险集团 · 研发部', en: 'Taikang Insurance Group · R&D' },
    period: 'Jun 2021 – Aug 2021',
    highlight: { zh: 'Tai Homeland 项目', en: 'Tai Homeland Project' },
    points: [
      {
        zh: '基于 Django 开发数据库模块，使用 Requests + Beautiful Soup 抓取财经新闻（标题、作者、时间、正文），提取关键词存入 MySQL。',
        en: 'Built a database module with Django; used Requests + Beautiful Soup to scrape financial news (title, author, time, body) and extract keywords into MySQL.',
      },
      {
        zh: '设计定时爬虫算法，确保新闻在更新后 1 分钟内入库。',
        en: 'Designed a scheduled crawler algorithm ensuring news is ingested within 1 minute of publication.',
      },
      {
        zh: '使用 TF-IDF 关键词提取算法对文章自动分类。',
        en: 'Automatically classified articles using TF-IDF keyword extraction.',
      },
      {
        zh: '设计增量缓存方法避免频繁数据库查询，最终信息以 O(n) 一次性入库。',
        en: 'Designed an incremental caching scheme to avoid frequent DB queries; final ingestion runs in O(n) in a single pass.',
      },
      {
        zh: '所设计模块最终应用于结果交付。',
        en: 'The designed module was ultimately used in the final deliverable.',
      },
    ],
  },
]

export const projects = [
  {
    title: { zh: '医疗多模态大模型训练', en: 'Medical Multimodal LLM Training' },
    org: { zh: 'CAIR · 中科院香港创新院', en: 'CAIR · HK Innovation Institute, CAS' },
    role: { zh: '技术总监 & 驻场 FAE', en: 'Technical Director & On-Site FAE' },
    period: 'Jun 2025 – Present',
    points: [
      {
        zh: '负责计算、存储、网络设备的技审、设计与部署交付。',
        en: 'Owned technical review, design and deployment delivery of compute, storage and network equipment.',
      },
      {
        zh: '部署 ModelMate 并按实际需求扩展功能（高权限命令执行、容器 NFS 挂载路径等）。',
        en: 'Deployed ModelMate and extended it per real needs (privileged command execution, container NFS mount paths, etc.).',
      },
      {
        zh: '使用 MindSpeed-MM 与 LLama-Factory 在医疗数据集上训练 Qwen2.5-VL-7B，对比两框架精度差异并定位根因，协助华为研发定位问题。',
        en: 'Trained Qwen2.5-VL-7B on medical datasets with MindSpeed-MM and LLama-Factory, compared accuracy gaps between the two frameworks and pinpointed the root cause, assisting Huawei R&D in diagnosis.',
      },
      {
        zh: '最终基于 LLama-Factory 训练的医疗多模态模型达到 SOTA 精度，在 Slake、Path-VQA 等多个测试集上超越 Lingshu。',
        en: 'The final medical multimodal model trained with LLama-Factory reached SOTA accuracy, surpassing Lingshu on multiple benchmarks including Slake and Path-VQA.',
      },
      {
        zh: '使用 MindCluster 进行集群任务调度。',
        en: 'Used MindCluster for cluster task scheduling.',
      },
    ],
  },
  {
    title: { zh: '高危动作识别智能体', en: 'High-Risk Action Recognition Agent' },
    org: { zh: '中电控股（CLP）香港', en: 'CLP Power Hong Kong' },
    role: { zh: 'AI 工程师', en: 'AI Engineer' },
    period: 'Aug 2025 – Oct 2025',
    points: [
      {
        zh: '带领客户开发图像识别智能体，用于内部识别工人违规操作。使用 YOLO、Qwen2.5-VL-72B/7B、Qwen3-32B 模型，在有限硬件下实现最大吞吐并保持 90% 精度。',
        en: 'Led the customer in building an image-recognition agent to detect worker safety violations internally. Used YOLO, Qwen2.5-VL-72B/7B and Qwen3-32B to maximize throughput on limited hardware while holding 90% accuracy.',
      },
      {
        zh: '系统处理约 5000 路视频流与 10000 路图像流，采用 64k+512 上下文。配置优化后模型最大数据处理能力提升 20%。',
        en: 'The system processed ~5,000 video streams and 10,000 image streams with a 64k+512 context. After configuration tuning, peak data-processing capacity improved by 20%.',
      },
      {
        zh: '新增自愈配置，使模型在数据峰值崩溃时自动恢复，防止业务中断；高负载下降低新请求处理概率防止崩溃。模型崩溃频率从每天 4 次降至平均 5 天 1 次，按期上线。',
        en: 'Added self-healing configuration so the model auto-recovers from peak-data crashes, preventing business interruption; under high load, new-request admission is throttled to avoid crashes. Crash frequency dropped from 4/day to ~1/5 days, and the system launched on schedule.',
      },
    ],
  },
  {
    title: { zh: '20P 算力集群运维与 POC 交付', en: '20P Compute Cluster Ops & POC Delivery' },
    org: { zh: '华为 AiLab（香港）', en: 'Huawei AiLab (Hong Kong)' },
    role: { zh: '维护者 & IT 工程师 & 讲师', en: 'Maintainer & IT Engineer & Instructor' },
    period: 'Mar 2024 – Present',
    points: [
      {
        zh: '主导并参与 20P 算力集群的日常维护、权限配置与改造。',
        en: 'Led and participated in daily maintenance, permission configuration and upgrades of the 20P compute cluster.',
      },
      {
        zh: '按客户需求搭建 POC 环境，进行功能与性能测试优化。使用 MindIE 部署 LLM/LVLM，测试 TTFT、TPOT、最大并发、E2E 时延、最大上下文等基准，并集成客户自研应用。',
        en: 'Built POC environments per customer needs with functional and performance tuning. Deployed LLM/LVLM via MindIE, benchmarking TTFT, TPOT, max concurrency, E2E latency and max context, and integrated customer-built applications.',
      },
      {
        zh: '执行集群训练，迁移模型训练代码，在保证精度的同时引入高性能训练策略缩短训练时间。',
        en: 'Ran cluster training and migrated model training code, introducing high-performance training strategies to shorten training time while preserving accuracy.',
      },
      {
        zh: '提供 openwebUI 接口可视化 LLM 推理结果；使用 ComfyUI 部署 Stable Diffusion 类模型；基于 Dify 结合 embedding 与 rerank 模型构建 RAG。',
        en: 'Provided openwebUI for visualizing LLM inference; deployed Stable Diffusion-class models with ComfyUI; built RAG on Dify with embedding and rerank models.',
      },
      {
        zh: '向客户介绍 NPU 环境使用，可视化界面与技术讲解获内部员工与客户 CEO 高度认可。',
        en: 'Onboarded customers on NPU environments; the visual demos and technical walkthroughs were highly praised by internal staff and the customer CEO.',
      },
    ],
  },
  {
    title: { zh: '无人机配送地址识别', en: 'Drone Delivery Address Recognition' },
    org: { zh: '与美团合作项目', en: 'Joint project with Meituan' },
    role: { zh: 'NLP · 地址实体识别', en: 'NLP · Address Entity Recognition' },
    period: 'Jan – Aug 2023',
    points: [
      {
        zh: '从美团数据库收集 20,000+ 真实用户地址数据。',
        en: 'Collected 20,000+ real user address records from Meituan databases.',
      },
      {
        zh: '数据预处理：Python 读取 Excel，实现 BIO 实体标注，使用 BERT(中文)、BiLSTM+CRF、RoBERTa、GPT-2/3 训练，LoRA 微调。',
        en: 'Data preprocessing: Python + Excel ingestion, BIO entity annotation, training with BERT (Chinese), BiLSTM+CRF, RoBERTa and GPT-2/3, with LoRA fine-tuning.',
      },
      {
        zh: '调优 batch-size、学习率、LoRA-Rank，训练模型预测实体起止位置。',
        en: 'Tuned batch size, learning rate and LoRA rank to train models predicting entity start/end positions.',
      },
      {
        zh: '使用数据增强（调换顺序、修改门牌号与交叉地址）扩充训练数据。',
        en: 'Augmented training data via reordering, house-number and cross-address mutations.',
      },
    ],
  },
  {
    title: { zh: 'EEG 病理预测', en: 'EEG Pathology Prediction' },
    org: { zh: '中日友好医院合作项目', en: 'Joint project with China-Japan Friendship Hospital' },
    role: { zh: '算法研究', en: 'Algorithm Research' },
    period: '2022',
    points: [
      {
        zh: '项目目标提升癫痫等疾病的诊断准确率。',
        en: 'Aimed to improve diagnostic accuracy for epilepsy and related conditions.',
      },
      {
        zh: '使用小波变换 (WT) 优化基于 Transformer (ViT 及其优化变体) 的 EEG 病理预测算法。',
        en: 'Optimized Transformer-based (ViT and optimized variants) EEG pathology prediction with wavelet transforms (WT).',
      },
      {
        zh: '引入频域信息进行降噪与正则化，辅助模型训练。',
        en: 'Introduced frequency-domain information for denoising and regularization to assist model training.',
      },
      {
        zh: '设计更优函数优化频域提取过程，最终模型较当时最优结果相对提升 4%。',
        en: 'Designed a better function to optimize frequency-domain extraction; the final model achieved a 4% relative improvement over the then-best result.',
      },
    ],
  },
]

export const education = [
  {
    school: { zh: '香港城市大学', en: 'City University of Hong Kong' },
    degree: { zh: '计算机科学硕士', en: 'MSc Computer Science' },
    period: 'Sep 2022 – Oct 2023',
    note: {
      zh: 'cGPA 3.45/4.3 · 课程：Data Engineering, ML, AI, NLP',
      en: 'cGPA 3.45/4.3 · Courses: Data Engineering, ML, AI, NLP',
    },
  },
  {
    school: { zh: '北京化工大学', en: 'Beijing University of Chemical Technology' },
    degree: { zh: '计算机科学与技术学士（实验班）', en: 'BSc Computer Science & Technology (Experimental Class)' },
    period: 'Sep 2018 – Jun 2022',
    note: {
      zh: '计算机算法与设计 A+ · 数据结构 / C++ / 软件工程 / 计算机网络 / 编译原理',
      en: 'Algorithms & Design A+ · Data Structures / C++ / Software Engineering / Computer Networks / Compilers',
    },
  },
]

export const achievements = [
  {
    title: { zh: '互联网+ 创新创业大赛 · 国家级奖', en: 'Internet+ Innovation & Entrepreneurship Competition · National Award' },
    period: '2022',
    note: {
      zh: '5 人团队设计实时虚拟试衣算法，负责 OpenPose 人体特征点提取并组织为 3D 生成模型输入。',
      en: 'A 5-person team designed a real-time virtual try-on algorithm; responsible for OpenPose body landmark extraction and organizing inputs for the 3D generation model.',
    },
  },
  {
    title: { zh: 'ACM-ICPC 河北程序设计竞赛 · 金牌', en: 'ACM-ICPC Hebei Programming Contest · Gold Medal' },
    period: '2021',
    note: {
      zh: '三人组队，解决线段树、图论、动态规划类算法题。',
      en: 'A 3-person team solving segment-tree, graph-theory and dynamic-programming problems.',
    },
  },
]
