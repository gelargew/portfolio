import React, { useEffect, useLayoutEffect, useRef } from 'react'
import anime from 'animejs'

export default function AnimatedP({ delay=0, className='', ...props}) {
    const ref = useRef<HTMLDivElement>(null)


    const fadeUpIn = () => {
        anime.timeline().add({ delay: delay })
        .add({
            targets: ref.current,
            translateY: [70, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 2000
        })
    }
    
    useLayoutEffect(() => {
        fadeUpIn()
    }, [])


    return <div ref={ref} className={`animated-p `+ className} {...props}></div>
}