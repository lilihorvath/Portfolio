const navbar = document.querySelector('.navbar');
const navbarOffset = navbar.offsetTop;

window.onscroll = () => {
     if (navbarOffset >= window.pageYOffset) {
         navbar.classList.remove('sticky');
     } else {
         navbar.classList.add('sticky');
     }
 }