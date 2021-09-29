let tabs = (function () {
  let tabNavs = document.querySelectorAll(".tabs__name");
  let tabContent = document.querySelectorAll(".tabs__content");

  for (let i = 0; i < tabNavs.length; i++) {
    tabNavs[i].addEventListener("click", function (e) {
      e.preventDefault();
      let activeTabAttr = e.target.getAttribute("data-tab-name");

      for (let j = 0; j < tabNavs.length; j++) {
        let contentAttr = tabContent[j].getAttribute("data-tab-content");

        if (activeTabAttr === contentAttr) {
          tabNavs[j].classList.add("active");
          tabContent[j].classList.add("active");
        } else {
          tabNavs[j].classList.remove("active");
          tabContent[j].classList.remove("active");
        }
      }
    });
  }
})();

tabs();
