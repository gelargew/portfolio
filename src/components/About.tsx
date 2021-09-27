import React, { useEffect, useState, useRef, useMemo } from 'react'
import anime from 'animejs'

const PASSIONS = [
    'AI',
    'CLASSICAL PIANO',
    'GENERATIVE ART',
    'BIKING',
    'VR/AR',
    'GAMES',
    '3D MODELLING'
]

export default function About({...props}) {
    const [idx, setIdx] = useState(0)
    const passion = useMemo(() => PASSIONS[idx], [idx])
    const spanRef = useRef<HTMLSpanElement>()
    const animate = () => {
        anime({
            targets: spanRef.current,
            opacity: [0, 1],
            translateY: [30, 0]
        })
    }
    
    

    useEffect(() => {
        const interval = setInterval(() => {
            setIdx(prev => (prev + 1) % PASSIONS.length)
            animate()
        }, 2500)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className='about' {...props}>
            <div className='aboutme'>
                HI, MY NAME IS GELAR RUSTIAWAN. I`M A WEB DEVELOPER (WHATEVER THAT MEAN).<br/>
                MY GOAL IS TO SHOW PEOPLE THE POTENTIAL OF WEB BROWSER AND 
                MAKE IT MORE ACCESIBLE. <br/> OTHER THAN THAT, I ALSO HAVE PASSION FOR <span className='passions' ref={spanRef} >{passion}</span>
            </div>
        </section>
    )
}