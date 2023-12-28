import React from "react";

import Hero from "../components/landing-page/Hero";
import About from "../components/landing-page/About";
import VisiMisi from "../components/landing-page/VisiMisi";
import Division from "../components/landing-page/Division";
import NavBar from "../components/landing-page/NavBar";

function LandingPage() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <VisiMisi />
      <Division />
    </>
  );
}

export default LandingPage;
