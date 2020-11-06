let mainNav = document.querySelector('.navbar-links');
let navBarToggle = document.getElementById('js-navbar-toggle');
let symbolToggle = document.getElementById('symbol-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
  if (symbolToggle.classList.contains('fa-bars')) {
    symbolToggle.classList.remove('fa-bars');
    symbolToggle.classList.add('fa-times');
  } else {
    symbolToggle.classList.remove('fa-times');
    symbolToggle.classList.add('fa-bars');
  }
});
