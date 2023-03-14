import "@fortawesome/fontawesome-free/css/all.css";
import "../css/styles.scss";
import "../js/tailwind.generated.js";
import "flowbite";

import createButton from "../components/button";


// Récupération des éléments HTML
const hdBtnLowres = document.getElementById("header_btn-lowres");
const hdDropdown = document.getElementById("header_dropdown-lowres");
const navLogoBtnLowres = document.getElementById("nav_logo_btn-lowres");
const navLogoMenuHiRes = document.getElementById("nav_logo_menu-hires");
const navLogoDropdownMenuLowRes = document.getElementById("nav_logo_dropdown-lowres");
const myButton = document.getElementById("fb-btn");

// Fonction pour afficher ou masquer un élément
function toggleElementVisibility(element) {
element.classList.toggle("hidden");
}

// Fonction pour afficher ou masquer le menu dropdown au clic
function toggleDropdownMenu() {
toggleElementVisibility(hdDropdown);
}

// Fonction pour afficher ou masquer le menu dropdown du logo Pasquier au clic
function toggleLogoDropdownMenu() {
toggleElementVisibility(navLogoDropdownMenuLowRes);
}

// Fonction pour gérer l'affichage des éléments en fonction de la taille de la fenêtre
function handleWindowSize() {
const isSmallWindow = window.innerWidth <= 768;
navLogoBtnLowres.classList.toggle("hidden", !isSmallWindow);
navLogoMenuHiRes.classList.toggle("hidden", isSmallWindow);
hdBtnLowres.classList.toggle("hidden", !isSmallWindow);
navLogoDropdownMenuLowRes.classList.toggle("hidden", !isSmallWindow);
const contactElement = document.getElementById("contact");
const followElement = document.getElementById("follow");
if (isSmallWindow) {
contactElement.textContent = "Contact";
followElement.textContent = "Suivre";
} else {
contactElement.textContent = "Contactez-nous";
followElement.textContent = "Suivez-nous";
}
}

// Gestion des événements
myButton.appendChild(createButton());
hdBtnLowres.addEventListener("click", toggleDropdownMenu);
navLogoBtnLowres.addEventListener("click", toggleLogoDropdownMenu);
hdDropdown.classList.add("hidden");
window.addEventListener("resize", handleWindowSize);
window.addEventListener("load", handleWindowSize);

// Script affichant la date actuelle
let date = document.getElementById("getDate");
let actualDate = new Date().getFullYear();
date.innerHTML = actualDate;



// Script qui modifie le DOM pour ajouter les liens du header logo lowres
let ourStory = document.getElementById("histoire");
let products = document.getElementById("produits");
let inspirations = document.getElementById("inspirations");
let surmesure = document.getElementById("surmesure");
let dropdownMenu1 = document.getElementById("dropdown-menu1");
let dropdownMenu2 = document.getElementById("dropdown-menu2");
let dropdownMenu3 = document.getElementById("dropdown-menu3");
let dropdownMenu4 = document.getElementById("dropdown-menu4");

// Pour la rubrique notre histoire
ourStory.addEventListener("click", function () {
  if (dropdownMenu1.classList.contains("hidden")) {
    dropdownMenu1.classList.remove("hidden");
    var listItem1 = document.createElement("li");
    var listItem2 = document.createElement("li");
    var listItem3 = document.createElement("li");
    var link1 = document.createElement("a");
    var link2 = document.createElement("a");
    var link3 = document.createElement("a");

    link1.classList.add("rounded-t", "bg-gray-200", "hover:bg-gray-400", "py-2", "px-4", "block", "whitespace-nowrap");
    link1.setAttribute("href", "#");
    link1.textContent = "A définir";

    link2.classList.add("bg-gray-200", "hover:bg-gray-400", "py-2", "px-4", "block", "whitespace-nowrap");
    link2.setAttribute("href", "#");
    link2.textContent = "A définir";

    link3.classList.add("rounded-b", "bg-gray-200", "hover:bg-gray-400", "py-2", "px-4", "block", "whitespace-nowrap");
    link3.setAttribute("href", "#");
    link3.textContent = "A définir";

    listItem1.appendChild(link1);
    listItem2.appendChild(link2);
    listItem3.appendChild(link3);

    dropdownMenu1.appendChild(listItem1);
    dropdownMenu1.appendChild(listItem2);
    dropdownMenu1.appendChild(listItem3);
  } else {
    dropdownMenu1.classList.add("hidden");
    while (dropdownMenu1.firstChild) {
      dropdownMenu1.removeChild(dropdownMenu1.firstChild);
    }
  }
});

