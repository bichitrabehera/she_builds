import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { EventCard } from "@/components/shared/event-card";
import { getAllEvents } from "@/lib/events/utils";

export default function Events() {
  const allEvents = getAllEvents();

  if (allEvents.length === 0) return null;

  return (
    <section id="events" className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 max-w-3xl">
          <Heading tag="h2" className="mt-4">
            Learn, build, and grow together.
          </Heading>
          <p className="mt-4 text-lg leading-relaxed text-muted-fg max-w-2xl">
            Join workshops, hackathons, networking sessions, mentorship
            programs, and community events.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allEvents.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
