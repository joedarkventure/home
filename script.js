<script>
/* =========================
   MOBILE MENU TOGGLE
========================= */
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

function toggleMenu() {
  navLinks.classList.toggle("show");
}

hamburger.addEventListener("click", toggleMenu);

/* =========================
   CLOSE MENU ON LINK CLICK
========================= */
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

/* =========================
   SMOOTH SCROLLING
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

/* =========================
   ACTIVE NAV LINK ON SCROLL
========================= */
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});

/* =========================
   SCROLL-IN ANIMATION
========================= */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".card").forEach(card => {
  observer.observe(card);
});
</script>
<script>
  let lastScrollY = window.scrollY;
  const socialBar = document.querySelector(".social-bar");

  window.addEventListener("scroll", () => {
    if (!socialBar) return;

    if (window.scrollY > lastScrollY) {
      socialBar.style.opacity = "0";
      socialBar.style.pointerEvents = "none";
    } else {
      socialBar.style.opacity = "1";
      socialBar.style.pointerEvents = "auto";
    }
    lastScrollY = window.scrollY;
  });
</script>
