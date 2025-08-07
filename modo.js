// modo.js
window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#modo');

  // 1) Aplicar modo guardado
  if (localStorage.getItem('modo') === 'oscuro') {
    document.body.classList.add('modo-oscuro');
  }

  // 2) Actualizar icono
  const actualizarIcono = () => {
    if (!btn) return;
    btn.textContent = document.body.classList.contains('modo-oscuro') ? '☀️' : '🌙';
  };
  actualizarIcono();

  // 3) Toggle al hacer clic
  if (btn) {
    btn.addEventListener('click', () => {
      const oscuro = document.body.classList.toggle('modo-oscuro');
      localStorage.setItem('modo', oscuro ? 'oscuro' : 'claro');

      // Animación breve
      btn.classList.add('animado');
      setTimeout(() => btn.classList.remove('animado'), 300);

      actualizarIcono();
    });
  }
});
