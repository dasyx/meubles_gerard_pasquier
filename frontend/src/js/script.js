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
let navLogoDropdownMenuLowRes = document.getElementById(
  "nav_logo_dropdown-lowres"
);
let myButton = document.getElementById("fb-btn");

myButton.appendChild(createButton());

// Affichage conditionnel du menu dropdown header (menu fb logo) et du menu dropdown logo pasquier
if ((window.innerWidth || document.body.clientWidth) <= 1024) {
  let isVisible = false;
  hdBtnLowres.addEventListener("click", function () {
    if (isVisible) {
      hdDropdown.style.display = "block";
      isVisible = false;
    } else {
      hdDropdown.style.display = "none";
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
  hdDropdown.style.display = "none";
  navLogoDropdownMenuLowRes.style.display = "none";
}

// Cacher le menu dropdown par défaut en haute résolution
if (window.innerWidth >= 1024) {
  hdDropdown.style.visibility = "hidden";
}

// Définir la résolution d'affichage à laquelle le bouton logo menu doit apparaître/disparaître
const displayWidth = 1024;

// Ajouter un écouteur d'événements pour le redimensionnement de la fenêtre
window.addEventListener("resize", function () {
  // Vérifier la largeur de la fenêtre
  if (window.innerWidth < displayWidth) {
    navLogoBtnLowres.style.display = "block";
    navLogoMenuHiRes.style.display = "none";
    hdBtnLowres.style.display = "block";
    hdDropdown.style.display = "none";
  } else {
    navLogoBtnLowres.style.display = "none";
    navLogoMenuHiRes.style.display = "flex";
    hdBtnLowres.style.display = "none";
    hdDropdown.style.display = "none";
  }
});

// Ajouter un écouteur d'événements au chargement de la fenêtre
window.addEventListener("load", function () {
  // Vérifier la largeur de la fenêtre
  if (window.innerWidth <= displayWidth) {
    navLogoBtnLowres.style.display = "block";
    navLogoMenuHiRes.style.display = "none";
    hdBtnLowres.style.display = "block";
    hdDropdown.style.display = "none";
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



// Script pour le menu déroulant du header
document.addEventListener("DOMContentLoaded", function() {
  var dropdownToggles = document.querySelectorAll(".dropdown_lowres");

  dropdownToggles.forEach(function(toggle) {
      toggle.addEventListener("click", function() {
          var menu = this.nextElementSibling;
          menu.classList.toggle("hidden");

          // Enregistrez l'état du menu déroulant dans le sessionStorage
          if (menu.classList.contains("hidden")) {
              sessionStorage.setItem(menu.id, "hidden");
          } else {
              sessionStorage.setItem(menu.id, "visible");
          }
      });
  });

  // Restaurez l'état du menu déroulant à partir du sessionStorage
  var dropdownMenus = document.querySelectorAll(".dropdown-lowres");
  dropdownMenus.forEach(function(menu) {
      var state = sessionStorage.getItem(menu.id);
      if (state === "visible") {
          menu.classList.remove("hidden");
      } else {
          menu.classList.add("hidden");
      }
  });
});
