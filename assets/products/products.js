// sale

let sale = [
  {
    id: 1,
    name: "Acer Aspire 3 ",
    img: "https://i.postimg.cc/XJGnTSK1/laptop-show-removebg-preview.png",
    priceBefore: "R15,999.00",
    priceNow: "R12,999.00",
  },
  {
    id: 2,
    name: "Dell OptiPlex ",
    img: "https://i.postimg.cc/dtKJSfhn/computer-show-removebg-preview.png",
    priceBefore: "R7,799.00",
    priceNow: "R4,799.00",
  },
  {
    id: 3,
    name: "iPhone 14 Pro Max 256GB Deep Purple",
    img: "https://i.postimg.cc/GmMk3GY8/iphone-removebg-preview.png",
    priceBefore: "R34 399.00",
    priceNow: "R31 399.00",
  },
  {
    id: 4,
    name: "SAMSUNG 50” AU7000 UHD 4K SMART TV",
    img: "https://i.postimg.cc/tJdGjXsk/tv-show-removebg-preview.png",
    priceBefore: "R9,999.00",
    priceNow: "R6,999.00",
  },
  {
    id: 5,
    name: "THE CLASSIC SLIM WRIST WATCH",
    img: "https://i.postimg.cc/P5VshV5g/watch-show2-removebg-preview.png",
    priceBefore: "R5 875.28",
    priceNow: "R2 875.28",
  },
  {
    id: 6,
    name: "JBL W200 True Wireless Ear Buds",
    img: "https://i.postimg.cc/xj3Znps6/earphones-show-removebg-preview.png",
    priceBefore: "R4 199.00",
    priceNow: "R1 199.00",
  },
];

