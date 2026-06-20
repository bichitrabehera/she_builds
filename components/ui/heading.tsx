import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeadingProps {
  tag?: "h1" | "h2" | "h3" | "h4";
  className?: string;
  children: ReactNode;
}

export function Heading({
  tag: Tag = "h2",
  className,
  children,
}: HeadingProps) {
  return (
    <Tag className={cn("font-serif text-3xl md:text-4xl font-semibold tracking-tight text-fg", className)}>
      {children}
    </Tag>
  );
}
