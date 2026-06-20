"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { PersonCard } from "@/components/shared/person-card";
import { COFOUNDERS, TEAMS, type TeamKey } from "@/data/PeopleData";
import { Button } from "../ui/button";

const teamKeys: TeamKey[] = [
  "Sponsorship",
  "Web",
  "Design",
  "Media",
  "Marketing",
];

export default function Team() {
  const [activeTeam, setActiveTeam] = useState<TeamKey>("Sponsorship");

  const people = useMemo(() => {
    return TEAMS[activeTeam];
  }, [activeTeam]);

  return (
    <section id="team" className="bg-bg py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-20 max-w-3xl">

          <Heading tag="h2" className="mt-4">
            Meet the people behind SheBuilds.
          </Heading>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-fg">
            Builders, mentors, organizers, and volunteers working together to
            create opportunities for women in technology.
          </p>
        </div>

        {/* Leadership */}
        <div className="mb-24">
          <div className="mb-10">

            <Heading tag="h3" className="mt-4">
              Community Leadership
            </Heading>

            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted-fg">
              The people guiding the vision, strategy, and growth of SheBuilds
              Bangalore.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COFOUNDERS.map((person, index) => (
              <PersonCard
                key={`founder-${person.name}-${index}`}
                person={person}
              />
            ))}
          </div>
        </div>

        {/* Working Groups */}
        <div>
          <div className="mb-10">

            <Heading tag="h3" className="mt-4">
              Meet the Team
            </Heading>

            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted-fg">
              From sponsorships and partnerships to events, design, marketing,
              and community operations.
            </p>
          </div>

          {/* Team Filters */}
          <div className="mb-10 flex flex-wrap gap-3">
            {teamKeys.map((team) =>
              activeTeam === team ? (
                <Button
                  key={team}
                  className="cursor-pointer"
                  onClick={() => setActiveTeam(team)}
                >
                  {team}
                </Button>
              ) : (
                <button
                  key={team}
                  onClick={() => setActiveTeam(team)}
                  className="rounded-lg border border-border bg-surface px-5 py-2 text-sm font-medium text-muted-fg transition-colors hover:bg-muted hover:text-fg"
                >
                  {team}
                </button>
              ),
            )}
          </div>

          {/* Team Members */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {people.map((person, index) => (
              <PersonCard
                key={`${activeTeam}-${person.name}-${index}`}
                person={person}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
