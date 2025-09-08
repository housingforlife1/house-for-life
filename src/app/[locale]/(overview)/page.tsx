import HomeHeaderSection from "@/components/sections/HeaderSections/HomeHeaderSection";
import { ContentWrapperSection } from "./sections/ContentWrapperSection";
import HousingProgramsSection from "./sections/HousingProgramsSection";
import MajorProblemsSection from "./sections/MajorProblemsSection";
import MissionSection from "./sections/MissionSection";
import NewsSection from "./sections/NewsSection";
import OurImpactSection from "./sections/OurImpactSection";
import PartnersSection from "./sections/PartnersSection";

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

      {/* Content Wrapper section*/}
      <ContentWrapperSection />
    </>
  );
}
