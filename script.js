run = () => {
    gsap.from(['.intro', '.big1', '.big2'], {
        duration: 1,
        opacity: 0,
        x: 100
    })
}

document.onload(run());