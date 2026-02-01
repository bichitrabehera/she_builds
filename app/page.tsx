import About from "@/components/About";
import FAQs from "@/components/Faqs";
import Hero from "@/components/Hero";
import People from "@/components/People";
import Posts from "@/components/Posts";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import React from "react";

const Home = () => {
  return (
    <>
      <SmoothScrollProvider>
        <Hero />
        <About />
        <Posts/>
        <People />
        <FAQs/>
      </SmoothScrollProvider>
    </>
  );
};

export default Home;
