(() => {
  const grid = document.getElementById('proyectos-grid');
  const vacio = document.getElementById('portfolio-vacio');
  const filtros = document.getElementById('portfolio-filtros');
  if (!grid || !vacio || !filtros) return;
  const tarjetas = [...grid.querySelectorAll('.proyecto-card')];
  if (!tarjetas.length) return;               // sin proyectos: se queda el aviso
  vacio.hidden = true;
  filtros.hidden = false;
  filtros.addEventListener('click', (e) => {
    const boton = e.target.closest('button[data-filtro]');
    if (!boton) return;
    filtros.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b === boton)));
    tarjetas.forEach((t) => { t.hidden = !(boton.dataset.filtro === 'todos' || t.dataset.tipo === boton.dataset.filtro); });
  });
})();
