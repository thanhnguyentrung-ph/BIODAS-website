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
  //   link: "../media/news/251010-ai-cancer.html",
  //   enLink: "../en/media/news/251010-ai-cancer.html"
  // },

  {
    title: "Trí tuệ Nhân tạo trong Chẩn đoán Hình ảnh: Hiện tại và Tương lai",
    desc: "aThe Current and Future State of AI Interpretation of Medical Imagesbc",
    uploadDate: "2025-10-22",
    img: "https://www.onixnet.com/wp-content/uploads/2023/03/How-AI-Powered-Medical-Imaging-is-Transforming-Healthcare.jpg",
    link: "../media/news/251022-ai-image.html",
  },

  {
    title: "Tái định nghĩa Thiên lệch Dữ liệu: Bài học từ AI trong Y tế",
    desc: "Considering Biased Data as Informative Artifacts in AI-Assisted Health Care",
    uploadDate: "2025-10-20",
    img: "https://www.datasciencecentral.com/wp-content/uploads/2025/06/Understanding-Bias-in-AI-Models.png",
    link: "../media/news/251020-ai-bias.html",
  },

  {
    title: "Nhân viên y tế có nguy cơ bị “định lượng hóa” bởi AI?",
    desc: "Medical AI and Clinician Surveillance - The Risk of Becoming Quantified Workers",
    uploadDate: "2025-10-18",
    img: "https://media.licdn.com/dms/image/v2/D4D10AQHBnfHGzb1ffA/image-shrink_800/B4DZlpoWApIEAc-/0/1758413808045?e=2147483647&v=beta&t=57Fx3lXOvPfawCUL0q24Q2oI5HvlA2AVfWYpTM2Ia84",
    link: "../media/news/251018-ai-surveillance.html",
  },

  {
    title:
      "AI Cách mạng hóa Thử nghiệm lâm sàng (Clinical Trials): Tối ưu hóa hiệu quả và giảm thiểu rủi ro",
    desc: "AI Revolutionizing Clinical Trials: Optimizing Efficiency and Minimizing Risks",
    uploadDate: "2025-10-16",
    img: "https://credevo.com/articles/wp-content/uploads/2025/07/AI_Driven_Protocol_Design_for_Faster_Smarter_Clinical_Trials-1024x576.png",
    link: "../media/news/251016-ai-clinical-trial.html",
  },

  {
    title:
      "Nâng cao Trí tuệ nhân tạo Y học từ Dữ liệu Ca bệnh trong 100 năm: Dr. CaBot và CPC-Bench",
    desc: "Building Smarter Medical AI from a Century of Patient Cases: Dr. CaBot và CPC-Bench",
    uploadDate: "2025-10-14",
    img: "https://cpcbench.com/assets/robot_cpc_small.png",
    link: "../media/news/251014-drcabot.html",
    enLink: "../en/media/news/251014-drcabot.html",
  },

  {
    title:
      "Chấp nhận và tiếp nhận Trí tuệ nhân tạo (AI) trong chẩn đoán, điều trị và chăm sóc người bệnh ung thư",
    desc: "Acceptance and Adoption of Artificial Intelligence (AI) in Cancer Diagnosis, Treatment, and Patient Care",
    uploadDate: "2025-10-10",
    img: "https://i.pinimg.com/736x/10/fe/12/10fe12094076f89c72ee1795dcdf7cc3.jpg",
    link: "../media/news/251010-ai-cancer.html",
    enLink: "../en/media/news/251010-ai-cancer.html",
  },

  {
    title:
      "Chuyển đổi số trong Y tế Việt Nam: Nền tảng hiện đại hóa và đổi mới Hệ thống Chăm sóc sức khỏe Quốc gia",
    desc: "Digital Transformation of Vietnam’s Healthcare: Modernizing the National Health System for an Intelligent and Inclusive Future",
    uploadDate: "2025-09-19",
    img: "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2024/12/5/chuyen-doi-so-y-te-10-173338760854580749395.jpg",
    link: "../media/news/250919-vn-digital-health.html",
    enLink: "../en/media/news/250919-vn-digital-health.html",
  },

  {
    title: "Khoa học Dữ liệu Y Sinh: Động lực kiến tạo nền Y học hiện đại",
    desc: "Biomedical Data Science: Intelligence Powering the Next Era of Medicine",
    uploadDate: "2025-09-15",
    img: "https://community.nasscom.in/sites/default/files/styles/560_x_350/public/media/images/Data%20Analytics%20Techniques%20for%20Next-Generation%20Sequencing%20Insights.jpg.webp?itok=lrkVV24s",
    link: "../media/news/250915-data-science-powering.html",
    enLink: "../en/media/news/250915-data-science-powering.html",
  },

  {
    title:
      "Những hướng nghiên cứu y sinh tiên phong: Khoa học dữ liệu kiến tạo tương lai",
    desc: "Emerging Frontiers in Biomedical Research: Data Science as the Architect of Future Healthcare",
    uploadDate: "2025-09-09",
    img: "https://www.zucisystems.com/wp-content/uploads/2022/07/Data-Science-in-Healthcare-Industry-Benefits-Strategies-Applications-Tools-and-Future-Trends.png",
    link: "../media/news/250909-data-science-direction.html",
    enLink: "../en/media/news/250909-data-science-direction.html",
  },
];

// 🧮 Tính thời gian “Uploaded X days/weeks/months ago”
function getTimeAgo(dateString) {
  const now = new Date();
  const uploaded = new Date(dateString);
  const diffDays = Math.floor((now - uploaded) / (1000 * 60 * 60 * 24));

  if (diffDays < 7)
    return `Uploaded ${
      diffDays === 0
        ? "today"
        : diffDays + " day" + (diffDays > 1 ? "s" : "") + " ago"
    }`;
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
  const sorted = arr.sort(
    (a, b) => new Date(b.uploadDate) - new Date(a.uploadDate)
  );
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

  selected.forEach((news) => {
    const card = document.createElement("article");
    card.className = "news-card";

    // Detect if we're on English page
    const isEnglishPage = window.location.pathname.includes("/en/");
    const newsLink = isEnglishPage ? news.enLink : news.link;

    card.innerHTML = `
      <img src="${news.img}" alt="${news.title}">
      <div class="news-info">
        <h3><a href="${newsLink}">${news.title}</a></h3>
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
    sections.forEach((section) => {
      const top = section.offsetTop - 150;
      if (window.scrollY >= top) currentId = section.id;
    });
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === currentId) {
        link.classList.add("active");
      }
    });
    sections.forEach((sec) => sec.classList.remove("active"));
    if (currentId) document.getElementById(currentId).classList.add("active");
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((sec) => observer.observe(sec));
  window.addEventListener("scroll", onScroll);
  onScroll();
});
