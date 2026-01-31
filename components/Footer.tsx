"use client";

import React from "react";
import Masonry from "./Masonry";

const items = [
  {
    id: "1",
    img: "https://picsum.photos/id/1015/600/900?grayscale",
    url: "#",
    height: 400,
  },
  {
    id: "2",
    img: "https://picsum.photos/id/1011/600/750?grayscale",
    url: "#",
    height: 250,
  },
  {
    id: "3",
    img: "https://picsum.photos/id/1020/600/800?grayscale",
    url: "#",
    height: 600,
  },
  {
    id: "4",
    img: "https://picsum.photos/id/1016/600/700?grayscale",
    url: "#",
    height: 450,
  },
  {
    id: "5",
    img: "https://picsum.photos/id/1018/600/850?grayscale",
    url: "#",
    height: 520,
  },
];

const Footer = () => {
  return (
    <footer className="bg-white border-t border-black/10">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between space-y-10">
          <div>
            <h3 className="text-xl font-bold tracking-tight">SheBuilds</h3>
            <p className="mt-4 text-sm text-black/60 leading-relaxed max-w-sm">
              A global community empowering women to build, ship, and lead in
              tech.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-3 text-sm text-black/70">
              <li className="hover:text-black cursor-pointer">About</li>
              <li className="hover:text-black cursor-pointer">Events</li>
              <li className="hover:text-black cursor-pointer">Mentorship</li>
              <li className="hover:text-black cursor-pointer">
                Join SheBuilds
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-3 text-sm text-black/70">
              <li className="hover:text-black cursor-pointer">
                <a href="mailto:shebuildsblr@gmail.com">Email</a>
              </li>
              <li className="hover:text-black cursor-pointer">Instagram</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-black/5 pt-10">
        <h1 className="text-[12vw] font-[new] leading-none text-center font-extrabold text-black/90 select-none">
          SHEBUILDS
        </h1>
        <p className="text-center text-sm text-black/50 py-12">
          © {new Date().getFullYear()} SheBuilds Community. Built by women. For
          the future.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
