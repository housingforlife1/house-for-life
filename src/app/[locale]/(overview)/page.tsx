import HomeHeaderSection from "@/components/sections/HeaderSections/HomeHeaderSection";
import MajorProblemsSection from "./sections/MajorProblemsSection";
import OurImpactSection from "./sections/OurImpactSection";
import PartnersSection from "./sections/PartnersSection";
import HousingProgramsSection from "./sections/HousingProgramsSection";
import MissionSection from "./sections/MissionSection";
import NewsSection from "./sections/NewsSection";

export default function Home() {
  return (
    <>
      <HomeHeaderSection/>
      
      {/* Major Problems Section */}
      <MajorProblemsSection />

      {/* Our Impact Section */}
      <OurImpactSection />

      {/* Partners Section */}
      <PartnersSection/>

      {/* Housing Programs Section */}
      <HousingProgramsSection />

      {/* Mission Section */}
      <MissionSection />

      {/* News Section */}
      <NewsSection />
    </>
  );
}
