import "@fortawesome/fontawesome-free/css/all.css";
import "../css/styles.scss";
import "../js/tailwind.generated.js";
import "flowbite";

import createButton from "../components/button";



const myButton = document.getElementById("fb-btn");
myButton.appendChild(createButton());



// Affichage conditionnel du menu dropdown header
let hdBtn = document.getElementById("header_btn");
let testElement = document.getElementById("test");
if (window.innerWidth || document.body.clientWidth < 768) {
  let isVisible = false;
  hdBtn.addEventListener("click", function () {
    if (isVisible) {
      testElement.style.visibility = "hidden";
      isVisible = false;
    } else {
      testElement.style.visibility = "visible";
      isVisible = true;
    }
  });
} else {
  testElement.style.visibility = "visible";
}


// Affichage conditionnel du menu dropdown logo lowres
let lowResButton = document.getElementById("nav_logo-btn");
let lowResMenu = document.getElementById("nav_logo-lowres");

if (window.innerWidth || document.body.clientWidth < 768) {
  let isVisible = false;
  lowResButton.addEventListener("click", function () {
    if (isVisible) {
      lowResMenu.style.display = "none";
      isVisible = false;
    } else {
      lowResMenu.style.display = "block";
      isVisible = true;
    }
  });
} else {
  lowResMenu.style.display = "block";
}


// Affichage conditionnel du header texte en low res
if (window.innerWidth || document.body.clientWidth <= 768) {
  document.getElementById("contact").innerHTML = "Contact";
  document.getElementById("follow").innerHTML = "Suivre";
  //document.getElementById("nav_logo-btn").classList.add("menu-burger");
} else {
  document.getElementById("contact").innerHTML = "Contactez-nous";
  document.getElementById("follow").innerHTML = "Suivez-nous";
  //document.getElementById("nav_logo-btn").classList.remove("menu-burger");
}



// Récupérer le bouton
const button = document.getElementById("nav_logo-btn");
const hiResMenu = document.getElementById("nav_logo");

// Définir la résolution d'affichage à laquelle le bouton doit apparaître/disparaître
const displayWidth = 768;

// Ajouter un écouteur d'événements pour le redimensionnement de la fenêtre
window.addEventListener("resize", function () {
  // Vérifier la largeur de la fenêtre
  if ((window.innerWidth || document.body.clientWidth) <= displayWidth) {
    // Afficher le bouton
    button.style.display = "block";
    hiResMenu.style.display = "none";

  } else {
    // Cacher le bouton
    button.style.display = "none";
    hiResMenu.style.display = "";
  }
});



// Vérifier la largeur de la fenêtre au chargement de la page
if (window.innerWidth <= displayWidth) {
  button.style.display = "block";
  document.getElementById("nav_logo").style.display = "none";
} else {
  button.style.display = "none";
}


// Script affichant la date actuelle
let date = document.getElementById("getDate");
let actualDate = new Date().getFullYear();
date.innerHTML = actualDate;