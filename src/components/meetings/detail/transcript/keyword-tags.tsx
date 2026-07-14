import { Info } from "lucide-react";

interface KeywordTagsProps {
  keywords: string[];
}

export function KeywordTags({ keywords }: KeywordTagsProps) {
  return (
    <div className="space-y-3 border-b border-gray-100 px-5 py-4">
      <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-900">
        주요 키워드
        <Info className="h-3.5 w-3.5 text-gray-300" />
      </div>
      <div className="flex flex-wrap gap-2">
        {keywords.map((keyword) => (
          <span
            key={keyword}
            className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
          >
            {keyword}
          </span>
        ))}
      </div>
      <div className="flex gap-3 text-xs text-gray-400">
        <button type="button" className="hover:text-gray-600">
          단어 변경
        </button>
        <button type="button" className="hover:text-gray-600">
          다운로드
        </button>
        <button type="button" className="hover:text-gray-600">
          링크 공유
        </button>
      </div>
    </div>
  );
}
