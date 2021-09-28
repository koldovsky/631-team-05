(function () {
  const slides = [
    `<div class="item">
                        <div class="item__icon">
                              <img src="img/icons/money-back.svg" alt="Money back">
                        </div>
                        <div class="item__text">
                              <h3>Money back</h3>
                              <p>30-days guarantee</p>
                        </div>
                     </div>`,
    `<div class="item">
                        <div class="item__icon">
                            <img src="img/icons/support.svg" alt="24/7 Support">
                        </div>
                        <div class="item__text">
                            <h3>24/7 Support</h3>
                            <p>We work round the clock</p>
                        </div>
                    </div>`,
    `<div class="item">
                        <div class="item__icon">
                            <img src="img/icons/fast-del.svg" alt="Fast delivery">
                        </div>
                        <div class="item__text">
                            <h3>Fast delivery</h3>
                            <p>In 2-4 business days</p>
                        </div>
                    </div>`,
    `<div class="item">
                        <div class="item__icon">
                            <img width="50" src="img/icons/support.svg" alt="24/7 Support">
                        </div>
                        <div class="item__text">
                            <h3>24/7 Support</h3>
                            <p>We work round the clock</p>
                        </div>
                    </div>`,
    `<div class="item">
                        <div class="item__icon">
                            <img width="50" src="img/icons/free-ship.svg" alt="Free Shipping">
                        </div>
                        <div class="item__text">
                            <h3>Free Shipping</h3>
                            <p>For all orders over $100</p>
                        </div>
                    </div>`,
  ];

  let currentSlide = 0;

  function showCurrentSlide() {
    const slideContainer = document.querySelector(".services__type");
    let html = "";
    html = slides[currentSlide];
    const nextSlide = currentSlide + 1 < slides.length ? currentSlide + 1 : 0;
    html += slides[nextSlide];
    const nextTwoSlide = nextSlide + 1 < slides.length ? nextSlide + 1 : 0;
    html += slides[nextTwoSlide];
    const nextThreeSlide =
      nextTwoSlide + 1 < slides.length ? nextTwoSlide + 1 : 0;
    html += slides[nextThreeSlide];
    slideContainer.innerHTML = html;
  }

  function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) currentSlide = 0;
    showCurrentSlide();
  }
  function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    showCurrentSlide();
  }

  //   setInterval(nextSlide, 5000);
  showCurrentSlide();

  const btnNext = document.querySelector(".services__button-next");
  btnNext.addEventListener("click", nextSlide);

  const btnPrev = document.querySelector(".services__button-prev");
  btnPrev.addEventListener("click", prevSlide);
})();
