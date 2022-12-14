//MOVEMENT ANIMATION TO HAPPEN

const card = document.querySelector(".card");
const container = document.querySelector(".container");

//ITems

const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

//Moving animation event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 15;

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//animate in
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";

  //pop out
  title.style.transform = "translateZ(200px)";
  sneaker.style.transform = "translateZ(250px) rotateZ(-45deg)";
  purchase.style.transform = "translateZ(125px)";
  description.style.transform = "translateZ(75px)";
  sizes.style.transform = "translateZ(75px)";
});

//animate out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0) rotateZ(0deg)";
  purchase.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
});
