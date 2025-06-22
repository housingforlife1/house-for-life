import HeaderSection from '@/components/sections/HeaderSection/HeaderSection'
import AboutSection from './Sections/AboutSection'
import MembersSection from './Sections/MembersSection'
import PartnersSection from './Sections/PartnersSection'
import SupportOptionSection from '../../../../components/sections/SupportOptionSection'
import ValuesSection from './Sections/ValuesSection'

export default function AboutPage() {
  return (
    <>
      <HeaderSection />
      
      {/* About section with image */}
      <AboutSection />

      {/* Values section */}
      <ValuesSection />

      {/* Board members section */}
      <MembersSection />

      {/* Support options section */}
      <SupportOptionSection />

      {/* Partners section */}
      <PartnersSection />
    </>
  )
}
