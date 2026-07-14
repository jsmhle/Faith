import { Lock } from "lucide-react";

import { cn } from "@/lib/utils";

interface MaskedTextBadgeProps {
  label?: string;
  className?: string;
}

export function MaskedTextBadge({
  label = "개인정보 마스킹",
  className,
}: MaskedTextBadgeProps) {
  return (
    <span
      className={cn(
        "mx-0.5 inline-flex items-center gap-1 rounded-md bg-gray-900 px-2 py-0.5 align-middle text-[11px] font-medium text-white",
        className,
      )}
    >
      <Lock className="h-3 w-3 text-orange-400" />
      {label}
    </span>
  );
}
