"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";

type Person = {
  name: string;
  image: string;
  linkedin?: string;
  instagram?: string;
};

type TeamKey = "Sponsorship" | "Web" | "Design" | "Media" | "Marketing";

const TEAMS: Record<TeamKey, Person[]> = {
  Sponsorship: [
    {
      name: "Aastha",
      image: "https://api.dicebear.com/7.x/adventurer/png?seed=Aastha",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Harsh",
      image: "https://api.dicebear.com/7.x/pixel-art/png?seed=Harsh",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Pia",
      image: "https://api.dicebear.com/7.x/bottts/png?seed=Pia",
      linkedin: "#",
      instagram: "#",
    },
  ],

  Web: [
    {
      name: "Bichitra",
      image: "https://api.dicebear.com/7.x/lorelei/png?seed=Bichitra",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Matharishwa",
      image: "https://api.dicebear.com/7.x/adventurer/png?seed=Matharishwa",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Khushi",
      image: "https://api.dicebear.com/7.x/pixel-art/png?seed=Khushi",
      linkedin: "#",
      instagram: "#",
    },
  ],

  Design: [
    {
      name: "Raksha",
      image: "https://api.dicebear.com/7.x/lorelei/png?seed=Raksha",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Moulika",
      image: "https://api.dicebear.com/7.x/adventurer/png?seed=Moulika",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Moulya",
      image: "https://api.dicebear.com/7.x/pixel-art/png?seed=Moulya",
      linkedin: "#",
      instagram: "#",
    },
  ],

  Media: [
    {
      name: "Vivan",
      image: "https://api.dicebear.com/7.x/bottts/png?seed=Vivan",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Sachin",
      image: "https://api.dicebear.com/7.x/lorelei/png?seed=Sachin",
      linkedin: "#",
      instagram: "#",
    },
  ],

  Marketing: [
    {
      name: "Tathagat",
      image: "https://api.dicebear.com/7.x/adventurer/png?seed=Tathagat",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Naman",
      image: "https://api.dicebear.com/7.x/pixel-art/png?seed=Naman",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Lohitha",
      image: "https://api.dicebear.com/7.x/lorelei/png?seed=Lohitha",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Erum",
      image: "https://api.dicebear.com/7.x/bottts/png?seed=Erum",
      linkedin: "#",
      instagram: "#",
    },
  ],
};

const PersonCard = React.memo(function PersonCard({
  person,
}: {
  person: Person;
}) {
  return (
    <div className="w-80 flex flex-col overflow-hidden rounded border border-black/10 group">
      <div className="relative w-full h-70 overflow-hidden">
        <Image
          src={person.image}
          alt={person.name}
          fill
          sizes="200px"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="bg-black/80 text-white text-center">
        <h3 className="text-lg font-semibold py-3">{person.name}</h3>

        <div className="flex border-t border-white/20">
          {person.linkedin && (
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 border-r text-sm hover:bg-white hover:text-black transition"
            >
              LinkedIn
            </a>
          )}

          {person.instagram && (
            <a
              href={person.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-sm hover:bg-white hover:text-black transition"
            >
              Instagram
            </a>
          )}
        </div>
      </div>
    </div>
  );
});

export default function People() {
  const [activeTeam, setActiveTeam] = useState<TeamKey>("Sponsorship");

  const people = useMemo(() => TEAMS[activeTeam], [activeTeam]);

  return (
    <section className="bg-white py-16">
      <div className=" mx-auto px-4">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Our Team</h1>
          <p className="text-gray-600">
            Meet the passionate individuals driving SheBuilds forward
          </p>
        </div>

        <div className="pb-20 flex flex-col items-center gap-4">
          <h2 className="text-purple-600 font-semibold text-xl">
            Bangalore Regional Head
          </h2>

          <div className="w-80 flex flex-col overflow-hidden rounded border border-black/10 group">
            <div className="relative w-full h-70 overflow-hidden">
              <Image
                src="/gallery/trisha.jpeg"
                alt="Trisha"
                fill
                sizes="200px"
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="bg-black/80 text-white text-center">
              <h3 className="text-lg font-semibold py-3">Trisha</h3>

              <div className="flex border-t border-white/20">
                <a
                  href="#"
                  className="w-full py-3 border-r text-sm hover:bg-white hover:text-black transition"
                >
                  LinkedIn
                </a>

                <a
                  href="#"
                  className="w-full py-3 text-sm hover:bg-white hover:text-black transition"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {(Object.keys(TEAMS) as TeamKey[]).map((team, index) => (
            <button
              key={index}
              onClick={() => setActiveTeam(team)}
              className={`px-4 py-2 rounded text-sm font-medium transition
                ${
                  activeTeam === team
                    ? "bg-purple-600 text-white"
                    : "bg-purple-100 text-purple-700 hover:bg-purple-200"
                }`}
            >
              {team}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {people.map((person, index) => (
            <PersonCard
              key={`${activeTeam}-${person.name}-${index}`}
              person={person}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
