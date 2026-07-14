import { TrendingDown, TrendingUp } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { StatCardData } from "@/types/dashboard";

interface StatCardsProps {
  stats: StatCardData[];
}

function Sparkline({ data, variant }: { data: number[]; variant?: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  return (
    <div className="flex h-10 items-end gap-0.5">
      {data.map((value, index) => {
        const height = ((value - min) / range) * 100;
        return (
          <div
            key={index}
            className={cn(
              "w-1.5 rounded-sm",
              variant === "alert" ? "bg-red-400/70" : "bg-blue-400/60",
            )}
            style={{ height: `${Math.max(15, height)}%` }}
          />
        );
      })}
    </div>
  );
}

export function StatCards({ stats }: StatCardsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const isPositive = stat.trend >= 0;
        const isAlert = stat.variant === "alert";

        return (
          <Card key={stat.id} className="overflow-hidden">
            <CardContent className="p-5">
              <p className="text-sm text-slate-500">{stat.label}</p>
              <div className="mt-2 flex items-end justify-between gap-4">
                <p
                  className={cn(
                    "text-3xl font-bold tracking-tight",
                    isAlert ? "text-red-600" : "text-slate-900",
                  )}
                >
                  {stat.value}
                </p>
                <div
                  className={cn(
                    "flex items-center gap-1 text-xs font-medium",
                    isAlert
                      ? "text-red-600"
                      : isPositive
                        ? "text-emerald-600"
                        : "text-red-600",
                  )}
                >
                  {isPositive ? (
                    <TrendingUp className="h-3.5 w-3.5" />
                  ) : (
                    <TrendingDown className="h-3.5 w-3.5" />
                  )}
                  {isPositive ? "+" : ""}
                  {stat.trend}%
                </div>
              </div>
              <p className="mt-1 text-xs text-slate-400">{stat.trendLabel}</p>
              <div className="mt-4">
                <Sparkline data={stat.sparkline} variant={stat.variant} />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
