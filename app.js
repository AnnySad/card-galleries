

function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll(
        '.slide'
    )

    slides[activeSlide].classList.add('active')

    let slides1 = slides;
    for (const slide of slides1){
        slide.addEventListener('click', ()=>{
            clearActiveClasses()

            slide.classList.add('active')
        })
    }

    function clearActiveClasses(){
        slides.forEach((slide)=>{
            slide.classList.remove('active')
        })
    }
}
slidesPlugin(1)