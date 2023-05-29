// Education

let products = [
  {
    id: 1,
    name: "Asiphe Ndimlana",
    img: "",
    desc: "",
  },
  {
    id: 2,
    name: "Rigby",
    img: "",
    desc: "",
  },
  {
    id: 3,
    name: "Benson",
    img: "",
    desc: "",
  },
  {
    id: 4,
    name: "Pops",
    img: "",
    desc: "",
  },
  {
    id: 5,
    name: "",
    img: "",
    desc: "",
  },
  {
    id: 6,
    name: "",
    img: "",
    desc: "",
  },
];

let dispEducation = document.querySelector(".education");
education.forEach((data) => {
  dispEducation.innerHTML += `
    <br>
        <div class="edu-card">
        <p class="display-4">${data.course}</p>  
        <div class="edu-card-body">
        <p class="display-5">${data.place}</p>
        <p class="display-5">${data.Period}</p>
        <p class="display-5">${data.desc}</p>
   
       
        </div>
        </div>`;
});
