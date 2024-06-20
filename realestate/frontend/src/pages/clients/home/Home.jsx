import React from "react";
import HeroSection from "./HeroSection";
import ProjectSection from "./ProjectSection";
import EasyStepsSection from "./EasyStepsSection";
import AboutUsSection from "./AboutUsSection";
import MapSection from "./MapSection";
import ContactSection from "./ContactSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProjectSection />
      <EasyStepsSection />
      <MapSection />
      <AboutUsSection />
      <ContactSection />
    </div>
  );
}
