"use client";

import { createContext, useContext } from "react";

import usersData from "@/mocks/users.json";
import type { User } from "@/types/user";

interface AppContextValue {
  currentUser: User;
  notificationCount: number;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const value: AppContextValue = {
    currentUser: usersData.currentUser as User,
    notificationCount: 3,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }

  return context;
}
