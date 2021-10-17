import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import QuoteSection from '../components/QuoteSection'
import DifferentSection from '../components/DifferentSection'
import WhySection from '../components/WhySection'
import ProcessSection from '../components/ProcessSection'
import TutorsSection from '../components/TutorsSection'

export default function Home() { 
  return (
    <div>

      <Navigation />

      <div className="scroll-snap-container">
        
        <HeroSection />

        <AboutSection />

        <ServicesSection />

        <QuoteSection />

        <DifferentSection />

        <WhySection />

        <TutorsSection />

        <ProcessSection />

      </div>

    </div>
  )
}