let dispSale = document.querySelector(".sale");
sale.forEach((data) => {
  dispSale.innerHTML += `
      <br>  
     
          <div class="product-item col-4 ">
          <img src="${data.img}" class="img-fluid">
          <p class= "product-name">${data.name}</p>
          <h4 class="price">${data.priceBefore.strike()}</h4>
          <h4 class="price">${data.priceNow}</h4>
           
          </div>`;
});
// Laptops
let laptops = [
  {
    id: 1,
    name: "HP Notebook- Natural Silver",
    img: "https://i.postimg.cc/TP4jK9v5/hp-removebg-preview.png",
    price: "R8,999.00",
  },
  {
    id: 2,
    name: "ASUS Chromebook C523",
    img: "https://i.postimg.cc/s2y4FX91/asus-removebg-preview.png",
    price: "R4,999.00",
  },
  {
    id: 3,
    name: "Dell Inspiration 14 5410",
    img: "https://i.postimg.cc/ZRQNqK38/dell-removebg-preview.png",
    price: "R20,999.00",
  },
];
let dispLaptops = document.querySelector(".laptops");
laptops.forEach((data) => {
  dispLaptops.innerHTML += `
      <br>  
     
          <div class="product-item col-4 ">
          <img src="${data.img}" class="img-fluid">
          <p class= "product-name">${data.name}</p>
          <h4 class="price">${data.price}</h4>
          
          </div>
          <br/>  
          <br/> `;
});
// Desktops
let desktops = [
  {
    id: 1,
    name: "Acer Celeron",
    img: "https://i.postimg.cc/DZMcN4Qs/desktop1-removebg-preview.png",
    price: "R8 999.00",
  },
  {
    id: 2,
    name: "Dell",
    img: "https://i.postimg.cc/kMRZm7V9/desktop2-removebg-preview.png",
    price: "R10 000.00",
  },
  {
    id: 3,
    name: "Huawei",
    img: "https://i.postimg.cc/T3fHgmtY/desktop3-removebg-preview.png",
    price: "R7 999.99",
  },
];
let dispDesktops = document.querySelector(".desktop");
desktops.forEach((data) => {
  dispDesktops.innerHTML += `
     
          <div class="product-item col-4 ">
          <img src="${data.img}" class="img-fluid">
          <p class= "product-name">${data.name}</p>
          <h4 class="price">${data.price}</h4>
      
          </div>
          <br/>  
          <br/>
           `;
});
// TVs
let tv = [
  {
    id: 1,
    name: "Samsung 40 inch",
    img: "https://i.postimg.cc/HW6c4CWG/tv1-removebg-preview.png",
    price: "R3 999.00",
  },
  {
    id: 2,
    name: "Samsung 65 inch",
    img: "https://i.postimg.cc/dtz04szf/tv2-removebg-preview.png",
    price: "R29 999.00",
  },
  {
    id: 3,
    name: "Samsung 50 inch",
    img: "https://i.postimg.cc/tJdGjXsk/tv-show-removebg-preview.png",
    price: "R9 999.00",
  },
];
let dispTv = document.querySelector(".tv");
tv.forEach((data) => {
  dispTv.innerHTML += `
      <br>  
     
          <div class="product-item col-4 ">
          <img src="${data.img}" class="img-fluid">
          <p class= "product-name">${data.name}</p>
          <h4 class="price">${data.price}</h4>
           
          </div>
          <br/>  
          <br/> `;
});
// Watches
let watches = [
  {
    id: 1,
    name: "Tempo Mens Silver Tone Blue Dial Bracelet Watch",
    img: "https://i.postimg.cc/fT83KfBH/watch1-removebg-preview.png",
    price: "R 499,00",
  },
  {
    id: 2,
    name: "Tempo Mens Rose Plated Black Multi Dial Brown Leather Watch",
    img: "https://i.postimg.cc/3xPxSSpZ/watch2-removebg-preview.png",
    price: "R 524,25",
  },
  {
    id: 3,
    name: "Tempo Ladies Gold Tone Bracelet Watch",
    img: "https://i.postimg.cc/hPYDvyCq/watch3-removebg-preview.png",
    price: "R 599,00",
  },
];
let dispWatches = document.querySelector(".watches");
watches.forEach((data) => {
  dispWatches.innerHTML += `
      <br>  
     
          <div class="product-item col-4 ">
          <img src="${data.img}" class="img-fluid">
          <p class= "product-name">${data.name}</p>
          <h4 class="price">${data.price}</h4>
            
          </div>
          <br/>  
          <br/> `;
});
// iPhones
let iphones = [
  {
    id: 1,
    name: "iPhone 7",
    img: "https://i.postimg.cc/CKfhTGYs/iphone7-removebg-preview.png",
    price: "R4 499.00",
  },
  {
    id: 2,
    name: "iPhone 8",
    img: "https://i.postimg.cc/SsrHwRXG/iphone8-removebg-preview.png",
    price: "R6 999.00",
  },
  {
    id: 3,
    name: "iPhone 13",
    img: "https://i.postimg.cc/wxwS2tYq/iphone13-removebg-preview.png",
    price: "R16 999.00",
  },
];
let dispiphones = document.querySelector(".iphones");
iphones.forEach((data) => {
  dispiphones.innerHTML += `
      <br>  
     
          <div class="product-item col-4 ">
          <img src="${data.img}" class="img-fluid">
          <p class= "product-name">${data.name}</p>
          <h4 class="price">${data.price}</h4>
            
          </div>
          <br/>  
          <br/> `;
});
// Earphones
let earphones = [
  {
    id: 1,
    name: "Airpods white",
    img: "https://i.postimg.cc/Hs0kjk1Q/airpods11-removebg-preview.png",
    price: "R 2,899",
  },
  {
    id: 2,
    name: "Sony WF-C500 TWS",
    img: "https://i.postimg.cc/JnwFyJXx/sony-earphones.jpg",
    price: "R1,099.00",
  },
  {
    id: 3,
    name: "Phillips TAT123",
    img: "https://i.postimg.cc/sDPpYWhx/PHILLIPS-EARPODS-removebg-preview.png",
    price: "R499.00",
  },
];
let dispEarphones = document.querySelector(".earphones");
earphones.forEach((data) => {
  dispEarphones.innerHTML += `
      <br>  
     
          <div class="product-item col-4 ">
          <img src="${data.img}" class="img-fluid">
          <p class= "product-name">${data.name}</p>
          <h4 class="price">${data.price}</h4>
           
          </div>
          <br/>  
          <br/> `;
});
