import React, { useEffect, useMemo, useRef, useState } from 'react'
import anime from 'animejs'

import { WORKS } from '../CONSTANT/WORKS'
import { ArrowLeft, ArrowRight } from './Commons'
import useOnScreen from '../utils/useOnScreen'
import ImageCanvas from './meshes/ImageCanvas'



export default function Works({ ...props }) {
    const [projectIdx, setProjectIdx] = useState(0)
    const sectionRef = useRef()
    const onScreen = useOnScreen(sectionRef, '-50%')
    const heroRef = useRef<HTMLHeadingElement>()
    const titleRef = useRef<HTMLHeadingElement>()
    const techRef = useRef<HTMLDivElement>()
    const work = useMemo(() => WORKS[projectIdx], [projectIdx])
    const textureURLS = WORKS.reduce((prev, cur) => {
        return [...prev, cur.imageURL]
    }, [])

    const animate = () => {
        anime({
            targets: heroRef.current,
            opacity: [0, 1],
            delay: 1000
        })
        anime({
            targets: titleRef.current,
            opacity: [0, 1],
            delay: 1500
        })
        anime({
            targets: techRef.current.children,
            translateY: [70, 0],
            opacity: [0, 1],
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
        if (onScreen) animate()    
        else animateOut()
    }, [onScreen, projectIdx])

    return (
        <section ref={sectionRef} className='works' {...props}>
            <h1 ref={heroRef}>W O R K S</h1>
            <h1 ref={titleRef} className='work-title'>{work.title}</h1>
            
            <ArrowLeft onClick={() => setProjectIdx((projectIdx || WORKS.length) - 1)} />
            <ImageCanvas textureURLS={textureURLS} idx={projectIdx} />
            <ArrowRight onClick={() => setProjectIdx((projectIdx + 1) % WORKS.length)} />
                   
            <div ref={techRef} className='project-tech'>
                {work.tech.map(tech => <p key={tech} className='tech'><small>{tech}</small></p>)}
                {work.projectURL &&
                <a href={work.projectURL} target='_blank' >visit project</a>}              
            </div>
            <div className='project-description'><small>{work.timeline}</small><p>{work.description} </p></div>
        </section>
    )
}

