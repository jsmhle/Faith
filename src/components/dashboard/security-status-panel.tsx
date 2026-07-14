import { Shield } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { SecurityMetricsData } from "@/types/dashboard";

interface SecurityStatusPanelProps {
  data: SecurityMetricsData;
}

export function SecurityStatusPanel({ data }: SecurityStatusPanelProps) {
  const maxActivity = Math.max(...data.dailyActivity.map((d) => d.value));

  return (
    <Card className="h-full border-gray-200 bg-white">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-blue-600" />
          <CardTitle className="text-gray-900">보안 및 접근 제어 현황</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-4">
          {data.metrics.map((metric) => (
            <div key={metric.id} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{metric.label}</span>
                <span className="font-semibold text-gray-900">
                  {metric.value}%
                </span>
              </div>
              <Progress
                value={metric.value}
                className="bg-gray-100"
                indicatorClassName="bg-blue-500"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3">
          {data.infoBoxes.map((box) => (
            <div
              key={box.id}
              className="rounded-lg border border-gray-100 bg-gray-50 px-3 py-3"
            >
              <p className="text-xs text-gray-400">{box.label}</p>
              <p className="mt-1 text-lg font-semibold text-gray-900">
                {box.value}
              </p>
            </div>
          ))}
        </div>

        <div>
          <p className="mb-3 text-xs font-medium text-gray-400">
            일별 보안 활동
          </p>
          <div className="flex h-20 items-end justify-between gap-2">
            {data.dailyActivity.map((day) => (
              <div
                key={day.day}
                className="flex flex-1 flex-col items-center gap-1"
              >
                <div
                  className="w-full rounded-t bg-blue-400/70"
                  style={{
                    height: `${(day.value / maxActivity) * 100}%`,
                    minHeight: "8px",
                  }}
                />
                <span className="text-[10px] text-gray-400">{day.day}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
