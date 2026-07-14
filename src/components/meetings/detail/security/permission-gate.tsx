"use client";

import { useAppContext } from "@/context/app-context";
import { RbacOverlay } from "@/components/meetings/detail/security/rbac-overlay";

interface PermissionGateProps {
  requiredLevel: number;
  children: React.ReactNode;
}

export function PermissionGate({
  requiredLevel,
  children,
}: PermissionGateProps) {
  const { currentUser } = useAppContext();

  if (currentUser.rbacLevel >= requiredLevel) {
    return <>{children}</>;
  }

  return (
    <RbacOverlay requiredLevel={requiredLevel}>{children}</RbacOverlay>
  );
}
