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

/* ===============================================================
   Scroll reveal
   ---------------------------------------------------------------
   Watches elements with the `.reveal` class and adds `.is-visible`
   once they enter the viewport, so CSS can animate them in.
   =============================================================== */

// Collect all elements that should animate into view
const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0) {
  // IntersectionObserver lets us run code when elements enter/leave viewport
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        // Only animate when the element is actually visible on screen
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          // Once revealed, we stop observing this element (animate only once)
          observer.unobserve(entry.target);
        }
      });
    },
    {
      // Trigger the reveal when ~15% of the element is visible
      threshold: 0.15,
    }
  );

  // Start observing each `.reveal` element
  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });
}