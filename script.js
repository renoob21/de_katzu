
document.addEventListener("DOMContentLoaded", function () {
const pageSwitchers = document.querySelectorAll(".page-switcher");
const navLinks = document.querySelectorAll(".nav-link");
const pageContents = document.querySelectorAll(".page-content");
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

// Fungsi untuk mengganti halaman
function switchPage(pageId) {
    pageContents.forEach((content) => {
    content.classList.remove("active", "fade-in");
    });
    const activePage = document.getElementById(pageId);
    if (activePage) {
    activePage.classList.add("active");
    setTimeout(() => {
        activePage.classList.add("fade-in");
    }, 10);
    }

    // Update nav link active state
    navLinks.forEach((link) => {
    link.classList.remove("active");
    
    let mainPage = pageId;
    if (pageId.startsWith("blog-post-")) {
        mainPage = "blog-info";
    }
    
    if (link.getAttribute("data-page") === mainPage) {
        link.classList.add("active");
    }
    });

    mobileMenu.classList.add("hidden");
    // Scroll ke atas setiap kali ganti halaman
    window.scrollTo(0, 0);
}

pageSwitchers.forEach((switcher) => {
    switcher.addEventListener("click", function (e) {
    e.preventDefault();
    const pageId = this.getAttribute("data-page");
    switchPage(pageId);
    // Do not push state for blog list clicks from blog-info page
    if (this.closest('#blog') && pageId.startsWith('blog-post-')) {
            window.history.pushState(null, "", `#${pageId}`);
    } else if (!this.closest('#blog')) {
            window.history.pushState(null, "", `#${pageId}`);
    }
    });
});

mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
});

const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = question.querySelector("svg");
    question.addEventListener("click", () => {
    const isVisible = !answer.classList.contains("hidden");
    answer.classList.toggle("hidden");
    icon.style.transform = isVisible
        ? "rotate(0deg)"
        : "rotate(180deg)";
    });
});

// Handle navigasi back/forward browser
window.addEventListener("popstate", () => {
    const pageId = window.location.hash.substring(1) || "beranda";
    switchPage(pageId);
});

// Tampilkan halaman awal berdasarkan hash URL
const initialPageId = window.location.hash.substring(1) || "beranda";
switchPage(initialPageId);
});
