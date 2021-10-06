const openLinks = document.querySelectorAll(".open-cart");
const closeLinks = document.querySelectorAll(".close-cart");
const body = document.querySelector("body");
const modalCart = document.querySelector(".modal-cart");

let unlock = true;

const timeout = 700;
function openCart() {
  for (i = 0; i < openLinks.length; i++) {
    openLinks[i].addEventListener("click", function (e) {
      modalCart.classList.add("open");
      lockBodyScroll();
      e.preventDefault();
    });
  }
}
openCart();

function closeCart() {
  for (i = 0; i < closeLinks.length; i++) {
    closeLinks[i].addEventListener("click", function (e) {
      modalCart.classList.remove("open");
      unlockBodyScroll();
      e.preventDefault();
    });
  }
  modalCart.addEventListener("click", function (e) {
    if (!e.target.closest(".modal-cart__content")) {
      modalCart.classList.remove("open");
      unlockBodyScroll();
    }
  });
}
closeCart();

function lockBodyScroll() {
  const lockPadding =
    window.innerWidth - document.querySelector("body").offsetWidth + "px";
  body.style.paddingRight = lockPadding;
  body.classList.add("lock");
}
function unlockBodyScroll() {
  const lockPadding = 0;
  body.style.paddingRight = lockPadding;
  body.classList.remove("lock");
}
