"use client";

import { useCallback, useState } from "react";

const ACCEPTED_FORMATS = [".mp3", ".wav", ".m4a", ".ogg", ".flac", ".webm"];

export function useFileUpload() {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<
    "idle" | "uploading" | "done"
  >("idle");

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const processFile = useCallback((file: File) => {
    setSelectedFile(file);
    setUploadStatus("uploading");

    setTimeout(() => {
      setUploadStatus("done");
    }, 1500);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);

      const file = e.dataTransfer.files[0];
      if (file) {
        processFile(file);
      }
    },
    [processFile],
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        processFile(file);
      }
    },
    [processFile],
  );

  const clearFile = useCallback(() => {
    setSelectedFile(null);
    setUploadStatus("idle");
  }, []);

  return {
    isDragging,
    selectedFile,
    uploadStatus,
    acceptedFormats: ACCEPTED_FORMATS,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleFileSelect,
    clearFile,
  };
}
