import React from 'react'


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


const NavigateIcon = ({...props}) => {

    return (
        <svg width="473" height="250" viewBox="0 0 473 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 235C40.9457 235 66.6214 233.722 92.52 231.271C134.45 227.305 176.197 217.725 218.266 217.55C231.549 217.495 244.564 219.809 257.773 221.428C276.483 223.721 294.591 220.251 313.024 215.462C338.146 208.936 362.261 196.904 387.355 190.257C403.53 185.973 420.052 183.849 436.478 185.634C443.543 186.401 451.178 189.362 458 189.362" stroke="white" stroke-width="30" stroke-linecap="round"/>
            <path d="M15 33.1973C41.7227 33.1973 68.3294 37.6088 95.0337 36.9287C121.808 36.2469 148.111 28.9475 174.613 24.0924C198.062 19.7966 221.28 18.9758 244.794 22.5998C273.068 26.9576 301.278 28.5191 329.678 30.2121C346.85 31.2357 363.202 29.8804 380.103 26.1821C395.815 22.744 411.032 15.7339 426.992 15.7339C430.698 15.7339 445.125 12.8825 447 18.4206" stroke="white" stroke-width="30" stroke-linecap="round"/>
        </svg>
    )
}




export { ArrowRight, ArrowLeft, NavigateIcon }