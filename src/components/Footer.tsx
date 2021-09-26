import React from 'react'

import SOCIALS from '../CONSTANT/SOCIALS'


export default function Footer({...props}) {

    return (
        <footer>
            <div className='footer-left'>
                {SOCIALS.map((social, i) => {
                    <a className='social' key={i} href={social.url} target='_blank'>{social.platform}</a>
                })}
            </div>
        </footer>
    )
}