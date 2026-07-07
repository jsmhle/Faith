import { BarChart3 } from "lucide-react";

import { PageSkeleton } from "@/components/layout/page-skeleton";

export default function AnalysisPage() {
  return (
    <PageSkeleton
      title="분석"
      description="Recharts 기반 차트로 회의 트렌드와 보안 지표를 시각화합니다."
      icon={BarChart3}
    />
  );
}
