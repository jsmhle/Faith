"use client";

import { Mic, Square } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useRecording } from "@/hooks/use-recording";
import { cn } from "@/lib/utils";

export function RecordingButton() {
  const { status, isRecording, toggleRecording, resetRecording } =
    useRecording();

  return (
    <div className="space-y-2">
      <Button
        onClick={toggleRecording}
        className={cn(
          "h-12 w-full text-base font-semibold",
          isRecording
            ? "bg-red-700 hover:bg-red-800"
            : "bg-red-600 hover:bg-red-700",
        )}
      >
        {isRecording ? (
          <>
            <Square className="h-4 w-4 fill-current" />
            녹음 중지
          </>
        ) : (
          <>
            <Mic className="h-4 w-4" />
            실시간 녹음 시작
          </>
        )}
      </Button>

      {status !== "idle" && (
        <div className="flex items-center justify-between rounded-lg bg-slate-100 px-4 py-2 text-sm">
          <span className="text-slate-600">
            상태:{" "}
            <span className="font-medium text-slate-900">
              {status === "recording"
                ? "녹음 중"
                : status === "stopped"
                  ? "녹음 완료"
                  : "대기"}
            </span>
          </span>
          {status === "stopped" && (
            <button
              type="button"
              onClick={resetRecording}
              className="text-xs font-medium text-blue-600 hover:underline"
            >
              초기화
            </button>
          )}
          {isRecording && (
            <span className="flex items-center gap-1.5 text-red-600">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
              REC
            </span>
          )}
        </div>
      )}
    </div>
  );
}
