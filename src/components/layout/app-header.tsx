"use client";

import { Bell, Plus, Search, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { PAGE_TITLES } from "@/lib/constants";
import { useAppContext } from "@/context/app-context";

function getPageMeta(pathname: string) {
  if (pathname.startsWith("/meetings/")) {
    return null;
  }

  return (
    PAGE_TITLES[pathname] ?? {
      title: "보안회의록",
      description: "AI 기반 회의록 자동화 플랫폼",
    }
  );
}

function formatToday() {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  }).format(new Date());
}

export function AppHeader() {
  const pathname = usePathname();
  const { currentUser, notificationCount } = useAppContext();
  const pageMeta = getPageMeta(pathname);

  if (!pageMeta) {
    return null;
  }

  return (
    <header className="sticky top-0 z-10 border-b border-[#e5e7eb] bg-white">
      <div className="flex h-14 items-center justify-between gap-4 px-6">
        <div className="min-w-0">
          <h1 className="truncate text-base font-semibold text-gray-900">
            {pageMeta.title}
          </h1>
          <p className="truncate text-xs text-gray-400">
            {formatToday()} · {pageMeta.description}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="회의, 참석자 검색..."
              className="h-8 w-56 border-gray-200 bg-gray-50 pl-8 text-sm"
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="relative h-8 w-8 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          >
            <Bell className="h-4 w-4" />
            {notificationCount > 0 ? (
              <Badge className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full px-0.5 text-[9px]">
                {notificationCount}
              </Badge>
            ) : null}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="hidden h-8 w-8 sm:inline-flex"
          >
            <Avatar className="h-7 w-7">
              <AvatarFallback className="bg-gray-100 text-[10px] text-gray-600">
                {currentUser.avatarInitials}
              </AvatarFallback>
            </Avatar>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 sm:hidden"
          >
            <User className="h-4 w-4" />
          </Button>

          <Button asChild size="sm" className="h-8">
            <Link href="/">
              <Plus className="h-3.5 w-3.5" />
              새 회의
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
