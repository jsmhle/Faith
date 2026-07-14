import { Lock } from "lucide-react";

import { cn } from "@/lib/utils";

interface RbacOverlayProps {
  requiredLevel: number;
  className?: string;
  children: React.ReactNode;
}

export function RbacOverlay({
  requiredLevel,
  className,
  children,
}: RbacOverlayProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      <div className="pointer-events-none select-none blur-[3px] opacity-50">
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-[1px]">
        <div className="flex flex-col items-center gap-1.5 px-3 text-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
            <Lock className="h-4 w-4 text-gray-500" />
          </div>
          <p className="text-xs font-medium text-gray-700">
            접근 권한 없음 — RBAC Level {requiredLevel} 이상 필요
          </p>
        </div>
      </div>
    </div>
  );
}
