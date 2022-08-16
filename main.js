const navToggler = document.querySelector('.navbar-toggler');
const navs = document.querySelector('.navbar-nav');
const overlay = document.querySelector('.container-overlay');
const dropdownTriggers = document.querySelectorAll('.dropdown > .dropdown-trigger');
const mql = window.matchMedia('(min-width: 912px)');

// navbar toggler (hamburger)
navToggler.addEventListener('click', () => {
  // toggle active class
  navToggler.classList.toggle('active');
  navs.classList.toggle('active');
  overlay.classList.toggle('active');

  // toggle disable scrolling
  document.body.toggleAttribute('scroll-disabled');
});

// overlay (this also acts like close button for navbar toggler)
overlay.addEventListener('click', () => {
  overlay.classList.remove('active');
  navToggler.classList.remove('active');
  navs.classList.remove('active');
});

// dropdowns
dropdownTriggers.forEach(trigger => {
  // click event
  trigger.addEventListener('click', event => {
    event.preventDefault();
    event.target.closest('.dropdown').classList.toggle('active');
  });
  // blur event
  isDesktop(mql);
});

// watch for media query changes
mql.addEventListener('change', () => {
  // check media
  isDesktop(mql);
  // remove active class on dropdown everytime the media query change
  document.querySelectorAll('.dropdown').forEach(dd => dd.classList.remove('active'));
});

// check media query
function isDesktop(mql) {
  if (mql.matches) { // desktop
    dropdownTriggers.forEach(trigger => trigger.addEventListener('blur', blurHandler))
  } else { // mobile
    dropdownTriggers.forEach(trigger => trigger.removeEventListener('blur', blurHandler))
  }
}

// blur handler
function blurHandler(event) {
  event.target.closest('.dropdown').classList.remove('active');
}

