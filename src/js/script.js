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
    // Afficher le bouton
    navLogoBtnLowres.style.display = "block";
    navLogoMenuHiRes.style.display = "none";
    hdBtnLowres.style.display = "block";
    hdDropdown.style.display = "block"

  } else {
    // Cacher le bouton
    navLogoBtnLowres.style.display = "none";
    navLogoMenuHiRes.style.display = "flex";
    hdBtnLowres.style.display = "none";
    hdDropdown.style.display = "none";
  }
});


// Vérifier la largeur de la fenêtre au chargement de la page
/* if (window.innerWidth <= displayWidth) {
  navLogoBtnLowres.style.display = "flex";
  navLogoMenuHiRes.style.display = "none";
  hdBtnLowres.style.display = "block";
  hdDropdown.style.display = "block"

} else {
  navLogoBtnLowres.style.display = "none";
  navLogoMenuHiRes.style.display = "flex";
  hdBtnLowres.style.display = "none";
  hdDropdown.style.display = "none";
} */



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



// Script affichant la date actuelle
let date = document.getElementById("getDate");
let actualDate = new Date().getFullYear();
date.innerHTML = actualDate;




// Script qui modifie le DOM pour ajouter les liens du header logo lowres
var ourStory = document.getElementById("our-story");
var dropdownMenu = document.getElementById("dropdown-menu");

ourStory.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("hidden")) {
    dropdownMenu.classList.remove("hidden");
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

    dropdownMenu.appendChild(listItem1);
    dropdownMenu.appendChild(listItem2);
    dropdownMenu.appendChild(listItem3);
  } else {
    dropdownMenu.classList.add("hidden");
    while (dropdownMenu.firstChild) {
      dropdownMenu.removeChild(dropdownMenu.firstChild);
    }
  }
});
