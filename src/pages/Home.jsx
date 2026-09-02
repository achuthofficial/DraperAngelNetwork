import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Ticker from '../components/chrome/Ticker.jsx'
import ScrollReadout from '../components/chrome/ScrollReadout.jsx'
import BackToTop from '../components/chrome/BackToTop.jsx'
import PillNav from '../components/chrome/PillNav.jsx'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import TimDraper from '../components/TimDraper.jsx'
import DraperTrackRecord from '../components/DraperTrackRecord.jsx'
import WhatIsDAN from '../components/WhatIsDAN.jsx'
import WhyDAN from '../components/WhyDAN.jsx'
import Pillars from '../components/Pillars.jsx'
import Features from '../components/Features.jsx'
import Membership from '../components/Membership.jsx'
import WhoShouldJoin from '../components/WhoShouldJoin.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import FoundingMember from '../components/FoundingMember.jsx'
import FocusAreas from '../components/FocusAreas.jsx'
import DraperEngagement from '../components/DraperEngagement.jsx'
import Commitment from '../components/Commitment.jsx'
import CTA from '../components/CTA.jsx'
import AccessPortal from '../components/AccessPortal.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [hash])

  return (
    <>
      <Ticker />
      <Navbar />
      <main>
        {/* --- who we are: the credential chain, before anything is asked for --- */}
        <Hero />
        <TimDraper />
        <DraperTrackRecord />
        <WhatIsDAN />

        {/* --- the opportunity, and what membership actually is --- */}
        <WhyDAN />
        <Pillars />
        <Features />
        <Membership />

        {/* --- fit, process and the founding-cohort offer --- */}
        <WhoShouldJoin />
        <HowItWorks />
        <FoundingMember />
        <FocusAreas />

        {/* --- proof, vision and the way in --- */}
        <DraperEngagement />
        <Commitment />
        <CTA />
        <AccessPortal />
      </main>
      <Footer />
      <ScrollReadout />
      <BackToTop />
      <PillNav />
    </>
  )
}
