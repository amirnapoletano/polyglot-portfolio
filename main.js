/* ===============================================================
   main.js — Polyglot Portfolio
   Handles theme toggling + future animations & interactions
   =============================================================== */

/* Theme toggle */
const toggle = document.querySelector(".theme-toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Save preference in localStorage
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

/* Apply saved theme on page load */
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
}