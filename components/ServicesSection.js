import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from "gsap/dist/SplitText";
import pinecone from '../public/images/pinecone.png'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function ServicesSection() {
    const sectionRef = useRef()
    const titleRef = useRef()
    const paraRef = useRef()
    const imageRef = useRef()

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
            },
        })

        ScrollTrigger.create({
            trigger: sectionRef.current,
            fastScrollEnd: true,
            start: "top 10%",
            end: "bottom 10%",
            onToggle: self => {
                if (self.isActive) {
                    gsap.to("body", { duration: 0.3, background: "#122223" })
                    gsap.set(sectionRef.current, { visibility: 'visible' });
                } else {
                    gsap.set(sectionRef.current, { visibility: 'hidden' });
                }
            }
        })
    }, [])

    return (
        <section id="services" className="place-items-center" ref={sectionRef}>

            <div className="position-absolute services-image" ref={imageRef}>
                <Image src={pinecone} alt="" />
            </div>

            <div className="position-absolute">
                <h1 ref={titleRef}>
                    We provide three tiers of <br />
                    academic tuition
                </h1>

                <p ref={paraRef}>
                    SCHOOL TUITION<br />
                    — lower school (upto 16)<br />
                    — upper school (16+)<br />
                    <br />
                    UNIVERSITY TUITION<br />
                    — undergraduate<br />
                    — postgraduate<br />
                    <br />
                    MENTORING &amp; ADVICE<br />
                    — interviews<br />
                    — university applications<br />
                    — careers advice
                </p>
            </div>

        </section>
    )
}
