import type { LucideIcon } from "lucide-react";

import { PageContainer } from "@/components/layout/page-container";

interface PageSkeletonProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function PageSkeleton({
  title,
  description,
  icon: Icon,
}: PageSkeletonProps) {
  return (
    <PageContainer>
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-8 py-16 text-center shadow-sm">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
          <Icon className="h-7 w-7" />
        </div>
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
          {description}
        </p>
        <p className="mt-6 rounded-full bg-slate-100 px-4 py-1.5 text-xs font-medium text-slate-600">
          2단계에서 상세 UI가 구현됩니다
        </p>
      </div>
    </PageContainer>
  );
}
