import * as React from "react"
import { Helmet } from 'react-helmet'
import '../styles/global.css'

import HeroText from "../components/HeroText"
import AnimatedP from "../components/AnimatedP"
import Works from "../components/Works"
import Footer from "../components/Footer"
import Background1 from "../components/Background1"
import Particle from "../components/meshes/Particle"
import About from "../components/About"
import Contact from "../components/Contact"

export default function Index() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gelar Rustiawan</title>
        <link rel="icon" type="svg" href="/GR-5.svg" sizes="16x16" />
      </Helmet>
      <header>
        <img className='my-icon' src='/icon.svg' />
      </header>
    <main>
      <section className='hero-div' >
        <HeroText text='Gelar' />
        <HeroText text='Rustiawan' withLine style={{ marginBottom: 50, marginLeft: 30 }} />

        <AnimatedP delay={2000} >
          Web Developer, <br/>
          Generalist
        </AnimatedP>
        <Particle />
      </section>

      <Works />
      
      <About />
      
      <Contact />

    </main>
    </>

  )
}
