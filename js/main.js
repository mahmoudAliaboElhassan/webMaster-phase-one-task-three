const header = document.querySelector("header");
const logo = document.querySelector(".logo");
const toggle = document.querySelector(".toggle-icon");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
    logo.classList.add("scrolled-logo");
    toggle.classList.add("scrolled-icon");
  } else {
    header.classList.remove("scrolled");
    logo.classList.remove("scrolled-logo");
    toggle.classList.remove("scrolled-icon");
  }
});
