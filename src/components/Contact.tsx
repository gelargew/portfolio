import anime from 'animejs'
import React, { useEffect, useRef } from 'react'
import SOCIALS from '../CONSTANT/SOCIALS'
import { fadeUpIn } from '../utils/animes'
import useOnScreen from '../utils/useOnScreen'
import GeishaMaskCanvas from './meshes/GeishaMaskCanvas'


export default function Contact({...props}) {
    const rf = useRef()
    const contacts = useRef<HTMLDivElement>()
    const heroContact = useRef<HTMLHeadingElement>()
    const onScreen = useOnScreen(rf, '-50%')

    const animate = () => {
        anime.timeline()
        .add({
            delay: 1000
        })
        .add({
            targets: contacts.current.children,
            translateY: [70, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            delay: anime.stagger(200)
        })
        .add({
            targets: heroContact.current,
            opacity: [0, 1],
            easing: 'easeInQuad',
        })
    }

    const animateOut = () => {
        anime({
            targets: [heroContact.current, ...contacts.current.children],
            opacity: 0,
            duration: 1000
        })
    }

    useEffect(() => {
        if (onScreen) {
            animate()
        }
        else {
            animateOut()
        }
    }, [onScreen])

    return (
        <section ref={rf} className='contact' {...props}>
            <h1 ref={heroContact} className='hero-contact'>CONTACT</h1>
            <div ref={contacts} className='contacts'>
                {SOCIALS.map(SOCIAL => 
                    <a href={SOCIAL.url} key={SOCIAL.platform} target='_blank'>&#62; {SOCIAL.platform}</a> )}
            </div>
            <GeishaMaskCanvas className='geisha-mask' />
        </section>
    )
}