import "@fortawesome/fontawesome-free/css/all.css";
import "../css/styles.scss";
import "../js/tailwind.generated.js";
import "flowbite";

import createButton from "../components/button";


// Affichage conditionnel du menu dropdown logo lowres
let hdBtnLowres = document.getElementById("header_btn-lowres");
let hdDropdown = document.getElementById("header_dropdown-lowres");
let navLogoBtnLowres = document.getElementById("nav_logo_btn-lowres");
let navLogoMenuHiRes = document.getElementById("nav_logo_menu-hires");
let navLogoDropdownMenuLowRes = document.getElementById("nav_logo_dropdown-lowres");
let myButton = document.getElementById("fb-btn");

myButton.appendChild(createButton());



// Affichage conditionnel du menu dropdown header (menu fb logo) et dy menu dropdown logo pasquier
if (window.innerWidth || document.body.clientWidth <= 768) {
  let isVisible = false;
  hdBtnLowres.addEventListener("click", function () {
    if (isVisible) {
      hdDropdown.style.visibility = "hidden";
      isVisible = false;
    } else {
      hdDropdown.style.visibility = "visible";
      isVisible = true;
    }
  });
  navLogoBtnLowres.addEventListener("click", function () {
    if (isVisible) {
      navLogoDropdownMenuLowRes.style.display = "none";
      isVisible = false;
    } else {
      navLogoDropdownMenuLowRes.style.display = "block";
      isVisible = true;
    }
  });
} else {
  hdDropdown.style.visibility = "visible";
  navLogoDropdownMenuLowRes.style.display = "block";
}


// Récupérer le bouton


// Définir la résolution d'affichage à laquelle le bouton logo menu doit apparaître/disparaître
const displayWidth = 768;

// Ajouter un écouteur d'événements pour le redimensionnement de la fenêtre
window.addEventListener("resize", function () {
  // Vérifier la largeur de la fenêtre
  if ((window.innerWidth || document.body.clientWidth) <= displayWidth) {

    navLogoBtnLowres.style.display = "block";
    navLogoMenuHiRes.style.display = "none";
    hdBtnLowres.style.display = "block";
    //hdDropdown.style.display = "block"

  } else {

    navLogoBtnLowres.style.display = "none";
    navLogoMenuHiRes.style.display = "flex";
    hdBtnLowres.style.display = "none";
    navLogoDropdownMenuLowRes.style.display = "none";
    //hdDropdown.style.display = "none";
  }
});

// Ajouter un écouteur d'événements au chargement de la fenêtre
window.addEventListener("load", function () {
  // Vérifier la largeur de la fenêtre
  if ((window.innerWidth || document.body.clientWidth) <= displayWidth) {

    navLogoBtnLowres.style.display = "block";
    navLogoMenuHiRes.style.display = "none";
    hdBtnLowres.style.display = "block";
    hdDropdown.style.display = "block"
    document.getElementById("contact").innerHTML = "Contact";
    document.getElementById("follow").innerHTML = "Suivre";

  } else {

    navLogoBtnLowres.style.display = "none";
    navLogoMenuHiRes.style.display = "flex";
    hdBtnLowres.style.display = "none";
    hdDropdown.style.display = "none";
    document.getElementById("contact").innerHTML = "Contactez-nous";
    document.getElementById("follow").innerHTML = "Suivez-nous";
  }
});


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

img.addEventListener('click', function() {
  const fullscreen = document.createElement('div');
  fullscreen.className = 'fullscreen';
  fullscreen.style.backgroundImage = `url(${this.getAttribute('data-fullscreen-src')})`;
  document.body.appendChild(fullscreen);
  
  fullscreen.addEventListener('click', function() {
    document.body.removeChild(this);
  });
});
