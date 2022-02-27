gsap.registerPlugin(ScrollTrigger);

gsap.from(['.intro', '.big1', '.big2'], {
    duration: 1,
    opacity: 0,
    x: 200
})

gsap.utils.toArray('.inRight').forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            markers: true,
            start: 'top center'
        },
        duration: 1,
        x: 500
    });
});

gsap.utils.toArray('.inLeft').forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            markers: true,
            start: 'top center'
        },
        duration: 1,
        x: -500
    });
});