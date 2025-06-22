import SupportOptionSection from "@/components/sections/SupportOptionSection";
import HeroSection from "./sections/HeroSection";
import PartnersSection from "./sections/PartnersSection";
import ProgramCardsSection from "./sections/ProgramCardsSection";

export default function Page() {
  return (
    <>
      {/* Hero section with background image and text */}
      <HeroSection />

       {/* Program Cards Section */}
      <ProgramCardsSection />

      {/* Support options section */}
      <SupportOptionSection />

      {/* Partners section */}
      <PartnersSection />
    </>
  );
}