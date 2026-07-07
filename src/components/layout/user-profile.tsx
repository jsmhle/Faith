"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAppContext } from "@/context/app-context";

export function UserProfile() {
  const { currentUser } = useAppContext();

  return (
    <div className="flex items-center gap-3 rounded-lg bg-slate-800/60 px-3 py-3">
      <Avatar className="h-9 w-9">
        <AvatarFallback className="bg-blue-500 text-white">
          {currentUser.avatarInitials}
        </AvatarFallback>
      </Avatar>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-white">
          {currentUser.name}
        </p>
        <p className="truncate text-xs text-slate-400">{currentUser.role}</p>
      </div>
    </div>
  );
}
