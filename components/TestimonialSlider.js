import React, { useEffect, useState } from 'react'

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
        setActiveSlide(testimonials[number])
        setActiveSlideIndex(number)
    }

    return (
        <div className="testimonial-slider-container fade-up" data-scroll>
            <div className="testimonial-card">
                <div className="testimonial">
                    <p>{activeSlide.testimonial}</p>
                </div>
                <div className="student-name">
                    <p className="font-weight-bold">{activeSlide.student}</p>
                </div>
            </div>
            <div className="slider-nav">
                {
                    testimonials.map((item, index) => (
                        <div className={`slider-nav-item ${index === activeSlideIndex ? 'active' : ''}`} onClick={() => goToSlide(index)}>
                            {index + 1}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
