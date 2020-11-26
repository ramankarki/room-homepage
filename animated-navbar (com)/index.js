const AnimatedBtn = document.querySelector(".AnimatedBtn-Cover");
const navLinks = document.querySelector(".nav-links");
const navFixedContainer = document.querySelector(".fixed-container-sm");

AnimatedBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("nav-links-width");
});

let lastScrolled = 0;

window.addEventListener("scroll", () => {
  let scrolled = window.screenTop || document.documentElement.scrollTop;
  console.log(scrolled, lastScrolled);
  if (scrolled > lastScrolled) {
    navFixedContainer.style.top = `-${navFixedContainer.clientHeight}px`;
  } else {
    navFixedContainer.style.top = `0`;
  }
  lastScrolled = scrolled;
});
