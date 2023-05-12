import { useEffect } from 'react'
import Image from 'next/image'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import shell from '../public/images/shell.png'
import nautilus from '../public/images/nautilus.png'
import mushroom from '../public/images/mushrooms.png'
import LogoTree from '@components/LogoTree'
import octopus from '../public/images/octopus.png'
import seahorseleft from '../public/images/seahorseleft.png'
import pineapple from '../public/images/pineapple.png'
import butterfly from '../public/images/butterfly.png'
import TutorsSlider from '@components/TutorsSlider'
import TestimonialSlider from '@components/TestimonialSlider'
import EnquiryForm from '@components/EnquiryForm'
import gsap from 'gsap/dist/gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Quote1 from '@components/Quote1'
import Quote2 from '@components/Quote2'
import Quote3 from '@components/Quote3'
import logo from '../public/images/logo.png'
// import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
// import ProcessSection from '@components/ProcessSection'
import ServicesSection from '@components/ServicesSection'
import birdofparadise from '../public/images/birdofparadise.png'
import sanityClient from 'sanityClient'
import {PortableText} from '@portabletext/react'

gsap.registerPlugin(ScrollTrigger)

export async function getStaticProps() {
  const content = await sanityClient.fetch('*[_type == "pageContent"][0]')
  const services = await sanityClient.fetch('*[_type == "services"] | order(order asc)')
  const tutors = await sanityClient.fetch('*[_type == "tutors"] | order(order asc)')
  const testimonials = await sanityClient.fetch('*[_type == "testimonials"] | order(order asc)')

  return {
    props: {
      content,
      services,
      tutors,
      testimonials
    }
  }
}


