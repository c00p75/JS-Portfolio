const expandedNav = document.querySelector('.menu-btn');
const navLinks = document.querySelector('#desktop_nav');

expandedNav.addEventListener('click', () => {
  expandedNav.classList.toggle('active');
  expandedNav.classList.toggle('active-menu-btn');
  navLinks.classList.toggle('hide');
  navLinks.classList.toggle('mobile-menu');
});

navLinks.addEventListener('click', (event) => {
  if (event.target.className === 'hover_effect' && event.classList.contains('mobile-menu')) {
    expandedNav.classList.toggle('active');
    expandedNav.classList.toggle('active-menu-btn');
    navLinks.classList.toggle('hide');
    navLinks.classList.toggle('mobile-menu');
  }
});