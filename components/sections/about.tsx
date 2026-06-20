import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";

const stats = [
  { number: "120+", label: "Events Hosted" },
  { number: "20+", label: "Projects Funded" },
  { number: "₹5L+", label: "Grants Distributed" },
  { number: "10K+", label: "Community Members" },
];

const values = [
  {
    title: "Hands-On Learning",
    description:
      "Workshops, mentorship, and build sessions focused on practical skills and real-world projects.",
  },
  {
    title: "Project Funding",
    description:
      "Micro-grants that help women turn ideas into products, startups, and impactful initiatives.",
  },
  {
    title: "Builder Network",
    description:
      "A thriving community where members collaborate, learn, and ship together.",
  },
];

export default function About() {
  return (
    <>
      <section id="about" className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <Heading tag="h2" className="mt-6">
                Building opportunities for women in&nbsp;technology.
              </Heading>
              <p className="mt-6 text-lg leading-relaxed text-muted-fg max-w-lg">
                SheBuilds Bangalore is a community dedicated to helping women
                learn, build, collaborate, and grow through workshops,
                mentorship, grants, hackathons, and networking opportunities.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-fg">
                We believe the best way to learn is by building. Every
                initiative is designed to help members create real projects,
                gain confidence, and unlock career opportunities.
              </p>
            </div>

            <div className="overflow-hidden rounded-lg border border-border bg-surface">
              <Image
                src="/gallery/about.jpg"
                alt="SheBuilds Bangalore Community"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <Heading tag="h2" className="mt-4">
              Numbers that reflect the community we&rsquo;re building together.
            </Heading>
          </div>

          <div className="mt-16 grid gap-8 grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-border bg-surface p-4 text-center"
              >
                <div className=" text-lg text-accent">{stat.number}</div>
                <div className="mt-2 text-sm text-muted-fg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <Heading tag="h2" className="mt-4">
              We focus on building, not just talking.
            </Heading>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-lg border border-border bg-surface p-4 transition-colors hover:border-accent/20 hover:bg-accent-light"
              >
                <h3 className="font-serif text-xl font-semibold tracking-tight text-fg">
                  {value.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-fg">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
