const translations = {
  zh: {
    // 导航栏
    "vision": "愿景",
    "core": "核心",
    "tech": "技术",
    "future": "生态",
    "privacy": "隐私",
    
    // 主标题
    "pageTitle": "ShoeCloud | 云鞋库 - 智能跑鞋管理平台",
    "heroTitle": "重新定义跑鞋管理",
    "heroSubtitle": "从\"碰一碰\"自动同步，到真实可信的评价社区",
    "heroDescription": "ShoeCloud（云鞋库）是一款基于Flutter开发的智能应用。我们通过创新的交互与严谨的技术架构，旨在解决跑者记录跑鞋里程繁琐、装备数据分散的核心痛点，并以此为基础构建一个无广告、纯真实的跑鞋评价生态系统。",
    "devStatus": "核心功能开发进行中",
    "userCoverage": "已覆盖佳明、高驰核心用户",
    
    // 愿景部分
    "visionTitle": "我们解决的真实问题",
    "visionSubtitle": "超过60%的跑者因记录麻烦而放弃追踪跑鞋里程，导致无法科学判断更换时机，增加受伤风险。",
    "currentProblem": "当前困境",
    "problemContent": "跑者的运动数据被困在Garmin、COROS、华为健康等多个\"数据孤岛\"中，与具体的装备（跑鞋）完全割裂。手动记录反人类，导致宝贵的装备磨损数据白白流失。",
    "ourMission": "我们的使命",
    "missionContent": "ShoeCloud 的使命是成为连接 \"运动数据\" 与 \"装备实体\" 的智能桥梁。我们不仅让记录变得无比简单，更让这些聚合起来的数据产生新的价值——为个人提供科学指导，为社区提供真实参考。",
    "researchInsight": "调研洞察：",
    "insightContent": "在70名核心跑者的调研中，81.4% 对ShoeCloud的概念表示高度兴趣；54.29% 的跑者拥有4双以上跑鞋，存在明确的管理需求。",
    
    // 核心功能部分
    "coreTitle": "核心功能架构",
    "coreSubtitle": "一个由简入繁、层层递进的产品体系",
    "layer1": "第一层：自动化数据基石",
    "layer1Content": "一切始于\"碰一碰\"同步。无论是通过NFC芯片还是软件模拟，目标都是让用户以最自然的方式，在跑步结束后更加方便的完成\"本次跑步-这双鞋\"的关联。数据自动从Garmin、COROS等平台同步，里程自动累加。",
    "layer2": "第二层：个人智能管理",
    "layer2Content": "基于准确的里程数据，为每双鞋建立\"电子档案\"。核心功能包括：",
    "feature1": "寿命预测：结合官方数据、用户体重、跑步路面等因素的智能算法模型。",
    "feature2": "成本分析：直观展示\"每公里成本\"，让装备投入一目了然。",
    "feature3": "跑鞋日记：为每一双战靴记录难忘的时刻与赛场回忆。",
    "feature4": "履历报告：生成可视化、可分享的精美报告。",
    "feature5": "更多功能尚待开发...",
    "layer3": "第三层：社区评价生态",
    "layer3Content": "这是ShoeCloud的灵魂。只有当用户真实跑过一定里程（如50公里）后，才能为这双鞋的关键指标（中底反馈、鞋面包裹、大底耐磨等）进行评价。",
    "coreMechanism": "核心机制保障真实：",
    "mechanism1": "防刷机制：评价资格与同步的跑步数据严格绑定。",
    "mechanism2": "标签筛选：评价可按\"跑者体重\"、\"跑者成绩\"、\"足弓类型\"、\"使用场景\"等多维度筛选，实现极致精准的参考。",
    "mechanism3": "无广告环境：打造一个纯粹为跑者服务的决策平台。",
    
    // 技术部分
    "techTitle": "技术实现",
    "techSubtitle": "坚实、现代且合规的技术栈是体验的保障",
    "techFlutter": "Flutter & Dart",
    "techFlutterDesc": "跨平台移动端开发框架，保障iOS/Android双端原生级体验与高性能渲染。",
    "techPython": "Python后端",
    "techPythonDesc": "负责数据处理、API代理、智能预测模型，运行于稳定的云服务器。",
    "techAPI": "官方API集成",
    "techAPIDesc": "已正式申请并集成 Garmin Connect API 与 COROS Open API，覆盖超70%的核心跑者用户，数据同步安全、合规、稳定。其他平台如华为、苹果等，会在后续开发中逐步跟进",
    "techDB": "云数据库",
    "techDBDesc": "采用关系型数据库进行结构化存储，确保用户数据安全与查询效率。",
    "techNote": "技术选型遵循\"稳健第一，效率优先\"的原则，为产品的长期迭代打下坚实基础。",
    
    // 生态部分
    "futureTitle": "生态展望",
    "futureSubtitle": "一个由可信数据驱动的、充满可能性的未来",
    "futureIntro": "ShoeCloud的愿景不止于一个工具。当平台上积累了大量真实、结构化的\"跑鞋-跑步者-环境\"数据后，将自然生长出丰富的生态：",
    "eco1Title": "装备发现",
    "eco1Desc": "\"寻找和我体重、配速相似，且跑过相同马拉松的跑者都在穿什么鞋？\"——更个性化的装备发现体验。",
    "eco2Title": "跑步社群",
    "eco2Desc": "组建属于自己的社群，邀请朋友加入，看看身边的大家都在穿什么跑鞋，看看他又和他的跑鞋发生了什么故事。",
    "eco3Title": "行业洞察",
    "eco3Desc": "匿名化的宏观数据，可为跑鞋制造商、零售商提供真实的市场反馈与产品迭代方向。",
    "conclusionTitle": "我们的道路",
    "conclusionContent": "ShoeCloud将坚定不移地沿着\"解决基础痛点 -> 提供个人价值 -> 构建社区生态\"的路径前进。每一步都力求扎实，每一次迭代都围绕\"真实\"与\"信任\"展开。",
    
    // 页脚
    "footerSlogan": "数据驱动，科学奔跑。",
    "privacyPolicy": "隐私政策",
    "github": "GitHub",
    "contact": "联系",
    "copyright": "© 2025 ShoeCloud Project. 本页面为项目介绍页，产品正在积极开发中。"
  },
  
  en: {
    // 导航栏
    "vision": "Vision",
    "core": "Core",
    "tech": "Technology",
    "future": "Ecosystem",
    "privacy": "Privacy",
    
    // 主标题
    "pageTitle": "ShoeCloud | Smart Running Shoe Management Platform",
    "heroTitle": "Redefining Running Shoe Management",
    "heroSubtitle": "From 'tap-to-sync' automation to authentic community reviews",
    "heroDescription": "ShoeCloud is an intelligent application developed with Flutter. Through innovative interactions and a robust technical architecture, we aim to solve the core pain points of tedious mileage tracking and scattered gear data for runners, building an ad-free, authentic running shoe review ecosystem.",
    "devStatus": "Core Features in Development",
    "userCoverage": "Covering Garmin & COROS Core Users",
    
    // 愿景部分
    "visionTitle": "The Real Problem We Solve",
    "visionSubtitle": "Over 60% of runners abandon shoe mileage tracking due to inconvenience, leading to unscientific replacement timing and increased injury risk.",
    "currentProblem": "Current Challenges",
    "problemContent": "Runners' activity data is trapped in 'data silos' like Garmin, COROS, and Huawei Health, completely disconnected from actual gear (shoes). Manual logging is impractical, causing valuable wear data to be lost.",
    "ourMission": "Our Mission",
    "missionContent": "ShoeCloud's mission is to build an intelligent bridge connecting 'activity data' with 'physical gear'. We not only make tracking effortless but also transform aggregated data into new value—providing personal scientific guidance and authentic community references.",
    "researchInsight": "Research Insight:",
    "insightContent": "In a survey of 70 core runners, 81.4% showed high interest in ShoeCloud; 54.29% own 4+ pairs of running shoes, indicating clear management needs.",
    
    // 核心功能部分
    "coreTitle": "Core Feature Architecture",
    "coreSubtitle": "A layered product system from simple to sophisticated",
    "layer1": "Layer 1: Automated Data Foundation",
    "layer1Content": "It all starts with 'tap-to-sync'. Whether via NFC chips or software simulation, the goal is to let users naturally associate 'this run—this shoe' post-workout. Data syncs automatically from platforms like Garmin and COROS, with mileage auto-accumulated.",
    "layer2": "Layer 2: Personal Smart Management",
    "layer2Content": "Based on accurate mileage data, create a 'digital profile' for each shoe. Core features include:",
    "feature1": "Lifespan Prediction: Smart algorithm models combining official data, user weight, running surface, etc.",
    "feature2": "Cost Analysis: Visual display of 'cost per kilometer' for clear equipment investment insights.",
    "feature3": "Shoe Journal: Record memorable moments and race memories for each pair.",
    "feature4": "Career Report: Generate visual, shareable reports.",
    "feature5": "More features in development...",
    "layer3": "Layer 3: Community Review Ecosystem",
    "layer3Content": "This is the soul of ShoeCloud. Users can only rate key metrics (midsole response, upper fit, outsole durability, etc.) after actually running a certain distance (e.g., 50km) in the shoes.",
    "coreMechanism": "Core Mechanisms Ensure Authenticity:",
    "mechanism1": "Anti-fraud: Review eligibility is strictly tied to synced running data.",
    "mechanism2": "Tag Filtering: Reviews can be filtered by 'runner weight', 'pace', 'arch type', 'usage scenario' for precise reference.",
    "mechanism3": "Ad-Free Environment: Building a pure decision platform for runners.",
    
    // 技术部分
    "techTitle": "Technology Implementation",
    "techSubtitle": "Solid, modern, compliant tech stack ensures experience",
    "techFlutter": "Flutter & Dart",
    "techFlutterDesc": "Cross-platform mobile framework ensuring native-level experience and high-performance rendering on iOS/Android.",
    "techPython": "Python Backend",
    "techPythonDesc": "Handles data processing, API proxying, smart prediction models, running on stable cloud servers.",
    "techAPI": "Official API Integration",
    "techAPIDesc": "Formally applied and integrated Garmin Connect API & COROS Open API, covering over 70% of core runners. Data sync is secure, compliant, stable. Other platforms (Huawei, Apple, etc.) to follow.",
    "techDB": "Cloud Database",
    "techDBDesc": "Relational database for structured storage, ensuring user data security and query efficiency.",
    "techNote": "Technology selection follows 'stability first, efficiency priority' principles, laying solid foundation for long-term iteration.",
    
    // 生态部分
    "futureTitle": "Ecosystem Vision",
    "futureSubtitle": "A future full of possibilities driven by credible data",
    "futureIntro": "ShoeCloud's vision goes beyond a tool. When the platform accumulates vast authentic, structured 'shoe-runner-environment' data, rich ecosystems will naturally emerge:",
    "eco1Title": "Gear Discovery",
    "eco1Desc": "\"What shoes are runners with similar weight, pace, and marathon experience wearing?\"—more personalized gear discovery.",
    "eco2Title": "Running Community",
    "eco2Desc": "Create your own community, invite friends, see what shoes people around you wear, and share stories about their shoes.",
    "eco3Title": "Industry Insights",
    "eco3Desc": "Anonymized macro data can provide authentic market feedback and product iteration directions for shoe manufacturers and retailers.",
    "conclusionTitle": "Our Path Forward",
    "conclusionContent": "ShoeCloud will steadfastly follow the path: 'Solve basic pain points → Provide personal value → Build community ecosystem'. Each step is solid, each iteration revolves around 'authenticity' and 'trust'.",
    
    // 页脚
    "footerSlogan": "Data-driven, Scientific Running.",
    "privacyPolicy": "Privacy Policy",
    "github": "GitHub",
    "contact": "Contact",
    "copyright": "© 2025 ShoeCloud Project. This is a project introduction page; product is actively under development."
  }
};