const Slide = document.querySelector(".SlideContainer-js");
const SlideItem = document.querySelectorAll(".Slide-Item-js");
const slideBtnRight = document.querySelector(".Slide-Btn-right-js");
const slideBtnleft = document.querySelector(".Slide-Btn-left-js");

let activeSlide = 0;
let interval = 3000;
let intervalID;

// before loading document
let stackItem = () => {
    let index = 0;
    for (let i = SlideItem.length - 1; i >= 0; i--) {
        SlideItem[i].style.zIndex = index;
        index++;
    }
}
stackItem();

// restack slides after animation end
let reStackItem = (e) => {
    SlideItem.forEach(s => {
        s.style.zIndex++;
    });
    e.target.style.zIndex = 1;
    e.target.classList.remove("FadeOut");
    e.target.removeEventListener("animationend", reStackItem);
}

let fadeNext = () => {
    SlideItem[activeSlide].classList.add("FadeOut");
    SlideItem[activeSlide].addEventListener("animationend", reStackItem);

    activeSlide++;
    if (activeSlide > SlideItem.length - 1) {
        activeSlide = 0;
    }
}

let fadePrev = () => {
    activeSlide--;
    if (activeSlide < 0) {
        activeSlide = SlideItem.length - 1;
    }

    SlideItem.forEach(s => {
        s.style.zIndex--;
    });
    SlideItem[activeSlide].style.zIndex = SlideItem.length - 1;
    SlideItem[activeSlide].classList.add("FadeOut-reverse");

    SlideItem[activeSlide].addEventListener("animationend", (e) => {
        e.target.classList.remove("FadeOut-reverse");
        SlideItem[activeSlide].removeEventListener("animationend", (e) => {
            e.target.classList.remove("FadeOut-reverse"); 
        });    
    });
}

// slide interval
intervalID = setInterval(fadeNext, interval);

// event listeners
Slide.addEventListener("mouseenter", () => {
    clearInterval(intervalID);
});

Slide.addEventListener("mouseleave", () => {
    intervalID = setInterval(fadeNext, interval);
});

slideBtnRight.addEventListener("click", fadeNext);
slideBtnleft.addEventListener("click", fadePrev);

let lastClicked = "";
window.addEventListener("keyup", (event) => {
    if (event.key === "ArrowRight") {
        lastClicked = event.key;
        fadeNext();
    } else if (event.key === "ArrowLeft") {
        lastClicked = event.key;
        fadePrev();
    }
    intervalID = setInterval(fadeNext, interval);
});

window.addEventListener("keydown", () => {
    clearInterval(intervalID);
});
