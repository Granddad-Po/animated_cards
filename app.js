const slides = document.querySelectorAll('.slide');

    slides.forEach(slide => {

        slide.addEventListener('click', () => {
            removeActive();
            slide.classList.add('active')
        });
    })

const removeActive = () => {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        })
}