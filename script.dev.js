"use strict";

// scroll section active line 
var menuIcon = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');

menuIcon.onclick = function () {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}; // lets remove navbar on scroll


window.onscroll = function () {
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
}; //  scroll reveal 


ScrollReveal({
  reset: true,
  distance: '100px',
  duration: 2000,
  delay: 200
});
ScrollReveal().reveal('.home-content h1, .about-img', {
  origin: 'left'
});
ScrollReveal().reveal('.home-content p, .about-content', {
  origin: 'right'
});
ScrollReveal().reveal(' .heading ', {
  origin: 'top'
});
ScrollReveal().reveal('.home-img,  .skills-items, .portfolio-container,  .contact form', {
  origin: 'bottom'
}); // typing animation

var typed = new Typed('.multiple-text', {
  strings: ['Student At RV University', 'Computer Science and Engineering Student', 'B tech (Hons)'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});
//# sourceMappingURL=script.dev.js.map
