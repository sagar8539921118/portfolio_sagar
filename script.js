document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // HERO TEXT CHANGE
  // =========================
  const heroTitle = document.querySelector(".hero-section h2");
  const heroPara = document.querySelector(".hero-section p");

  if (heroTitle) heroTitle.style.color = "#2563eb";

  if (heroPara) {
    heroPara.textContent =
      "I am a Full Stack Developer learning HTML, CSS and JavaScript step by step 🚀";
  }

  // =========================
  // BUTTONS + SMOOTH SCROLL
  // =========================
  const buttons = document.querySelectorAll(".links a");

  buttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      // remove active from all
      buttons.forEach((b) => b.classList.remove("active"));

      // add active to clicked
      this.classList.add("active");

      // scroll to section
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  console.log("Buttons working with JS ✅");
  document.
});