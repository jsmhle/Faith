"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAppContext } from "@/context/app-context";

export function UserProfile() {
  const { currentUser } = useAppContext();

  return (
    <div className="flex items-center gap-2.5 rounded-lg bg-gray-50 px-3 py-2.5">
      <Avatar className="h-8 w-8">
        <AvatarFallback className="bg-blue-100 text-xs font-medium text-blue-700">
          {currentUser.avatarInitials}
        </AvatarFallback>
      </Avatar>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-gray-900">
          {currentUser.name}
        </p>
        <p className="truncate text-[11px] text-gray-400">{currentUser.role}</p>
      </div>
    </div>
  );
}
