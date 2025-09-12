const copyright = document.querySelector(".copyright-year");
const headerEl = document.querySelector(".header");
const btnMenu = document.querySelector(".btn-mobile-nav");

btnMenu.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const year = new Date().getFullYear();
copyright.textContent = year;

///////////////////////////////

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", function () {
    if (link.classList.contains("main-list-item")) {
      headerEl.classList.remove("nav-open");
    }
  });
});
