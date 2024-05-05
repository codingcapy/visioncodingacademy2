var tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 0.15,
    defaults: { ease: "power2.inOut" }
});
tl.set(".word.in, .word.too, .word.deep", { opacity: 0 });
// tl.set(".bottom-side", )

const bgColor = "hsl(190, 100%, 75%)";

// Lines
tl.fromTo(
    ".left-side",
    {
        height: 0,
        immediateRender: false,
        autoRound: false
    },
    {
        duration: 0.75,
        height: "100%",
        ease: "power3.in"
    },
    0
);
tl.fromTo(
    ".bottom-side",
    {
        width: 0,

        immediateRender: false,
        autoRound: false
    },
    {
        duration: 0.75,
        width: "100%",
        ease: "power3.out"
    },
    0.75
);

// TOO
tl.fromTo(
    ".in",
    { opacity: 0 },
    { duration: 0.75, opacity: 1, stagger: 0.03 },
    "-=1"
);
tl.fromTo(
    ".too",
    { opacity: 0 },
    { duration: 0.75, opacity: 1, stagger: 0.03 },
    "-=0.6"
);
tl.fromTo(
    ".deep",
    { opacity: 0 },
    { duration: 0.75, opacity: 1, stagger: 0.03 },
    "-=0.6"
);

// Rotate
tl.to(
    ".text",
    {
        transform: "rotate(-20deg) skew(0deg, 0deg)",
        duration: 0.75,
        ease: "slow(0.2, 0.4, false)"
    },
    "+=1"
);

// Fade Out
tl.to(".text", 0.3, { opacity: 0, stagger: 0.03 }, "+=2");