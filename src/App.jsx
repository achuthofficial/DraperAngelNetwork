import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Commitment from './components/Commitment.jsx'
import WhyDAN from './components/WhyDAN.jsx'
import Pillars from './components/Pillars.jsx'
import AboutStory from './components/AboutStory.jsx'
import Features from './components/Features.jsx'
import Membership from './components/Membership.jsx'
import WhoShouldJoin from './components/WhoShouldJoin.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import FoundingMember from './components/FoundingMember.jsx'
import FocusAreas from './components/FocusAreas.jsx'
import CTA from './components/CTA.jsx'
import VideoShowcase from './components/VideoShowcase.jsx'
import AccessPortal from './components/AccessPortal.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Commitment />
        <WhyDAN />
        <Pillars />
        <AboutStory />
        <Features />
        <Membership />
        <WhoShouldJoin />
        <HowItWorks />
        <FoundingMember />
        <FocusAreas />
        <CTA />
        <VideoShowcase />
        <AccessPortal />
      </main>
      <Footer />
    </>
  )
}
