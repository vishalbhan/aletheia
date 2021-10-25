import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from "gsap/dist/SplitText";
import shell from '../public/images/shell.png'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function HeroSection() {
    const sectionRef = useRef()
    const titleRef = useRef()
    const buttonRef = useRef()
    const imageRef = useRef()

    useEffect(() => {
        gsap.from(sectionRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                onToggle: self => self.isActive ? gsap.to("body", { duration: 0.6, background: "#122223", ease: 'power1.inOut' }) : ''
            }
        });
    }, [])

    return (
        <section id="hero" className="place-items-center" ref={sectionRef}>

            <div className="position-absolute hero-image" ref={imageRef}>
                <Image src={shell} alt="" />
            </div>

            <div className="position-absolute">
                <h1 ref={titleRef}>Advanced Private Tuition</h1>
                <button ref={buttonRef}>Learn More</button>
            </div>

        </section>
    )
}
