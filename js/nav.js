// Mobile Nav Bar
const desktopNavBar = document.querySelector(".nav-bar");
const mobileNavBar = document.querySelector(".mobile-nav-bar");

window.changeNavBar = () => {
  if (window.innerWidth <= 768) {
    desktopNavBar.style.display = "none";
    mobileNavBar.style.display = "flex";
  } else {
    desktopNavBar.style.display = "flex";
    mobileNavBar.style.display = "none";
  }
};

changeNavBar();
window.addEventListener("resize", changeNavBar);

const openMenu = () => {
  const mobileNavMenu = document.querySelector(".mobile-nav-menu");
  mobileNavMenu.style.width = "80vw";
};

const closeMenu = () => {
  const mobileNavMenu = document.querySelector(".mobile-nav-menu");
  mobileNavMenu.style.width = "0";
};
