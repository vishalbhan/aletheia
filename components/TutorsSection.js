import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from "gsap/dist/SplitText";
import birdofparadise from '../public/images/birdofparadise.png'
import athamos from '../public/images/athamos.png'
import kalle from '../public/images/kalle.png'
import lee from '../public/images/lee.png'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function TutorsSection() {
    const sectionRef = useRef()
    const titleRef = useRef()
    const imageRef = useRef()

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
                tl.from(imageRef.current, 1.5, { opacity: 0, y: 100, scale: 0.5 }, "-=1")
                tl.staggerFrom(".tutors-item", 1.5, { opacity: 0, y: 50 }, 0.4)
            }
        })

        ScrollTrigger.create({
            trigger: sectionRef.current,
            fastScrollEnd: true,
            start: "top 10%",
            end: "bottom 10%",
            onToggle: self => self.isActive ? gsap.to("body", { duration: 0.3, background: "#122223" }) : ''
        })
    }, [])

    return (
        <section id="tutors" className="place-items-center" ref={sectionRef}>
            
            <div className="position-absolute values-image" ref={imageRef}>
                <Image src={birdofparadise} alt="" />
            </div>

            <div className="position-absolute z-1">
                <h1 ref={titleRef}>Meet Our Tutors</h1>
                <div className="tutors-grid">
                    <div className="tutors-item">
                        <div className="tutor-image"><Image src={athamos} /></div>
                        <div className="tutor-name">Dr. Andreas Stradis</div>
                        <div className="tutor-qualification">PhD MSc MA (Oxon)</div>
                        <p className="tutor-about">
                            Andreas read English Literature at Magdalen College, Oxford, before going on to complete his MA in International Relations at the LSE. He won an AHRC scholarship for his PhD at the University of Bristol, balancing research with service as an officer in the British Army Reserve. He then spent two years in government on the Civil Service Fast Stream and a year at Barclays Bank before deciding to pursue teaching full-time. His continues his own research in Art History at the University of Zürich whilst completing Yoga Teacher Training.
                        </p>
                    </div>
                    <div className="tutors-item">
                        <div className="tutor-image"><Image src={athamos} /></div>
                        <div className="tutor-name">Dr. Athamos Stradis</div>
                        <div className="tutor-qualification">PhD BPhil (Oxon) MSci</div>
                        <p className="tutor-about">
                            After studying astrophysics at UCL, Athamos gravitated towards the philosophical questions of science, going on to study them at Oriel College, Oxford. Athamos completed his PhD on the 'arrow of time' at King's College London, where he won the King’s Teaching Excellence Award and the Jacobsen Prize in Philosophy. Today he continues to be an active researcher in metaphysics and philosophy of physics, and pursues his love of drawing as an illustrator for Philosophy Now magazine.
                        </p>
                    </div>
                    <div className="tutors-item">
                        <div className="tutor-image"><Image src={kalle} /></div>
                        <div className="tutor-name">Dr. Kalle Timperi</div>
                        <div className="tutor-qualification">PhD MSc BSc</div>
                        <p className="tutor-about">
                            Kalle obtained his BSc and MSc in pure mathematics at the University of Helsinki, Finland. To satisfy his curiosity towards complex phenomena in nature and society, he went on to complete his PhD on random dynamical systems at Imperial College London. Kalle communicates scientific ideas with a combination of passion and devotion, and he received the second price in the Virtual Maths Symposium Competition at Imperial. Kalle is driven by the desire to uncover unifying threads between apparently disparate fields and activities, testified by his varied activity as a teacher, free-lance pianist and amateur Go player.
                        </p>
                    </div>
                    <div className="tutors-item">
                        <div className="tutor-image"><Image src={lee} /></div>
                        <div className="tutor-name">Lee Sharkey</div>
                        <div className="tutor-qualification">MSc, MSc, BA (Cantab)</div>
                        <p className="tutor-about">
                            Lee studied preclinical medicine and neuroscience at Pembroke College (Cambridge) and worked as a public health consultant at the World Health Organisation in the early years of his career. He was drawn away from a career in Health by his deep curiosity for artificial intelligence, which he studied throughout two MSc degrees: one in Data Analytics in Glasgow (awarded with Distinction) and the other in Neural Systems and Computation at ETH Zürich, where he worked as a teaching assistant. Currently, Lee is a PhD candidate in the Human and Machine Cognition lab at the University of Tübingen, where he researches how to build principles of human intelligence into machines.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}
