import BoardMembersSection from "./sections/BoardMembersSection";
import DonationBenefitsSection from "./sections/DonationBenefitsSection";
import FundraisingCampaignSection from "./sections/FundraisingCampaignSection";
import HeroSection from "./sections/HeroSection";
import PartnersSection from "./sections/PartnersSection";

export default function DonationPage(){
    return (
        <>
            {/** Hero section */}
            <HeroSection /> 

            {/* Donation Benefits Section */}
            <DonationBenefitsSection />

            {/* Partners section */}
            <PartnersSection />

            {/* Fundraising Campaign Section */}
            <FundraisingCampaignSection /> 

            {/* Board Members Section   */}
            <BoardMembersSection /> 
        </>
    )
}