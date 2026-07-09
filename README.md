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

### 포트 충돌 (`EADDRINUSE: 3000`) 발생 시

이전에 실행한 dev 서버가 아직 켜져 있을 때 발생합니다.

```bash
npm run dev:stop   # 기존 서버 종료
npm run dev          # 다시 시작
```

## 현재 구현 상태

- [x] 1단계: 공통 레이아웃, 사이드바, 헤더
- [x] 2단계: 대시보드 메인 UI
  - 통계 카드 4개 (스파크라인 포함)
  - 오디오 드래그앤드롭 업로드 + 실시간 녹음 버튼
  - 보안 현황 패널
  - 최근 회의 테이블
- [ ] 3단계: 회의 목록 페이지
- [ ] 4단계: 회의록 상세 페이지 (마스킹, RBAC)

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
