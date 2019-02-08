function menuWork() {
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
};

function modalWork() {
  var modalOpenButton = document.querySelector(".special-offer__button");
  var modal = document.querySelector(".modal");
  var modalButton = document.querySelector(".modal__add");

  modalOpenButton.addEventListener('click', function (evt) {
    document.body.classList.add("body--no-scroll");
    modal.classList.remove("visually-hidden");
  });

  function closeModal() {
    document.body.classList.remove("body--no-scroll");
    modal.classList.add("visually-hidden");
  };

  modalButton.addEventListener('click', function (evt) {
    closeModal();
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      closeModal();
    }
  });

  document.addEventListener('mousedown', function (evt) {
    if (!evt.target.closest(".modal-container")) {
      closeModal();
    }
  });
};

menuWork();
modalWork();
