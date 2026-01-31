"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-14">
        <div className="flex flex-col md:flex-row md:justify-between gap-12">
          <div className="max-w-sm">
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              A global community empowering women to build, ship, and lead in
              tech.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 text-sm">
            <div>
              <h4 className="font-semibold text-white mb-4">Community</h4>
              <ul className="space-y-3 text-white/70">
                <li className="hover:text-white cursor-pointer">About</li>
                <li className="hover:text-white cursor-pointer">Events</li>
                <li className="hover:text-white cursor-pointer">Mentorship</li>
                <li className="hover:text-white cursor-pointer">
                  Join SheBuilds
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Connect</h4>
              <ul className="space-y-3 text-white/70">
                <li>
                  <a
                    href="mailto:shebuildsblr@gmail.com"
                    className="hover:text-white"
                  >
                    Email
                  </a>
                </li>
                <li className="hover:text-white cursor-pointer">Instagram</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-white/50 mt-6">
          © {new Date().getFullYear()} SheBuilds Community. For
          the future.
        </p>
      </div>

      <div className="relative ">
        <h1
          className="
      text-[22vw] md:text-[14vw]
      font-extrabold
      leading-none
      text-center
      select-none
      pointer-events-none
      font-[new]

      bg-[linear-gradient(110deg,#a855f7,35%,#ffffff,50%,#7c3aed,65%,#a855f7)]
      translate-y-[30%]
      bg-[length:200%_100%]
      bg-clip-text
      text-transparent
      animate-[background-position_3s_linear_infinite]
    "
        >
          SHEBUILDS
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