// Pour la rubrique produits
products.addEventListener("click", function () {
  if (dropdownMenu2.classList.contains("hidden")) {
    dropdownMenu2.classList.remove("hidden");
    var listItem1 = document.createElement("li");
    var listItem2 = document.createElement("li");
    var listItem3 = document.createElement("li");
    var link1 = document.createElement("a");
    var link2 = document.createElement("a");
    var link3 = document.createElement("a");

    link1.classList.add("rounded-t", "bg-gray-200", "hover:bg-gray-400", "py-2", "px-4", "block", "whitespace-nowrap");
    link1.setAttribute("href", "#");
    link1.textContent = "A définir";

    link2.classList.add("bg-gray-200", "hover:bg-gray-400", "py-2", "px-4", "block", "whitespace-nowrap");
    link2.setAttribute("href", "#");
    link2.textContent = "A définir";

    link3.classList.add("rounded-b", "bg-gray-200", "hover:bg-gray-400", "py-2", "px-4", "block", "whitespace-nowrap");
    link3.setAttribute("href", "#");
    link3.textContent = "A définir";

    listItem1.appendChild(link1);
    listItem2.appendChild(link2);
    listItem3.appendChild(link3);

    dropdownMenu2.appendChild(listItem1);
    dropdownMenu2.appendChild(listItem2);
    dropdownMenu2.appendChild(listItem3);
  } else {
    dropdownMenu2.classList.add("hidden");
    while (dropdownMenu2.firstChild) {
      dropdownMenu2.removeChild(dropdownMenu2.firstChild);
    }
  }
});

// Pour la rubrique inspirations
inspirations.addEventListener("click", function () {
  if (dropdownMenu3.classList.contains("hidden")) {
    dropdownMenu3.classList.remove("hidden");
    var listItem1 = document.createElement("li");
    var listItem2 = document.createElement("li");
    var listItem3 = document.createElement("li");
    var link1 = document.createElement("a");
    var link2 = document.createElement("a");
    var link3 = document.createElement("a");

    link1.classList.add("rounded-t", "bg-gray-200", "hover:bg-gray-400", "py-2", "px-4", "block", "whitespace-nowrap");
    link1.setAttribute("href", "#");
    link1.textContent = "A définir";

    link2.classList.add("bg-gray-200", "hover:bg-gray-400", "py-2", "px-4", "block", "whitespace-nowrap");
    link2.setAttribute("href", "#");
    link2.textContent = "A définir";

    link3.classList.add("rounded-b", "bg-gray-200", "hover:bg-gray-400", "py-2", "px-4", "block", "whitespace-nowrap");
    link3.setAttribute("href", "#");
    link3.textContent = "A définir";

    listItem1.appendChild(link1);
    listItem2.appendChild(link2);
    listItem3.appendChild(link3);

    dropdownMenu3.appendChild(listItem1);
    dropdownMenu3.appendChild(listItem2);
    dropdownMenu3.appendChild(listItem3);
  } else {
    dropdownMenu3.classList.add("hidden");
    while (dropdownMenu3.firstChild) {
      dropdownMenu3.removeChild(dropdownMenu3.firstChild);
    }
  }
});

// Pour la rubrique sur-mesure
surmesure.addEventListener("click", function () {
  if (dropdownMenu4.classList.contains("hidden")) {
    dropdownMenu4.classList.remove("hidden");
    var listItem1 = document.createElement("li");
    var listItem2 = document.createElement("li");
    var listItem3 = document.createElement("li");
    var link1 = document.createElement("a");
    var link2 = document.createElement("a");
    var link3 = document.createElement("a");

    link1.classList.add("rounded-t", "bg-gray-200", "hover:bg-gray-400", "py-2", "px-4", "block", "whitespace-nowrap");
    link1.setAttribute("href", "#");
    link1.textContent = "A définir";

    link2.classList.add("bg-gray-200", "hover:bg-gray-400", "py-2", "px-4", "block", "whitespace-nowrap");
    link2.setAttribute("href", "#");
    link2.textContent = "A définir";

    link3.classList.add("rounded-b", "bg-gray-200", "hover:bg-gray-400", "py-2", "px-4", "block", "whitespace-nowrap");
    link3.setAttribute("href", "#");
    link3.textContent = "A définir";

    listItem1.appendChild(link1);
    listItem2.appendChild(link2);
    listItem3.appendChild(link3);

    dropdownMenu4.appendChild(listItem1);
    dropdownMenu4.appendChild(listItem2);
    dropdownMenu4.appendChild(listItem3);
  } else {
    dropdownMenu4.classList.add("hidden");
    while (dropdownMenu4.firstChild) {
      dropdownMenu4.removeChild(dropdownMenu4.firstChild);
    }
  }
});



// Affichage des images plein écran
const img = document.querySelector('.clickable');

img.addEventListener('click', function () {
  const fullscreen = document.createElement('div');
  fullscreen.className = 'fullscreen';
  fullscreen.style.backgroundImage = `url(${this.getAttribute('data-fullscreen-src')})`;
  document.body.appendChild(fullscreen);

  fullscreen.addEventListener('click', function () {
    document.body.removeChild(this);
  });
});



// Gestion de la vitesse du scroll lors du clic sur "en savoir plus"
var lien = document.querySelector('a[href="#savoir_plus"]');
var destination = document.querySelector('#savoir_plus');


function descendreEnDoucheur(destination) {
  // Calcul de la position de l'élément de destination
  var position = destination.offsetTop;

  // Animation de la descente en douceur
  window.scrollTo({
    top: position,
    behavior: 'smooth'
  });
}

// Ajout d'un événement sur le clic du lien
lien.addEventListener('click', function (e) {
  e.preventDefault();
  descendreEnDoucheur(destination); // Appel de la fonction d'animation de descente en douceur
});



// Gestion du caroussel de la page principale 

