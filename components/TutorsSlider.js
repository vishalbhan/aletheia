import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import gsap from 'gsap/dist/gsap'
import { urlFor } from 'utils/urlFor'

export default function TutorsSlider({ tutorsContent }) {
	const [activeSlide, setActiveSlide] = useState({})
	const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const [tutors] = useState(tutorsContent.map(tutor => {
    return {
      imgName: urlFor(tutor.image).url(),
      name: tutor.name,
      qualification: tutor.qualification,
      about: tutor.about
    }
  }))

	useEffect(() => {
		setActiveSlide(tutors[0])
		setActiveSlideIndex(0)
	}, [])

	const goToSlide = (number) => {
		const tl = gsap.timeline({})
		tl.to('.tutors-card-content', { duration: 0.6, opacity: 0, ease: 'cubic-bezier(.55,0,.1,1)' })
		setTimeout(() => {
			setActiveSlide(tutors[number])
			setActiveSlideIndex(number)
		}, 600)
		tl.to('.tutors-card-content', { duration: 0.6, opacity: 1, ease: 'cubic-bezier(.55,0,.1,1)' })
	}

	const prevSlide = () => {
		if (activeSlideIndex === 0) {
			goToSlide(tutors.length - 1)
		} else {
			goToSlide(activeSlideIndex - 1)
		}
	}

	const nextSlide = () => {
		if (tutors.length - 1 === activeSlideIndex) {
			goToSlide(0)
		} else {
			goToSlide(activeSlideIndex + 1)
		}
	}

	return (
		<div className="tutors-slider-container fade-up" data-scroll>
			<div className="tutors-slider-card">
				<div className="tutors-card-content">
					<div className="tutor-image">
            {
              tutorsContent.map((tutor, index) => (
                <div className={`${activeSlideIndex === index ? 'd-block' : 'd-none'}`} key={`tut-${index}`}><Image src={urlFor(tutor.image).url()} width={272} height={350} priority /></div>
              ))
            }
					</div>
					<div className="tutor-about-container">
						<div className="tutor-about text-left">
							<p dangerouslySetInnerHTML={{ __html: activeSlide?.about }} />
						</div>
					</div>
					<div className="tutor-details">
						<div className="tutor-name text-white">{activeSlide?.name}</div>
						<div className="tutor-qualification"><em>{activeSlide?.qualification}</em></div>
					</div>
				</div>
			</div>
			<div className="slider-nav">
				<div className="slider-nav-prev" onClick={() => prevSlide()}><BsArrowLeft /></div>
				<div className="slider-nav-items">
					{
						tutors.map((tutor, index) => (
							<div className={`slider-nav-item ${index === activeSlideIndex ? 'active' : ''}`} onClick={() => goToSlide(index)} key={`tut-${index}`}>
								{index + 1}
							</div>
						))
					}
				</div>
				<div className="slider-nav-next" onClick={() => nextSlide()}><BsArrowRight /></div>
			</div>
		</div>
	)
}
