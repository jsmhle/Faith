import { ScrollText } from "lucide-react";

import { PageSkeleton } from "@/components/layout/page-skeleton";

export default function AuditPage() {
  return (
    <PageSkeleton
      title="감사 로그"
      description="시스템 접근 기록과 보안 이벤트를 시간순으로 조회합니다."
      icon={ScrollText}
    />
  );
}
