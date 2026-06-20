"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    const children = el.querySelectorAll(".animate-in");

    children.forEach((child, i) => {
      const element = child as HTMLElement;
      element.style.opacity = "0";
      element.style.transform = "translateY(20px)";

      const timer = setTimeout(() => {
        element.style.transition =
          "opacity 0.8s ease-out, transform 0.8s ease-out";
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }, 200 + i * 120);

      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="bg-bg pt-32 pb-24 md:pt-40 md:pb-32">
      <div ref={sectionRef} className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-in mb-6">
            <Badge>Women in Tech Community — Bangalore</Badge>
          </div>

          <Heading tag="h1" className="text-5xl md:text-6xl font-semibold tracking-tight animate-in">
            Empowering women to{" "}
            <span className="italic text-accent">build, launch, and lead</span>{" "}
            through technology
          </Heading>

          <p className="animate-in mx-auto mt-6 max-w-2xl text-lg text-muted-fg">
            SheBuilds Bangalore is a community helping women gain skills,
            collaborate on projects, find mentors, attend workshops, and grow
            meaningful careers in technology, design, and startups.
          </p>

          <div className="animate-in mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="https://www.shebuildsecosystem.com/register"
              external
            >
              Join the Community
            </Button>
            <Button href="#about" variant="secondary">
              Learn More
            </Button>
          </div>
        </div>

        <div className="animate-in mx-auto mt-16 max-w-6xl">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface p-1">
            <div className="relative aspect-[16/9] md:aspect-[5/3]">
              <Image
                src="/gallery/img1.png"
                alt="SheBuilds Bangalore Community Event"
                fill
                priority
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
