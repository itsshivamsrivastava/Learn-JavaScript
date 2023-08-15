const navBar_dark = document.getElementsByClassName('navbar-dark');
const darkMode = document.getElementById('dark-mode-btn');
const footerAnchor = document.getElementsByClassName('footer-a');

/* Counter */
const counterHeading = document.getElementById('counter-heading');
const counter = document.getElementById('counter');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');


const navbarBrand = document.getElementsByClassName('navbar-brand');
navbarBrand[0].innerHTML = 'Counter';

/* Dark Mode & Light Mode */
darkMode.addEventListener('click', () => {
    if (darkMode.innerHTML === 'Dark Mode') {
        document.body.style.backgroundColor = '#202020';
        document.body.style.color = '#fff';
        navBar_dark[0].style.backgroundColor = '#202020';
        navBar_dark[0].style.color = '#fff';
        navbarBrand[0].style.color = '#fff';
        counterHeading.style.color = '#fff';
        counterHeading.style.borderBottomColor = '#fff';
        counter.style.color = '#fff';
        footerAnchor[0].style.color = '#fff';
        darkMode.innerHTML = 'Light Mode';
    } else {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
        navBar_dark[0].style.backgroundColor = '#fff';
        navBar_dark[0].style.color = '#000';
        navbarBrand[0].style.color = '#000';
        counterHeading.style.color = '#000';
        counterHeading.style.borderBottomColor = '#000';
        counter.style.color = '#000';
        footerAnchor[0].style.color = '#000';
        darkMode.innerHTML = 'Dark Mode';
    }
});

/* Counter Implementation */
let count = 0;
counter.innerHTML = count;

/* Increase Counter */
increase.addEventListener('click', () => {
    count++;
    counter.innerHTML = count;
});
/* Counter Decrease */
decrease.addEventListener('click', () => {
    count--;
    counter.innerHTML = count;
});

/* Counter Reset */
reset.addEventListener('click', () => {
    count = 0;
    counter.innerHTML = count;
});