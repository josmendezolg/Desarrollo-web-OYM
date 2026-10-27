// Año del footer
document.getElementById('year').textContent = new Date().getFullYear();

// Roles rotativos (máquina de escribir)
const roles = ['Desarrollador Full-Stack', 'Ingeniero de IA', 'Constructor de productos'];
const el = document.getElementById('role');
let r = 0, c = 0, del = false;
(function type(){
  const w = roles[r];
  el.textContent = w.slice(0, c);
  if(!del && c === w.length){ del = true; return setTimeout(type, 1400); }
  if(del && c === 0){ del = false; r = (r + 1) % roles.length; }
  c += del ? -1 : 1;
  setTimeout(type, del ? 35 : 75);
})();

// Filtros de proyectos
const btns = document.querySelectorAll('.filters button');
const items = document.querySelectorAll('#grid .item');
btns.forEach(b => b.addEventListener('click', () => {
  btns.forEach(x => x.classList.remove('on'));
  b.classList.add('on');
  const f = b.dataset.f;
  items.forEach(i => i.classList.toggle('hide', f !== 'all' && !i.dataset.c.split(' ').includes(f)));
}));

// Botón volver arriba + enlace activo del navbar
const backTop = document.getElementById('top');
const links = document.querySelectorAll('.nav-link');
const secs = [...links].map(l => document.querySelector(l.getAttribute('href')));
addEventListener('scroll', () => {
  backTop.classList.toggle('show', scrollY > 500);
  const y = scrollY + 140;
  secs.forEach((s, i) => links[i].classList.toggle('active', s.offsetTop <= y && s.offsetTop + s.offsetHeight > y));
}, {passive:true});
backTop.addEventListener('click', () => scrollTo({top:0, behavior:'smooth'}));

// Cerrar menú móvil al elegir enlace
links.forEach(l => l.addEventListener('click', () => {
  const m = document.getElementById('menu');
  if(m.classList.contains('show')) bootstrap.Collapse.getInstance(m).hide();
}));
