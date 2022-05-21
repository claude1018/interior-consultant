var menu = document.getElementById("toggle-menu");
var navLinks = document.querySelectorAll(".nav__list--item__link");

menu.addEventListener("click", function () {
  menu.classList.toggle("open");
});

navLinks.forEach(function (navlink) {
  navlink.addEventListener("click", function () {
    navLinks.forEach(function (link) {
      link.classList.remove("active");
    });
    navlink.classList.add("active");
  });
});
