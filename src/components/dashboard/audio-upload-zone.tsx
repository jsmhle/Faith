"use client";

import { CheckCircle2, FileAudio, Upload, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RecordingButton } from "@/components/dashboard/recording-button";
import { useFileUpload } from "@/hooks/use-file-upload";
import { cn } from "@/lib/utils";

export function AudioUploadZone() {
  const {
    isDragging,
    selectedFile,
    uploadStatus,
    acceptedFormats,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleFileSelect,
    clearFile,
  } = useFileUpload();

  return (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <CardTitle>새 회의 등록</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={cn(
            "relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-12 transition-colors",
            isDragging
              ? "border-blue-500 bg-blue-50"
              : "border-slate-200 bg-slate-50/50 hover:border-slate-300",
          )}
        >
          {uploadStatus !== "done" && (
            <input
              type="file"
              accept={acceptedFormats.join(",")}
              onChange={handleFileSelect}
              className="absolute inset-0 cursor-pointer opacity-0"
              aria-label="오디오 파일 업로드"
            />
          )}

          {uploadStatus === "done" && selectedFile ? (
            <div className="flex flex-col items-center gap-3 text-center">
              <CheckCircle2 className="h-10 w-10 text-emerald-500" />
              <div>
                <p className="font-medium text-slate-900">
                  업로드 완료
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  {selectedFile.name}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  clearFile();
                }}
              >
                <X className="h-3.5 w-3.5" />
                파일 제거
              </Button>
            </div>
          ) : uploadStatus === "uploading" ? (
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="h-10 w-10 animate-pulse rounded-full bg-blue-100" />
              <p className="font-medium text-slate-900">업로드 중...</p>
              <p className="text-sm text-slate-500">{selectedFile?.name}</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                <FileAudio className="h-7 w-7 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-slate-900">
                  오디오 파일을 드래그하거나 클릭하여 업로드
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  MP3, WAV, M4A, OGG, FLAC, WEBM 지원
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Upload className="h-3.5 w-3.5" />
                최대 500MB
              </div>
            </div>
          )}
        </div>

        <RecordingButton />
      </CardContent>
    </Card>
  );
}
