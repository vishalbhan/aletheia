import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from "gsap/dist/SplitText";
import octopus from '../public/images/octopus.png'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function WhySection() {
    const sectionRef = useRef()
    const imageRef = useRef()
    const titleRef = useRef()

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
                tl.staggerFrom(split.chars, 0.4, { opacity: 0, y: 5 }, 0.03)
                tl.from(imageRef.current, 1.5, { opacity: 0, y: 100, scale: 0.5 })
                tl.staggerFrom(".why-para", 1.5, { opacity: 0, y: 40 }, 0.3, '-=1')
            }
        })

        ScrollTrigger.create({
            trigger: sectionRef.current,
            fastScrollEnd: true,
            start: "top 10%",
            end: "bottom 10%",
            onToggle: self => {
                if (self.isActive) {
                    gsap.to("body", { duration: 0.6, background: "#EAE5D2", ease: 'power1.inOut' })
                    gsap.set(sectionRef.current, { visibility: 'visible' });
                } else {
                    gsap.set(sectionRef.current, { visibility: 'hidden' });
                }
            }
        })
    }, [])

    return (
        <section id="values" className="place-items-center text-dark" ref={sectionRef}>

            <div className="position-absolute values-image" ref={imageRef}>
                <Image src={octopus} alt="" />
            </div>

            <div className="position-absolute">
                <h1 ref={titleRef}>Why Choose Aletheia?</h1>
                <p className="why-para">Everyone on our team is an <strong>expert</strong> in their field — whether it be ancient history, astrophysics, or artificial intelligence.</p>
                <p className="why-para">Our tutoring service is <strong>bespoke</strong> and constantly evolving, guided by our students' own curiosity and not the strictures of a standard syllabus.</p>
                <p className="why-para">You will study in a truly <strong>interdisciplinary</strong> environment, where the possibilities of your learning journey are supported by our team's mixed and complementary backgrounds.</p>
            </div>

        </section>
    )
}
