// ===== Mobile nav =====
const toggleBtn = document.querySelector(".nav__toggle");
const menu = document.querySelector(".nav__menu");

toggleBtn?.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("is-open");
  toggleBtn.setAttribute("aria-expanded", String(isOpen));
});

// Close menu on link click (mobile)
menu?.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    menu.classList.remove("is-open");
    toggleBtn.setAttribute("aria-expanded", "false");
  }
});

// ===== Data =====
const projects = [
  {
    title: "Tunnelchat",
    desc: "A chat service that transmits encrypted messages over DNS packets — designed to communicate even under restrictive ISP conditions.",
    tags: ["Networking", "Security", "JavaScript"],
    link: "https://github.com/eL-iam123"
  },
  {
    title: "Ramble",
    desc: "An audio-first social platform for quick voice posts and discovery — designed for fast publishing and engaging feed experiences.",
    tags: ["Product", "Frontend", "Social"],
    link: "https://github.com/eL-iam123"
  },
  {
    title: "Kenshin",
    desc: "A crypto bot that analyzes new token launches, performs risk checks, and sends actionable recommendations to Telegram.",
    tags: ["Python", "AI/Rules", "Telegram"],
    link: "https://github.com/eL-iam123"
  },
  {
    title: "WALL-E",
    desc: "A Python-based pentesting tool for scanning common security issues and generating structured vulnerability reports.",
    tags: ["Python", "Security", "CLI"],
    link: "https://github.com/eL-iam123"
  },
  {
    title: "Hive",
    desc: "A skill-first platform concept for finding and hiring hidden technical talent based on proof-of-work, not degrees.",
    tags: ["Web", "Product", "Nigeria"],
    link: "https://github.com/eL-iam123"
  }
];

const sideQuests = [
  {
    title: "Receipt Scanner (Shop Credit)",
    desc: "Extract items + totals from payment receipts (image/PDF) and match against inventory.",
    tags: ["Node.js", "OCR", "Supabase"],
    status: "In progress",
    link: "#"
  },
  {
    title: "WhatsApp UI Minimal Mod",
    desc: "Prototype a cleaner WhatsApp layout: remove Status tab and simplify navigation.",
    tags: ["Android", "UI", "Reverse Engineering"],
    status: "Research",
    link: "#"
  },
  {
    title: "Kenshin Bot: Multi-Strategy",
    desc: "Expand token analysis bot into multi-asset signals with risk rules + Telegram alerts.",
    tags: ["Python", "Crypto", "Automation"],
    status: "Planned",
    link: "#"
  }
];

// stackGroups removed — stack is rendered as static HTML in Index.html

// ===== Render projects =====
const grid = document.getElementById("projectsGrid");

if (grid) {
  grid.innerHTML = projects.map(p => `
    <article class="project">
      <div class="project__img">
        <div class="project__placeholder">${p.title}</div>
      </div>

      <h3>${p.title}</h3>
      <p>${p.desc}</p>

      <div class="project__meta">
        ${p.tags.map(t => `<span class="badge">${t}</span>`).join("")}
      </div>

      <a class="link" href="${p.link}" target="_blank" rel="noopener">
        Open →
      </a>
    </article>
  `).join("");
}

// ===== Render side quests =====
const sideQuestGrid = document.getElementById("sideQuestGrid");

if (sideQuestGrid) {
  sideQuestGrid.innerHTML = sideQuests.map(sq => `
    <article class="project">
      <div class="project__img">
        <div class="project__placeholder">${sq.title}</div>
      </div>
      
      <div class="quest__top">
        <h3>${sq.title}</h3>
        <span class="badge pill--mini">${sq.status}</span>
      </div>
      
      <p>${sq.desc}</p>

      <div class="project__meta">
        ${sq.tags.map(t => `<span class="badge">${t}</span>`).join("")}
      </div>

      <a class="link" href="${sq.link}" rel="noopener">
        View Details →
      </a>
    </article>
  `).join("");
}

// Stack rendering moved to static HTML in Index.html

// ===== Footer year =====
document.getElementById("year").textContent = String(new Date().getFullYear());

// ===== Simple animated counters =====
function animateCount(id, target) {
  const el = document.getElementById(id);
  if (!el) return;
  const duration = 800;
  const start = performance.now();
  const from = 0;

  function tick(now) {
    const t = Math.min(1, (now - start) / duration);
    el.textContent = String(Math.floor(from + (target - from) * t));
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

animateCount("stat1", 12);
animateCount("stat2", 8);
animateCount("stat3", 3);

// ===== Contact form =====
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const name = (data.get("name") || "").toString().trim();

  note.textContent = `Thanks ${name || "there"} — message saved locally for now. Next step: connect Netlify Forms or a backend.`;
  form.reset();
});

// ===== Availability toggle =====
const nowText = document.getElementById("nowText");
const nowStatus = document.getElementById("nowStatus");

// Toggle this to false if you're not currently available
const available = true;

if (!available) {
  nowText.textContent = "Currently unavailable";
  nowStatus.style.color = "#ef4444";
}