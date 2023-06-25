// Gestion de la vitesse du scroll lors du clic sur "en savoir plus"
let lien = document.querySelector('a[href="#savoir_plus"]');
let destination = document.querySelector("#savoir_plus");

function descendreEnDoucheur(destination) {
  // Calcul de la position de l'élément de destination
  let position = destination.offsetTop;

  // Animation de la descente en douceur
  window.scrollTo({
    top: position,
    behavior: "smooth",
  });
}

// Ajout d'un événement sur le clic du lien
lien.addEventListener("click", function (e) {
  e.preventDefault();
  descendreEnDoucheur(destination); // Appel de la fonction d'animation de descente en douceur
});