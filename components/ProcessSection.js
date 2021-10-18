import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from "gsap/dist/SplitText";
import pineapple from '../public/images/pineapple.png'
import ProcessQuote from '../components/ProcessQuote'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function ProcessSection() {
    const sectionRef = useRef()
    const mainRef = useRef()
    const titleRef = useRef()
    const paraRef = useRef()
    const imageRef = useRef()
    const quoteRef = useRef()
    const testimonialRef = useRef()

    useEffect(() => {
        ScrollTrigger.create({
            trigger: mainRef.current,
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
                tl.from(imageRef.current, 1.5, { opacity: 0, y: 100, scale: 0.5 }, "-=1")
                tl.from(quoteRef.current, 2.5, { opacity: 0 })
            }
        })

        ScrollTrigger.create({
            trigger: sectionRef.current,
            fastScrollEnd: true,
            start: "top 10%",
            end: "bottom 10%",
            onToggle: self => self.isActive ? gsap.to("body", { duration: 0.3, background: "#EAE5D2" }) : ''
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
        <section id="process" ref={sectionRef}>

            <div className="different-section-1 place-items-center"ref={mainRef}>
                <div className="position-absolute process-image" ref={imageRef}>
                    <Image src={pineapple} alt="" />
                </div>

                <div>
                    <h1 ref={titleRef}>Our Process</h1>
                    <p ref={paraRef}>
                        We empower our students to navigate their own journey through the knowledge of our tutoring team. Our starting point is whatever already fans their curiousity, ignites their creativity, or sparks joy.
                        <br/><br/>
                        Establishing a strong chemistry between tutor and tutee based on shared interests is vital. The importance we ascribe to this principle means that we are not always able to take on new students; far from it. But if the alignment is right, we provide our students with a platform for learning that can take them to the farthest reaches of their imagination.
                        <br/><br/>
                        Whether the quest is to understand the ‘arrow of time’, the role of AI in evolutionary biology, or the influence of 19th century Japanese woodblock prints on contemporary manga, we harness students’ existing knowledge in a teaching environment where rapid learning feels like play.
                        <br/><br/>
                        Our experience and our results testify to the importance of recapturing the spirit of adventure and immersion when learning. In this state of flow the mind is at its zenith, able to absorb, retain, and produce knowledge most readily.
                        <br/><br/>
                        At Aletheia this cuts both ways; educators and students learn from one another and flourish. Our philosophy, based on over a decade of teaching experience, is that academic performance is an adjunct to  learning, not an end in itself.
                    </p>
                </div>
            </div>

            <div className="different-section-2" ref={quoteRef}>
                <ProcessQuote />
            </div>

            <div className="different-section-3 place-items-center" ref={testimonialRef}>
                <p className="testimonial">
                    “Andreas was instrumental in helping me discover my interests and writing style throughout university. He was able to guide me in fields stretching from psychology to international relations to economics, and has an incredibly impressive understanding of such a wide array of subjects. Andreas supported me through long coursework projects, exam periods and dissertations, teaching me how to think critically and creatively and how to write with conviction. He intuitively understands how to tease out new insights and make new discoveries, a skill that I unlocked in myself and that enabled my ideas to shine through my writing all the more clearly. I recommend Andreas without hesitation.”
                </p>
                <p className="font-weight-bold">Julia, Sciences-Po and LSE</p>
            </div>

        </section>
    )
}
