const AnimatedBtn = document.querySelector(".AnimatedBtn-Cover");
const navLinks = document.querySelector(".nav-links");
const navFixedContainer = document.querySelector(".fixed-container-sm");

AnimatedBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("nav-links-width");
  navLinks.classList.toggle("nav-active");
});

let lastScrolled = 0;

window.addEventListener("scroll", () => {
  let activeNav = navLinks.className.split(" ").length;
  if (activeNav === 1) {
    let scrolled = window.screenTop || document.documentElement.scrollTop;
    if (scrolled > lastScrolled) {
      navFixedContainer.style.top = `-${navFixedContainer.clientHeight}px`;
    } else {
      navFixedContainer.style.top = `0`;
    }
    lastScrolled = scrolled;
  }
});
