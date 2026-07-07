import { Settings } from "lucide-react";

import { PageSkeleton } from "@/components/layout/page-skeleton";

export default function SettingsPage() {
  return (
    <PageSkeleton
      title="설정"
      description="알림, 언어, 계정 환경 설정을 변경합니다."
      icon={Settings}
    />
  );
}
