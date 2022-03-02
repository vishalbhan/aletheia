import { useEffect } from 'react'
import Image from 'next/image'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import shell from '../public/images/shell.png'
import nautilus from '../public/images/nautilus.png'
import mushroom from '../public/images/mushrooms.png'
import birdofparadise from '../public/images/birdofparadise.png'
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
import logo from '../public/images/logo.png'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
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

  const goToMission = () => {
    scroll && scroll.scrollTo("#mission", { duration: 1500 })
  }

  const goToWhy = () => {
    scroll && scroll.scrollTo("#process", { duration: 2000 })
  }

  const goToEnquiry = () => {
    scroll && scroll.scrollTo("#enquiry")
  }

  const goToJoin = () => {
    scroll && scroll.scrollTo("#join")
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
              <div className="nav-item" onClick={goToMission}>Our Mission</div>
              <div className="nav-item" onClick={goToWhy}>Our Process</div>
              <div className="nav-item" onClick={goToEnquiry}>Make an Enquiry</div>
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

      <section id="about">
        <div className="container">

          <div data-scroll data-scroll-speed="3">
            <p className="about-text large" data-scroll>
              Aletheia is a highly selective community of doctoral-level educators, providing our students with a unique space in which academic research and tuition flourish symbiotically.
              <br /><br />
              Entwining our roots in the Oxbridge collegiate system with over a decade of tuition experience worldwide, we deliver a university environment for all students regardless of age.
            </p>
          </div>

          <div className="nautilus illustration right" data-scroll data-scroll-speed="6" data-scroll-offset="0,10%">
            <div className="scale">
              <Image src={nautilus} alt="" priority />
            </div>
          </div>

        </div>
      </section>

      <section id="services" className="text-left" data-scroll>
        <div className="container">
          <div className="desktop-services">
            <div className="seahorse-1 illustration left" data-scroll data-scroll-speed="6" data-scroll-offset="0,10%">
              <div className="scale">
                <Image src={seahorseleft} alt="" priority />
              </div>
            </div>
            <div className="overflow-hidden">
              <h1 data-scroll className="fade-up">Our Services</h1>
            </div>
            {/* School Tuition */}
            <div className="line" data-scroll data-scroll-offset="0,10%"></div>
            <div className="services-header text-center">
              <div className="overflow-hidden">
                <h2 className="text-gold" data-scroll data-scroll-offset="0,10%">School Tuition</h2>
              </div>
            </div>
            <div className="line" data-scroll data-scroll-offset="0,10%"></div>
            <div className="services-items text-left grid-2" data-scroll data-scroll-offset="0,10%">
              <div className="services-item fade-up" data-scroll data-scroll-offset="0,10%">
                <p className="font-weight-bold">lower school (up to 16)</p>
                <p className="sm">In these early years, the bedrock of a successful life are laid, through an energised, wide-ranging approach to learning. By unlocking the element of play in their academic work, we enable our students to lay the foundations for effortless, independent learning throughout their school careers.</p>
              </div>
              <div className="services-item fade-up" data-scroll data-scroll-offset="0,10%">
                <p className="font-weight-bold">lower school (up to 16)</p>
                <p className="sm">Whether students are struggling to keep up or not being stretched intellectually, we seek to improve performance by leaving the syllabus behind. Drawing on decades of experience with A-Levels, the International Baccalaureate, the US high school system, SATs and ACTs, we create unique programmes that incinerate old habits and ignite curiosity in our students. They emerge with a level of advanced knowledge and extracurricular activity that sets them apart from their peers and is essential for successful university applications.</p>
              </div>
            </div>
            {/* Univerity Tuition */}
            <div className="line" data-scroll data-scroll-offset="0,10%"></div>
            <div className="services-header text-center">
              <div className="overflow-hidden">
                <h2 className="text-gold" data-scroll data-scroll-offset="0,10%">University Tuition</h2>
              </div>
            </div>
            <div className="line" data-scroll data-scroll-offset="0,10%"></div>
            <div className="services-items text-left grid-2" data-scroll data-scroll-offset="0,10%">
              <div className="services-item fade-up" data-scroll data-scroll-offset="0,10%">
                <p className="font-weight-bold">undergraduate</p>
                <p className="sm">University can be daunting, whether grappling with new concepts, structuring academic work, establishing a routine or simply learning how to learn. Often, contact time with teaching staff is limited and questions arise faster than they can be answered during the bustle of term time. Aletheia provides the proximity of an Oxbridge tutorial or supervision anywhere in the world and at any time, supporting our undergraduates to proceed through their degrees with confidence and flair.</p>
              </div>
              <div className="services-item fade-up" data-scroll data-scroll-offset="0,10%">
                <p className="font-weight-bold">postgraduate</p>
                <p className="sm">From understanding the theoretical landscape in your degree to discovering a unique angle in your research, our roster of academic staff has seen it all. The unrivalled experience Aletheia's tutors bring to bear has helped students find confidence and direction with theses, research council grant applications, and job applications.</p>
              </div>
            </div>
            {/* Mentoring & Advice */}
            <div className="line" data-scroll data-scroll-offset="0,10%"></div>
            <div className="services-header text-center">
              <div className="overflow-hidden">
                <h2 className="text-gold" data-scroll data-scroll-offset="0,10%">Mentoring &amp; Advice</h2>
              </div>
            </div>
            <div className="line" data-scroll data-scroll-offset="0,10%"></div>
            <div className="services-items text-left grid-2" data-scroll data-scroll-offset="0,10%">
              <div className="services-item fade-up" data-scroll data-scroll-offset="0,10%">
                <p className="font-weight-bold">university applications</p>
                <p className="sm">What differentiates the successful university application is the sum of small, subtle differences. Aletheia's guidance comes from within the academic system itself, furnishing our students with the insights and skills necessary to stand out from an already gifted crowd. Guided by their passions in tandem with our expertise, our alumni go on to find that happiness breeds excellence on their academic journeys.</p>
              </div>
              <div className="services-item fade-up" data-scroll data-scroll-offset="0,10%">
                <p className="font-weight-bold">careers advice</p>
                <p className="sm">At Aletheia, scholarship is understood in the context of global citizenship. This is reflected in the calibre of our tutors, who are much more than scholars alone. Their industry experience spans diplomacy, finance, government, international organisations, medicine and the military, to name but a few. Aletheia's tutors bring all of this to bear, helping students embark on the journey of defining and achieving their own success.</p>
              </div>
            </div>
          </div>

          <div className="mobile-services">
            <h1 data-scroll className="fade-up">Our Services</h1>
            <div className="mobile-service-item">
              <h2 data-scroll>School Tuition</h2>
              <div className="line" data-scroll></div>
              <div className="services-item fade-up" data-scroll>
                <p>lower school (up to 16)</p>
                <p>upper school (16+)</p>
              </div>
            </div>
            <div className="mobile-service-item">
              <h2 data-scroll>University Tuition</h2>
              <div className="line" data-scroll></div>
              <div className="services-item fade-up" data-scroll>
                <p>undergraduate</p>
                <p>postgraduate</p>
              </div>
            </div>
            <div className="mobile-service-item">
              <h2 data-scroll>Mentoring &amp; Advice</h2>
              <div className="line" data-scroll></div>
              <div className="services-item fade-up" data-scroll>
                <p>university applications</p>
                <p>careers advice</p>
              </div>
            </div>
          </div>

        </div>

        <div className="bird-of-paradise illustration right" data-scroll data-scroll-speed="4" data-scroll-offset="0,10%">
          <div className="scale">
            <Image src={birdofparadise} alt="" priority />
          </div>
        </div>
      </section>

      <section id="tutors" data-scroll>
        <div className="container">
          <h1 data-scroll className="fade-up">Our Tutors</h1>
          <TutorsSlider />
          <button className="secondary" onClick={goToJoin}>Become a Tutor</button>
        </div>
      </section>

      <div data-scroll data-scroll-call="cream-section" data-scroll-repeat data-scroll-offset="40%">

        <section id="mission" className="text-left">
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
        </section>

        <section id="quote-1" data-scroll data-scroll-speed="-1">
          <div className="container">

            <div className="quote-1-container fade-up" data-scroll>
              <div className="quote-logo-container">
                <div className="quote-logo"><LogoTree /></div>
              </div>
              <Quote1 />
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
              <Image src={mushroom} alt="" priority />
            </div>
          </div>

        </section>

        <section id="philosophy" className="text-left text-dark" data-scroll>
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
        </section>

      </div>{/* end cream section */}

      <section id="quote-2">
        <div className="container">
            <div className="quote-2-container fade-up" data-scroll>
              <div className="quote-logo-container">
                <div className="quote-logo"><LogoTree /></div>
              </div>
              <Quote2 />
            </div>
            <div className="seahorse-2 illustration left" data-scroll data-scroll-speed="6" data-scroll-offset="0,10%">
              <div className="scale">
                <Image src={seahorseleft} alt="" priority />
              </div>
            </div>
        </div>
      </section>

      <section id="process">
        <div className="container">
          <div id="sticky" className="sticky-container" data-scroll data-scroll-sticky data-scroll-target="#process">
            <h1 className="fade-up" data-scroll>Our Process</h1>
            <div className="process-cards" data-scroll data-scroll-direction="horizontal" data-scroll-speed="31" data-scroll-target="#process">
              <div className="process-card">
                <h2 className="process-card-title">Communication</h2>
                <p className="large">We begin with a detailed discussion with both parents and students, together and separately. This helps us build the most comprehensive picture possible, enabling direct communication with all concerned.</p>
              </div>
              {/* <div className="process-icon"><HiOutlineArrowNarrowRight size="32" /></div> */}
              <div className="process-card">
                <h2 className="process-card-title">Evaluation</h2>
                <p className="large">We assess current academic records and marry these with the expertise of our tuition team. Where necessary, we ask prospective students to undertake a short written task for our evaluation.</p>
              </div>
              {/* <div className="process-icon"><HiOutlineArrowNarrowRight size="32" /></div> */}
              <div className="process-card">
                <h2 className="process-card-title">Recommendation</h2>
                <p className="large">If we can assist, we make a recommendation for weekly contact time and duration, with an estimate in line with Aletheia's Schedule of Fees.</p>
              </div>
              {/* <div className="process-icon"><HiOutlineArrowNarrowRight size="32" /></div> */}
              <div className="process-card">
                <h2 className="process-card-title">Agreement</h2>
                <p className="large">Tuition begins on an hourly basis during the first month, until the Aletheia Service Agreement is signed. There is no obligation on either side until the agreement is finalised.</p>
              </div>
              {/* <div className="process-icon"><HiOutlineArrowNarrowRight size="32" /></div> */}
              <div className="process-card">
                <h2 className="process-card-title">Reporting</h2>
                <p className="large">Delivered monthly, our thorough written reports detail the teaching covered in each lesson, with recommendations clearly set out for both students and parents. We review our strategy on a semesterly basis at least.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="text-left">
        <div className="container">

          <h1 className="why-title fade-up" data-scroll>What Makes Us Different?</h1>
          <p className="why-para fade-up delay-1" data-scroll>Everyone on our team is an <strong>expert</strong> in their field — whether it be ancient history, astrophysics, or artificial intelligence.</p>
          <p className="why-para fade-up delay-1" data-scroll>Our tutoring service is <strong>bespoke</strong> and constantly evolving, guided by our students' own curiosity and not the strictures of a standard syllabus.</p>
          <p className="why-para fade-up delay-1" data-scroll>You will study in a truly <strong>interdisciplinary</strong> environment, where the possibilities of your learning journey are supported by our team's mixed and complementary backgrounds.</p>

          <div className="butterfly illustration right" data-scroll data-scroll-speed="-4" data-scroll-offset="0,10%">
            <div className="scale">
              <Image src={butterfly} alt="" priority />
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
          <p className="fade-up" data-scroll>
            Interested in joining Aletheia's community of educators? 
            <br/><br/>
            If you feel inclined to inspire, please don't hesitate to contact us at <a className="text-gold" href="mailto:info@aletheia-tutors.ch" target="_blank" rel="noreferrer">info@aletheia-tutors.ch</a>.
            <br/><br/>
            On receipt of a full CV and one page formal letter of interest, one of our management team will get back to you as soon as possible.
          </p>
        </div>
      </section>

    </div>
  )
}
