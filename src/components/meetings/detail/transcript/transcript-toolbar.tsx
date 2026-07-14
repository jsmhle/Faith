import { Copy, Pencil } from "lucide-react";

export function TranscriptToolbar() {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3">
      <h3 className="text-sm font-semibold text-gray-900">음성 기록</h3>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-gray-500 hover:bg-gray-50 hover:text-gray-700"
        >
          <Pencil className="h-3 w-3" />
          편집
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-gray-500 hover:bg-gray-50 hover:text-gray-700"
        >
          <Copy className="h-3 w-3" />
          복사
        </button>
      </div>
    </div>
  );
}
