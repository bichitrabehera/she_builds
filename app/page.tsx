import About from "@/components/sections/about";
import Faq from "@/components/sections/faq";
import Hero from "@/components/sections/hero";
import Team from "@/components/sections/team";
import Events from "@/components/sections/events";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Events />
      <Team />
      <Faq />
    </>
  );
}