export default function Home({ content, services, tutors, testimonials }) {
  const { scroll } = useLocomotiveScroll()

  useEffect(() => {
    if (scroll) {
      scroll.on('call', (obj) => {
        console.log(scroll)
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

  useEffect(() => {
    gsap.utils.toArray(".illustration").forEach(target => {
      gsap.to(target, {
        scrollTrigger: {
          trigger: target,
          start: 'top bottom',
          scrub: true
        },
        y: -100,
        force3D: true
      });
    })

    gsap.to('.hero-image', {
      scrollTrigger: {
        trigger: '.hero-image',
        start: 'top top',
        scrub: true
      },
      y: -200,
      force3D: true
    });

    gsap.to('.mobile-hero-cta', {
      scrollTrigger: {
        trigger: '.mobile-hero-cta',
        start: 'top 20%',
        onEnter: () => document.querySelector('.mobile-hero-cta').classList.add('hide')
      }
    })
  }, [])

  const goToAbout = () => {
    scroll && scroll.scrollTo("#about")
  }

  const goToServices = () => {
    scroll && scroll.scrollTo("#services", { duration: 1500 })
  }

  const goToWhy = () => {
    scroll && scroll.scrollTo("#why", { duration: 2000 })
  }

  const goToTutors = () => {
    scroll && scroll.scrollTo("#tutors")
  }

  const goToTestimonials = () => {
    scroll && scroll.scrollTo("#testimonials")
  }

  const goToEnquiry = () => {
    scroll && scroll.scrollTo("#enquiry")
  }

  return (
    <div data-scroll-section>

      <header data-scroll>
        <div className="header-logo">
          <Image src={logo} alt="Aletheia Logo" priority />
        </div>
      </header>

      <section id="hero">
        <div className="hero-content">
          <div className="intro-text" data-scroll>
            <h1>Advanced Tuition</h1>
          </div>
          <div className="header-navigation" data-scroll>
            <nav>
              <div className="nav-item" onClick={goToAbout}>Who We Are</div>
              <div className="nav-item" onClick={goToServices}>Our Services</div>
              <div className="nav-item" onClick={goToTutors}>Our Tutors</div>
              <div className="nav-item" onClick={goToWhy}>Why Aletheia?</div>
              <div className="nav-item" onClick={goToTestimonials}>Testimonials</div>
              <div className="nav-item" onClick={goToEnquiry}>Enquiries</div>
            </nav>
          </div>
        </div>

        <div className="hero-image-container" data-scroll>
          <div className="hero-image" data-scroll data-scroll-speed="5">
            <Image src={shell} alt="" priority />
          </div>
        </div>

        <p className="mobile-hero-cta"><em>scroll down</em></p>

      </section>

      <div className="cream-section" data-scroll data-scroll-call="cream-section" data-scroll-repeat data-scroll-offset="40%">

        <section id="about">
          <div className="container">

            <div className="about-section">
              <p className="about-text text-left" data-scroll>
                {content.aboutSection1}
              </p>
              <div className="about-illustration octopus">
                <div className="illustration right" data-scroll data-scroll-speed="3" data-scroll-offset="0,10%">
                  <div className="scale">
                    <Image src={octopus} alt="" priority />
                  </div>
                </div>
              </div>
            </div>

            <div className="about-section">
              <p className="about-text about-text-right" data-scroll>
                {content.aboutSection2}
              </p>
              <div className="about-illustration butterfly">
                <div className="illustration left" data-scroll data-scroll-speed="3" data-scroll-offset="0,10%">
                  <div className="scale">
                    <Image src={butterfly} alt="" priority />
                  </div>
                </div>
              </div>
            </div>

            <div className="about-section">
              <p className="about-text text-left" data-scroll>
                {content.aboutSection3}
              </p>
              <div className="about-illustration nautilus">
                <div className="illustration right" data-scroll data-scroll-speed="3" data-scroll-offset="0,10%">
                  <div className="scale">
                    <Image src={nautilus} alt="" priority />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div> 
      {/* - - - - - - - end cream section */}

      <section id="quote-2">
        <div className="container">
            <div className="quote-2-container">
              <div className="quote-logo-container" data-scroll>
                <div className="quote-logo fade-up" data-scroll data-scroll-offset="60%" data-scroll-repeat={true}><LogoTree /></div>
              </div>
              <Quote3 />
            </div>
            <div className="seahorse-2 illustration left" data-scroll data-scroll-speed="6" data-scroll-offset="0,10%">
              <div className="scale">
                <Image src={seahorseleft} alt="" priority />
              </div>
            </div>
        </div>
      </section>

      <ServicesSection services={services} />

      {/* <ProcessSection /> */}

      <section id="quote-1" data-scroll>
        <div className="container">

          <div className="quote-1-container fade-up" data-scroll data-scroll-offset="20%">
            <div className="quote-logo-container">
              <div className="quote-logo"><LogoTree /></div>
            </div>
            <Quote1 />
          </div>

          <div className="bird-of-paradise illustration right" data-scroll data-scroll-speed="3" data-scroll-offset="0%">
            <div className="scale">
              <Image src={birdofparadise} alt="" priority />
            </div>
          </div>

        </div>
      </section>

      <section id="tutors" data-scroll>
        <div className="container">
          <h1 data-scroll className="fade-up">Our Tutors</h1>
          <TutorsSlider tutorsContent={tutors} />
        </div>
      </section>

      {/* <section id="mission" className="text-left">
        <div className="container">

          <div data-scroll>
            <h1 className="fade-up" data-scroll data-scroll-offset="40%" >Our Mission</h1>
            <p className="different-text large text-dark fade-up delay-1" data-scroll data-scroll-offset="40%" >
              Aletheia's mission bucks the trend of traditional private tuition: to launch energised and independent young minds into the world.
              <br/><br/>
              Regardless of the subject studied, we value interdisciplinary awareness and not myopic focus. Our young and eclectic team of educators is able to guide students beyond the standard syllabus, to the furthest reaches of their imagination.
            </p>
          </div>

          <div className="octopus illustration right" data-scroll data-scroll-speed="-2" data-scroll-offset="0,10%">
            <div className="scale">
              <Image src={octopus} alt="" priority />
            </div>
          </div>

        </div>
      </section> */}

      {/* <section id="quote-1" data-scroll data-scroll-speed="-1">
        <div className="container">

          <div className="quote-1-container fade-up" data-scroll>
            <div className="quote-logo-container">
              <div className="quote-logo"><LogoTree /></div>
            </div>
            <Quote1 />
          </div>

        </div>
      </section> */}

      {/* <section id="ethos" className="text-right" data-scroll>
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
            <Image src={mushroom} alt="" priority />
          </div>
        </div>

      </section> */}

      {/* <section id="philosophy" className="text-left text-dark" data-scroll>
        <div className="container">

          <h1 className="fade-up" data-scroll>Our Philosophy</h1>

          <div className="process-item fade-up" data-scroll>
            <p className="process-number">1</p>
            <p className="process-text" data-scroll data-scroll-delay="0.10">We empower our students to navigate their own journey through the knowledge of our tutoring team. Our starting point is whatever already fans their curiousity, ignites their creativity, or sparks joy.</p>
          </div>

          <div className="process-item fade-up" data-scroll>
            <p className="process-number">2</p>
            <p className="process-text" data-scroll data-scroll-delay="0.10">Establishing a strong chemistry between tutor and tutee based on shared interests is vital. If the alignment is right, we provide our students with a platform for learning that can take them to the farthest reaches of their imagination.</p>
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
            <Image src={pineapple} alt="" priority />
          </div>
        </div>
      </section> */}

      <div className="cream-section" data-scroll data-scroll-call="cream-section" data-scroll-repeat data-scroll-offset="40%">

        <section id="why" className="text-left">
          <div className="container">

            <h1 className="why-title fade-up" data-scroll>What Makes Us Different?</h1>
            <p className="why-para fade-up delay-1 text-dark" data-scroll>
              <PortableText value={content.different} />
            </p>

            <div className="pineapple illustration right" data-scroll data-scroll-speed="2" data-scroll-offset="0,10%">
              <div className="scale">
                <Image src={pineapple} alt="" priority />
              </div>
            </div>

          </div>
        </section>

        <section id="quote-3">
          <div className="container">
              <div className="quote-2-container fade-up" data-scroll data-scroll-offset="50%" data-scroll-repeat={true}>
                <div className="quote-logo-container">
                  <div className="quote-logo"><LogoTree /></div>
                </div>
                <Quote2 />
              </div>
              <div className="mushroom illustration left" data-scroll data-scroll-speed="6" data-scroll-offset="0,10%">
                <div className="scale">
                  <Image src={mushroom} alt="" priority />
                </div>
              </div>
          </div>
        </section>

      </div>
      {/* - - - - - - - end cream section 2 */}

      <section id="testimonials" className="place-items-center" data-scroll>
        <div className="container" data-scroll>
          <h1 className="fade-up" data-scroll>Student Testimonials</h1>
          <TestimonialSlider testimonialsContent={testimonials} />
        </div>
      </section>

      <section id="enquiry" className="text-left">
        <div className="container">

          <h1 className="fade-up" data-scroll>Make an Enquiry</h1>

          <div className="enquiry-form-container fade-up" data-scroll>
            <EnquiryForm />
          </div>

          <div className="nautilus-2 illustration left" data-scroll data-scroll-speed="4" data-scroll-offset="0,10%">
            <div className="scale">
              <Image src={nautilus} alt="" priority />
            </div>
          </div>

        </div>
      </section>

      <section id="join">
        <div className="container">
          <h1 className="fade-up" data-scroll>Become a Tutor</h1>
          <p className="large fade-up" data-scroll>
            <PortableText value={content.becomeATutor} />
          </p>
        </div>
      </section>

    </div>
  )
}
