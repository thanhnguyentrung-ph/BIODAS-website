
// COUNTDOWN SCRIPT

const cd = document.getElementById("countdown"),
lbl = document.getElementById("countdown-label"),
days = document.getElementById("days"),
hours = document.getElementById("hours"),
mins = document.getElementById("minutes"),
secs = document.getElementById("seconds");

setInterval(() => {
  const now = new Date().getTime();
  let dist = targetDate - now;
  if (dist < 0) dist = 0;

  const d = Math.floor(dist / (1000 * 60 * 60 * 24));
  const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((dist % (1000 * 60)) / 1000);

  days.textContent = d.toString().padStart(2, "0");
  hours.textContent = h.toString().padStart(2, "0");
  mins.textContent = m.toString().padStart(2, "0");
  secs.textContent = s.toString().padStart(2, "0");

  if (dist > 0) {
    lbl.textContent = `Sự kiện diễn ra sau: ${d} ngày ${h} giờ ${m} phút`;
  } else {
    lbl.textContent = "Sự kiện đang diễn ra hoặc đã kết thúc";
    lbl.style.textAlign = "center";
  }
}, 1000);
