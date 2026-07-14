export type ContentSegment =
  | { type: "text"; value: string }
  | { type: "masked"; label?: string }
  | { type: "highlight"; value: string };

export interface TranscriptSpeaker {
  id: string;
  name: string;
  role: string;
  icon: "representative" | "user" | "guest";
  color: string;
}

export interface TranscriptSegment {
  id: string;
  speakerId: string;
  timestamp: string;
  content: ContentSegment[];
  bookmark?: boolean;
}

export interface MeetingTranscript {
  meetingId: string;
  keywords: string[];
  speakers: TranscriptSpeaker[];
  segments: TranscriptSegment[];
  durationSeconds: number;
}

export interface ActionItem {
  id: string;
  text: string;
  assignee: string;
  done: boolean;
  requiredRbacLevel: number;
}

export interface SegmentSummary {
  id: string;
  timeRange: string;
  title: string;
  points: string[];
}

export interface MeetingSummaryData {
  meetingId: string;
  topics: string[];
  actionItems: ActionItem[];
  segmentSummaries: SegmentSummary[];
}

export interface MeetingDetailMeta {
  id: string;
  title: string;
  category: string;
  date: string;
  duration: string;
  durationSeconds: number;
}
