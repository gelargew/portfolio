import anime from "animejs"

const fadeUpIn = ([...elements]) => {
    anime({
        targets: elements,
        translateY: [70, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        delay: anime.stagger(400)
    })
}

export { fadeUpIn }