"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { faqs } from "@/data/Faqs";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-muted py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-14">
          <Heading tag="h2" className="mt-4">
            Got questions?
          </Heading>
          <p className="mt-4 text-lg leading-relaxed text-muted-fg max-w-2xl">
            Everything you need to know about SheBuilds Bangalore, our
            community, events, grants, and membership.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-lg border border-border bg-surface"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <h3 className="text-base font-semibold text-fg">
                    {faq.question}
                  </h3>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-muted-fg">
                    {isOpen ? (
                      <Minus className="h-3.5 w-3.5" />
                    ) : (
                      <Plus className="h-3.5 w-3.5" />
                    )}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 text-sm leading-relaxed text-muted-fg">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-lg border border-border bg-surface p-8">
          <Heading tag="h3">
            Still have questions?
          </Heading>
          <p className="mt-2 text-base text-muted-fg">
            Reach out and we&rsquo;ll be happy to help.
          </p>
          <Button
            href="mailto:hello@shebuildsbangalore.com"
            className="mt-6"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
