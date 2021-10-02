function () {
    const reviewSlides = [
        '<div class="person1"><img src="img/man-with-headphones.png" id="person1" alt=""></div>',
        '<div class="person2"><img src="img/girl-with-headphones.png" alt="girl-with-headphones" id="person2"></div>',
        '<div class="person3"><img src="img/smiling-man.png" alt="smiling-man" id="person3"></div>',
    ];

    let firstSlide = 0;

    function showFirstSlide() {
        const reviewsContainer = document.querySelector(".reviews-type");
        let html = '';
        html = reviewSlides[firstSlide];
        const nextSlide = firstSlide + 1 < reviewSlides.length ? firstSlide + 1 : 0;
        html += reviewSlides[nextSlide];
        const next2Slide = nextSlide + 1 < reviewSlides.length ? nextSlide + 1 : 0;
        html += reviewSlides[next2Slide];
        slideContainer.innerHTML = html;
       
    }

    function nextSlide() {
        firstSlide++;
        if (firstSlide >= reviewSlides.length) firstSlide = 0;
        showFirstSlide();
    }

    function prevSlide() {
        firstSlide--;
        if (firstSlide < 0) firstSlide = reviewSlides.length - 1;
        showFirstSlide();
    }
    

    setInterval(nextSlide, 5000);
    showFirstSlide();

    const btnNext = document.getElementById("slide-next");
    btnNext.addEventListener("click", nextSlide);

    const btnPrev = document.getElementById("slide-prev");
    btnPrev.addEventListener("click", prevSlide);


