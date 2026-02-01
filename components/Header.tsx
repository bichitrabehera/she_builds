"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <header className=" sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold uppercase text-purple-700">
          / shebuilds <span className="text-neutral-900">blr</span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm font-medium">
            <li>
              <Link
                href="/posts"
                className="text-neutral-700 hover:text-purple-700 transition"
              >
                Posts
              </Link>
            </li>

            {isLoggedIn ? (
              <>
                <li>
                  <Link
                    href="/posts/create"
                    className="text-neutral-700 hover:text-purple-700 transition"
                  >
                    Create Post
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      localStorage.removeItem("token");
                      localStorage.removeItem("user");
                      window.location.href = "/posts";
                    }}
                    className="text-neutral-700 hover:text-purple-700 transition"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    href="/auth/login"
                    className="text-neutral-700 hover:text-purple-700 transition"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/auth/register"
                    className="bg-purple-600 text-white px-4 py-2 rounded-2xl hover:bg-purple-700 transition"
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>

        <button
          className="md:hidden text-neutral-800 border p-1 border-black/20"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/10 bg-white">
          <ul className="flex flex-col px-6 py-4 gap-4 text-sm font-medium">
            <li>
              <Link
                href="/posts"
                onClick={() => setOpen(false)}
                className="block text-neutral-700 hover:text-purple-700"
              >
                Posts
              </Link>
            </li>

            {isLoggedIn ? (
              <>
                <li>
                  <Link
                    href="/posts/create"
                    onClick={() => setOpen(false)}
                    className="block text-neutral-700 hover:text-purple-700"
                  >
                    Create Post
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      localStorage.removeItem("token");
                      localStorage.removeItem("user");
                      window.location.href = "/posts";
                    }}
                    className="block text-neutral-700 hover:text-purple-700 text-left"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    href="/auth/login"
                    onClick={() => setOpen(false)}
                    className="block text-neutral-700 hover:text-purple-700"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/auth/register"
                    onClick={() => setOpen(false)}
                    className="block bg-purple-600 text-white text-center py-2 rounded-2xl hover:bg-purple-700 transition"
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
