import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-fg",
        className,
      )}
    >
      {children}
    </span>
  );
}
