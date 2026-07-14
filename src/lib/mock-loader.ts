import dashboardStatsData from "@/mocks/dashboard-stats.json";
import meetingDetailData from "@/mocks/meeting-detail.json";
import meetingSummaryData from "@/mocks/meeting-summary.json";
import meetingsData from "@/mocks/meetings.json";
import securityMetricsData from "@/mocks/security-metrics.json";
import transcriptsData from "@/mocks/transcripts.json";
import type { StatCardData, SecurityMetricsData } from "@/types/dashboard";
import type { Meeting } from "@/types/meeting";
import type {
  MeetingDetailMeta,
  MeetingSummaryData,
  MeetingTranscript,
} from "@/types/transcript";

export function getDashboardStats(): StatCardData[] {
  return dashboardStatsData.stats as StatCardData[];
}

export function getRecentMeetings(): Meeting[] {
  return meetingsData.meetings as Meeting[];
}

export function getSecurityMetrics(): SecurityMetricsData {
  return securityMetricsData as SecurityMetricsData;
}

export function getMeetingDetail(id: string): MeetingDetailMeta | null {
  const detail = meetingDetailData as MeetingDetailMeta;
  if (detail.id === id) {
    return detail;
  }

  const fromList = (meetingsData.meetings as Meeting[]).find((m) => m.id === id);
  if (!fromList) {
    return null;
  }

  return {
    id: fromList.id,
    title: fromList.title,
    category: "전체 노트",
    date: fromList.date,
    duration: fromList.duration,
    durationSeconds: 214,
  };
}

export function getMeetingTranscript(meetingId: string): MeetingTranscript {
  const data = transcriptsData as MeetingTranscript;
  return { ...data, meetingId };
}

export function getMeetingSummary(meetingId: string): MeetingSummaryData {
  const data = meetingSummaryData as MeetingSummaryData;
  return { ...data, meetingId };
}
