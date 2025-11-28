document.addEventListener("DOMContentLoaded", function () {
  // footer year
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // FAQ accordion
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    item.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");

      // close all
      faqItems.forEach((i) => i.classList.remove("open"));

      // open clicked if it was closed
      if (!isOpen) {
        item.classList.add("open");
      }
    });
  });
});
