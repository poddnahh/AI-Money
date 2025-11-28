// Update copyright year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Reveal-on-scroll animation
const revealEls = document.querySelectorAll(".reveal");

if (revealEls.length > 0) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  revealEls.forEach(el => observer.observe(el));
}

// FAQ accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.addEventListener("click", () => {
    const alreadyOpen = item.classList.contains("open");

    // close all
    faqItems.forEach(i => {
      i.classList.remove("open");
      const answer = i.querySelector(".faq-answer");
      if (answer) answer.style.maxHeight = 0;
    });

    // open clicked if it wasn't open
    if (!alreadyOpen) {
      item.classList.add("open");
      const answer = item.querySelector(".faq-answer");
      if (answer) answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
