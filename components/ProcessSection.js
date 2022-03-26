import { useCallback } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import pineapple from '../public/images/pineapple.png'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'

export default function ProcessSection() {
  const processItems = [
    {
      title: 'Communication',
      description: 'We begin with a detailed discussion with both parents and students, together and separately. This helps us build the most comprehensive picture possible, enabling direct communication with all concerned.'
    },
    {
      title: 'Evaluation',
      description: 'We assess current academic records and marry these with the expertise of our tuition team. Where necessary, we ask prospective students to undertake a short written task for our evaluation.'
    },
    {
      title: 'Recommendation',
      description: "If we can assist, we make a recommendation for weekly contact time and duration, with an estimate in line with Aletheia's Schedule of Fees."
    },
    {
      title: 'Agreement',
      description: 'Tuition begins on an hourly basis during the first month, until the Aletheia Service Agreement is signed. There is no obligation on either side until the agreement is finalised.'
    },
    {
      title: 'Reporting',
      description: 'Delivered monthly, our thorough written reports detail the teaching covered in each lesson, with recommendations clearly set out for both students and parents. We review our strategy on a semesterly basis at least.'
    }
  ]
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section id="process" data-scroll>
      <div className="container">
        <div className="sticky-container" data-scroll>
          <h1 className="fade-up" data-scroll>Our Process</h1>
          <div className="embla fade-up" data-scroll ref={emblaRef}>
            <div className="embla__container process-cards">
              {
                processItems.map((item, index) => (
                  <div className="embla__slide process-card" key={`process-${index}`}>
                    <h2 className="process-card-title">{`${index+1}. ${item.title}`}</h2>
                    <p className="large">{item.description}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="slider-nav fade-up" data-scroll>
          <div className="slider-nav-prev" onClick={() => scrollPrev()}><BsArrowLeft /></div>
          <div className="slider-nav-next" onClick={() => scrollNext()}><BsArrowRight /></div>
        </div>
      </div>

      <div className="pineapple illustration" data-scroll>
        <div data-scroll data-scroll-speed="5" data-scroll-offset="0,10%">
          <div className="scale">
            <Image src={pineapple} alt="" priority />
          </div>
        </div>
      </div>
    </section>
  )
}
