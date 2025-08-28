// variable de type tableau on les reconnait grace a crochet la variable
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Click EVENT

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

arrowLeft.addEventListener("click", function () {
  ChangeSlide(-1);
  console.log("click !");
});

arrowRight.addEventListener("click", function () {
  ChangeSlide(1);
  console.log("click !");
});

// je crée une variable qui change
let numero = 0;
// une fonction est un blogue de code qui a un but precis comme ci-desous
// sens et une variable qui va prendre 1 ou -1 lorsque je clic sur les fleches
function ChangeSlide(sens) {
  numero = numero + sens;
  if (numero > slides.length - 1) {
    numero = 0;
  }
  if (numero < 0) {
    numero = slides.length - 1;
  }
  // je dis a mon site web de chercher dans le DOM la div .banner-img + dans ma variable slides les images
  document.querySelector(".banner-img").src =
    "./assets/images/slideshow/" + slides[numero].image;
  document.getElementById("tagLine").innerHTML = slides[numero].tagLine;

  // PARTI POINT CARROUSEL
  document.querySelector(".dot_selected").classList.remove("dot_selected");
  let numero_dot = numero + 1;

  document
    .querySelector(".dot:nth-of-type(" + numero_dot + ")")
    .classList.add("dot_selected");
  console.log(numero);
}
