document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        const callout = e.target.querySelector(".callout");
        if (callout) callout.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });
  sections.forEach((sec, i) => {
    sec.classList.add(i % 2 === 0 ? "slide-left" : "slide-right");
    observer.observe(sec);
  });
});