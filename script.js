let navLinks = document.querySelector(".nav-links");
let hamburgerMenu = document.querySelector('.hamburger-menu');
let hamburgerHideMenu = document.querySelector('.hamburger-hide-menu');

  function showMenu() {
    navLinks.style.right = "0";
    hamburgerMenu.style.display ="none";
    hamburgerHideMenu.style.display ="block";
  }
  function hideMenu() {
    navLinks.style.right = "-200px";
    hamburgerMenu.style.display ="block";
    hamburgerHideMenu.style.display ="none";
  }