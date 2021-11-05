import React, { useEffect, useState } from 'react'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'

export default function TestimonialSlider() {
    const [activeSlide, setActiveSlide] = useState({})
    const [activeSlideIndex, setActiveSlideIndex] = useState(0)
    const [testimonials] = useState([
        {
            testimonial: '“Working with Andreas was a transformative year because it helped me find my voice in my writing. My essays culminated in a high first in my Master’s dissertation, in which I was able to write more creatively and analyse research materials more confidently than ever before. I am grateful for Andreas’ guidance and will carry this experience forward with me.”',
            student: "Carolina, King's College London",
        },
        {
            testimonial: '“Working with Andreas was a transformative year because it helped me find my voice in my writing. My essays culminated in a high first in my Master’s dissertation, in which I was able to write more creatively and analyse research materials more confidently than ever before. I am grateful for Andreas’ guidance and will carry this experience forward with me.”',
            student: "Carolina, King's College London",
        },
        {
            testimonial: '“Working with Andreas was a transformative year because it helped me find my voice in my writing. My essays culminated in a high first in my Master’s dissertation, in which I was able to write more creatively and analyse research materials more confidently than ever before. I am grateful for Andreas’ guidance and will carry this experience forward with me.”',
            student: "Carolina, King's College London",
        },
        {
            testimonial: '“Working with Andreas was a transformative year because it helped me find my voice in my writing. My essays culminated in a high first in my Master’s dissertation, in which I was able to write more creatively and analyse research materials more confidently than ever before. I am grateful for Andreas’ guidance and will carry this experience forward with me.”',
            student: "Carolina, King's College London",
        },
        {
            testimonial: '“Working with Andreas was a transformative year because it helped me find my voice in my writing. My essays culminated in a high first in my Master’s dissertation, in which I was able to write more creatively and analyse research materials more confidently than ever before. I am grateful for Andreas’ guidance and will carry this experience forward with me.”',
            student: "Carolina, King's College London",
        },
        {
            testimonial: '“Working with Andreas was a transformative year because it helped me find my voice in my writing. My essays culminated in a high first in my Master’s dissertation, in which I was able to write more creatively and analyse research materials more confidently than ever before. I am grateful for Andreas’ guidance and will carry this experience forward with me.”',
            student: "Carolina, King's College London",
        },
    ])

    useEffect(() => {
        setActiveSlide(testimonials[0])
        setActiveSlideIndex(0)
    }, [])

    const goToSlide = (number) => {
        const tl = gsap.timeline({})
        tl.to('.testimonial-card-content', { duration: 0.6, opacity: 0, ease: 'cubic-bezier(.55,0,.1,1)' })
        setTimeout(() => {
            setActiveSlide(testimonials[number])
            setActiveSlideIndex(number)
        }, 600)
        tl.to('.testimonial-card-content', { duration: 0.6, opacity: 1, ease: 'cubic-bezier(.55,0,.1,1)' })
    }

    const prevSlide = () => {
        if (activeSlideIndex === 0) {
            goToSlide(testimonials.length - 1)
        } else {
            goToSlide(activeSlideIndex - 1)
        }
    }

    const nextSlide = () => {
        if (testimonials.length - 1 === activeSlideIndex) {
            goToSlide(0)
        } else {
            goToSlide(activeSlideIndex + 1)
        }
    }

    return (
        <div className="testimonial-slider-container fade-up" data-scroll>
            <div className="testimonial-card">
                <div className="testimonial-card-content">
                    <div className="testimonial">
                        <p>{activeSlide.testimonial}</p>
                    </div>
                    <div className="student-name">
                        <p className="font-weight-bold">{activeSlide.student}</p>
                    </div>
                </div>
            </div>
            <div className="slider-nav">
            <div className="slider-nav-prev" onClick={() => prevSlide()}><BsArrowLeft /></div>
                <div className="slider-nav-items">
                    {
                        testimonials.map((item, index) => (
                        <div className={`slider-nav-item ${index === activeSlideIndex ? 'active' : ''}`} onClick={() => goToSlide(index)}  key={`tes-${index}`}>
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
