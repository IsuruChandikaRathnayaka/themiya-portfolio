// src/pages/Home.jsx
import React, { useRef, useEffect } from "react";
import Hero from "./Hero";
import About from "./About";

// import Gallery from "./Gallery";
import YouTube from "./YouTube";
import YouTubeMobile from "./YouTubeMobile";

export const Home = () => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  const plansRef = useRef(null);

  const scrollToPlans = () => {
    plansRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Hero />
      <About />
      <YouTube />
      <YouTubeMobile />
  
      {/* <Gallery /> */}
  
    </>
  );
};

export default Home;
