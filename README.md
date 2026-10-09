# Eone Labs (이원 랩스) · Official Website 🌐

> **Digital Product & AI Software Studio**  
> 일상의 마찰을 줄이고 인간의 전문성을 증폭하는 지능형 소프트웨어와 세련된 디지털 도구를 만듭니다.

공식 웹사이트: **[https://eone.one](https://eone.one)** (한국어) · **[https://eone.one/en](https://eone.one/en)** (English)

---

## 📌 개요 (Overview)

**Eone Labs (이원 랩스)**의 공식 랜딩 페이지 및 프로덕트 쇼케이스 웹사이트입니다.  
양산형 AI 래퍼(Wrapper)의 시각적 클리셰(네온 오로라 글로우, 반짝이 아이콘)를 걷어내고, **Awwwards 스타일의 에디토리얼 그리드와 소프트웨어 장인정신(Software Craftsmanship)**을 바탕으로 디자인되었습니다.

---

## ✨ 핵심 기능 (Features)

- **🎨 Awwwards 에디토리얼 디자인**:
  - 단단한 1px 미세 보더 그리드 분할과 균형 잡힌 타이포그래피.
  - 우아한 세리프(*Instrument Serif*), 정밀한 모노스페이스(*JetBrains Mono*), 또렷한 본문(*Pretendard Variable*)의 조화.
- **🌓 듀얼 테마 지원 (Theme Switcher)**:
  - **라이트 테마 (기본)**: 웜 아이보리/페이퍼 화이트(`bg-[#fbfbfa]`) 기반의 지적이고 차분한 갤러리 감성.
  - **다크 테마**: 심도 있는 스튜디오 느와르(`bg-[#0b0c10]`) 감성.
  - 상단 토글러 제공 및 `localStorage` 기반 상태 자동 보존 (화면 깜빡임 없는 인라인 테마 디텍터 탑재).
- **🌐 원클릭 다국어 지원 (i18n)**:
  - 기본 한국어(`/`) 및 글로벌/심사용 영문(`/en`) 완벽 지원.
  - Astro 7의 네이티브 i18n 라우팅과 `translations.ts` 딕셔너리로 관리.
- **🌀 동적 스피너 벡터 브랜딩 (`favicon.svg`)**:
  - 원형 배지 안에서 회전 원심력을 표현하도록 약 -22도 기울어진 소문자 `e`와 오비탈 회전 궤적 라인을 자체 SVG 벡터로 구현.
- **📱 Micro-UI 프로덕트 쇼케이스**:
  - **SamLog (쌤로그)**: 학원·과외 교사를 위한 출결 쾌속 기록 & Anthropic Claude 3.7 맞춤형 학부모 상담 리포트 자동 생성 SaaS.
  - **DoriDays (도리데이즈)**: 한국천문연구원(KASI) 정밀 음력 엔진과 iOS 17+ Dynamic Island(ActivityKit) 지원 기념일 카운터.
- **📰 엔지니어링 블로그 연계**:
  - [`blog.eone.one`](https://blog.eone.one)의 테크 아티클을 *FROM OUR LAB NOTES* 섹션에 에디토리얼 리스트로 연결.

---

## 🛠 기술 스택 (Tech Stack)

| 구분 | 기술 / 라이브러리 |
| :--- | :--- |
| **Framework** | **Astro 7.3+** (Static Site Generation, 빠른 초기 로딩) |
| **Styling** | **Tailwind CSS v4.3+** (`@tailwindcss/vite` 기반 플러그인) |
| **Language** | **TypeScript 5.8+** (Strict mode) |
| **Typography** | Instrument Serif, JetBrains Mono, Pretendard Variable |
| **Package Manager** | **pnpm 12.x** |
| **Deployment / CI** | **Netlify** (Git 푸시 시 자동 정적 빌드 및 배포) |

---

## 📂 프로젝트 구조 (Project Structure)

```text
eone-labs-web/
├── public/
│   └── favicon.svg           # 회전 모멘텀이 적용된 벡터 파비콘
├── src/
│   ├── components/
│   │   ├── BrandLogo.astro   # 스피너 e 벡터 브랜드 로고 컴포넌트
│   │   └── StudioPage.astro  # 에디토리얼 쇼케이스 메인 템플릿
│   ├── i18n/
│   │   └── translations.ts   # 국/영문(KO/EN) 텍스트 딕셔너리
│   ├── layouts/
│   │   └── Layout.astro      # 전역 레이아웃 (SEO 메타, 폰트, 테마 스크립트)
│   ├── pages/
│   │   ├── index.astro       # 한국어 기본 페이지 (/)
│   │   └── en/
│   │       └── index.astro   # 영문 페이지 (/en)
│   └── styles/
│       └── global.css        # Tailwind v4 및 듀얼 테마 CSS 변수
├── astro.config.mjs          # Astro 및 i18n, Tailwind v4 설정
├── netlify.toml              # Netlify 빌드 및 배포 환경 설정
├── package.json
└── tsconfig.json
```

---

## 🚀 로컬 개발 및 실행 (Getting Started)

### 1. 패키지 설치
```bash
pnpm install
```

### 2. 로컬 개발 서버 실행
```bash
pnpm dev
# 브라우저에서 http://localhost:4321 접속
```

### 3. 프로덕션 정적 빌드 테스트
```bash
pnpm build
# dist/ 디렉토리에 정적 HTML/CSS 번들 생성
```

### 4. 로컬 프리뷰
```bash
pnpm preview
```

---

## 🔗 관련 링크 및 프로덕트

- **공식 사이트**: [https://eone.one](https://eone.one)
- **영문 사이트**: [https://eone.one/en](https://eone.one/en)
- **엔지니어링 블로그**: [https://blog.eone.one](https://blog.eone.one)
- **문의 이메일**: [contact@eone.one](mailto:contact@eone.one)

---

© 2026 Eone Labs (이원 랩스). All rights reserved.
