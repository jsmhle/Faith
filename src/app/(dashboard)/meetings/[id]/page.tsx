export default async function MeetingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-white px-8 py-16 text-center">
      <p className="text-sm font-medium text-gray-400">회의 ID: {id}</p>
      <h2 className="mt-2 text-lg font-semibold text-gray-900">
        클로바노트 스타일 회의록 상세
      </h2>
      <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
        라이트 테마 전환이 완료되었습니다. 아래 컴포넌트 구조 승인 후 본문
        UI(음성 기록, 요약 아코디언, 플레이어, 마스킹/RBAC)를 구현합니다.
      </p>
    </div>
  );
}
