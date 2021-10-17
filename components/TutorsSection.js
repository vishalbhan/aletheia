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
            start: "top 50%",
            once: true,
            onEnter: () => {
                gsap.to("body", { duration: 0.3, background: "#122223" })
                let tl = new gsap.timeline()
                let split = new SplitText(titleRef.current, { type: 'lines, chars' });
                tl.staggerFrom(split.chars, 0.4, { opacity: 0, y: 5, delay: 0 }, 0.03)
                tl.from(imageRef.current, 1.5, { opacity: 0, y: 100, scale: 0.5 }, "-=1")
                tl.staggerFrom(".tutors-item", 1.5, { opacity: 0, y: 50 }, 0.4)
            },
            onLeaveBack: () => {
                gsap.to("body", { duration: 0.3, background: "#EAE5D2" })
            }
        })
    }, [])

    return (
        <section id="tutors" className="place-items-center" ref={sectionRef}>
            <div className="position-absolute values-image" ref={imageRef}>
                <Image src={birdofparadise} alt="" />
            </div>

            <div>
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
                        <div className="tutor-qualification">PhD MSc MA (Oxon)</div>
                        <p className="tutor-about">
                            Andreas read English Literature at Magdalen College, Oxford, before going on to complete his MA in International Relations at the LSE. He won an AHRC scholarship for his PhD at the University of Bristol, balancing research with service as an officer in the British Army Reserve. He then spent two years in government on the Civil Service Fast Stream and a year at Barclays Bank before deciding to pursue teaching full-time. His continues his own research in Art History at the University of Zürich whilst completing Yoga Teacher Training.
                        </p>
                    </div>
                    <div className="tutors-item">
                        <div className="tutor-image"><Image src={kalle} /></div>
                        <div className="tutor-name">Dr. Andreas Stradis</div>
                        <div className="tutor-qualification">PhD MSc MA (Oxon)</div>
                        <p className="tutor-about">
                            Andreas read English Literature at Magdalen College, Oxford, before going on to complete his MA in International Relations at the LSE. He won an AHRC scholarship for his PhD at the University of Bristol, balancing research with service as an officer in the British Army Reserve. He then spent two years in government on the Civil Service Fast Stream and a year at Barclays Bank before deciding to pursue teaching full-time. His continues his own research in Art History at the University of Zürich whilst completing Yoga Teacher Training.
                        </p>
                    </div>
                    <div className="tutors-item">
                        <div className="tutor-image"><Image src={lee} /></div>
                        <div className="tutor-name">Dr. Andreas Stradis</div>
                        <div className="tutor-qualification">PhD MSc MA (Oxon)</div>
                        <p className="tutor-about">
                            Andreas read English Literature at Magdalen College, Oxford, before going on to complete his MA in International Relations at the LSE. He won an AHRC scholarship for his PhD at the University of Bristol, balancing research with service as an officer in the British Army Reserve. He then spent two years in government on the Civil Service Fast Stream and a year at Barclays Bank before deciding to pursue teaching full-time. His continues his own research in Art History at the University of Zürich whilst completing Yoga Teacher Training.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}
