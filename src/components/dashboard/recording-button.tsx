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
        variant="outline"
        className={cn(
          "h-12 w-full border-gray-200 text-base font-semibold",
          isRecording
            ? "border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100 hover:text-rose-800"
            : "bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900",
        )}
      >
        {isRecording ? (
          <>
            <Square className="h-4 w-4 fill-current" />
            녹음 중지
          </>
        ) : (
          <>
            <Mic className="h-4 w-4 text-gray-500" />
            실시간 녹음 시작
          </>
        )}
      </Button>

      {status !== "idle" && (
        <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2 text-sm">
          <span className="text-gray-500">
            상태:{" "}
            <span className="font-medium text-gray-900">
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
            <span className="flex items-center gap-1.5 text-rose-600">
              <span className="h-2 w-2 animate-pulse rounded-full bg-rose-400" />
              REC
            </span>
          )}
        </div>
      )}
    </div>
  );
}
