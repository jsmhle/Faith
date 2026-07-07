import { Shield } from "lucide-react";

import { PageSkeleton } from "@/components/layout/page-skeleton";

export default function SecurityPage() {
  return (
    <PageSkeleton
      title="보안 설정"
      description="개인정보 마스킹, 암호화, RBAC 정책을 구성하고 관리합니다."
      icon={Shield}
    />
  );
}
