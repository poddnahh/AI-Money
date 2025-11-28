// Update footer year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Optional: reveal-on-scroll (content is visible by default via CSS)
if ("IntersectionObserver" in window) {
  const revealEls = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  revealEls.forEach((el) => observer.observe(el));
}

// FAQ accordion
document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", () => {
    const open = item.classList.contains("open");

    document.querySelectorAll(".faq-item").forEach((i) => {
      i.classList.remove("open");
      const ans = i.querySelector(".faq-answer");
      if (ans) ans.style.maxHeight = 0;
    });

    if (!open) {
      item.classList.add("open");
      const answer = item.querySelector(".faq-answer");
      if (answer) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    }
  });
});
