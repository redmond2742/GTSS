console.log("main.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("nav-toggle");
  const nav = document.getElementById("nav-menu");

  if (!hamburger || !nav) {
    console.error("Hamburger or nav not found!");
    return;
  } else {
    console.log("Hamburger and nav found.");
  }

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
    console.log("Hamburger clicked!");
  });
});
