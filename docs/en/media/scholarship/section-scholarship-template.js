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

// Tự động tạo độ trễ theo số lượng box (linh hoạt)
document.addEventListener("DOMContentLoaded", () => {
const timelineItems = document.querySelectorAll(".section-scholarship-template .timeline-item");
timelineItems.forEach((item, index) => {
    item.style.setProperty("--i", index);
});
});

// UNIVERSAL APPLY BUTTON DEADLINE HANDLER (All buttons)
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".apply-button");

  buttons.forEach((btn) => {
    const deadlineStr = btn.getAttribute("data-deadline");
    if (!deadlineStr) return;

    const deadline = new Date(deadlineStr);
    const now = new Date();

    if (now > deadline) {
      // 🔹 Quá hạn — đổi nút
      btn.textContent = "Applications are now closed";
      btn.removeAttribute("href");
      btn.classList.add("closed");
    } else {
      // 🔹 Còn hạn — hiển thị tooltip ngày hết hạn
      const diffDays = Math.ceil((deadline - now) / (1000 * 60 * 60 * 24));
      btn.title = `Deadline: ${deadline.toLocaleDateString()} (${diffDays} days left)`;
    }
  });
});