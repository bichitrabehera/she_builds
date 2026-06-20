"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-bg backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-fg">
          SheBuilds Blr<span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text text-muted-fg transition-colors hover:text-fg"
            >
              {link.label}
            </Link>
          ))}
          <Button href="https://www.shebuildsecosystem.com/register" external>
            Join Us
          </Button>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="flex items-center md:hidden"
          aria-label="Toggle menu"
        >
          {open ? (
            <>
              <Button variant="secondary">
                <div className=" text-sm flex items-center gap-2 text-black transition-colors hover:text-accent">
                  <span className="text-md">Close</span>
                </div>
              </Button>
            </>
          ) : (
            <>
              <Button>
                <div className=" text flex items-center gap-2 text-white transition-colors hover:text-accent">
                  <span className="text-md">Menu</span>
                </div>
              </Button>
            </>
          )}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-surface transition-all duration-300 md:hidden",
          open ? "h-screen" : "max-h-0",
        )}
      >
        <div className="space-y-1 px-4 py-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text text-muted-fg transition-colors hover:bg-muted hover:text-fg"
            >
              {link.label}
            </Link>
          ))}

          <Button
            href="https://www.shebuildsecosystem.com/register"
            external
            className="mt-2"
          >
            Join Us
          </Button>
        </div>
      </div>
    </header>
  );
}
