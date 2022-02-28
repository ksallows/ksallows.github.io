gsap.registerPlugin(ScrollTrigger);

let text = ['.intro', '.big1', '.big2']

text.forEach((element, index) => {
    gsap.from(element, {
        duration: 1,
        opacity: 0,
        x: (index + 1) * 150
    })
    console.log(index);
})

gsap.utils.toArray('.inRight').forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top bottom',
        },
        duration: 1,
        opacity: 0,
        x: 500
    });
});

gsap.utils.toArray('.inLeft').forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top bottom'
        },
        duration: 1,
        opacity: 0,
        x: -500
    });
});

gsap.from('.inBottom', {
    scrollTrigger: {
        trigger: '.inBottom',
        start: 'top bottom'
    },
    duration: 1,
    opacity: 0,
    y: 500
})