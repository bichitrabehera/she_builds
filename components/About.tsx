"use client";
const values = [
  {
    title: "Turn Representation into Leadership",
    description:
      "From presence to power — enabling women to lead, influence, and drive change. SheBuilds provides mentorship programs, leadership workshops, and networking opportunities that help women transition from participants to decision-makers in the tech ecosystem.",
    stat: "63%",
    label: "Female Representation",
    icon: "👑",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Democratize Access to Resources",
    description:
      "Levelling the playing field with opportunities in tech, funding, mentorship, and growth. Through our initiatives, we've disbursed ₹5L+ in grants and support to women-led projects and startups.",
    stat: "₹5L+",
    label: "Grants Disbursed",
    icon: "⚡",
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Build an Action-Oriented Sisterhood",
    description:
      "Building a bold, collaborative network of women who create, launch, and scale together. Our community of 10,000+ members spans across India and APAC regions.",
    stat: "10,000+",
    label: "Community Members",
    icon: "🤝",
    color: "from-green-500 to-teal-400",
  },
];

const About = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white to-gray-50 py-20 md:py-28">
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold mt-2">
            We&apos;re{" "}
            <span className="bg-black font-[new] bg-clip-text text-transparent">
              Building
            </span>{" "}
            the Future
          </h1>
          <p className="mt-4 text text-gray-600 max-w-2xl mx-auto">
            A dynamic ecosystem empowering women in technology, leadership, and
            entrepreneurship
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <p className="text-gray-700 text leading-relaxed">
                  <strong className="font-bold text-gray-900">SheBuilds</strong>{" "}
                  is more than a community it&apos;s a movement. We foster a
                  collaborative environment where women grow as confident
                  creators, innovators, and leaders by providing essential
                  upskilling, mentorship, and access to opportunities.
                </p>

                <p className="text-gray-700 text leading-relaxed">
                  We believe that when women build, the future grows stronger.
                  Our ecosystem equips women with the tools, mentorship, and
                  support they need to thrive in tech, business, and beyond.
                </p>

                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      63%
                    </div>
                    <div className="text-sm text-gray-600">
                      Leadership Roles
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      10K+
                    </div>
                    <div className="text-sm text-gray-600">Active Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      ₹5L+
                    </div>
                    <div className="text-sm text-gray-600">Funds Deployed</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-8 h-full border border-purple-100">
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                    >
                      <div className="w-8 h-8 rounded-full bg-linear-to-r from-purple-500 to-pink-400 mb-2"></div>
                      <div className="h-2 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  ))}
                </div>
                <div className="absolute -bottom-4 -right-2 bg-white rounded-xl p-4 shadow-lg border border-gray-200">
                  <div className="flex items-center">
                    <div className="ml-3">
                      <div className="font-semibold">Community Growth</div>
                      <div className="text-sm text-gray-600">
                        +42% this quarter
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`absolute top-0 right-0 w-12 h-12 bg-linear-to-br ${value.color} opacity-10 rounded-tr-2xl rounded-bl-3xl`}
                ></div>

                <div className="relative z-10">

                  <h3 className="text-xl font-bold mb-4 group-hover:text-purple-700 transition-colors">
                    {value.title}
                  </h3>

                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {value.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div
                      className={`text-4xl font-bold bg-linear-to-r ${value.color} bg-clip-text text-transparent`}
                    >
                      {value.stat}
                    </div>
                    <div className="text-sm font-medium text-gray-500 mt-1">
                      {value.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-24">
          <div className="bg-linear-to-r from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 text-center border border-purple-100">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>

            <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              To empower women by providing a collaborative ecosystem that
              fosters upskilling, innovation, and mentorship enabling them to
              grow as confident creators, entrepreneurs, and changemakers.
            </p>

            <div className="relative max-w-xl mx-auto">
              <p className="text-2xl md:text-3xl font-bold italic text-gray-900 relative z-10">
                Built by her. Backed by boldness.
              </p>
            </div>

            <div className="mt-12">
              <p className="text-sm text-gray-600 mt-4">
                10,000+ members and growing
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default About;
