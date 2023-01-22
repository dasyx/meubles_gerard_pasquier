import '@fortawesome/fontawesome-free/css/all.css'
import '../css/styles.scss'
import '../js/tailwind.generated.js'
import 'flowbite';

import createButton from '../components/button';

const myButton = document.getElementById('fb-btn');
myButton.appendChild(createButton());


// Affichage conditionnel du header menu dropdown
if (window.innerWidth < 480) {
    hdBtn = document.getElementById('header_btn');
    hdBtn.addEventListener("mouseover", function () {
        document.getElementById("test").style.visibility = "visible";
    });
    hdBtn.addEventListener("click", function () {
        document.getElementById("test").style.visibility = "hidden";
    });
} else {
    document.getElementById("test").style.visibility = "hidden";
}


// Affichage conditionnel du header texte en low res
if (window.innerWidth < 377) {
    document.getElementById("contact").innerHTML = "Contact";
    document.getElementById("follow").innerHTML = "Suivre";
} else {
    document.getElementById("contact").innerHTML = "Contactez-nous";
    document.getElementById("follow").innerHTML = "Suivez-nous";
}