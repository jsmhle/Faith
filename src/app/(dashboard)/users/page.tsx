import { Users } from "lucide-react";

import { PageSkeleton } from "@/components/layout/page-skeleton";

export default function UsersPage() {
  return (
    <PageSkeleton
      title="사용자 관리"
      description="사용자 계정, 역할, RBAC 레벨을 관리합니다."
      icon={Users}
    />
  );
}
