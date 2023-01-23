import "@fortawesome/fontawesome-free/css/all.css";
import "../css/styles.scss";
import "../js/tailwind.generated.js";
import "flowbite";

import createButton from "../components/button";

const myButton = document.getElementById("fb-btn");
myButton.appendChild(createButton());

// Affichage conditionnel du header menu dropdown
var hdBtn = document.getElementById("header_btn");
var testElement = document.getElementById("test");
if (window.innerWidth || document.body.clientWidth < 768) {
  var isVisible = false;
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

// Affichage conditionnel du header texte en low res
if (window.innerWidth || document.body.clientWidth < 768) {
  document.getElementById("contact").innerHTML = "Contact";
  document.getElementById("follow").innerHTML = "Suivre";
} else {
  document.getElementById("contact").innerHTML = "Contactez-nous";
  document.getElementById("follow").innerHTML = "Suivez-nous";
}


// Script affichant la date actuelle
let date = document.getElementById("getDate");
let actualDate = new Date().getFullYear();
date.innerHTML = actualDate;