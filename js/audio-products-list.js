// const products = [
//   {
//     id: 1,
//     img: "img/featured/jbl-rr.png",
//     availability: "in stock",
//     name: "JBL RR-56",
//     code: "Product code 21",
//     price: 110.0,
//     description:
//       "Take this wireless speaker to the beach, use it in a car or outdoors — wherever and whenever you are. Express yourself and enjoy music listening without limits.",
//   },
//   {
//     id: 2,
//     img: "img/featured/sennheiser-sn.png",
//     availability: "in stock",
//     name: "Sennheiser SN-67",
//     code: "Product code 27",
//     price: 213.0,
//     description:
//       "The professional Sennheiser SN-67 headphones have been designed to cater to your audio experience and make the sound as clear and high-quality as possible.",
//   },
//   {
//     id: 3,
//     img: "img/featured/gbl-gt.png",
//     availability: "in stock",
//     name: "JBL GT-345",
//     code: "Product code 23",
//     price: 120.0,
//     description:
//       "This waterproof Bluetooth speaker will be an indispensable accessory for your parties and outings. Enjoy your favorite tracks wherever you are!",
//   },
//   {
//     id: 4,
//     img: "img/featured/sony-s.png",
//     availability: "in stock",
//     name: "Sony S890",
//     code: "Product code 26",
//     price: 259.0,
//     description:
//       "These ergonomic and colorful wireless headphones will be to the liking of all sound lovers. The headphones feature powerful bass and full immersion into your favorite music on the go.",
//   },
//   {
//     id: 5,
//     img: "img/sale/arshall-dr.png",
//     availability: "in stock",
//     name: "Marshall DR67",
//     code: "Product code 34",
//     price: 459.0,
//     description:
//       "These headphones from one of the best audio brands in the world will introduce you to the world of incredibly pure and high-quality sound.",
//   },
//   {
//     id: 6,
//     img: "img/sale/v-moda.png",
//     availability: "in stock",
//     name: "V-MODA ER65",
//     code: "Product code 31",
//     price: 80.0,
//     description:
//       "The V-MODA ER65 wireless headphones have been designed with top-quality drivers. The headphones were tested at 6 different frequency levels for consistency, and their unique technology provides perfect sound even when on Bluetooth.",
//   },
//   {
//     id: 7,
//     img: "img/sale/bose-g.png",
//     availability: "in stock",
//     name: "Bose G656-A",
//     code: "Product code 32",
//     price: 65.0,
//     description:
//       "Enjoy your favourite tracks with the all-new Bose wireless speakers. Powered by Bluetooth 5.0, the portable speaker is easily connected with your smartphone or laptop for an exceptional music listening experience.",
//   },
//   {
//     id: 8,
//     img: "img/sale/airpulse-r.png",
//     availability: "in stock",
//     name: "AirPulse BB34",
//     code: "Product code 25",
//     price: 112.0,
//     description:
//       "15 hours of wireless playback and award-winning clear sound by AirPulse. These headphones are your perfect choice for work, travels, or just everyday use wherever you go.",
//   },
//   {
//     id: 9,
//     img: "img/new/sony-y.png",
//     availability: "in stock",
//     name: "Sony YT555",
//     code: "Product code 19",
//     price: 140.0,
//     description:
//       "Simple and convenient, this wireless speaker will be your faithful companion wherever you are — at work, at home, in the car, or on a picnic. The Sony brand delivers perfect sound and deep bass in all conditions.",
//   },
//   {
//     id: 10,
//     img: "img/new/sony-tt.png",
//     availability: "in stock",
//     name: "Sony TT56",
//     code: "Product code 30",
//     price: 98.0,
//     description:
//       "These genuine leather-trimmed headphones sit perfectly on your head and are ready for adventures with you! Perfectly clear sound is provided.",
//   },
//   {
//     id: 11,
//     img: "img/new/jbl-br.png",
//     availability: "in stock",
//     name: "JBL BR-55",
//     code: "Product code 22",
//     price: 110.0,
//     description:
//       "Really portable and really powerful, this Bluetooth speaker is a perfect choice for outdoor parties, travels, or meeting with your friends. Enjoy your favorite tracks without limits!",
//   },
//   {
//     id: 12,
//     img: "img/new/jbl-wn.png",
//     availability: "in stock",
//     name: "JBL 334WN",
//     code: "Product code 24",
//     price: 140.0,
//     description:
//       "Listen to your favorite tracks all day long thanks to the powerful battery of these headphones (up to 30 hours). And when the battery goes down, you can plug in the cable and continue enjoying your music.",
//   },
// ];

async function getProducts(productsUrl) {
  const requestProducts = await fetch(productsUrl);
  const products = await requestProducts.json();
  return products;
}

function showProducts(products) {
  const productContainer = document.querySelector(".product-page");
  for (const product of products) {
    productContainer.innerHTML += ` <div class="product-picture">
            <img class="img-main" src="${product.img}" alt="${product.name}">
        </div>
        <div class="product-text">
            <div class="product__info">
                <p class="product__availability"> ${product.availability}</p>
                <h4 class="product__name">${product.name}</h4>
                <p class="product__code">Product code ${product.code}</p>
                <p class="product__price">$${product.price}</p>
            </div>
            <hr>
            <div class="product__shopping">
                <form action="#" method="get">
                    <input type="number" min="1" max="10" name="product__quantity" required>
                    <button class="tabs__button tabs__button_big-blue " type="submit">Add to cart</button>
                </form>
            </div>
            <div class="product-description">
                <p class="product-description__title">DESCRIPTION</p>
                <div class="product-description__characteristics">
                    <p> ${product.description}</p>

                    <p class="product__specs">Specs:</p>

                    <p>Frequency response — 16Hz - 20kHz</p>
                    <p>Sensitivity — 100 DBSPL@1kHz</p>
                    <p>Battery life — 24 hours</p>
                    <p>Charging time — 2 hours</p>
                    <p>Wireless range — 35 m</p>
                </div>
            </div>
        </div>`;
  }
}

async function loadAndRenderProduct() {
  const products = await getProducts("audio-products-list.json");
  showProducts(products);
}
loadAndRenderProduct();
