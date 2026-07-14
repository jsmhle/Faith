"use client";

import { useState } from "react";
import { Pause, Play, RotateCcw, RotateCw } from "lucide-react";

import { cn } from "@/lib/utils";

interface AudioPlayerBarProps {
  durationSeconds: number;
}

const SPEEDS = [1, 1.25, 1.5, 2] as const;

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

export function AudioPlayerBar({ durationSeconds }: AudioPlayerBarProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [speedIndex, setSpeedIndex] = useState(0);

  const progress = durationSeconds > 0 ? (currentTime / durationSeconds) * 100 : 0;

  const seek = (delta: number) => {
    setCurrentTime((prev) =>
      Math.min(durationSeconds, Math.max(0, prev + delta)),
    );
  };

  const handleSeekBar = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    setCurrentTime(ratio * durationSeconds);
  };

  return (
    <div className="shrink-0 border-t border-gray-200 bg-white px-5 py-3">
      <div
        className="relative mb-3 h-2 cursor-pointer rounded-full bg-gray-100"
        onClick={handleSeekBar}
        role="slider"
        aria-valuenow={currentTime}
        aria-valuemin={0}
        aria-valuemax={durationSeconds}
        tabIndex={0}
      >
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-emerald-400/80"
          style={{ width: `${Math.min(100, progress + 8)}%` }}
        />
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-emerald-500"
          style={{ width: `${progress}%` }}
        />
        <div
          className="absolute top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-2 border-white bg-emerald-600 shadow"
          style={{ left: `calc(${progress}% - 7px)` }}
        />
      </div>

      <div className="flex items-center justify-between gap-4">
        <span className="w-12 text-xs tabular-nums text-gray-400">
          {formatTime(currentTime)}
        </span>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() =>
              setSpeedIndex((prev) => (prev + 1) % SPEEDS.length)
            }
            className="min-w-10 rounded-md px-2 py-1 text-xs font-medium text-gray-500 hover:bg-gray-50"
          >
            {SPEEDS[speedIndex]}x
          </button>

          <button
            type="button"
            onClick={() => seek(-5)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-50"
            aria-label="5초 뒤로"
          >
            <RotateCcw className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => setIsPlaying((prev) => !prev)}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white hover:bg-gray-800",
            )}
            aria-label={isPlaying ? "일시정지" : "재생"}
          >
            {isPlaying ? (
              <Pause className="h-4 w-4 fill-current" />
            ) : (
              <Play className="h-4 w-4 fill-current" />
            )}
          </button>

          <button
            type="button"
            onClick={() => seek(5)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-50"
            aria-label="5초 앞으로"
          >
            <RotateCw className="h-4 w-4" />
          </button>
        </div>

        <span className="w-12 text-right text-xs tabular-nums text-gray-400">
          {formatTime(durationSeconds)}
        </span>
      </div>
    </div>
  );
}
