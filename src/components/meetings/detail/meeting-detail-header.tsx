import {
  ChevronDown,
  Download,
  MoreVertical,
  Search,
  Share2,
} from "lucide-react";

import type { MeetingDetailMeta } from "@/types/transcript";

interface MeetingDetailHeaderProps {
  meeting: MeetingDetailMeta;
}

function formatMetaDate(dateString: string) {
  return new Intl.DateTimeFormat("ko-KR", {
    month: "long",
    day: "numeric",
    weekday: "short",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(dateString));
}

export function MeetingDetailHeader({ meeting }: MeetingDetailHeaderProps) {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between gap-4 border-b border-gray-200 bg-white px-5">
      <div className="min-w-0">
        <button
          type="button"
          className="flex items-center gap-1 text-base font-semibold text-gray-900 hover:text-gray-700"
        >
          <span className="truncate">{meeting.title}</span>
          <ChevronDown className="h-4 w-4 shrink-0 text-gray-400" />
        </button>
        <p className="truncate text-xs text-gray-400">
          {meeting.category} · {formatMetaDate(meeting.date)} ·{" "}
          {meeting.duration}
        </p>
      </div>

      <div className="flex items-center gap-1">
        {[Share2, Search, Download, MoreVertical].map((Icon, index) => (
          <button
            key={index}
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-400 hover:bg-gray-50 hover:text-gray-600"
          >
            <Icon className="h-4 w-4" />
          </button>
        ))}
      </div>
    </header>
  );
}
