import { useEffect } from 'react'
import NavLogo from '@components/NavLogo'
import Image from 'next/image'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import gsap from 'gsap/dist/gsap'
import shell from '../public/images/shell.png'
import nautilus from '../public/images/nautilus.png'
import mushroom from '../public/images/mushrooms.png'

export default function Home() {
  const { scroll } = useLocomotiveScroll()

  useEffect(() => {
    document.querySelector('body').classList.add('bg-dark')
  }, [])

  useEffect(() => {
    if (scroll) {
      scroll.on('call', (obj) => {
        if (obj === 'different') {
          if (document.querySelector('body').classList.contains('bg-dark')) {
            document.querySelector('body').classList.remove('bg-dark')
            document.querySelector('body').classList.add('bg-cream')
          } else {
            document.querySelector('body').classList.remove('bg-cream')
            document.querySelector('body').classList.add('bg-dark')
          }
        }
      })
    }
  }, [scroll])

  return (
    <div data-scroll-section>

      <header>
        <div className="header-logo" data-scroll>
          <NavLogo />
        </div>
      </header>

      <section id="hero">
        <div className="intro-text" data-scroll>
          <h1>
            Advanced<br/>
            Private Tuition
          </h1>
        </div>
        <div className="header-navigation" data-scroll>
          <nav>
            <div className="nav-item">Who We Are</div>
            <div className="nav-item">Services</div>
            <div className="nav-item">Our Process</div>
            <div className="nav-item">Why Aletheia?</div>
          </nav>
        </div>
        <div className="header-cta">
          <button>Make An Enquiry</button>
        </div>
        <div className="hero-image-container" data-scroll>
          <div className="hero-image" data-scroll data-scroll-speed="5">
            <Image src={shell} />
          </div>
        </div>
      </section>

      <section id="about">
        
        <div data-scroll data-scroll-speed="3">
          <p className="about-text large" data-scroll>
            Aletheia is a highly selective community of doctoral-level educators, providing our students with a unique space in which academic research and tuition flourish symbiotically.
            <br /><br />
            Entwining our roots in the Oxbridge collegiate system with over a decade of tuition experience worldwide, we deliver a university environment for all students regardless of age.
          </p>
        </div>

        <div className="about-image" data-scroll data-scroll-speed="6">
          <Image src={nautilus} />
        </div>

      </section>

      <section id="services" className="text-left" data-scroll data-scroll-speed="2">
        <div className="container">

          <div className="overflow-hidden">
            <h1 data-scroll className="fade-up">Our Services</h1>
          </div>

          <div className="line" data-scroll></div>
          
          <div className="services-header text-center">
            <div className="overflow-hidden grid-3">
              <h2 data-scroll>School Tuition</h2>
              <h2 data-scroll>University Tuition</h2>
              <h2 data-scroll>Mentoring &amp; Advice</h2>
            </div>
          </div>

          <div className="line" data-scroll></div>

          <div className="services-items text-center grid-3" data-scroll>
            <div className="services-item fade-up" data-scroll>
              <p>lower school (up to 16)</p>
              <p>upper school (16+)</p>
            </div>
            <div className="services-item fade-up" data-scroll>
              <p>undergraduate</p>
              <p>postgraduate</p>
            </div>
            <div className="services-item fade-up" data-scroll>
              <p>interviews</p>
              <p>university applications</p>
              <p>careers advice</p>
            </div>
          </div>
        </div>

        <div className="mushroom-1" data-scroll data-scroll-speed="6">
          <Image src={mushroom} />
        </div>
      </section>

      <section id="different" className="text-right" data-scroll data-scroll-call="different" data-scroll-repeat data-scroll-offset="40%">
        <div className="container">

          <div className="overflow-hidden">
            <h1 className="fade-up"data-scroll data-scroll-offset="40%">What makes us different?</h1>
            <p className="different-text fade-up large text-dark delay-1" data-scroll data-scroll-offset="40%">
              We want to produce proactive young citizens of the world with a strong work ethic and carefully deliberated opinions.
              <br /><br />
              Regardless of the subject studied, we value interdisciplinary awareness and not myopic focus.
              <br /><br />
              At Aletheia, we believe academic honesty produces self-reliant, independent, and curious self-learners. Our job is to teach ourselves out of a job.
            </p>
          </div>

        </div>
      </section>

    </div>
  )
}
