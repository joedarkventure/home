/* ================= MOBILE NAV TOGGLE ================= */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  hamburger.classList.toggle("active");
});

/* Close menu when a nav link is clicked (mobile UX) */
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    hamburger.classList.remove("active");
  });
});

/* ================= ACTIVE LINK ON SCROLL ================= */
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

/* ================= HEADER SHADOW ON SCROLL ================= */
const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.style.boxShadow = "0 6px 20px rgba(0,0,0,0.1)";
  } else {
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";
  }
});

/* ================= OPTIONAL: SAFETY CHECK ================= */
// Prevent errors if elements are missing
window.addEventListener("DOMContentLoaded", () => {
  if (!hamburger || !navLinks) {
    console.warn("Navigation elements not found.");
  }
});
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("open");
});
