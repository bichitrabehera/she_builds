import Link from "next/link";
import { Instagram, Discord, LinkedIn, XLight } from "developer-icons";
import { Button } from "@/components/ui/button";

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/shebuilds_bangalore",
    icon: Instagram,
  },
  {
    name: "Discord",
    href: "https://discord.gg/mfjz9UkCe",
    icon: Discord,
  },
  {
    name: "X",
    href: "https://x.com/SheBuildsEco",
    icon: XLight,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/shebuildsecosystem/",
    icon: LinkedIn,
  },
];

const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
];

const RESOURCES = [
  {
    label: "Membership",
    href: "https://www.shebuildsecosystem.com/register",
  },
  { label: "Community Guidelines", href: "#" },
  { label: "Grants", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-fg text-bg">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold tracking-tight">
              SheBuilds<span className="text-accent">.</span>
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-bg/60">
              Building opportunities for women in technology through community,
              mentorship, workshops, grants, and hands-on learning experiences.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-bg/50">
              Navigation
            </h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-bg/60 transition-colors hover:text-bg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-bg/50">
              Resources
            </h4>
            <ul className="space-y-2">
              {RESOURCES.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-bg/60 transition-colors hover:text-bg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-bg/50">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-bg/10 text-bg/60 transition-colors hover:border-bg/30 hover:text-bg"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-bg/60">
              Follow us to stay updated on workshops, grants, community events,
              and opportunities.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-bg/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-bg/40 sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} SheBuilds Bangalore. All rights
            reserved.
          </p>
          <p>Built with care for the community.</p>
        </div>
      </div>
    </footer>
  );
}
