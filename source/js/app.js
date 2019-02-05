var menuButton = document.querySelector(".page-header__toggle");
var siteMenu = document.querySelector(".page-header__site");
var userMenu = document.querySelector(".page-header__user");
console.log(menuButton);

menuButton.addEventListener('click', function (evt) {
  if (menuButton.classList.contains("page-header__toggle--close")) {
    menuButton.classList.remove("page-header__toggle--close");
    siteMenu.classList.add("page-header--hide");
    userMenu.classList.add("page-header--hide");
  } else {
    menuButton.classList.add("page-header__toggle--close");
    siteMenu.classList.remove("page-header--hide");
    userMenu.classList.remove("page-header--hide");
  }
});
