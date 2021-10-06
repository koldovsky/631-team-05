const tabs = (function () {
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

(function () {
  async function getProducts(productsUrl) {
    const requestProducts = await fetch(productsUrl);
    const products = await requestProducts.json();
    return products;
  }

  function showProductsTab(products) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].category === "featured") {
        let productContainer = document.querySelector("#featured");
        productContainer.innerHTML += `<article class="tabs__container">
                                <a class="tabs__image sm" href="#"><img data-id="${products[i].id}" src="${products[i].img}"
                                        alt="${products[i].name}"></a>
                                <a class="tabs__product-name " href="">${products[i].name}</a>
                                <p>$${products[i].price}</p>
                                <form action="#" method="get">
                                    <button class="tabs__button" type="submit" data-id="${products[i].id}">Add to cart</button>
                                </form>
                            </article> `;
      }
      if (products[i].category === "sale") {
        let productContainer = document.querySelector("#sale");
        productContainer.innerHTML += `<article class="tabs__container">
                                <a class="tabs__image sm" data-id="${products[i].id} href="#"><img data-id="${products[i].id}" src="${products[i].img}"
                                        alt="${products[i].name}"></a>
                                <a class="tabs__product-name " href="">${products[i].name}</a>
                                <p>$${products[i].price}</p>
                                <form action="#" method="get">
                                    <button class="tabs__button" type="submit" data-id="${products[i].id}">Add to cart</button>
                                </form>
                            </article> `;
      }
      if (products[i].category === "new") {
        let productContainer = document.querySelector("#new");
        productContainer.innerHTML += `<article class="tabs__container">
                                <a class="tabs__image sm" href="#"><img data-id="${products[i].id}" src="${products[i].img}"
                                        alt="${products[i].name}"></a>
                                <a class="tabs__product-name " href="">${products[i].name}</a>
                                <p>$${products[i].price}</p>
                                <form action="#" method="get">
                                    <button class="tabs__button" type="submit" data-id="${products[i].id}">Add to cart</button>
                                </form>
                            </article> `;
      }
    }
  }

  async function loadAndRenderProduct() {
    const products = await getProducts("audio-products-list.json");
    showProductsTab(products);
  }
  loadAndRenderProduct();

  document
    .querySelectorAll(".tabs__image")
    .addEventListener("click", showProducts);
})();
