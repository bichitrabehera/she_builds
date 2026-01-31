"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const images = [
  "/gallery/img1.jpg",
  "/gallery/img2.jpg",
  "/gallery/img3.jpg",
  "/gallery/img4.jpg",
];

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    gsap.fromTo(
      textRef.current?.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      },
    );
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % images.length);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-purple-50 via-white to-pink-50">
      {/* blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300/60 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-pink-300/50 rounded-full blur-3xl animate-pulse" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
        {/* TEXT */}
        <div ref={textRef}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-neutral-900 max-w-4xl mx-auto">
            Building an ecosystem for{" "}
            <span className="font-[new] font-bold">
              <i>women</i>
            </span>{" "}
            who build in Bangalore
          </h1>

          <p className="mt-6 text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            SheBuilds Bangalore is a community-led space for learning,
            collaboration, and growth across tech, design, startups, and beyond.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="relative mt-24 mx-auto w-full max-w-4xl">
          <div className="relative h-100 overflow-hidden rounded-xl">
            {images.map((src, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  priority={i === 0}
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white text-black rounded-full w-10 h-10 flex items-center justify-center"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white text-black rounded-full w-10 h-10 flex items-center justify-center"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
