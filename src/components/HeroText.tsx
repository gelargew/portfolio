
import React, { useLayoutEffect, useRef} from 'react';
import '../styles/anime.css'
import anime from 'animejs'

export default function HeroText({text='', delay=0, withLine=false, ...props}) {
    const letters = useRef<HTMLSpanElement>()
    const line = useRef<HTMLSpanElement>()

    const animate = () => {
        anime.timeline().add({delay: delay})
        .add({
          targets: line.current,
          scaleX: [0,1],
          opacity: [0.5,1],
          easing: "easeInOutExpo",
          duration: 900
        }).add({
          targets: letters.current.children,
          opacity: [0,1],
          translateX: [40,0],
          translateZ: 0,
          scaleX: [0.3, 1],
          easing: "easeOutExpo",
          duration: 800,
          offset: '-=600',
          delay: anime.stagger(400)
        })
        .add({
            targets: line.current,
            scaleX: [1, 0],
            opacity: [1,0.3],
            easing: "easeInOutExpo",
            duration: 900
        })
    }

    useLayoutEffect(() => {
        animate()
    }, [])

    return (
        <h1 className="ml14" {...props}>
            <span className="text-wrapper">
                <span ref={letters} className="letters">
                    {text.split(/(\s+)/).map((l, i) => <span key={i} className='letter'>{l}</span>)}
                </span>
                {withLine && <span ref={line} className="line"></span>}
            </span>
        </h1>
    )
}