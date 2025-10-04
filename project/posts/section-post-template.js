// js/post-toc.js

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("main.content section");
  const navLinks = document.querySelectorAll("nav.toc a");

  function onScroll() {
    let currentId = "";
    sections.forEach(section => {
      const top = section.offsetTop - 150;
      if (window.scrollY >= top) {
        currentId = section.id;
      }
    });
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === currentId) {
        link.classList.add("active");
      }
    });
    sections.forEach(sec => sec.classList.remove("active"));
    if (currentId) {
      document.getElementById(currentId).classList.add("active");
    }
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  }, { threshold: 0.1 });

  sections.forEach(sec => observer.observe(sec));
  window.addEventListener("scroll", onScroll);
  onScroll();
});
