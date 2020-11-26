const AnimatedBtnTop = document.querySelector(".AnimatedBtn-Top");
const AnimatedBtnMiddle = document.querySelector(".AnimatedBtn-Middle");
const AnimatedBtnBottom = document.querySelector(".AnimatedBtn-Bottom");
const AnimatedBtnCover = document.querySelector(".AnimatedBtn-Cover");

AnimatedBtnCover.addEventListener("click", () => {
  AnimatedBtnTop.classList.toggle("AnimatedBtn-TopClick");
  AnimatedBtnTop.classList.toggle("AnimatedBtn-TopActive");
  AnimatedBtnMiddle.classList.toggle("AnimatedBtn-MiddleClick");
  AnimatedBtnMiddle.classList.toggle("AnimatedBtn-MiddleActive");
  AnimatedBtnBottom.classList.toggle("AnimatedBtn-BottomClick");
  AnimatedBtnBottom.classList.toggle("AnimatedBtn-BottomActive");
});