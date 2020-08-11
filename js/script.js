(() => {
  const buttonElement = document.querySelector(".js-navigation__button");
  const navigationElement = document.querySelector(".js-navigation__list");

  const toggleClass = () => {
    navigationElement.classList.toggle("navigation__list--mobile");
  }

  buttonElement.addEventListener("click", toggleClass);
  navigationElement.addEventListener("click", toggleClass);
})(); 