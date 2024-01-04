import React from "react";

import Hero from "../components/landing-page/Hero";
import About from "../components/landing-page/About";
import VisiMisi from "../components/landing-page/VisiMisi";
import Division from "../components/landing-page/Division";
import NavBar from "../components/landing-page/NavBar";
import FooterComponent from "../components/landing-page/FooterComponent";
import ProgramKerja from "../components/landing-page/ProgramKerja";

function LandingPage() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <VisiMisi />
      <Division />
      <ProgramKerja />
      <FooterComponent />
    </div>
  );
}

export default LandingPage;
