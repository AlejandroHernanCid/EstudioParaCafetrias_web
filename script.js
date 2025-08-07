document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  let currentIndex = 0;

  function updateCarousel() {
    const width = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${width * currentIndex}px)`;
  }

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }, 3000); // 3 segundo

  window.addEventListener("resize", updateCarousel);

  // Carrusel de equipo
  const equipoTrack = document.querySelector(".equipo-carousel-track");
  const equipoSlides = Array.from(equipoTrack.children);
  let equipoIndex = 0;

  function updateEquipoCarousel() {
    const width = equipoSlides[0].getBoundingClientRect().width;
    equipoTrack.style.transform = `translateX(-${width * equipoIndex}px)`;
  }

  setInterval(() => {
    equipoIndex = (equipoIndex + 1) % equipoSlides.length;
    updateEquipoCarousel();
  }, 3000); // cada 3 segundos

  window.addEventListener("resize", updateEquipoCarousel);

  const form = document.getElementById("contactForm");
  form.addEventListener("submit", () => {
    setTimeout(() => form.reset(), 100); // espera breve para que se envíe antes de limpiar
  });

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

//Modo oscuro || modo claro
const botonModo = document.querySelector('#modo');

function actualizarIcono() {
  botonModo.textContent = document.body.classList.contains('modo-oscuro') ? '☀️' : '🌙';
}

botonModo.addEventListener('click', () => {
  document.body.classList.toggle('modo-oscuro');
  actualizarIcono();

  // Animación
  botonModo.classList.add('animado');
  setTimeout(() => botonModo.classList.remove('animado'), 300);

  // Guardar preferencia
  localStorage.setItem('modo', document.body.classList.contains('modo-oscuro') ? 'oscuro' : 'claro');
});

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('modo') === 'oscuro') {
    document.body.classList.add('modo-oscuro');
  }
  actualizarIcono();
});


