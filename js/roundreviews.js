
(function () {
    const reviewSlides = [
        `div class="person1">
        <img src="img/man-with-headphones.png" id="person1" alt="">
    </div>
    <div class="name1">
        <h3>Dean Williams</h3>
    </div>
    <div class="text1">
        <p>"I often listen to music, and for me, first of all, it is important that the headphones sit
            comfortably on my head. In the Basside store, Ive found exactly what i needed at a very nice price.
            The customer servise also works great, and these guys helped me with the choice."</p>
    </div>
    <div class="date1">
        <h4>December 15,2020</h4>
    </div>`,
    `div class="person2">
    <img src="img/girl-with-headphones.png" alt="girl-with-headphones" id="person2">
</div>
<div class="name2">
    <h3>Jessica Gordons</h3>
</div>
<div class="text2">
    <p>"I often listen to music, and for me, first of all, it is important that the headphones sit
        comfortably on my head. In the Basside store, Ive found exactly what i needed at a very nice price.
        The customer servise also works great, and these guys helped me with the choice."</p>
</div>
<div class="date2">
    <h4>March 28,2021</h4>
</div>`,
`div class="person3">
<img src="img/smiling-man.png" alt="smiling-man" id="person3">
</div>
<div class="name3">
<h3>Eric Smith</h3>
</div>
<div class="text1">
<p>"I often listen to music, and for me, first of all, it is important that the headphones sit
    comfortably on my head. In the Basside store, Ive found exactly what i needed at a very nice price.
    The customer servise also works great, and these guys helped me with the choice."</p>
</div>
<div class="date3">
<h4>May 29,2021</h4>
</div>`,
];

let firstSlide = 0;

  function showFirstSlide() {
    const reviewsContainer = document.querySelector(".reviews__type");
    reviewsContainer.innerHTML = slides[firstSlide];
  }

  function secondSlide() {
    firstSlide++;
    if (firstSlide >= reviewSlides.length) firstSlide = 0;
    showFirstSlide();
  }

    setInterval(nextSlide, 5000);
    reviewSlides(); 

})
reviewSlides();


