"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className=" top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold uppercase text-purple-700">
          / shebuilds <span className="text-neutral-900">blr</span>
        </div>

        <nav className="block">
          <ul className="flex items-center gap-6 text-sm font-medium">
            <li>
              <Link
                href="https://www.shebuildsecosystem.com/register"
                className=" bg-black px-3 py-2 text-white rounded hover:text-purple-700 transition"
              >
                Join Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
