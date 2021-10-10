(function () {
    const slides = [
      `<article>
      <div class="product_card">
          <a href="/shop/sony-yt555">
              <div class="preview">
                  <img class="preview" alt="Sony YT555" src="img/new/sony-y.png">
    </div>
  </a>
  <a href="/shop/sony-yt555" class="text_link"> Sony YT555
  </a>
  <div class="price">
    <span class="price">$140,00</span>
  </div>
  <div class="product_button">
    <button type="button">Add to cart
    </button>
  </div>
</div>
</article>`,
`<article>
<div class="product_card">
    <a href="/shop/jbl-pt-25">
        <div class="preview">
            <img class="preview" alt="JBL PT-25" src="img/new/jbl_pt25.png">
        </div>
    </a>
    <a href="/shop/jbl-pt-25" class="text_link"> JBL PT-25
    </a>
    <div class="price">
        <span class="price">$180,00</span>
    </div>
    <div class="product_button">
        <button type="button">Add to cart
        </button>
    </div>
</div>
</article>`,
`<article>
<div class="product_card">
    <a href="/shop/jbl-rr56">
        <div class="preview">
            <img class="preview" alt="JBL RR-56" src="img/featured/jbl-rr.png">
        </div>
    </a>
    <a href="/shop/jbl-rr56" class="text_link"> JBL RR-56
    </a>
    <div class="price">
        <span class="price">$110,00</span>
    </div>
    <div class="product_button">
        <button type="button">Add to cart
        </button>
    </div>
</div>
</article>`,
`<article>
<div class="product_card">
    <a href="/shop/jbl-gt345">
        <div class="preview">
            <img class="preview" alt="JBL GT-345" src="img/new/jbl_gt345.png">
        </div>
    </a>
    <a href="/shop/jbl-gt345" class="text_link"> JBL GT-345
    </a>
    <div class="price">
        <span class="price">$120,00</span>
    </div>
    <div class="product_button">
        <button type="button">Add to cart
        </button>
    </div>
</div>
</article>`,
`<article>
<div class="product_card">
    <a href="/shop/jbl-rr55">
        <div class="preview">
            <img class="preview" alt="JBL RR-55" src="img/new/jbl_rr55.png">
        </div>
    </a>
    <a href="/shop/jbl-rr55" class="text_link"> JBL RR-55
    </a>
    <div class="price">
        <span class="price">$110,00</span>
    </div>
    <div class="product_button">
        <button type="button">Add to cart
        </button>
    </div>
</div>
</article>`,
`<article>
<div class="product_card">
    <a href="/shop/jbl-or57">
        <div class="preview">
            <img class="preview" alt="JBL OR-57" src="img/new/jbl_or57.png">
        </div>
    </a>
    <a href="/shop/jbl-or57" class="text_link"> JBL OR-57
    </a>
    <div class="price">
        <span class="price">$98,00</span>
    </div>
    <div class="product_button">
        <button type="button">Add to cart
        </button>
    </div>
</div>
</article>`,
    ];
    let currentSlide = 0;
  
    function showCurrentSlide() {
      const slideContainer = document.querySelector(".carousel .products");
      let html = '';
      if ((window.innerWidth < 607)) {

        html = slides[currentSlide];
        const nextSlide = currentSlide + 1 < slides.length ? currentSlide + 1 : 0;
        html += slides[nextSlide];
        slideContainer.innerHTML = html;
    } 
    else {
      html = slides[currentSlide];
      const nextSlide = currentSlide + 1 < slides.length ? currentSlide + 1 : 0;
      html += slides[nextSlide];
      const next2Slide = nextSlide + 1 < slides.length ? nextSlide + 1 : 0;
      html += slides[next2Slide];
      const next3Slide = next2Slide + 1 < slides.length ? next2Slide + 1 : 0;
      html += slides[next3Slide];
      slideContainer.innerHTML = html;
    }
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
  
     //setInterval(nextSlide, 2000);
    showCurrentSlide();
    window.addEventListener('resize', showCurrentSlide);
    
    const btnNext = document.querySelector(".carousel .slide-next");
    btnNext.addEventListener("click", nextSlide);
  
    const btnPrev = document.querySelector(".carousel .slide-prev");
    btnPrev.addEventListener("click", prevSlide);
  })();