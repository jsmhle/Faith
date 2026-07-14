"use client";

import { Shield } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UserProfile } from "@/components/layout/user-profile";
import { APP_NAME, NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function AppSidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <aside className="flex h-screen w-60 shrink-0 flex-col border-r border-[#e5e7eb] bg-white">
      <div className="flex h-14 items-center gap-3 border-b border-[#e5e7eb] px-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
          <Shield className="h-4 w-4 text-white" />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{APP_NAME}</p>
          <p className="text-[11px] text-gray-400">Secure Minutes</p>
        </div>
      </div>

      <ScrollArea className="flex-1 px-3 py-3">
        <nav className="space-y-0.5">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                )}
              >
                <Icon
                  className={cn(
                    "h-4 w-4 shrink-0",
                    active ? "text-blue-600" : "text-gray-400",
                  )}
                />
                <span className="flex-1">{item.title}</span>
                {"badge" in item && item.badge ? (
                  <Badge
                    variant="sidebar"
                    className={cn(
                      "min-w-5 justify-center px-1.5 py-0 text-[10px]",
                      active && "bg-blue-100 text-blue-600",
                    )}
                  >
                    {item.badge}
                  </Badge>
                ) : null}
              </Link>
            );
          })}
        </nav>
      </ScrollArea>

      <div className="border-t border-[#e5e7eb] p-3">
        <UserProfile />
      </div>
    </aside>
  );
}
