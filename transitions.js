document.addEventListener('DOMContentLoaded', () => {
  const page = document.getElementById('page-wrapper');
  const navLinks = document.querySelectorAll('.nav-link');
  const backBtn = document.querySelector('.back-button');

  // 1. Animar entrada
  requestAnimationFrame(() => {
    page.classList.add('page-enter-active');
  });

  // 2. Función para salida + redirección
  function animateOutAndRedirect(url) {
    page.classList.remove('page-enter-active');
    page.classList.add('page-exit-active');

    page.addEventListener('transitionend', () => {
      window.location.href = url;
    }, { once: true });
  }

  // 3. Interceptar links de navegación
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      animateOutAndRedirect(link.href);
    });
  });

  // 4. Interceptar botón de volver (solo en contacto.html)
  if (backBtn) {
    backBtn.addEventListener('click', e => {
      e.preventDefault();
      animateOutAndRedirect(backBtn.href);
    });
  }
});
