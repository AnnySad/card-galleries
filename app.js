const slides = document.querySelectorAll(
    '.slide'
)

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