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
    <Card className="h-full border-slate-700 bg-[#0f172a] text-slate-200">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-blue-400" />
          <CardTitle className="text-white">보안 및 접근 제어 현황</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-4">
          {data.metrics.map((metric) => (
            <div key={metric.id} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-300">{metric.label}</span>
                <span className="font-semibold text-white">{metric.value}%</span>
              </div>
              <Progress value={metric.value} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3">
          {data.infoBoxes.map((box) => (
            <div
              key={box.id}
              className="rounded-lg bg-slate-800/80 px-3 py-3"
            >
              <p className="text-xs text-slate-400">{box.label}</p>
              <p className="mt-1 text-lg font-semibold text-white">
                {box.value}
              </p>
            </div>
          ))}
        </div>

        <div>
          <p className="mb-3 text-xs font-medium text-slate-400">
            일별 보안 활동
          </p>
          <div className="flex h-20 items-end justify-between gap-2">
            {data.dailyActivity.map((day) => (
              <div
                key={day.day}
                className="flex flex-1 flex-col items-center gap-1"
              >
                <div
                  className="w-full rounded-t bg-blue-500/80"
                  style={{
                    height: `${(day.value / maxActivity) * 100}%`,
                    minHeight: "8px",
                  }}
                />
                <span className="text-[10px] text-slate-500">{day.day}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
