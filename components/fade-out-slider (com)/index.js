const Slide = document.querySelector(".SlideContainer-js");
const SlideItem = document.querySelectorAll(".Slide-Item-js");
const slideBtnRight = document.querySelector(".Slide-Btn-right-js");
const slideBtnleft = document.querySelector(".Slide-Btn-left-js");
const heroContent = document.querySelector(".Hero-ContentInner");
const heroHeading = document.querySelector(".Hero-Heading");
const heroText = document.querySelector(".Hero-Text");
const content = [
    {
        heading: "Discover innovative ways to decorate",
        text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
        heading: "We are available all across the globe",
        text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        heading: "Manufactured with the best materials",
        text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
]

let activeSlide = 0;
let interval = 5000;
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
    // update indexes of slides
    SlideItem.forEach(s => {
        s.style.zIndex++;
    });
    e.target.style.zIndex = 1;
    e.target.classList.remove("FadeOut");

    // this limits moving to next slide until animation ends.
    slideBtnRight.addEventListener("click", fadeNext);
    slideBtnleft.addEventListener("click", fadePrev);
    
    window.addEventListener("keyup", keypressBtn);
    // stop auto slider when keyboard keys are pressed
    window.addEventListener("keydown", () => {
        clearInterval(intervalID);
    });

    // this removes event listener and won't make trouble for other code
    e.target.removeEventListener("animationend", reStackItem);
}

let fadeNext = () => {
    // update content with slider
    heroHeading.textContent = content[activeSlide].heading;
    heroText.textContent = content[activeSlide].text;
    
    SlideItem[activeSlide].classList.add("FadeOut");
    
    // this limits moving to next slide until animation ends.
    SlideItem[activeSlide].addEventListener("animationstart", () => {
        slideBtnRight.removeEventListener("click", fadeNext);
        slideBtnleft.removeEventListener("click", fadePrev);
        window.removeEventListener("keyup", keypressBtn);

        // stop auto slider when keyboard keys are pressed
        window.removeEventListener("keydown", () => {
            clearInterval(intervalID);
        });
    });
    
    // this removes event listener and won't make trouble for other code
    SlideItem[activeSlide].addEventListener("animationend", reStackItem);

    // update active slide
    activeSlide++;
    if (activeSlide > SlideItem.length - 1) {
        activeSlide = 0;
    }
}

let fadePrev = () => {
    // update active slide
    activeSlide--;
    if (activeSlide < 0) {
        activeSlide = SlideItem.length - 1;
    }

    // update indexes
    SlideItem.forEach(s => {
        s.style.zIndex--;
    });
    SlideItem[activeSlide].style.zIndex = SlideItem.length - 1;

    heroHeading.textContent = content[activeSlide].heading;
    heroText.textContent = content[activeSlide].text;
    // add animation
    SlideItem[activeSlide].classList.add("FadeOut-reverse");


    // this limits moving to next slide until animation ends.
    SlideItem[activeSlide].addEventListener("animationstart", () => {
        slideBtnRight.removeEventListener("click", fadeNext);
        slideBtnleft.removeEventListener("click", fadePrev);
        window.removeEventListener("keyup", keypressBtn);

        // stop auto slider when keyboard keys are pressed
        window.removeEventListener("keydown", () => {
            clearInterval(intervalID);
        });
    });

    SlideItem[activeSlide].addEventListener("animationend", (e) => {
        // remove animation after it ends
        e.target.classList.remove("FadeOut-reverse");

        // add event listner after animation ends to move next slide
        slideBtnRight.addEventListener("click", fadeNext);
        slideBtnleft.addEventListener("click", fadePrev);

        window.addEventListener("keyup", keypressBtn);

        // stop auto slider when keyboard keys are pressed
        window.addEventListener("keydown", () => {
            clearInterval(intervalID);
        });

        // remove event listner so that it won't make trouble for other code
        SlideItem[activeSlide].removeEventListener("animationend", (e) => {
            e.target.classList.remove("FadeOut-reverse"); 
        });    
    });
}

// slide interval
intervalID = setInterval(fadeNext, interval);

// stop slider on hover
Slide.addEventListener("mouseenter", () => {
    clearInterval(intervalID);
});
heroContent.addEventListener("mouseenter", () => {
    clearInterval(intervalID);
});

// stop slider off hover
Slide.addEventListener("mouseleave", () => {
    intervalID = setInterval(fadeNext, interval);
});
heroContent.addEventListener("mouseleave", () => {
    intervalID = setInterval(fadeNext, interval);
});

// event listener for buttons to move slides
slideBtnRight.addEventListener("click", fadeNext);
slideBtnleft.addEventListener("click", fadePrev);

let keypressBtn = (event) => {
    if (event.key === "ArrowRight") {
        fadeNext();
    } else if (event.key === "ArrowLeft") {
        fadePrev();
    }
    // start auto slider when keyboard keys are released
    intervalID = setInterval(fadeNext, interval);
}
// event listener for keyboard arrows
window.addEventListener("keyup", keypressBtn);

// stop auto slider when keyboard keys are pressed
window.addEventListener("keydown", () => {
    clearInterval(intervalID);
});
