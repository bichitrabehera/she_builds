"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What is SheBuilds Bangalore?",
    answer:
      "SheBuilds Bangalore is a community-led ecosystem for women who build — in tech, design, startups, and beyond. We focus on learning together, building projects, and creating meaningful connections in a safe and inclusive space.",
  },
  {
    question: "Who can join the community?",
    answer:
      "SheBuilds Bangalore is open to women and non-binary individuals who are interested in building, learning, or growing in tech-related fields. You don’t need prior experience — beginners are always welcome.",
  },
  {
    question: "Do I need a tech background to join?",
    answer:
      "Not at all. Whether you’re just starting out, switching careers, or already working in tech, you’re welcome here. The community includes developers, designers, product thinkers, founders, and curious learners.",
  },
  {
    question: "Is SheBuilds Bangalore free to join?",
    answer:
      "Yes. Joining the community is completely free. Some workshops or special events may have limited seats, but we always aim to keep participation accessible.",
  },
  {
    question: "What kind of events do you host?",
    answer:
      "We host meetups, hands-on build sessions, workshops, talks, and community-led discussions. Events focus on learning, collaboration, and real-world building experiences.",
  },
  {
    question: "How can I stay updated about events?",
    answer:
      "You can stay updated by joining our community channels and following us on social media. Event announcements are shared regularly with registration details.",
  },
  {
    question: "Can I volunteer or contribute?",
    answer:
      "Absolutely. Community members can contribute by volunteering, helping organize events, mentoring others, or leading sessions. We encourage everyone to build the community together.",
  },
  {
    question: "Is this only for people in Bangalore?",
    answer:
      "While our events are primarily based in Bangalore, anyone is welcome to join our online community and participate in virtual sessions when available.",
  },
  {
    question: "How can I collaborate or partner with SheBuilds?",
    answer:
      "If you’re interested in collaborations, partnerships, or sponsoring events, you can reach out to us via email or through our contact page.",
  },
  {
    question: "How do I join SheBuilds Bangalore?",
    answer:
      "You can join by clicking the ‘Join Community’ button on the website and following the instructions. Once you’re in, you’ll be part of our growing ecosystem.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold  text-black">FAQs</h2>
          <p className="mt-4 text-gray-600">
            Everything you need to know about SheBuilds.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-10 space-y-4 md:mt-16">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg transition hover:bg-gray-50 shadow-sm shadow-purple-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex items-center justify-between w-full px-4 py-5 sm:px-6"
                >
                  <span className="text font-semibold text-black text-left">
                    {faq.question}
                  </span>

                  <p className="w-6 h-6 text-gray-400 items-center justify-center flex text-2xl font-light transition-all">
                    {isOpen ? "−" : "+"}
                  </p>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-6 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
