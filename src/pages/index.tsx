import React, { useRef } from "react"
import { Helmet } from 'react-helmet'
import '../styles/global.css'

import Works from "../components/Works"
import About from "../components/About"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Header from "../components/Header"


export default function Index() {
  const mainRef = useRef<HTMLElement>()

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gelar Rustiawan</title>
        <link rel="icon" type="svg" href="/GR-5.svg" sizes="16x16" />
      </Helmet>

      <Header mainRef={mainRef} />

      <main ref={mainRef} >

        <Hero />

        <About />

        <Works />     
        
        <Contact />

      </main>
    </>

  )
}
