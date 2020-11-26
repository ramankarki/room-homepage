let nav = document.querySelector(".nav-height-js");
let navHeight = document.querySelector(".nav-height-js").clientHeight;

window.addEventListener("scroll", () => {
  let scrolled = window.screenTop || document.documentElement.scrollTop;
  if (scrolled > navHeight) {
    nav.style.backgroundColor = "hsl(0, 0%, 27%)";
  } else {
    nav.style.backgroundColor = "rgba(0,0,0,0)";
  }
});
