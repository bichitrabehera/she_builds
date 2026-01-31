"use client";

import React, { useState } from "react";
import Image from "next/image";

const teams = {
  Sponsorship: [
    {
      name: "Aastha",
      image: "https://api.dicebear.com/7.x/adventurer/png?seed=Aastha",
      linkedin: "https://linkedin.com/in/aastha",
      instagram: "https://instagram.com/aastha",
    },
    {
      name: "Harsh",
      image: "https://api.dicebear.com/7.x/pixel-art/png?seed=Harsh",
      linkedin: "https://linkedin.com/in/harsh",
      instagram: "https://instagram.com/harsh",
    },
    {
      name: "Pia",
      image: "https://api.dicebear.com/7.x/bottts/png?seed=Pia",
      linkedin: "https://linkedin.com/in/pia",
      instagram: "https://instagram.com/pia",
    },
  ],

  Web: [
    {
      name: "Bichitra",
      image: "https://api.dicebear.com/7.x/lorelei/png?seed=Bichitra",
      linkedin: "https://linkedin.com/in/aarav",
      instagram: "https://instagram.com/aarav",
    },
    {
      name: "Matharishwa",
      image: "https://api.dicebear.com/7.x/adventurer/png?seed=Matharishwa",
      linkedin: "https://linkedin.com/in/isha",
      instagram: "https://instagram.com/isha",
    },
    {
      name: "Khushi",
      image: "https://api.dicebear.com/7.x/pixel-art/png?seed=Khushi",
      linkedin: "https://linkedin.com/in/kunal",
      instagram: "https://instagram.com/kunal",
    },
  ],

  Design: [
    {
      name: "Raksha",
      image: "https://api.dicebear.com/7.x/lorelei/png?seed=Raksha",
      linkedin: "https://linkedin.com/in/raksha",
      instagram: "https://instagram.com/raksha",
    },
    {
      name: "Moulika",
      image: "https://api.dicebear.com/7.x/adventurer/png?seed=Moulika",
      linkedin: "https://linkedin.com/in/moulika",
      instagram: "https://instagram.com/moulika",
    },
    {
      name: "Moulya",
      image: "https://api.dicebear.com/7.x/pixel-art/png?seed=Moulya",
      linkedin: "https://linkedin.com/in/moulya",
      instagram: "https://instagram.com/moulya",
    },
  ],

  Media: [
    {
      name: "Vivan",
      image: "https://api.dicebear.com/7.x/bottts/png?seed=Vivan",
      linkedin: "https://linkedin.com/in/vivan",
      instagram: "https://instagram.com/vivan",
    },
    {
      name: "Sachin",
      image: "https://api.dicebear.com/7.x/lorelei/png?seed=Sachin",
      linkedin: "https://linkedin.com/in/sachin",
      instagram: "https://instagram.com/sachin",
    },
  ],

  Marketing: [
    {
      name: "Tathagat",
      image: "https://api.dicebear.com/7.x/adventurer/png?seed=Tathagat",
      linkedin: "https://linkedin.com/in/tathagat",
      instagram: "https://instagram.com/tathagat",
    },
    {
      name: "Naman",
      image: "https://api.dicebear.com/7.x/pixel-art/png?seed=Naman",
      linkedin: "https://linkedin.com/in/naman",
      instagram: "https://instagram.com/naman",
    },
    {
      name: "Lohitha",
      image: "https://api.dicebear.com/7.x/lorelei/png?seed=Lohitha",
      linkedin: "https://instagram.com/lohitha",
      instagram: "https://instagram.com/lohitha",
    },
    {
      name: "Erum",
      image: "https://api.dicebear.com/7.x/bottts/png?seed=Erum",
      linkedin: "https://linkedin.com/in/erum",
      instagram: "https://instagram.com/erum",
    },
  ],
};


const People = () => {
  const [activeTeam, setActiveTeam] =
    useState<keyof typeof teams>("Sponsorship");

  return (
    <section className="bg-white py-16">
      <div className=" mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Our Team</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the passionate individuals driving the SheBuilds community
            forward
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {Object.keys(teams).map((team) => (
              <button
                key={team}
                onClick={() => setActiveTeam(team as keyof typeof teams)}
                className={`px-4 py-2 text-sm font-medium rounded transition
          ${
            activeTeam === team
              ? "bg-purple-600 text-white shadow"
              : "bg-purple-50 text-purple-700 hover:bg-purple-100"
          }`}
              >
                {team}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {teams[activeTeam].map((person, index) => (
            <div
              key={index}
              className="group relative w-80 h-80 rounded overflow-hidden border border-black/10 hover:border-white/30 transition-all duration-300"
            >
              <Image
                src={person.image}
                alt={person.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* GLASS OVERLAY */}
              <div className="absolute bottom-0 w-full bg-white/10 backdrop-blur-[10px] text-center">
                {/* Name */}
                <h3 className="text-lg py-2 font-semibold text-white">
                  {person.name}
                </h3>

                {/* Social links */}
                <div className="flex justify-center">
                  {person.linkedin && (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-sm w-full px-2 py-3 border border-black/30 text-white hover:bg-white hover:text-black transition"
                    >
                      LinkedIn
                    </a>
                  )}

                  {person.instagram && (
                    <a
                      href={person.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-sm w-full px-2 py-3 border border-black/30 text-white hover:bg-white hover:text-black transition"
                    >
                      Instagram
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default People;
