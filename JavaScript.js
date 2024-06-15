const desktopUpArrow = document.querySelector(".FirstupArrow");
const mobileUpArrow = document.querySelector(".SecondupArrow");
const mainMenuForMobile = document.querySelector(".main-menu");
const menuForDesktop = document.querySelector(".content-inside-connect");
const desktopDownArrow = document.querySelector(".FirstdownArrow");
const mobileDownArrow = document.querySelector(".SeconddownArrow");
const menuIcon = document.querySelector(".menuIcon");
const crossX = document.querySelector(".cross-x");
const mobileSubMenu = document.querySelector(".sub-menu");
const icons = document.querySelector(".icons");

// Add a reset function
function resetArrows() {
  desktopUpArrow.style.display = "none";
  desktopDownArrow.style.display = "block";
  mobileUpArrow.style.display = "none";
  mobileDownArrow.style.display = "block";
}

// Call the reset function when the screen size changes
window.addEventListener("resize", function () {
  if (window.innerWidth <= 1200) {
    // For mobile view: Hide desktop menu
    menuForDesktop.style.display = "none";
  } else {
    // For desktop view: Hide mobile menu
    mainMenuForMobile.style.display = "none";
    resetArrows(); // Call the reset function
  }
});

// Add event listeners for the arrows
desktopDownArrow.addEventListener("click", function () {
  menuForDesktop.style.display = "flex";
  desktopUpArrow.style.display = "block";
  desktopDownArrow.style.display = "none";
});

desktopUpArrow.addEventListener("click", function () {
  menuForDesktop.style.display = "none";
  desktopUpArrow.style.display = "none";
  desktopDownArrow.style.display = "block";
});

menuIcon.addEventListener("click", function () {
  mainMenuForMobile.style.display = "flex";
  menuIcon.style.display = "none";
  crossX.style.display = "block";
  mobileSubMenu.style.display = "none";
  mobileUpArrow.style.display = "none";
  mobileDownArrow.style.display = "block";
});

crossX.addEventListener("click", function () {
  mainMenuForMobile.style.display = "none";
  menuIcon.style.display = "block";
  crossX.style.display = "none";
});

mobileDownArrow.addEventListener("click", function () {
  mobileSubMenu.style.display = "flex";
  mobileUpArrow.style.display = "block";
  mobileDownArrow.style.display = "none";
});

mobileUpArrow.addEventListener("click", function () {
  mobileSubMenu.style.display = "none";
  mobileUpArrow.style.display = "none";
  mobileDownArrow.style.display = "block";
});
