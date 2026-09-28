// ---- 1. Sample project data (replace with your own project's data) ----
const projects = [
  { title: "Portfolio Site", category: "web", desc: "A responsive personal portfolio.", tech: "HTML, CSS, JS" },
  { title: "Logo Redesign", category: "design", desc: "Brand identity refresh.", tech: "Figma" },
  { title: "Todo App", category: "web", desc: "A simple task manager.", tech: "JavaScript, LocalStorage" },
];

// ---- 2. Render project cards dynamically ----
const grid = document.getElementById("projectGrid");
function renderProjects(filter) {
  grid.innerHTML = "";
  projects
    .filter(p => filter === "all" || p.category === filter)
    .forEach((p, i) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<h3>${p.title}</h3><p>${p.category}</p>`;
      card.addEventListener("click", () => openModal(p));
      grid.appendChild(card);
    });
}
renderProjects("all");

// ---- 3. Filter buttons ----
document.querySelectorAll(".filter-bar button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-bar button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

// ---- 4. Modal ----
const modal = document.getElementById("projectModal");
function openModal(p) {
  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalDesc").textContent = p.desc;
  document.getElementById("modalTech").textContent = p.tech;
  modal.classList.add("open");
}
document.getElementById("modalClose").addEventListener("click", () => modal.classList.remove("open"));
modal.addEventListener("click", (e) => { if (e.target === modal) modal.classList.remove("open"); });

// ---- 5. Hamburger menu ----
document.getElementById("hamburgerBtn").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("show");
});

// ---- 6. CTA smooth scroll ----
document.getElementById("ctaBtn").addEventListener("click", () => {
  document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
});

// ---- 7. Contact form validation (vanilla JS, no library) ----
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;
  ["name", "email", "subject", "message"].forEach(id => {
    const field = document.getElementById(id);
    if (!field.value.trim()) {
      field.classList.add("invalid");
      valid = false;
    } else {
      field.classList.remove("invalid");
    }
  });
  const email = document.getElementById("email");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value && !emailPattern.test(email.value)) {
    email.classList.add("invalid");
    valid = false;
  }
  status.textContent = valid ? "Message sent successfully!" : "Please fix the highlighted fields.";
  status.style.color = valid ? "green" : "#dc2626";
  if (valid) form.reset();
});
