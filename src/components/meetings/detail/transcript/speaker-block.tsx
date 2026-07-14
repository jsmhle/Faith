import { Bookmark } from "lucide-react";

import { MaskedTextBadge } from "@/components/meetings/detail/security/masked-text-badge";
import { cn } from "@/lib/utils";
import type {
  ContentSegment,
  TranscriptSegment,
  TranscriptSpeaker,
} from "@/types/transcript";

interface SpeakerBlockProps {
  segment: TranscriptSegment;
  speaker: TranscriptSpeaker;
}

function renderContent(content: ContentSegment[]) {
  return content.map((part, index) => {
    if (part.type === "masked") {
      return <MaskedTextBadge key={index} label={part.label} />;
    }

    if (part.type === "highlight") {
      return (
        <mark
          key={index}
          className="rounded-sm bg-lime-100 px-0.5 text-gray-900"
        >
          {part.value}
        </mark>
      );
    }

    return <span key={index}>{part.value}</span>;
  });
}

export function SpeakerBlock({ segment, speaker }: SpeakerBlockProps) {
  return (
    <div className="flex gap-3 px-5 py-4 hover:bg-gray-50/60">
      <div
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold",
          speaker.color,
        )}
      >
        {speaker.name.slice(0, 1)}
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-900">
            {speaker.name}
          </span>
          <span className="text-xs text-gray-400">{segment.timestamp}</span>
          {segment.bookmark ? (
            <Bookmark className="h-3 w-3 fill-amber-400 text-amber-400" />
          ) : null}
        </div>
        <p className="text-sm leading-7 text-gray-700">
          {renderContent(segment.content)}
        </p>
      </div>
    </div>
  );
}
