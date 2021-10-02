(function () {
  const iconBurger = document.querySelector(".navigation-burger");
  const navigationsBody = document.querySelector(".navigation-wrapper");
  iconBurger.addEventListener("click", function (e) {
    document.body.classList.toggle("lock");
    iconBurger.classList.toggle("active");
    navigationsBody.classList.toggle("active");
  });

  const navLinks = document.querySelectorAll(".navigation__link[data-goto]");
  if (navLinks.length > 0) {
    navLinks.forEach((navLink) => {
      navLink.addEventListener("click", oneNavClick);
    });
    function oneNavClick(e) {
      const navLink = e.target;
      if (
        navLink.dataset.goto &&
        document.querySelector(navLink.dataset.goto)
      ) {
        const gotoBlock = document.querySelector(navLink.dataset.goto);
        const gotoBlockLength = getBoundingClientRect().top + pageYOffset;

        window.scrollTo({
          top: gotoBlockLength,
          behavior: "smooth",
        });
        e.preventDefault();
      }
    }
  }
  oneNavClick(e);
})();
