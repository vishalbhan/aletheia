import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from "gsap/dist/SplitText";
import mushrooms from '../public/images/mushrooms.png'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function QuoteSection() {
    const sectionRef = useRef()
    const imageRef = useRef()
    const paraRef = useRef()

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
                tl.from(paraRef.current, 1, { opacity: 0, y: 20 })
                tl.from(imageRef.current, 1.5, { opacity: 0, y: 100, scale: 0.5 }, "-=1")
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
        <section id="values" className="place-items-center text-dark" ref={sectionRef}>

            <div className="position-absolute values-image" ref={imageRef}>
                <Image src={mushrooms} alt="" />
            </div>

            <p className="position-absolute" ref={paraRef}>
                Nothing we do in life can truly be boxed-off and isolated. Much like our planet, each individual is a complex ecosystem of processes, which must be balanced in order to be sustained.
                <br /><br />
                Harmonising our students’ wider lives is as integral to our educational strategy as academia itself. Whether on the sports field or the yoga mat, in the dojo or amongst the stars, our emphasis on extra-curricular activity keeps our students in a continuous state of learning.
            </p>

        </section>
    )
}
