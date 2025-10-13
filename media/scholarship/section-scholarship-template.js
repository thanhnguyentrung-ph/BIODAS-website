// Hiệu ứng cuộn: hiện dần tiêu đề và hộp highlight
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(
    ".section-scholarship-template h2, .section-scholarship-template .highlight-box"
    );
    const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
        });
    },
    { threshold: 0.15 }
    );
    items.forEach((item) => observer.observe(item));
});
