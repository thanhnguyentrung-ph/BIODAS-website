// =============================
// BIODAS NEWS & INSIGHTS
// =============================

// 🧾 Danh sách bài viết
const biodasNewsList = [
  // {
  //   title: "abc",
  //   desc: "abc",
  //   uploadDate: "2025-10-10",
  //   img: "https://abc",
  //   link: "251010-ai-cancer.html"
  // },

  {
    title: "Chấp nhận và tiếp nhận Trí tuệ nhân tạo (AI) trong chẩn đoán, điều trị và chăm sóc người bệnh ung thư",
    desc: "Acceptance and Adoption of Artificial Intelligence (AI) in Cancer Diagnosis, Treatment, and Patient Care",
    uploadDate: "2025-10-10",
    img: "https://mapmygenome.in/cdn/shop/articles/The_Role_of_AI_in_Cancer_Diagnosis_and_Treatment.jpg?v=1745564737",
    link: "../media/news/251010-ai-cancer.html"
  },

  {
    title: "Những hướng nghiên cứu y sinh tiên phong: Khoa học dữ liệu kiến tạo tương lai",
    desc: "Emerging Frontiers in Biomedical Research: Data Science as the Architect of Future Healthcare",
    uploadDate: "2025-09-30",
    img: "https://www.zucisystems.com/wp-content/uploads/2022/07/Data-Science-in-Healthcare-Industry-Benefits-Strategies-Applications-Tools-and-Future-Trends.png",
    link: "../media/news/250930-data-science.html"
  },

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