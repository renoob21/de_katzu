document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const faqItems = document.querySelectorAll(".faq-item");

  // Mobile menu toggle
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // FAQ Accordion
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = question.querySelector("svg");

    question.addEventListener("click", () => {
      const isVisible = !answer.classList.contains("hidden");
      answer.classList.toggle("hidden");
      if (icon) {
        icon.style.transform = isVisible ? "rotate(0deg)" : "rotate(180deg)";
      }
    });
  });
});