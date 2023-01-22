import '@fortawesome/fontawesome-free/css/all.css'
import '../css/styles.scss'
import '../js/tailwind.generated.js'
import 'flowbite';

import createButton from '../components/button';

const myButton = document.getElementById('fb-btn');
myButton.appendChild(createButton());

const hdBtn = document.getElementById('header_btn');

function displayContact() {
    document.getElementById("myP1").style.visibility = "visible";
}

hdBtn.addEventListener("mouseover, displayContact");