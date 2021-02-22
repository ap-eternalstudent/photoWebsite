const navSlide = () => {
  const burger = document.querySelector(".menu__burger");
  const nav = document.querySelector(".menu");
  const navLinks = document.querySelectorAll(".menu li");
  const btn = document.querySelectorAll(".btn");

  burger.addEventListener("click", () => {
    nav.classList.toggle("menu__active");
    // btn.classList.toggle();
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    burger.classList.toggle("toggle");
  });
};

navSlide();
