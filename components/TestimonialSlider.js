import React, { useEffect, useState } from 'react'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import gsap from 'gsap/dist/gsap'

export default function TestimonialSlider() {
    const [activeSlide, setActiveSlide] = useState({})
    const [activeSlideIndex, setActiveSlideIndex] = useState(0)
    const [testimonials] = useState([
        {
            testimonial: '“Working with Andreas was a transformative year because it helped me find my voice in my writing. My essays culminated in a high first in my Master’s dissertation, in which I was able to write more creatively and analyse research materials more confidently than ever before. I am grateful for Andreas’ guidance and will carry this experience forward with me.”',
            student: "Carolina, King's College London",
        },
        {
            testimonial: '“Kalle Timperi was my senior under the same research group during my PhD. We had discussions together in the college café regarding research ideas. I remember especially during a few of our first meetings, he explained in detail about the central idea of our research goal in the group and it really got me motivated and excited about the research project. Particularly, I thought he was skilful in explaining complex ideas rigorously but at the same time found simple analogous ideas which allowed me to understand the whole picture more easily. His calm and composed character made these sessions enjoyable and we often talked through the evenings without realising it.”',
            student: "Wei Hao Tey, PhD in Mathematics, Imperial College London",
        },
        {
            testimonial: '“Andreas was instrumental in helping me discover my interests and writing style throughout university. He was able to guide me in fields stretching from psychology to international relations to economics, and has an incredibly impressive understanding of such a wide array of subjects. Andreas supported me through long coursework projects, exam periods and dissertations, teaching me how to think critically and creatively and how to write with conviction. He intuitively understands how to tease out new insights and make new discoveries, a skill that I unlocked in myself and that enabled my ideas to shine through my writing all the more clearly. I recommend Andreas without hesitation.”',
            student: "Julia, Sciences-Po and LSE",
        },
        {
            testimonial: '"Aletheia has been guiding our son Louis since summer 2020, preparing him for the AS levels, which he has passed with outstanding grades. Andreas taught him English Literature, History, Biology and Economics. His profound academic knowledge, combined with a longstanding teaching experience, makes him a highly commendable teacher. His approach is holistic: he teaches and lives values such as reliability, discipline, and honesty. As parents, we are always kept up to date. Louis is currently preparing for his A-levels and we are confident that the results will be good!"',
            student: "Patrick, Parent (Switzerland)"
        },
        {
            testimonial: '"In my first year of university, I was privileged to study philosophy with Athamos as my Graduate Teaching Assistant. I immensely enjoyed the time we spent engaging in philosophical discourse on a wide range of topics from epistemology to physics, both in and out of the classroom. Athamos brought the material alive, and all of his students came to seminars excited for our discussions. His feedback on my essays greatly improved my writing skills, helping me achieve the highest marks in my year. His "Teaching Excellence Award" was well deserved!”',
            student: "Daniel Cahn, King’s College London"
        }
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
                        <p>{activeSlide?.testimonial}</p>
                    </div>
                    <div className="student-name">
                        <p className="text-white">{activeSlide?.student}</p>
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
