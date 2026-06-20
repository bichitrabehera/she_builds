import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  size?: "default" | "small" | "large";
}

export function Section({
  children,
  className,
  id,
  size = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "bg-surface",
        size === "small" && "py-16",
        size === "default" && "py-24",
        size === "large" && "py-32",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">{children}</div>
    </section>
  );
}
