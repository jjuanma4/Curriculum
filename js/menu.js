(() => {
  const boton = document.querySelector('.menu-boton');
  const panel = document.getElementById('menu-principal');
  if (!boton || !panel) return;
  const abrir = (si) => { boton.setAttribute('aria-expanded', String(si)); panel.classList.toggle('abierto', si); };
  boton.addEventListener('click', () => abrir(boton.getAttribute('aria-expanded') !== 'true'));
  panel.addEventListener('click', (e) => { if (e.target.closest('a')) abrir(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { abrir(false); boton.focus(); } });
})();
