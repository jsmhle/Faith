import { LayoutDashboard } from "lucide-react";

import { PageSkeleton } from "@/components/layout/page-skeleton";

export default function DashboardPage() {
  return (
    <PageSkeleton
      title="대시보드"
      description="통계 카드, 오디오 업로드, 보안 현황 패널, 최근 회의 목록이 이 영역에 표시됩니다."
      icon={LayoutDashboard}
    />
  );
}
