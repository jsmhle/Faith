import { notFound } from "next/navigation";

import { MeetingDetailView } from "@/components/meetings/detail/meeting-detail-view";
import {
  getMeetingDetail,
  getMeetingSummary,
  getMeetingTranscript,
} from "@/lib/mock-loader";

export default async function MeetingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const meeting = getMeetingDetail(id);

  if (!meeting) {
    notFound();
  }

  const transcript = getMeetingTranscript(id);
  const summary = getMeetingSummary(id);

  return (
    <MeetingDetailView
      meeting={meeting}
      transcript={transcript}
      summary={summary}
    />
  );
}
