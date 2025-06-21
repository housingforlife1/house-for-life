import HeaderSection from '@/components/sections/HeaderSection/HeaderSection'
import Image from 'next/image'
import React from 'react'
import AboutSection from './Sections/AboutSection'
import ValuesSection from './Sections/ValuesSection'
import MembersSection from './Sections/MembersSection'

export default function AboutPage() {
  return (
    <div>
      <HeaderSection />
      {/* About section with image */}
      <AboutSection />

      {/* Values section */}
      <ValuesSection />

      {/* Board members section */}
      <MembersSection />
    </div>
  )
}
