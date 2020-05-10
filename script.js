//===============================
//HOME PAGE SLIDER
//================================

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const slides = document.querySelectorAll('.slide');
const dotsNav = document.querySelector('.slider-nav');
const dots = Array.from(dotsNav.children);
const slideContent = document.querySelectorAll('.slide-inner-content');
const slideContentTrack = document.querySelector('.slide-content-track');

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const nextSlide = () => {
    const current = document.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const currentSlideContent = slideContentTrack.querySelector('.current-slide');

    currentSlideContent.classList.remove('current-slide');
    current.classList.remove('current-slide');
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current-slide');
        currentSlideContent.nextElementSibling.classList.add('current-slide');
        updateDots(currentDot, nextDot);
    }else{
        slideContent[0].classList.add('current-slide');
        slides[0].classList.add('current-slide');
        currentDot.classList.remove('current-slide');
        dots[0].classList.add('current-slide');
    };
};


const prevSlide = () => {
    const current = document.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const currentSlideContent = slideContentTrack.querySelector('.current-slide');

    currentSlideContent.classList.remove('current-slide');
    current.classList.remove('current-slide');
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current-slide');
        currentSlideContent.previousElementSibling.classList.add('current-slide');
        updateDots(currentDot, prevDot);
    }else{
        slideContent[slideContent.length-1].classList.add('current-slide');
        slides[slides.length-1].classList.add('current-slide');
        currentDot.classList.remove('current-slide');
        dots[dots.length - 1].classList.add('current-slide');
    };
}

nextBtn.addEventListener('click', e=> {
    nextSlide();
});

prevBtn.addEventListener('click', e=> {
    prevSlide();
});

dotsNav.addEventListener('click', e => {
 
    const currentSlide = document.querySelector('.current-slide');
    const targetDot = e.target.closest('button');
    const currentSlideContent = slideContentTrack.querySelector('.current-slide');


    if(!targetDot) return;

    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot );
    
    currentSlide.classList.remove('current-slide');
    slides[targetIndex].classList.add('current-slide');
    currentSlideContent.classList.remove('current-slide');
    slideContent[targetIndex].classList.add('current-slide');
    updateDots(currentDot, targetDot);
});



// Navigation Bar
//===================================

