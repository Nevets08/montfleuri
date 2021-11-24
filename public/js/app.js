// Menu mobile

const menuButton = document.querySelector(".mobile-header i");
const menuExpand = document.querySelector(".mobile-header .bg-header-expand");

menuButton.addEventListener("click", () => {
  menuExpand.classList.remove("display-none");
});

const closeMenuButton = document.querySelector(
  ".mobile-header .bg-header-expand i"
);

closeMenuButton.addEventListener("click", () => {
  menuExpand.classList.add("display-none");
});

// Gsap animation

gsap.from(".container-text-center", {
  duration: 0.75,
  y: 150,
  autoAlpha: 0,
  ease: Power3.out,
});

gsap.from("#products .align-right", {
  scrollTrigger: "#products .align-right",
  x: 400,
});

gsap.from("#products .align-left", {
  scrollTrigger: "#products .align-left",
  x: -400,
});

gsap.from("#recipe .recipe-content-left", {
    scrollTrigger: "#recipe .recipe-content-left",
    x: -200,
  });

  gsap.from("#recipe .recipe-content-right", {
    scrollTrigger: "#recipe .recipe-content-right",
    x: 200,
  });

gsap.from("#degustation .degustation-left", {
  scrollTrigger: "#degustation .degustation-left",
  opacity: 0,
  duration: 2
});

gsap.from("#degustation .degustation-right", {
    scrollTrigger: "#degustation .degustation-right",
    x: -100,
    duration: 1,
    opacity: 0,
    delay: .5
  });