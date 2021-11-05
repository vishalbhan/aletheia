import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import athamos from '../public/images/athamos.png'
import kalle from '../public/images/kalle.png'
import lee from '../public/images/lee.png'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import gsap from 'gsap/dist/gsap'

export default function TutorsSlider() {
    const [activeSlide, setActiveSlide] = useState({})
    const [activeSlideIndex, setActiveSlideIndex] = useState(0)
    const [tutors] = useState([
        {
            imgName: 'athamos',
            name: 'Dr. Andreas Stradis',
            qualification: 'PhD MSc MA (Oxon)',
            about: 'Andreas read English Literature at Magdalen College, Oxford, before going on to complete his MA in International Relations at the LSE. He won an AHRC scholarship for his PhD at the University of Bristol, balancing research with service as an officer in the British Army Reserve. He then spent two years in government on the Civil Service Fast Stream and a year at Barclays Bank before deciding to pursue teaching full-time. His continues his own research in Art History at the University of Zürich whilst completing Yoga Teacher Training.'
        },
        {
            imgName: 'athamos',
            name: 'Dr. Athamos Stradis',
            qualification: 'PhD BPhil (Oxon) MSci',
            about: "After studying astrophysics at UCL, Athamos gravitated towards the philosophical questions of science, going on to study them at Oriel College, Oxford. Athamos completed his PhD on the 'arrow of time' at King's College London, where he won the King’s Teaching Excellence Award and the Jacobsen Prize in Philosophy. Today he continues to be an active researcher in metaphysics and philosophy of physics, and pursues his love of drawing as an illustrator for Philosophy Now magazine."
        },
        {
            imgName: 'kalle',
            name: 'Dr. Kalle Timperi',
            qualification: 'PhD MSc BSc',
            about: 'Kalle obtained his BSc and MSc in pure mathematics at the University of Helsinki, Finland. To satisfy his curiosity towards complex phenomena in nature and society, he went on to complete his PhD on random dynamical systems at Imperial College London. Kalle communicates scientific ideas with a combination of passion and devotion, and he received the second price in the Virtual Maths Symposium Competition at Imperial. Kalle is driven by the desire to uncover unifying threads between apparently disparate fields and activities, testified by his varied activity as a teacher, free-lance pianist and amateur Go player.'
        },
        {
            imgName: 'lee',
            name: 'Lee Sharkey',
            qualification: 'MSc, MSc, BA (Cantab)',
            about: 'Lee studied preclinical medicine and neuroscience at Pembroke College (Cambridge) and worked as a public health consultant at the World Health Organisation in the early years of his career. He was drawn away from a career in Health by his deep curiosity for artificial intelligence, which he studied throughout two MSc degrees: one in Data Analytics in Glasgow (awarded with Distinction) and the other in Neural Systems and Computation at ETH Zürich, where he worked as a teaching assistant. Currently, Lee is a PhD candidate in the Human and Machine Cognition lab at the University of Tübingen, where he researches how to build principles of human intelligence into machines.'
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
                        <img src={`/images/${activeSlide?.imgName}.png`} />
                    </div>
                    <div className="tutor-about-container">
                        <div className="tutor-about text-left">
                            <p>{activeSlide?.about}</p>
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
                        <div className={`slider-nav-item ${index === activeSlideIndex ? 'active' : ''}`} onClick={() => goToSlide(index)}>
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
