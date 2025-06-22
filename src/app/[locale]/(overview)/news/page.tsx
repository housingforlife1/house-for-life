import HeroSection from "./sections/HeroSection";
import NewsSection from "./sections/NewsSection";
import PartnersSection from "./sections/PartnersSection";

export default function NewsPage() {
  return (
    <>
        {/** Hero section */}
        <HeroSection />

        {/* Partners section */}
        <PartnersSection />

        {/* News Section */}
        <NewsSection />
    </>
  );
}