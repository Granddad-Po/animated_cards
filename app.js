function activeSlide(active = 0) {

    const slides = document.querySelectorAll('.slide');

    slides[active].classList.add('active');

    slides.forEach(slide => {

        slide.addEventListener('click', () => {
            removeActive();
            slide.classList.add('active')
        })
    })

    const removeActive = () => {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        })
    }
}

activeSlide(3);