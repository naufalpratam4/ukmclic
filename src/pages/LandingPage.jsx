import React from "react";
import NavBar from "../components/landing-page/NavBar";
import Hero from "../components/landing-page/Hero";
import About from "../components/landing-page/About";
import VisiMisi from "../components/landing-page/VisiMisi";

function LandingPage() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <VisiMisi />
    </>
  );
}

export default LandingPage;
