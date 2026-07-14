export interface StatCardData {
  id: string;
  label: string;
  value: string;
  trend: number;
  trendLabel: string;
  sparkline: number[];
  variant?: "default" | "alert";
}

export interface SecurityMetric {
  id: string;
  label: string;
  value: number;
}

export interface SecurityInfoBox {
  id: string;
  label: string;
  value: string;
}

export interface SecurityMetricsData {
  metrics: SecurityMetric[];
  infoBoxes: SecurityInfoBox[];
  dailyActivity: { day: string; value: number }[];
}
