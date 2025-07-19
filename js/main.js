document.addEventListener("DOMContentLoaded", function () {
  const userMenuLinks = document.querySelectorAll(".user__menu-link");

  if (userMenuLinks.length > 0) {
    userMenuLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();

        userMenuLinks.forEach(
          function (otherLink) {
            if (
              otherLink !== this &&
              otherLink.classList.contains("user__menu-link-active")
            ) {
              otherLink.classList.remove("user__menu-link-active");
            }
          }.bind(this)
        );
        this.classList.add("user__menu-link-active");
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const NavBarLinks = document.querySelectorAll(".navbar__link-text");

  if (NavBarLinks.length > 0) {
    NavBarLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();

        NavBarLinks.forEach(
          function (otherLink) {
            if (
              otherLink !== this &&
              otherLink.classList.contains("navbar__link-text-active")
            ) {
              otherLink.classList.remove("navbar__link-text-active");
            }
          }.bind(this)
        );
        this.classList.add("navbar__link-text-active");
      });
    });
  }
});
