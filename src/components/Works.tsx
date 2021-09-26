import React, { useEffect, useMemo, useRef, useState } from 'react'
import anime from 'animejs'

import { WORKS } from '../CONSTANT/WORKS'
import HeroText from './HeroText'
import { ArrowLeft, ArrowRight } from './Commons'
import useOnScreen from '../utils/useOnScreen'

export default function Works({ ...props }) {
    const [projectIdx, setProjectIdx] = useState(0)
    const sectionRef = useRef()
    const onScreen = useOnScreen(sectionRef, '-50%')
    const heroRef = useRef<HTMLHeadingElement>()
    const titleRef = useRef<HTMLHeadingElement>()
    const techRef = useRef<HTMLDivElement>()
    const work = useMemo(() => WORKS[projectIdx], [projectIdx])

    const animate = () => {
        anime.timeline()
        .add({
            targets: heroRef.current,
            opacity: [0, 1],
            easing: 'easeInQuad',

        })
        .add({
            targets: titleRef.current,
            opacity: [0, 1],
            easing: 'easeInQuad'
        })
        .add({
            targets: techRef.current.children,
            translateY: [70, 0],
            opacity: [0, 1],
            easing: 'easeInBack',
            delay: anime.stagger(200)
        })
    }

    const animateOut = () => {
        anime({
            targets: [heroRef.current, titleRef.current, ...techRef.current.children],
            opacity: [1, 0],
            duration: 1000
        })
    }

    useEffect(() => {
        if ( onScreen) {
            animate()
        }
        else {
            animateOut()
        }
    }, [onScreen])

    return (
        <section ref={sectionRef} className='works' {...props}>
            <h1 ref={heroRef}>W O R K S</h1>
            <h1 ref={titleRef} className='work-title'>{work.title}</h1>
            
            <ArrowLeft onClick={() => setProjectIdx((projectIdx || WORKS.length) - 1)} />
            <img src={work.imageURL} />
            <ArrowRight onClick={() => setProjectIdx((projectIdx + 1) % WORKS.length)} />
                   
            <div ref={techRef} className='project-tech'>
                {work.tech.map(tech => <p key={tech} className='tech'><small>{tech}</small></p>)}
            </div>
        </section>
    )
}

