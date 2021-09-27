import React, { SVGProps, useState } from 'react'


const ArrowRight = ({...props}) => {
    return (
    
    <svg className='the-arrow right' width="444" height="1172" viewBox="0 0 444 1172" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M390.5 40.5001C-86.3282 695.286 -32.8066 318.431 337 1127.5" stroke='#333' strokeWidth="80" strokeLinecap="round"/>
    </svg>   
    )
}

const ArrowLeft = ({...props}) => {
    return (
    
    <svg className='the-arrow' width="444" height="1172" viewBox="0 0 444 1172" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M390.5 40.5001C-86.3282 695.286 -32.8066 318.431 337 1127.5" stroke='#333' strokeWidth="80" strokeLinecap="round"/>
    </svg>   
    )
}




export { ArrowRight, ArrowLeft }