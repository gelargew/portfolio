import * as React from "react"
import { Helmet } from 'react-helmet'
import '../styles/global.css'

import Works from "../components/Works"
import About from "../components/About"
import Contact from "../components/Contact"
import Hero from "../components/Hero"


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

        <Hero />

        <About />

        <Works />     
        
        <Contact />

      </main>
    </>

  )
}
