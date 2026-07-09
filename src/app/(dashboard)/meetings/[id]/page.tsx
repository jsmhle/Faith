import { FileText } from "lucide-react";

import { PageContainer } from "@/components/layout/page-container";

export default async function MeetingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <PageContainer>
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-8 py-16 text-center shadow-sm">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
          <FileText className="h-7 w-7" />
        </div>
        <h2 className="text-lg font-semibold text-slate-900">회의록 상세</h2>
        <p className="mt-2 text-sm text-slate-500">
          회의 ID: <span className="font-mono text-slate-700">{id}</span>
        </p>
        <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
          마스킹 스크립트, AI 요약, 액션 아이템, RBAC UI는 4단계에서
          구현됩니다.
        </p>
      </div>
    </PageContainer>
  );
}
