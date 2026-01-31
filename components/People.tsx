"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const teams = {
  Design: [
    {
      name: "Raksha",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      linkedin: "https://linkedin.com/in/raksha",
      instagram: "https://instagram.com/raksha",
    },
    {
      name: "Moulika",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      linkedin: "https://linkedin.com/in/moulika",
      instagram: "https://instagram.com/moulika",
    },
    {
      name: "Moulya",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      linkedin: "https://linkedin.com/in/moulya",
      instagram: "https://instagram.com/moulya",
    },
  ],

  Sponsor: [
    {
      name: "Aastha",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      linkedin: "https://linkedin.com/in/aastha",
      instagram: "https://instagram.com/aastha",
    },
    {
      name: "Harsh",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      linkedin: "https://linkedin.com/in/harsh",
      instagram: "https://instagram.com/harsh",
    },
    {
      name: "Pia",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      linkedin: "https://linkedin.com/in/pia",
      instagram: "https://instagram.com/pia",
    },
  ],

  Media: [
    {
      name: "Vivan",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      linkedin: "https://linkedin.com/in/vivan",
      instagram: "https://instagram.com/vivan",
    },
    {
      name: "Sachin",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      linkedin: "https://linkedin.com/in/sachin",
      instagram: "https://instagram.com/sachin",
    },
  ],

  Marketing: [
    {
      name: "Tathagat",
      image: "https://randomuser.me/api/portraits/men/62.jpg",
      linkedin: "https://linkedin.com/in/tathagat",
      instagram: "https://instagram.com/tathagat",
    },
    {
      name: "Naman",
      image: "https://randomuser.me/api/portraits/men/70.jpg",
      linkedin: "https://linkedin.com/in/naman",
      instagram: "https://instagram.com/naman",
    },
    {
      name: "Lohitha",
      image: "https://randomuser.me/api/portraits/women/36.jpg",
      linkedin: "https://instagram.com/lohitha",
      instagram: "https://instagram.com/lohitha",
    },
    {
      name: "Erum",
      image: "https://randomuser.me/api/portraits/women/48.jpg",
      linkedin: "https://linkedin.com/in/erum",
      instagram: "https://instagram.com/erum",
    },
  ],
};

const People = () => {
  const [activeTeam, setActiveTeam] = useState<keyof typeof teams>("Design");

  return (
    <section className="bg-white py-20">
      <div className=" mx-auto px-4">
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-extrabold">Our Team</h1>
          <p className="mt-2 text-black/60">
            The people building the SheBuilds community.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {Object.keys(teams).map((team) => (
            <button
              key={team}
              onClick={() => setActiveTeam(team as keyof typeof teams)}
              className={`px-8 py-3 rounded text-sm font-semibold transition-all duration-300
                ${
                  activeTeam === team
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-purple-50 text-purple-700 hover:bg-purple-100"
                }`}
            >
              {team} Team
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {teams[activeTeam].map((person, index) => (
            <div key={index} className="perspective-1000">
              <div
                className="
          group w-80 border border-black/10 rounded-xl overflow-hidden
          transition-all duration-500
          
          hover:shadow-2xl
        "
              >
                <div className="relative h-[280px] w-100 overflow-hidden ">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="py-4 bg-white translate-z-30 text-center">
                  <h4 className="font-semibold text-sm mb-3">{person.name}</h4>

                  <div className="flex justify-center gap-3">
                    {person.linkedin && (
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-black/10 text-gray-600 hover:bg-blue-600 hover:text-white transition "
                      >
                        <FaLinkedinIn size={14} />
                      </a>
                    )}

                    {person.instagram && (
                      <a
                        href={person.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-black/10 text-gray-600 hover:bg-pink-500 hover:text-white transition "
                      >
                        <FaInstagram size={14} />
                      </a>
                    )}
                  </div>
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
