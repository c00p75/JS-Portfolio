let expandedNav = document.querySelector('.menu-btn');
let navLinks =document.querySelector('#desktop_nav');

expandedNav.addEventListener('click', function (event) {  
  expandedNav.classList.toggle('active');
  expandedNav.classList.toggle('active-menu-btn');
  navLinks.classList.toggle('hide');
  navLinks.classList.toggle('mobile-menu');
  
})

navLinks.addEventListener('click', function (event) {  
  if(event.target.className == 'hover_effect' && navLinks.classList.contains('mobile-menu')){
    expandedNav.classList.toggle('active');
    expandedNav.classList.toggle('active-menu-btn');
    navLinks.classList.toggle('hide');    
    navLinks.classList.toggle('mobile-menu');
  }
})