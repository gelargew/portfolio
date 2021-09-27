import React from 'react'
import AnimatedP from './AnimatedP'
import HeroText from './HeroText'
import Particle from './meshes/Particle'

export default function Hero() {
    return (
        <section className='hero-div' >
            <HeroText text='Gelar' />
            <HeroText text='Rustiawan' withLine style={{ marginBottom: 50, marginLeft: 30 }} />

            <AnimatedP delay={2000} >
            Web Developer, <br/>
            Generalist
            </AnimatedP>
            <Particle />
      </section>
    )
}