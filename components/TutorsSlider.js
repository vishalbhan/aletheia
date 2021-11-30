import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import andreas from '../public/images/andreas.jpg'
import athamos from '../public/images/athamos.jpg'
import kalle from '../public/images/kalle.jpg'
import lee from '../public/images/lee.png'
import matthias from '../public/images/matthias.jpeg'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import gsap from 'gsap/dist/gsap'

export default function TutorsSlider() {
    const [activeSlide, setActiveSlide] = useState({})
    const [activeSlideIndex, setActiveSlideIndex] = useState(0)
    const [tutors] = useState([
        {
            imgName: 'andreas',
            name: 'Dr. Andreas Stradis',
            qualification: 'PhD MSc MA (Oxon)',
            about: 'Andreas read English Literature at Magdalen College, Oxford, before going on to complete his MA in International Relations at the LSE. He won an AHRC scholarship for his PhD at the University of Bristol, balancing research with service as an officer in the British Army Reserve. He then spent two years in government on the Civil Service Fast Stream and a year at Barclays Bank before deciding to pursue teaching full-time. His continues his own research in Art History at the University of Zürich whilst completing Yoga Teacher Training.'
        },
        {
            imgName: 'athamos',
            name: 'Dr. Athamos Stradis',
            qualification: 'PhD BPhil (Oxon) MSci',
            about: "After studying astrophysics at UCL, Athamos gravitated towards the philosophical questions of science, going on to study them at Oriel College, Oxford. Athamos completed his PhD on the 'arrow of time' at King's College London, where he won the King’s Teaching Excellence Award and the Jacobsen Prize in Philosophy. Today he continues to be an active researcher in metaphysics and philosophy of physics, and pursues his love of drawing as an illustrator for <em>Philosophy Now</em> magazine."
        },
        {
            imgName: 'kalle',
            name: 'Dr. Kalle Timperi',
            qualification: 'PhD MSc BSc',
            about: 'Having studied pure mathematics to masters level at the University at Helsinki, Kalle became intrigued by complex phenomena in society and nature. His curiosity led him to complete a PhD on random dynamical systems at Imperial College London, where his ability to communicate his ideas won him second prize in the Virtual Maths Symposium Competition. Kalle’s eclectic roles - as a teacher, a freelance pianist, and an amateur Go player - are reflective of his academic journey: to uncover the unifying threads between apparently disparate fields.'
        },
        {
            imgName: 'lee',
            name: 'Lee Sharkey',
            qualification: 'MSc, MSc, BA (Cantab)',
            about: 'Lee studied preclinical medicine and neuroscience Pembroke College, Cambridge, before working as as a public health consultant at the World Health Organisation. His fascination with artificial intelligence led him to complete to masters degrees - one at Glasgow, and a second at ETH Zurich, where he also worked as a teaching assistant. Currently, Lee is a PhD candidate at the University of Tübingen, where he investigating how to build principles of human intelligence into machines.'
        },
        {
            imgName: 'matthias',
            name: 'Dr. Matthias Galipaud',
            qualification: 'PhD, MSc, BSc',
            about: 'Matthias studied evolutionary biology and ecology at the University of Burgundy before going on to obtain his PhD on the evolution of mating behaviours. During his academic positions at the University of Bielefeld and the University of Zurich, Matthias steered his research towards the science of ageing, investigating why different organisms have different lifespans. At the same time, he has taught statistical methodology alongside biological topics in a wide range of contexts - not only to school and undergraduate students, but also to companies and medical institutions aiming to optimise the handling of data.'
        }
    ])

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
                        { <div className={`${activeSlideIndex === 0 ? 'd-block' : 'd-none'}`}><Image src={andreas} priority /></div> }
                        { <div className={`${activeSlideIndex === 1 ? 'd-block' : 'd-none'}`}><Image src={athamos} priority /></div> }
                        { <div className={`${activeSlideIndex === 2 ? 'd-block' : 'd-none'}`}><Image src={kalle} priority /></div> }
                        { <div className={`${activeSlideIndex === 3 ? 'd-block' : 'd-none'}`}><Image src={lee} priority /></div> }
                        { <div className={`${activeSlideIndex === 4 ? 'd-block' : 'd-none'}`}><Image src={matthias} priority /></div> }
                    </div>
                    <div className="tutor-about-container">
                        <div className="tutor-about text-left">
                            <p dangerouslySetInnerHTML={{ __html: activeSlide?.about}} />
                        </div>
                    </div>
                    <div className="tutor-details">
                        <div className="tutor-name">{activeSlide?.name}</div>
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
