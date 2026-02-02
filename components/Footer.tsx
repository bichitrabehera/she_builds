"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-10 text-white">
        <div className="flex flex-col md:flex-row md:justify-between gap-14 border-b border-white/10 pb-12">
          <div className="max-w-sm">
            <h3 className="text-xl font-semibold tracking-wide">
              SheBuilds Bangalore
            </h3>

            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              A global community empowering women to build, ship, and lead in
              tech.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-14 text-sm">
            <div>
              <h4 className="font-semibold text-white mb-5 tracking-wide">
                Community
              </h4>

              <ul className="space-y-3 text-white/60">
                <li className="hover:text-white transition cursor-pointer">
                  <a href="https://www.shebuildsecosystem.com/register">
                    Join SheBuilds
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-5 tracking-wide">
                Connect
              </h4>

              <ul className="space-y-3 underline text-white/60">
                <li>
                  <a
                    href="mailto:shebuildsblr@gmail.com"
                    className="hover:text-white transition"
                  >
                    shebuildsblr@gmail.com
                  </a>
                </li>
                <li className="hover:text-white transition cursor-pointer">
                  <a href="https://www.instagram.com/shebuilds_bangalore?igsh=MXdkcXU4amkwNjBrNw==">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-white/40 mt-8">
          © {new Date().getFullYear()} SheBuilds Community. For the future.
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
      bg-size-[200%_100%]
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
