// Products

let products = [
  {
    id: 1,
    name: "Acer Aspire 3 A315-58-76ZU Intel Core i7 11th Gen 512GB SSD",
    img: "https://i.postimg.cc/XJGnTSK1/laptop-show-removebg-preview.png",
    price: "R12,999.00",
  },
  {
    id: 2,
    name: "Dell OptiPlex GX7010 Intel i5, 3rd Gen Tower PC with 19 inch Monitor",
    img: "https://i.postimg.cc/dtKJSfhn/computer-show-removebg-preview.png",
    price: "R 4,799.00",
  },
  {
    id: 3,
    name: "iPhone 14 Pro Max 256GB Deep Purple",
    img: "https://i.postimg.cc/GmMk3GY8/iphone-removebg-preview.png",
    price: "R31 399.00",
  },
  {
    id: 4,
    name: "SAMSUNG 50” AU7000 UHD 4K SMART TV",
    img: "https://i.postimg.cc/tJdGjXsk/tv-show-removebg-preview.png",
    price: "R6,999.00",
  },
  {
    id: 5,
    name: "THE CLASSIC SLIM WRIST WATCH",
    img: "https://i.postimg.cc/P5VshV5g/watch-show2-removebg-preview.png",
    price: "R2 875.28",
  },
  {
    id: 6,
    name: "JBL W200 True Wireless Ear Buds",
    img: "https://i.postimg.cc/xj3Znps6/earphones-show-removebg-preview.png",
    price: "R 1 199.00",
  },
];

let dispEmployees = document.querySelector(".row");
products.forEach((data) => {
  dispEmployees.innerHTML += `
      <br>  
          <div class="product-item col-4">
          <h3>${data.name}</h3>
          <h4>${data.price}</h4>
          <img src="${data.img}" class="img-fluid w-25">
          <button><a href="${data.name}">See more...</a></button>
          <br/>
          <button><a href="${data.name}">BUY NOW!</a></button>   
          </div>`;
});
