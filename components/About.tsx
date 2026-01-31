import React from "react";

const About = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            About SheBuilds
          </h1>
          <p className="mt-3 text-black/60 text-sm md:text-base">
            Empowering women to build the future.
          </p>
        </div>

        {/* Description */}
        <div className="text-black/80 text-sm md:text-base leading-relaxed space-y-6">
          <p>
            <strong>SheBuilds</strong> is a dynamic ecosystem and community
            dedicated to empowering women in technology, leadership, and
            entrepreneurship. It fosters a collaborative environment where
            women grow as confident creators, innovators, and leaders by
            providing essential upskilling, mentorship, and access to
            opportunities that help them build impactful projects and careers.
          </p>

          <p>
            SheBuilds believes that when women build, the future grows stronger.
            The community equips women with the tools, mentorship, and support
            they need to thrive in tech, business, and beyond.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 mt-16">

          {/* Mission */}
          <div className="p-8 border border-black/5 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-4">
              Our Mission
            </h2>
            <p className="text-black/70 text-sm md:text-base leading-relaxed">
              To empower women by offering a collaborative ecosystem that
              encourages upskilling, innovation, and mentorship — enabling
              participants to grow into confident leaders and creators.
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 border border-black/5 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-4">
              Our Vision
            </h2>
            <p className="text-black/70 text-sm md:text-base leading-relaxed">
              SheBuilds envisions a world where women are not waiting for
              opportunities they create them. We champion equitable access to
              learning, networks, and resources across technology, creativity,
              and entrepreneurship.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
