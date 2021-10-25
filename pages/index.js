import { useEffect } from 'react'
import NavLogo from '@components/NavLogo'
import Image from 'next/image'
import shell from '../public/images/shell.png'
import nautilus from '../public/images/nautilus.png'

export default function Home() {

  const call = () => {
    console.log('called')
  }

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
        <div className="hero-image" data-scroll data-scroll-speed="5">
          <Image src={shell} />
        </div>
      </section>

      <section id="about">
        
        <div className="fade-up" data-scroll>
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

          <div className="services-items text-center grid-3">
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
      </section>

    </div>
  )
}
