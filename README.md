# 보안회의록 (Secure Meeting Minutes)

보안 및 접근 제어 기능이 내재된 AI 기반 회의록 자동화 웹 플랫폼 프론트엔드입니다.

## 기술 스택

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 + shadcn/ui 스타일 컴포넌트
- **Icons:** Lucide React
- **Charts:** Recharts (2단계 이후)

## 시작하기

```bash
npm install
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.

## 현재 구현 상태 (1단계)

- [x] 프로젝트 초기화
- [x] 공통 레이아웃 (다크 사이드바 + 상단 헤더)
- [x] 네비게이션 메뉴 (7개 라우트)
- [x] 더미 사용자 프로필 (김철수 / 보안 관리자)
- [ ] 대시보드 메인 UI (2단계)
- [ ] 회의록 상세 페이지 (4단계)

## 프로젝트 구조

```
src/
├── app/(dashboard)/     # 레이아웃이 적용된 페이지들
├── components/
│   ├── layout/          # Sidebar, Header, PageSkeleton
│   └── ui/              # shadcn/ui 컴포넌트
├── context/             # 전역 상태 (현재 사용자)
├── lib/                 # 유틸, 상수
├── mocks/               # 더미 데이터
└── types/               # TypeScript 타입
```
