"use client";

import { useCallback, useState } from "react";

export type RecordingStatus = "idle" | "recording" | "stopped";

export function useRecording() {
  const [status, setStatus] = useState<RecordingStatus>("idle");
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  const startRecording = useCallback(() => {
    setStatus("recording");
    setElapsedSeconds(0);
  }, []);

  const stopRecording = useCallback(() => {
    setStatus("stopped");
  }, []);

  const resetRecording = useCallback(() => {
    setStatus("idle");
    setElapsedSeconds(0);
  }, []);

  const toggleRecording = useCallback(() => {
    if (status === "idle" || status === "stopped") {
      startRecording();
    } else if (status === "recording") {
      stopRecording();
    }
  }, [status, startRecording, stopRecording]);

  return {
    status,
    elapsedSeconds,
    isRecording: status === "recording",
    startRecording,
    stopRecording,
    resetRecording,
    toggleRecording,
  };
}
