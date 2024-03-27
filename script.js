console.log('javascript is working');

// navbar elements for responsive
let openHam = document.getElementById('openHam');
let closeHam = document.getElementById('closeHam');
let navLinks = document.getElementById('navLinks');

// responsive navbar functions
const hamburgerEvent = (navigation, close, open) => {

    navLinks.style.display = navigation;
    closeHam.style.display = close;
    openHam.style.display = open;

};

// add functions to click events
openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block"));