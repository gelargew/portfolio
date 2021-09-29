import anime from 'animejs'
import React, { useLayoutEffect, useRef, useState } from 'react'
import NavigationIcon from '../images/NavigationIcon.svg'
import CloseIcon from '../images/closeIcon.svg'

const SECTIONS = [
    'home',
    'about',
    'works',
    'contacts'
]

export default function Header({mainRef, ...props}) {
    const popup = useRef<HTMLElement>()
    const [isPoppin, setIsPoppin] = useState(false)

    const show = () => {
        anime({
            targets: popup.current,
            translateY: ['100%', 0],
            translateX: [0, 0],
            duration: 1000,
            easing: 'easeOutQuint'
        })
        setIsPoppin(true)
    }

    const hide = () => {
        anime({
            targets: popup.current,
            translateX: [0, '100%'],
            duration: 1000,
            easing: 'easeOutQuint'
        })
        setIsPoppin(false)
    }

    const navigate = (idx: number) => {
        if (isPoppin) hide()
        mainRef.current.children[idx].scrollIntoView()
    }

    return (
        <>
        <header>
            <img onClick={() => navigate(0)} className='my-icon' src='/icon.svg' />
            {isPoppin ?
            <img onClick={hide} className='nav-icon' src={CloseIcon} />:
            <img onClick={show} className='nav-icon' src={NavigationIcon} />}
        </header>
        <section ref={popup} id='nav-popup'>
            {SECTIONS.map((SECTION, idx) => 
                <a onClick={() => navigate(idx)} >{SECTION.toUpperCase()}</a>
            )}
        </section>
        </>
    )
}