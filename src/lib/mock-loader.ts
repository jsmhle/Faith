import dashboardStatsData from "@/mocks/dashboard-stats.json";
import meetingsData from "@/mocks/meetings.json";
import securityMetricsData from "@/mocks/security-metrics.json";
import type { StatCardData, SecurityMetricsData } from "@/types/dashboard";
import type { Meeting } from "@/types/meeting";

export function getDashboardStats(): StatCardData[] {
  return dashboardStatsData.stats as StatCardData[];
}

export function getRecentMeetings(): Meeting[] {
  return meetingsData.meetings as Meeting[];
}

export function getSecurityMetrics(): SecurityMetricsData {
  return securityMetricsData as SecurityMetricsData;
}
