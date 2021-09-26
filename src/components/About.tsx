import React, { useEffect, useState, useRef } from 'react'
import anime from 'animejs'

const PASSIONS = [
    'CLASSICAL PIANO',
    'AI',
    'GENERATIVE ART',
    'BIKING',
    'VR/AR'
]

export default function About({...props}) {
    const [passion, setPassion] = useState(PASSIONS[2])
    const spanRef = useRef<HTMLSpanElement>()
    const animate = () => {
        anime({
            targets: spanRef.current,
            opacity: [
                {value: 1, duration: 1000, delay: 1500},
                {value: 0, duration: 500}
            ],
            loop: true
        })
    }
    
    

    useEffect(() => {
        animate()
    }, [passion])

    return (
        <section className='about' {...props}>
            <div className='aboutme'>
                HI, MY NAME IS GELAR RUSTIAWAN. I`M A WEB DEVELOPER (WHATEVER THAT MEAN).<br/>
                MY GOAL IS TO SHOW PEOPLE THE POTENTIAL OF WEB BROWSER AND 
                MAKE IT MORE ACCESIBLE. <br/>
            </div>
        </section>
    )
}