import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import type { EventContent } from "@/lib/events/types";

interface EventCardProps {
  event: EventContent;
}

export function EventCard({ event }: EventCardProps) {
  const { frontmatter, slug } = event;

  return (
    <article className="group overflow-hidden rounded-lg border border-border bg-surface p-1 transition-all duration-300">
      <div className="overflow-hidden">
        <div className="p-4">
          <div className="mb-4">
            <span className="inline-flex rounded-full bg-muted px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-fg">
              {format(new Date(frontmatter.date), "MMM dd, yyyy")}
            </span>
          </div>

          <h3 className="font-serif text-xl font-semibold tracking-tight text-fg">
            {frontmatter.title}
          </h3>

          <p className="mt-3 line-clamp-3 text-base leading-relaxed text-muted-fg">
            {frontmatter.excerpt}
          </p>
        </div>
      </div>
    </article>
  );
}
