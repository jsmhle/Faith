"use client";

import { AudioPlayerBar } from "@/components/meetings/detail/player/audio-player-bar";
import { MeetingDetailHeader } from "@/components/meetings/detail/meeting-detail-header";
import { SummaryPanel } from "@/components/meetings/detail/summary/summary-panel";
import { TranscriptPanel } from "@/components/meetings/detail/transcript/transcript-panel";
import type {
  MeetingDetailMeta,
  MeetingSummaryData,
  MeetingTranscript,
} from "@/types/transcript";

interface MeetingDetailViewProps {
  meeting: MeetingDetailMeta;
  transcript: MeetingTranscript;
  summary: MeetingSummaryData;
}

export function MeetingDetailView({
  meeting,
  transcript,
  summary,
}: MeetingDetailViewProps) {
  return (
    <div className="flex h-full min-h-0 flex-col bg-white">
      <MeetingDetailHeader meeting={meeting} />

      <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
        <TranscriptPanel transcript={transcript} />
        <SummaryPanel summary={summary} />
      </div>

      <AudioPlayerBar durationSeconds={meeting.durationSeconds} />
    </div>
  );
}
