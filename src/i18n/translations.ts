export type Locale = 'ko' | 'en';

export const translations = {
  ko: {
    meta: {
      title: "이원 랩스 (Eone Labs) — 디지털 프로덕트 & AI 스튜디오",
      description: "일상의 마찰을 줄이고 인간의 전문성을 증폭하는 지능형 소프트웨어와 세련된 디지털 도구를 만듭니다.",
    },
    nav: {
      works: "프로덕트",
      about: "철학",
      notes: "랩 노트 (블로그)",
      contact: "문의",
      themeLight: "라이트",
      themeDark: "다크",
    },
    hero: {
      badgeLocation: "SEOUL, KOREA",
      badgeType: "DIGITAL PRODUCT & AI STUDIO",
      badgeYear: "EST. 2026",
      headlineItalic: "기술의 지능과",
      headlineMain: "인간의 감각을 잇다.",
      subheadline: "이원 랩스(Eone Labs)는 인공지능과 마이크로 SaaS, 세련된 인터페이스가 만나는 지점에서 일상의 생산성을 높이는 도구를 만듭니다.",
      statusText: "현재 2개 프로덕트 파이프라인 개발 진행 중",
      ctaWorks: "프로덕트 살펴보기",
      ctaContact: "문의하기",
    },
    works: {
      eyebrow: "FEATURED WORKS (02)",
      title: "엄선된 프로덕트",
      description: "소프트웨어 장인정신과 실체 있는 효용을 중심으로 설계된 이원 랩스의 프로젝트입니다.",
      samlog: {
        index: "01",
        category: "EDTECH · AI SAAS · PRODUCTIVITY",
        title: "SamLog (쌤로그)",
        tagline: "학원 강사와 튜터를 위한 초경량 학생 관리 및 AI 평가 보조 SaaS",
        problemSolution: "수업 후 흩어진 출결과 과제 데이터를 3분 만에 모바일로 기록하고, Anthropic Claude API의 맥락 추론 능력을 결합해 맞춤형 학부모 상담 메시지와 이탈 위험 신호(Risk Signals)를 자동 생성합니다.",
        tags: ["Next.js 16", "Supabase", "Claude Sonnet API", "PWA"],
        status: "클로즈드 베타 준비 중",
        actionText: "프로젝트 소개",
        ui: {
          badge: "오늘의 수업 대시보드",
          student1Name: "김민서",
          student1Status: "출석 · 과제 완료",
          student2Name: "이도윤",
          student2Status: "지각 15분 · 보충 필요",
          aiBoxTitle: "Claude AI 학부모 상담 초안 생성",
          aiBoxContent: "“어머님, 오늘 도윤이가 삼각비 응용 단원에서 막혔지만 15분 개별 클리닉 후 오답을 스스로 완벽히 정리했습니다. 주말 복습 과제 3문항 챙겨주시면 큰 도움이 됩니다.”",
          aiBoxMeta: "Claude 3.7 Sonnet · 한국어 뉘앙스 최적화",
        }
      },
      doridays: {
        index: "02",
        category: "APPLE ECOSYSTEM · UTILITY · DESIGN",
        title: "DoriDays (도리데이즈)",
        tagline: "한국천문연구원 정밀 음력 엔진 탑재 기념일 카운터",
        problemSolution: "중국식 변환의 오차를 벗어나 한국천문연구원(KASI) 정밀 데이터를 내장한 한국형 음양력 변환 엔진. iOS 17+ Dynamic Island(ActivityKit), 잠금화면 위젯, SwiftData-CloudKit을 완벽 지원합니다.",
        tags: ["SwiftUI", "SwiftData", "ActivityKit", "WidgetKit"],
        status: "iOS / macOS 출시 준비 중",
        actionText: "출시 알림 받기",
        ui: {
          badge: "Live Activity / Dynamic Island",
          eventTitle: "추석 (한가위) D-14",
          eventSub: "음력 8월 15일 · KASI 오프라인 정밀 계산",
          countdownText: "14일 08시간 남음",
          mascotNotice: "마스코트 '도리'의 대화형 알림 활성화",
        }
      }
    },
    about: {
      eyebrow: "STUDIO PHILOSOPHY",
      title: "우리가 소프트웨어를 만드는 원칙",
      lead: "기술의 화려함보다 실체 있는 효용(Utility)을, 모호한 AI 환상보다 사용자의 시간과 존엄을 우선합니다.",
      principles: [
        {
          num: "01",
          title: "실체 있는 효용 (Utility First)",
          desc: "‘마법 같은 혁신’이라는 말 대신, 사용자가 매일 겪는 귀찮은 3분의 과정을 실제로 덜어주는 명확한 도구를 만듭니다."
        },
        {
          num: "02",
          title: "인간의 감각 증폭 (Cognitive Harmony)",
          desc: "AI는 사람을 대체하는 기계가 아니라, 사용자의 전문성과 인간적인 따뜻함을 더 빛나게 돕는 지능형 조수가 되어야 합니다."
        },
        {
          num: "03",
          title: "타협 없는 완성도 (Obsessive Polish)",
          desc: "1픽셀의 그리드 여백부터 데이터베이스 동기화 지연 시간까지, 오랫동안 손에 쥐고 쓰고 싶은 소프트웨어의 감촉을 빚어냅니다."
        }
      ]
    },
    blog: {
      eyebrow: "FROM OUR LAB NOTES",
      title: "엔지니어링 & 테크 인사이트",
      description: "제품을 설계하고 기술을 탐구하며 얻은 기록들을 공유합니다.",
      viewAll: "모든 글 읽기 (blog.eone.one)",
      articles: [
        {
          title: "Claude Fable 5 vs GPT-5.6 vs Kimi K3 코딩 에이전트 실전 비교",
          category: "AI / Dev",
          date: "2026.09",
          url: "https://blog.eone.one/dev",
        },
        {
          title: "애플 TV+ 사일로(Silo) 완전 가이드와 SF 아키텍처 세계관",
          category: "Culture",
          date: "2026.08",
          url: "https://blog.eone.one/culture",
        },
        {
          title: "Astro와 Tailwind v4를 활용한 초고속 콘텐츠 웹사이트 구축기",
          category: "Web / Tools",
          date: "2026.08",
          url: "https://blog.eone.one/tools",
        }
      ]
    },
    footer: {
      callout: "새로운 프로젝트를 함께 이야기해 보세요.",
      email: "contact@eone.one",
      location: "Seoul, South Korea",
      rights: "© 2026 Eone Labs (이원 랩스). All rights reserved.",
      colophon: "Designed in Seoul · Powered by Astro & Tailwind CSS v4",
    }
  },
  en: {
    meta: {
      title: "Eone Labs — Digital Product & AI Studio",
      description: "Independent software studio crafting intelligent tools, micro-SaaS, and refined digital experiences.",
    },
    nav: {
      works: "Works",
      about: "Philosophy",
      notes: "Lab Notes (Blog)",
      contact: "Contact",
      themeLight: "Light",
      themeDark: "Dark",
    },
    hero: {
      badgeLocation: "SEOUL, KOREA",
      badgeType: "DIGITAL PRODUCT & AI STUDIO",
      badgeYear: "EST. 2026",
      headlineItalic: "Intelligence meets",
      headlineMain: "human craft.",
      subheadline: "Eone Labs is an independent software studio building intelligent micro-SaaS and refined digital tools designed to remove friction from everyday workflows.",
      statusText: "2 Active Products in Development Pipeline",
      ctaWorks: "Explore Works",
      ctaContact: "Get in Touch",
    },
    works: {
      eyebrow: "FEATURED WORKS (02)",
      title: "Selected Products",
      description: "Engineered with software craftsmanship, genuine utility, and respectful AI integration.",
      samlog: {
        index: "01",
        category: "EDTECH · AI SAAS · PRODUCTIVITY",
        title: "SamLog",
        tagline: "AI-Powered Student Progress & Parent Communication SaaS for Educators",
        problemSolution: "Educators spend exhausting hours turning fragmented daily logs into professional parent feedback. SamLog captures attendance and assignments in under 3 minutes via mobile, then utilizes Anthropic Claude API to synthesize nuanced, empathetic parent consultation drafts and retention risk signals.",
        tags: ["Next.js 16", "Supabase", "Claude Sonnet API", "PWA"],
        status: "In Private Beta Pipeline",
        actionText: "View Documentation",
        ui: {
          badge: "Today's Class Dashboard",
          student1Name: "Minseo Kim",
          student1Status: "Present · HW Complete",
          student2Name: "Doyoon Lee",
          student2Status: "Late 15m · Review Needed",
          aiBoxTitle: "Claude AI Parent Consultation Draft",
          aiBoxContent: "“Good evening. Today Doyoon had difficulty with trigonometry applications, but after a 15-minute 1-on-1 clinic, he solved the review problems independently. Reinforcing the 3 weekend practice questions will help lock in his progress.”",
          aiBoxMeta: "Claude 3.7 Sonnet · Nuanced Korean Tone Synthesis",
        }
      },
      doridays: {
        index: "02",
        category: "APPLE ECOSYSTEM · UTILITY · DESIGN",
        title: "DoriDays",
        tagline: "Precision Lunar Calendar & Milestone Tracker for Apple Ecosystem",
        problemSolution: "Surpassing inaccurate approximations with an offline lunar conversion engine based on Korea Astronomy and Space Science Institute (KASI) astronomical data (1900–2100). Flawlessly integrates with iOS 17+ Dynamic Island (ActivityKit), Lock Screen Widgets, and CloudKit multi-device sync.",
        tags: ["SwiftUI", "SwiftData", "ActivityKit", "WidgetKit"],
        status: "Coming to iOS & macOS",
        actionText: "Get Launch Notification",
        ui: {
          badge: "Live Activity / Dynamic Island",
          eventTitle: "Harvest Moon (Chuseok) D-14",
          eventSub: "Lunar Aug 15 · KASI Offline Astronomical Precision",
          countdownText: "14d 08h remaining",
          mascotNotice: "Interactive Mascot 'Dori' Dynamic Prompt Active",
        }
      }
    },
    about: {
      eyebrow: "STUDIO PHILOSOPHY",
      title: "Principles Behind Our Software",
      lead: "We prioritize genuine utility over technological hype, and human dignity over vague AI hallucinations.",
      principles: [
        {
          num: "01",
          title: "Utility First",
          desc: "Instead of claiming 'magical disruption', we focus on eliminating the tedious 3-minute chores our users face every single day."
        },
        {
          num: "02",
          title: "Cognitive Harmony",
          desc: "AI is not meant to replace humans, but to serve as an intelligent amplifier for human empathy, expertise, and precision."
        },
        {
          num: "03",
          title: "Obsessive Polish",
          desc: "From 1-pixel grid alignments to database query latency, we craft software meant to feel delightful and reliable for years."
        }
      ]
    },
    blog: {
      eyebrow: "FROM OUR LAB NOTES",
      title: "Engineering & Tech Insights",
      description: "Observations, benchmarks, and architectural notes from our daily builds.",
      viewAll: "Read All Notes (blog.eone.one)",
      articles: [
        {
          title: "Claude Fable 5 vs GPT-5.6 vs Kimi K3: Coding Agent Benchmark",
          category: "AI / Dev",
          date: "2026.09",
          url: "https://blog.eone.one/dev",
        },
        {
          title: "Apple TV+ Silo Complete Worldbuilding & Architecture Guide",
          category: "Culture",
          date: "2026.08",
          url: "https://blog.eone.one/culture",
        },
        {
          title: "High-Speed Static Architecture with Astro and Tailwind v4",
          category: "Web / Tools",
          date: "2026.08",
          url: "https://blog.eone.one/tools",
        }
      ]
    },
    footer: {
      callout: "Let's build something enduring together.",
      email: "contact@eone.one",
      location: "Seoul, South Korea",
      rights: "© 2026 Eone Labs. All rights reserved.",
      colophon: "Designed in Seoul · Powered by Astro & Tailwind CSS v4",
    }
  }
};
