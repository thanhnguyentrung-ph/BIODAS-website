// =============================
// TOC & SECTION SCROLL EFFECTS
// =============================
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("main.content section");
  const navLinks = document.querySelectorAll("nav.toc a");

  function onScroll() {
    let currentId = "";
    sections.forEach(section => {
      const top = section.offsetTop - 150;
      if (window.scrollY >= top) currentId = section.id;
    });
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === currentId) {
        link.classList.add("active");
      }
    });
    sections.forEach(sec => sec.classList.remove("active"));
    if (currentId) document.getElementById(currentId).classList.add("active");
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


// =============================
// BIODAS NEWS & INSIGHTS
// =============================

// 🧾 Danh sách bài viết (ví dụ 5 bài mới)
const biodasNewsList = [
  { title: "AI Adoption in Cancer Care", desc: "Exploring AI in cancer diagnosis and treatment.", uploadDate: "2025-10-10", img: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12475323/", link: "ai-cancer.html" },
  { title: "Digital Health Transformation", desc: "How digital ecosystems reshape healthcare.", uploadDate: "2025-09-25", img: "https://www.who.int/images/default-source/imported/ai-health.jpg", link: "digital-health.html" },
  { title: "Precision Medicine and Bioinformatics", desc: "Integrating genomic data into practice.", uploadDate: "2025-08-18", img: "https://www.genome.gov/sites/default/files/media/images/2023-06/precision-medicine.jpg", link: "precision-medicine.html" },
  { title: "AI and Infectious Diseases", desc: "Using ML to predict outbreaks.", uploadDate: "2025-07-10", img: "https://assets.researchsquare.com/files/rs-2404699/v1/01e6f9da-cbe7-4a24-8c61-bb26abf623c3.png", link: "ai-infectious.html" },
  { title: "Genomic Data Ethics", desc: "Balancing innovation and privacy.", uploadDate: "2025-06-15", img: "https://cdn.pixabay.com/photo/2018/01/15/07/51/dna-3088011_1280.jpg", link: "genomics-ethics.html" },
];

// 🧮 Tính thời gian “Uploaded X days/weeks/months ago”
function getTimeAgo(dateString) {
  const now = new Date();
  const uploaded = new Date(dateString);
  const diffDays = Math.floor((now - uploaded) / (1000 * 60 * 60 * 24));

  if (diffDays < 7)
    return `Uploaded ${diffDays === 0 ? "today" : diffDays + " day" + (diffDays > 1 ? "s" : "") + " ago"}`;
  else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `Uploaded ${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else {
    const months = Math.floor(diffDays / 30);
    return `Uploaded ${months} month${months > 1 ? "s" : ""} ago`;
  }
}

// 🔄 Lấy 3 bài ngẫu nhiên trong 30 bài mới nhất
function getRecentRandomNews(arr, limit = 30, count = 3) {
  const sorted = arr.sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));
  const latest = sorted.slice(0, limit);
  const shuffled = latest.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// 🧱 Render giao diện
function renderBiodasNews() {
  const grid = document.getElementById("biodas-news-grid");
  if (!grid) return;

  const selected = getRecentRandomNews(biodasNewsList);
  grid.innerHTML = "";

  selected.forEach(news => {
    const card = document.createElement("article");
    card.className = "news-card";
    card.innerHTML = `
      <img src="${news.img}" alt="${news.title}">
      <div class="news-info">
        <h3><a href="/news/${news.link}">${news.title}</a></h3>
        <p>${news.desc}</p>
        <span class="news-meta">📅 ${getTimeAgo(news.uploadDate)}</span>
      </div>`;
    grid.appendChild(card);
  });
}

// 🔰 Khởi chạy Biodas News
document.addEventListener("DOMContentLoaded", renderBiodasNews);
