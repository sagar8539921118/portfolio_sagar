document.addEventListener("DOMContentLoaded", () => {
  // Navbar Scroll Effect
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.padding = "0 40px";
      navbar.style.background = "rgba(15, 23, 42, 0.95)";
    } else {
      navbar.style.padding = "0 80px";
      navbar.style.background = "rgba(15, 23, 42, 0.8)";
    }
  });

  // Reveal Elements on Scroll
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Apply animation styles and observe
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.8s ease-out";
    observer.observe(section);
  });

  // Smooth Scroll for Internal Navigation Links Only
  document.querySelectorAll('nav .right a[href^="#"], .hero-section .links a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId.startsWith("#") && targetId !== "#") {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
        }
      }
    });
  });

  console.log("Premium Portfolio Script Initialized 🚀");
});