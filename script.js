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
            start: 'top center'
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
            start: 'top center'
        },
        duration: 1,
        opacity: 0,
        x: -500
    });
});