(function () {
  const reviews = [
    '<div><img src="img/man-with-headphones.png" id="person1" alt=""></div>',
    '<div><img src="img/girl-with-headphones.png" id="person2" alt=""></div>',
    '<div><img src="img/smiling-man.png" id="person3" alt=""></div>',
  ];

  let firstSlide = 0;

  function showFirstSlide() {
    const reviewContainer = document.querySelector(".newproducts_container");
    let html = "";
    html = reviews[firstSlide];
    const nextSlide = firstSlide + 1 < reviews.length ? firstSlide + 1 : 0;
    html += reviews[nextSlide];
    const next2Slide = nextSlide + 1 < reviews.length ? nextSlide + 1 : 0;
    html += reviews[next2Slide];
    reviewContainer.innerHTML = html;
  }

  function nextSlide() {
    firstSlide++;
    if (firstSlide >= reviews.length) firstSlide = 0;
    showFirstSlide();
  }

  function prevSlide() {
    firstSlide--;
    if (firstSlide < 0) firstSlide = reviews.length - 1;
    showFirstSlide();
  }

  showFirstSlide();
  window.addEventListener("resize", showFirstSlide);

  const btnNext = document.getElementById("slide-next");
  btnNext.addEventListener("click", nextSlide);

  const btnPrev = document.getElementById("slide-prev");
  btnPrev.addEventListener("click", prevSlide);
})();
