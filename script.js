document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".site-nav");

  // Mobile menu open/close
  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      if (window.innerWidth < 900 && nav) {
        nav.classList.remove("open");
      }
    });
  });

  // Theme toggle (dark/light)
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;
  const savedTheme = localStorage.getItem("theme");

  // Load saved theme
  if (savedTheme === "dark") {
    body.classList.add("dark");
    if (themeToggle) themeToggle.textContent = "☀️";
  }

  // Toggle theme mode
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark");

      if (body.classList.contains("dark")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
      } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
      }
    });
  }
});
