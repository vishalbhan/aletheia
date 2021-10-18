import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from "gsap/dist/SplitText";
import AboutQuote from '../components/AboutQuote'
import seahorseleft from '../public/images/seahorseleft.png'
import seahorseright from '../public/images/seahorseright.png'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function AboutSection() {
    const sectionRef = useRef()
    const titleRef = useRef()
    const paraRef = useRef()
    const quoteRef = useRef()
    const imageLeftRef = useRef()
    const imageRightRef = useRef()

    useEffect(() => {
        ScrollTrigger.create({
            trigger: sectionRef.current,
            fastScrollEnd: true,
            start: "top 10%",
            end: "bottom 10%",
            once: true,
            onEnter: () => {
                gsap.set(sectionRef.current, { visibility: 'visible' });
                let tl = new gsap.timeline()
                let split = new SplitText(titleRef.current, { type: 'lines, chars' });
                tl.staggerFrom(split.chars, 0.4, { opacity: 0, y: 5, delay: 0 }, 0.03)
                tl.from(paraRef.current, 1, { opacity: 0, y: 20 })
                tl.from(imageLeftRef.current, 1.5, { opacity: 0, x: -100 }, "-=1")
                tl.from(imageRightRef.current, 1.5, { opacity: 0, x: 100 }, "-=1.5")
                tl.from(quoteRef.current, 2, { opacity: 0 }, "-=0.5" )
            }
        })

        ScrollTrigger.create({
            trigger: sectionRef.current,
            fastScrollEnd: true,
            start: "top 10%",
            end: "bottom 10%",
            onToggle: self => self.isActive ? gsap.to("body", { duration: 0.3, background: "#EAE5D2" }) : ''
        })
    }, [])

    return (
        <section id="about" ref={sectionRef}>

            <div className="about-quote text-left" ref={quoteRef}>
                <AboutQuote />
            </div>

            <div className="about-image about-image-left text-center" ref={imageLeftRef}>
                <Image src={seahorseleft} alt="" />
            </div>

            <div>
                <h1 ref={titleRef}>We Are Aletheia</h1>
                <p ref={paraRef}>
                    Aletheia is a highly selective community of both students and doctoral-level educators, a unique space in which academic research and tuition flourish symbiotically.
                    <br /><br />
                    Entwining our roots in the Oxbridge collegiate system with over a decade of tuition experience worldwide, we deliver a university environment for all students regardless of age.
                </p>
            </div>

            <div className="about-image about-image-right text-center" ref={imageRightRef}>
                <Image src={seahorseright} alt="" />
            </div>

        </section>
    )
}
