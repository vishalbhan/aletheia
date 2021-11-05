import { useEffect, useRef } from 'react'
import NavLogo from '@components/NavLogo'
import Image from 'next/image'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import shell from '../public/images/shell.png'
import nautilus from '../public/images/nautilus.png'
import mushroom from '../public/images/mushrooms.png'
import birdofparadise from '../public/images/birdofparadise.png'
import LogoTree from '@components/LogoTree'
import octopus from '../public/images/octopus.png'
import seahorseright from '../public/images/seahorseright.png'
import seahorseleft from '../public/images/seahorseleft.png'
import pineapple from '../public/images/pineapple.png'
import butterfly from '../public/images/butterfly.png'
import TutorsSlider from '@components/TutorsSlider'
import TestimonialSlider from '@components/TestimonialSlider'

export default function Home() {
  const { scroll } = useLocomotiveScroll()

  useEffect(() => {
    if (scroll) {
      scroll.on('call', (obj) => {
        if (obj === 'cream-section') {
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

  const goToAbout = () => {
    scroll && scroll.scrollTo("#about")
  }

  const goToDifferent = () => {
    scroll && scroll.scrollTo("#different", { duration: 1500 })
  }

  const goToWhy = () => {
    scroll && scroll.scrollTo("#why", { duration: 2000 })
  }

  const goToContact = () => {
    scroll && scroll.scrollTo("#contact")
  }

  return (
    <div data-scroll-section>

      <header>
        <div className="header-logo" data-scroll>
          <NavLogo />
        </div>
      </header>

      <section id="hero">
        <div className="hero-content">
          <div className="intro-text" data-scroll>
            <h1>
              Advanced<br/>
              Private Tuition
            </h1>
          </div>
          <div className="header-navigation" data-scroll>
            <nav>
              <div className="nav-item" onClick={goToAbout}>Who We Are</div>
              <div className="nav-item" onClick={goToDifferent}>Our Process</div>
              <div className="nav-item" onClick={goToWhy}>Why Aletheia?</div>
              <div className="nav-item" onClick={goToContact}>Make an Enquiry</div>
            </nav>
          </div>
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

        <div className="nautilus illustration right" data-scroll data-scroll-speed="5" data-scroll-offset="0,10%">
          <div className="scale">
            <Image src={nautilus} />
          </div>
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
              <h2 data-scroll>School<br/>Tuition</h2>
              <h2 data-scroll>University<br/>Tuition</h2>
              <h2 data-scroll>Mentoring &amp;<br/>Advice</h2>
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
              <p>university applications</p>
              <p>careers advice</p>
            </div>
          </div>
        </div>

        <div className="bird-of-paradise illustration left" data-scroll data-scroll-speed="4" data-scroll-offset="0,10%">
          <div className="scale">
            <Image src={birdofparadise} />
          </div>
        </div>
      </section>

      <section id="tutors" data-scroll data-scroll-speed="2">
        <div className="container">
          <h1 data-scroll className="fade-up">Our Tutors</h1>
          <TutorsSlider />
        </div>
      </section>

      <div data-scroll data-scroll-call="cream-section" data-scroll-repeat data-scroll-offset="40%">

        <section id="different" className="text-left">
          <div className="container">

            <div data-scroll>
              <h1 className="fade-up" data-scroll data-scroll-offset="40%" >What makes us different?</h1>
              <p className="different-text large text-dark fade-up delay-1" data-scroll data-scroll-offset="40%" >
                We want to produce proactive young citizens of the world with a strong work ethic and carefully deliberated opinions.
                <br /><br />
                Regardless of the subject studied, we value interdisciplinary awareness and not myopic focus.
                <br /><br />
                At Aletheia, we believe academic honesty produces self-reliant, independent, and curious self-learners. Our job is to teach ourselves out of a job.
              </p>
            </div>

            <div className="octopus illustration right" data-scroll data-scroll-speed="-2" data-scroll-offset="0,10%">
              <div className="scale">
                <Image src={octopus} />
              </div>
            </div>

          </div>
        </section>

        <section id="quote-1" data-scroll data-scroll-speed="-1">
          <div className="container">

            <div className="quote-1-container fade-up" data-scroll>
              <div className="quote-logo-container">
                <div className="quote-logo"><LogoTree /></div>
              </div>
              <div className="quote qoute-1-text">
                To teach is to create a space in which obedience to truth is practiced.<br/>
                — Parker Palmer
              </div>
            </div>

          </div>
        </section>

        <section id="ethos" className="text-right" data-scroll>
          <div className="container">

            <div className="overflow-hidden">
              <h1 className="fade-up" data-scroll>Our Ethos</h1>
              <p className="ethos-text fade-up large text-dark delay-1" data-scroll>
                Nothing we do in life can truly be boxed-off and isolated. Much like our planet, each individual is a complex ecosystem of processes, which must be balanced in order to be sustained.
                <br/><br/>
                Harmonising our students’ wider lives is as integral to our educational strategy as academia itself. Whether on the sports field or the yoga mat, in the dojo or amongst the stars, our emphasis on extra-curricular activity keeps our students in a continuous state of learning.
              </p>
            </div>

          </div>

          <div className="mushroom illustration left" data-scroll data-scroll-speed="3" data-scroll-offset="0,10%">
            <div className="scale">
              <Image src={mushroom} />
            </div>
          </div>

        </section>

        <section id="process" className="text-left text-dark" data-scroll>
          <div className="container">

            <h1 className="fade-up" data-scroll>Our Process</h1>

            <div className="process-item fade-up" data-scroll>
              <p className="process-number">1</p>
              <p className="process-text" data-scroll data-scroll-delay="0.10">We empower our students to navigate their own journey through the knowledge of our tutoring team. Our starting point is whatever already fans their curiousity, ignites their creativity, or sparks joy.</p>
            </div>

            <div className="process-item fade-up" data-scroll>
              <p className="process-number">2</p>
              <p className="process-text" data-scroll data-scroll-delay="0.10">Establishing a strong chemistry between tutor and tutee based on shared interests is vital. The importance we ascribe to this principle means that we are not always able to take on new students; far from it. But if the alignment is right, we provide our students with a platform for learning that can take them to the farthest reaches of their imagination.</p>
            </div>

            <div className="process-item fade-up" data-scroll>
              <p className="process-number">3</p>
              <p className="process-text" data-scroll data-scroll-delay="0.10">Whether the quest is to understand the ‘arrow of time’, the role of AI in evolutionary biology, or the influence of 19th century Japanese woodblock prints on contemporary manga, we harness students’ existing knowledge in a teaching environment where rapid learning feels like play.</p>
            </div>

            <div className="process-item fade-up" data-scroll>
              <p className="process-number">4</p>
              <p className="process-text" data-scroll data-scroll-delay="0.10">Our experience and our results testify to the importance of recapturing the spirit of adventure and immersion when learning. In this state of flow the mind is at its zenith, able to absorb, retain, and produce knowledge most readily.</p>
            </div>

            <div className="process-item fade-up" data-scroll>
              <p className="process-number">5</p>
              <p className="process-text" data-scroll data-scroll-delay="0.10">At Aletheia this cuts both ways; educators and students learn from one another and flourish. Our philosophy, based on over a decade of teaching experience, is that academic performance is an adjunct to  learning, not an end in itself.</p>
            </div>

          </div>

          <div className="pineapple illustration right" data-scroll data-scroll-speed="7" data-scroll-offset="0,10%">
            <div className="scale">
              <Image src={pineapple} />
            </div>
          </div>
        </section>

      </div>{/* end cream section */}

      <section id="quote-2">
        <div className="container">

            <div className="quote-2-container fade-up" data-scroll>
              <div className="quote-logo-container">
                <div className="quote-logo"><LogoTree /></div>
              </div>
              <div className="quote qoute-2-text">
              “Man is all symmetrie, Full of proportions, one limbe to another, And all to all the world besides: Each part may call the farthest, brother: For head with foot hath private amitie, And both with moons and tides.”<br/>
              - George Herbert, The Temple
              </div>
            </div>

            <div className="seahorse-left illustration left" data-scroll data-scroll-speed="6" data-scroll-offset="0,10%">
              <div className="scale">
                <Image src={seahorseleft} />
              </div>
            </div>

        </div>
      </section>

      <section id="why" className="text-left">
        <div className="container">

          <h1 className="why-title fade-up" data-scroll>Why Choose Aletheia?</h1>
          <p className="why-para fade-up delay-1" data-scroll>Everyone on our team is an <strong>expert</strong> in their field — whether it be ancient history, astrophysics, or artificial intelligence.</p>
          <p className="why-para fade-up delay-1" data-scroll>Our tutoring service is <strong>bespoke</strong> and constantly evolving, guided by our students' own curiosity and not the strictures of a standard syllabus.</p>
          <p className="why-para fade-up delay-1" data-scroll>You will study in a truly <strong>interdisciplinary</strong> environment, where the possibilities of your learning journey are supported by our team's mixed and complementary backgrounds.</p>

          <div className="butterfly illustration right" data-scroll data-scroll-speed="-3" data-scroll-offset="0,10%">
            <div className="scale">
              <Image src={butterfly} />
            </div>
          </div>

        </div>
      </section>

      <section id="testimonials" data-scroll>
        <div className="container" data-scroll>
          <h1 className="fade-up" data-scroll>Student Testimonials</h1>
          <TestimonialSlider />
        </div>
      </section>

    </div>
  )
}
