// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Carrusel de proyectos
  const track = document.querySelector(".carousel-track");
  const slides = track ? Array.from(track.children) : [];
  let currentIndex = 0;

  function updateCarousel() {
    if (!slides.length) return;
    const width = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${width * currentIndex}px)`;
  }

  setInterval(() => {
    if (!slides.length) return;
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }, 3000);

  window.addEventListener("resize", updateCarousel);
  updateCarousel();

  // Carrusel de equipo
  const equipoTrack = document.querySelector(".equipo-carousel-track");
  const equipoSlides = equipoTrack ? Array.from(equipoTrack.children) : [];
  let equipoIndex = 0;

  function updateEquipoCarousel() {
    if (!equipoSlides.length) return;
    const width = equipoSlides[0].getBoundingClientRect().width;
    equipoTrack.style.transform = `translateX(-${width * equipoIndex}px)`;
  }

  setInterval(() => {
    if (!equipoSlides.length) return;
    equipoIndex = (equipoIndex + 1) % equipoSlides.length;
    updateEquipoCarousel();
  }, 3000);

  window.addEventListener("resize", updateEquipoCarousel);
  updateEquipoCarousel();

  // Reset de form tras envío
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", () => {
      setTimeout(() => form.reset(), 100);
    });
  }

  // Fade al cambiar de página
  document.querySelectorAll('.fade-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = this.href;
      }, 2000);
    });
  });
});
