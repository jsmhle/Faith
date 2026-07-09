import { ClipboardList } from "lucide-react";

import { PageSkeleton } from "@/components/layout/page-skeleton";

export default function MeetingsPage() {
  return (
    <PageSkeleton
      title="회의 목록"
      description="등록된 회의를 검색하고 필터링하며, 상세 회의록으로 이동할 수 있습니다."
      icon={ClipboardList}
    />
  );
}
