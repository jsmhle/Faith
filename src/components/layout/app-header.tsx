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
    return {
      title: "회의록 상세",
      description: "회의 스크립트, 요약, 액션 아이템을 확인합니다.",
    };
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

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="flex h-16 items-center justify-between gap-4 px-6">
        <div className="min-w-0">
          <h1 className="truncate text-xl font-semibold text-slate-900">
            {pageMeta.title}
          </h1>
          <p className="truncate text-sm text-slate-500">
            {formatToday()} · {pageMeta.description}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="회의, 참석자 검색..."
              className="w-64 pl-9"
            />
          </div>

          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5 text-slate-600" />
            {notificationCount > 0 ? (
              <Badge className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[10px]">
                {notificationCount}
              </Badge>
            ) : null}
          </Button>

          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-slate-100 text-xs text-slate-700">
                {currentUser.avatarInitials}
              </AvatarFallback>
            </Avatar>
          </Button>

          <Button variant="ghost" size="icon" className="sm:hidden">
            <User className="h-5 w-5 text-slate-600" />
          </Button>

          <Button asChild>
            <Link href="/">
              <Plus className="h-4 w-4" />
              새 회의
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
