(function () {
    const brands = [
        `<div class="Apple">
        <img src="img/logo-apple.svg" id="logoalla" alt="Apple">
    </div>`,
    `<div class="Jbl">
                    <img src="img/logo-jbl.svg" id="logoallj" alt="Jbl">
                </div>`,
                `<div class="Beyerdynamic">
                    <img src="img/logo-beyerdynamic.svg" id="logoall" alt="Beyerdynamic">
                </div>`,
                `<div>
                    <img src="img/logo-marshall.svg" id="logoallm" alt="Marshall">
                </div>`,
                `<div class="Panasonic">
                    <img src="img/logo-panasonic.svg" id="logoall" alt="Panasonic">
                </div>`,
                `<div class="Samsung">
                    <img src="img/logo-samsung.svg" id="logoall" alt="Samsung">
                </div>`,
                `<div class="Sennheiser">
                    <img src="img/logo-sennheiser.svg" id="logoallsen" alt="Sennheiser">
                </div>`,
                `<div class="Sony">
                    <img src="img/logo-sony.svg" id="logoalls" alt="Sony">
                </div>`,

    ];


let currentSlide = 0;

    function showFirstSlide() {
        const brandsContainer = document.querySelector(".cards-container");
        let html = " ";
        html = brands[currentSlide];
        const nextSlide = currentSlide + 1 < brands.length ? currentSlide + 1 : 0;
        html += brands[nextSlide];
        const next2Slide = nextSlide + 1 < brands.length ? nextSlide + 1 : 0;
        html += brands[next2Slide];
        const next3Slide = next2Slide + 1 < brands.length ? next2Slide + 1 : 0;
        html += brands[next3Slide];
        const next4Slide = next3Slide + 1 < brands.length ? next3Slide + 1 : 0;
        html += brands[next4Slide];
        const next5Slide = next4Slide + 1 < brands.length ? next4Slide + 1 : 0;
        html += brands[next5Slide];
        const next6Slide = next5Slide + 1 < brands.length ? next5Slide + 1 : 0;
        html += brands[next6Slide];
        const next7Slide = next6Slide + 1 < brands.length ? next6Slide + 1 : 0;
        html += brands[next7Slide];
      
        brandsContainer.innerHTML = html;
       
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= brands.length) currentSlide = 0;
        showFirstSlide();
    }

    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) currentSlide = brands.length - 1;
        showFirstSlide();
    }
    

    showFirstSlide();
    window.addEventListener("resize", showFirstSlide);

    const btnNext = document.getElementById("slide-n");
    btnNext.addEventListener("click", nextSlide);

    const btnPrev = document.getElementById("slide-p");
    btnPrev.addEventListener("click", prevSlide);
})();