// Employees

let employees = [
  {
    id: 1,
    name: "Benson",
    img: "https://i.postimg.cc/QCbHCJR2/benson-removebg-preview.png",
    job: "Founder",
  },
  {
    id: 2,
    name: "Rigby",
    img: "https://i.postimg.cc/63FDRsNR/rigby-removebg-preview.png",
    job: "CEO",
  },
  {
    id: 3,
    name: "Thomas",
    img: "https://i.postimg.cc/VL8hcWsY/thomas-removebg-preview.png",
    job: "Manager",
  },
  {
    id: 4,
    name: "Pops",
    img: "https://i.postimg.cc/FK7WxPpx/pops-removebg-preview.png",
    job: "Front End Developer",
  },
  {
    id: 5,
    name: "Muscle Man",
    img: "https://i.postimg.cc/FzZVvcGR/muscle-man-removebg-preview.png",
    job: "Back End Developer",
  },
  {
    id: 6,
    name: "Skipps",
    img: "https://i.postimg.cc/L8qLCrdh/skips-removebg-preview.png",
    job: "Full Stack",
  },
];

let dispEmployees = document.querySelector(".row");
employees.forEach((data) => {
  dispEmployees.innerHTML += `
    <br>
       
        <div class="employees col-4">
        <h3>${data.name}</h3>
        <h4>${data.job}</h4>
        <img src="${data.img}" class="img-fluid w-25">
       
        </div>`;
});

// Partners
let partners = [
  {
    id: 1,
    img: "https://i.postimg.cc/wBMcfGpM/computer-mania.png",
  },
  {
    id: 2,
    img: "https://i.postimg.cc/XqYVdd5R/iStore.png",
  },
  {
    id: 3,
    img: "https://i.postimg.cc/DzCggK48/expert-stores-removebg-preview.png",
  },
  {
    id: 4,
    img: "https://i.postimg.cc/63kCj6W5/supercom-removebg-preview.png",
  },
  {
    id: 5,
    img: "https://i.postimg.cc/mg4Wx7X7/bash1.png",
  },
  {
    id: 6,
    img: "https://i.postimg.cc/RCspvKgj/incredible-removebg-preview.png",
  },
];

let disPartners = document.querySelector(".d-flex");
partners.forEach((data) => {
  disPartners.innerHTML += `
 
  <img src="${data.img}" class="partner-img">
       `;
});
