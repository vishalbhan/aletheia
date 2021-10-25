import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from "gsap/dist/SplitText";
import nautilus from '../public/images/nautilus.png'
import DifferentQuote from '../components/DifferentQuote'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function DifferentSection() {
    const sectionRef = useRef()
    const mainRef = useRef()
    const titleRef = useRef()
    const paraRef = useRef()
    const imageRef = useRef()
    const quoteRef = useRef()
    const testimonialRef = useRef()

    useEffect(() => {
        ScrollTrigger.create({
            trigger: sectionRef.current,
            fastScrollEnd: true,
            start: "top 10%",
            end: "bottom 10%",
            once: true,
            onEnter: () => {
                let tl = new gsap.timeline()
                let split = new SplitText(titleRef.current, { type: 'lines, chars' });
                tl.staggerFrom(split.chars, 0.4, { opacity: 0, y: 5, delay: 0 }, 0.03)
                tl.from(paraRef.current, 1, { opacity: 0, y: 20 })
                tl.from(imageRef.current, 1.5, { opacity: 0, y: 100, scale: 0.5 }, "-=1")
                tl.from(quoteRef.current, 2.5, { opacity: 0 })
            }
        })

        ScrollTrigger.create({
            trigger: sectionRef.current,
            fastScrollEnd: true,
            start: "top 10%",
            end: "bottom 10%",
            onToggle: self => {
                if (self.isActive) {
                    gsap.to("body", { duration: 0.6, background: "#122223", ease: 'power1.inOut' })
                    gsap.set(sectionRef.current, { visibility: 'visible' });
                } else {
                    gsap.set(sectionRef.current, { visibility: 'hidden' });
                }
            }
        })

        gsap.from(testimonialRef.current, {
            scrollTrigger: {
                trigger: testimonialRef.current,
                fastScrollEnd: true,
                start: "top 60%",
                once: true
            },
            duration: 1.5,
            opacity: 0,
            y: 40
        })
    }, [])

    return (
        <section id="different" ref={sectionRef}>

            <div className="different-section-1 place-items-center"ref={mainRef}>
                <div className="position-absolute different-image" ref={imageRef}>
                    <Image src={nautilus} alt="" />
                </div>

                <div>
                    <h1 ref={titleRef}>What makes us different?</h1>
                    <p ref={paraRef}>
                        We want to produce proactive young citizens of the world with a strong work ethic and carefully deliberated opinions.
                        <br /><br />
                        Regardless of the subject studied, we value interdisciplinary awareness and not myopic focus.
                        <br /><br />
                        At Aletheia, we believe academic honesty produces self-reliant, independent, and curious self-learners. Our job is to teach ourselves out of a job.
                    </p>
                </div>
            </div>

            <div className="different-section-2" ref={quoteRef}>
                <DifferentQuote />
            </div>

            <div className="different-section-3 place-items-center" ref={testimonialRef}>
                <p className="testimonial">
                    “Working with Andreas was a transformative year because it helped me find my voice in my writing. My essays culminated in a high first in my Master’s dissertation, in which I was able to write more creatively and analyse research materials more confidently than ever before. I am grateful for Andreas’ guidance and will carry this experience forward with me.”
                </p>
                <p className="font-weight-bold">Carolina, King's College London</p>
            </div>

        </section>
    )
}
