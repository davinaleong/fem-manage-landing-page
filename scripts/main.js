const primaryHeader = document.querySelector("#primaryHeader");
const navToggle = document.querySelector("#primaryNavToggle");
const primaryNav = document.querySelector("#primaryNav");
const iconHamburger = document.querySelector("#iconHamburger");
const iconClose = document.querySelector("#iconClose");

navToggle.addEventListener("click", () => {
  if (primaryNav.hasAttribute("data-visible")) {
    navToggle.setAttribute("aria-expanded", false);
    iconHamburger.classList.remove("hidden");
    iconClose.classList.add("hidden");
  } else {
    navToggle.setAttribute("aria-expanded", true);
    iconHamburger.classList.add("hidden");
    iconClose.classList.remove("hidden");
  }

  primaryHeader.toggleAttribute("data-overlay");
  primaryNav.toggleAttribute("data-visible");
});
