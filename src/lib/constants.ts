import {
  BarChart3,
  ClipboardList,
  LayoutDashboard,
  ScrollText,
  Settings,
  Shield,
  Users,
} from "lucide-react";

export const APP_NAME = "보안회의록";

export const NAV_ITEMS = [
  {
    title: "대시보드",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "회의 목록",
    href: "/meetings",
    icon: ClipboardList,
    badge: 12,
  },
  {
    title: "분석",
    href: "/analysis",
    icon: BarChart3,
  },
  {
    title: "보안 설정",
    href: "/security",
    icon: Shield,
  },
  {
    title: "감사 로그",
    href: "/audit",
    icon: ScrollText,
  },
  {
    title: "사용자 관리",
    href: "/users",
    icon: Users,
  },
  {
    title: "설정",
    href: "/settings",
    icon: Settings,
  },
] as const;

export const PAGE_TITLES: Record<string, { title: string; description: string }> =
  {
    "/": {
      title: "대시보드",
      description: "회의 현황과 보안 지표를 한눈에 확인하세요.",
    },
    "/meetings": {
      title: "회의 목록",
      description: "등록된 회의를 검색하고 관리합니다.",
    },
    "/analysis": {
      title: "분석",
      description: "회의 데이터와 보안 트렌드를 분석합니다.",
    },
    "/security": {
      title: "보안 설정",
      description: "마스킹, 암호화, RBAC 정책을 구성합니다.",
    },
    "/audit": {
      title: "감사 로그",
      description: "시스템 접근 및 보안 이벤트 기록을 조회합니다.",
    },
    "/users": {
      title: "사용자 관리",
      description: "사용자 계정과 권한 레벨을 관리합니다.",
    },
    "/settings": {
      title: "설정",
      description: "알림, 언어, 계정 환경을 설정합니다.",
    },
  };
