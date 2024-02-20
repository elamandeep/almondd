
console.log("Data")

//* Lenis Scroll Code
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

lenis.on('scroll', (e) => {
    console.log(e)
})


//* registering Gsap scrolltrigger plugin

gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".container section");
const texts = gsap.utils.toArray(".anim");
const mask = document.querySelector(".mask");

let scrollTween = gsap.to(sections, {
    xPercent: -102 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        end: "+=3000",
        //snap: 1 / (sections.length - 1),

    }
});

console.log(1 / (sections.length - 1))

// whizz around the sections
sections.forEach((section) => {
    // grab the scoped text
    let text = section.querySelectorAll(".anim");

    // bump out if there's no items to animate
    if (text.length === 0) return

    // do a little stagger
    gsap.from(text, {
        y: -130,
        opacity: 0,
        duration: 2,
        ease: "elastic",
        stagger: 0.1,
        scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: "left center",

        }
    });

});



ScrollTrigger.create({
    trigger: ".gallery",
    start: "top top",
    end: "bottom bottom",
    pin: ".right"
})



//? overlapping section




    let overlappingSection = gsap.utils.toArray(".sections");
    // we'll create a ScrollTrigger for each panel just to track when each panel's top hits the top of the viewport (we only need this for snapping)
    let tops = overlappingSection.map(panel => ScrollTrigger.create({ trigger: panel, start: "top top" }));

    overlappingSection.forEach((section, i) => {
        ScrollTrigger.create({
            trigger: section,
            start: () => section.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
            pin: true,
            pinSpacing: false
        });
    });

