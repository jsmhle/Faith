import { KeywordTags } from "@/components/meetings/detail/transcript/keyword-tags";
import { TranscriptToolbar } from "@/components/meetings/detail/transcript/transcript-toolbar";
import { TranscriptViewer } from "@/components/meetings/detail/transcript/transcript-viewer";
import type { MeetingTranscript } from "@/types/transcript";

interface TranscriptPanelProps {
  transcript: MeetingTranscript;
}

export function TranscriptPanel({ transcript }: TranscriptPanelProps) {
  return (
    <section className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
      <KeywordTags keywords={transcript.keywords} />
      <TranscriptToolbar />
      <div className="min-h-0 flex-1 overflow-y-auto">
        <TranscriptViewer transcript={transcript} />
      </div>
    </section>
  );
}
