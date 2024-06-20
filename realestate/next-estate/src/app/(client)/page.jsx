import HeroSection from "./components/hero-section";
import ProjectSection from "./components/project-section";
import EasyStepsSection from "./components/easy-steps-section";
import AboutSection from "./components/about-section";
import MapSection from "./components/map-section";
import ContactSection from "./components/contact-section";

export default function Page() {
  return (
    <div>
      <HeroSection />
      <ProjectSection />
      <EasyStepsSection />
      <MapSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
