import React, { useMemo, useState } from 'react'

import { WORKS } from '../CONSTANT/WORKS'
import AnimatedP from './AnimatedP'
import HeroText from './HeroText'
import { ArrowLeft, ArrowRight } from './Commons'

export default function Works({ ...props }) {
    const [projectIdx, setProjectIdx] = useState(0)
    const work = useMemo(() => WORKS[projectIdx], [projectIdx])


    return (
        <section className='works' {...props}>
            <HeroText text='WORK' style={{ fontSize: '3rem'}} />          
            <h1 className='work-title'>{work.title}</h1>
            
            <ArrowLeft onClick={() => setProjectIdx((projectIdx || WORKS.length) - 1)} />
            <img src={work.imageURL} />
            <ArrowRight onClick={() => setProjectIdx((projectIdx + 1) % WORKS.length)} />
                   
            <div className='project-tech'>
                {work.tech.map(tech => <p key={tech} className='tech'><small>{tech}</small></p>)}
            </div>
        </section>
    )
}


const WorkImage = ({ imgURL='' }) => {
    return (
        <div className='work-image'>
            <img src={imgURL} />
        </div>
    )
}


const Work = ({ work=WORKS[0] }) => {

    return (
        <AnimatedP className='work-detail' delay={2000}>
            <h3>{work.title}</h3>
            <h4><small>{work.timeline}</small></h4>
        </AnimatedP>

    )
}