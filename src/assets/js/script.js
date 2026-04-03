// LOADER
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const header = document.querySelector(".header");
const menutoggle = document.querySelector(".menu-toggle");
const navItem = document.querySelector(".nav-links");

/* Toggle menu mobile */
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* Scroll effect */
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
    menutoggle.classList.add("scrolled");
    navItem.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
    menutoggle.classList.remove("scrolled");
    navItem.classList.remove("scrolled");
  }
});


// REVEAL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// DARK MODE
document.getElementById("themeToggle")
  .addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

/* ===== Animation au scroll pour toutes les sections ===== */
// const reveals = document.querySelectorAll(".reveal");
// const revealObserver = new IntersectionObserver(
//   entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("active");
//       }
//     });
//   },
//   { threshold: 0.2 }
// );

// reveals.forEach(el => revealObserver.observe(el));