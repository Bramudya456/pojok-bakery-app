// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//ketika menu hamburger di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klik diluar sidebar untuk menghilangkan navigasi
const hamburgerMenu = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (event) {
  if (
    !hamburgerMenu.contains(event.target) &&
    !navbarNav.contains(event.target)
  )
    navbarNav.classList.remove("active");
});
