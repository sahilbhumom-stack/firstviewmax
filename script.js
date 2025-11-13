// Toggle mobile menu & theme + small UI helpers
document.addEventListener('DOMContentLoaded', function(){
  // mobile menu
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.site-nav');
  if(burger){
    burger.addEventListener('click', ()=> {
      if(nav.style.display === 'flex') nav.style.display = '';
      else nav.style.display = 'flex';
    });
  }

  // Theme toggle (dark/light)
  const tgl = document.getElementById('themeToggle');
  const body = document.body;
  const saved = localStorage.getItem('theme');
  if(saved === 'dark'){ body.classList.add('dark'); if(tgl) tgl.textContent = '☀️'; }

  if(tgl){
    tgl.addEventListener('click', ()=>{
      if(body.classList.contains('dark')){ body.classList.remove('dark'); tgl.textContent = '🌙'; localStorage.setItem('theme','light'); }
      else{ body.classList.add('dark'); tgl.textContent = '☀️'; localStorage.setItem('theme','dark'); }
    });
  }

  // Smooth scroll for nav anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
      if(window.innerWidth < 900 && nav) nav.style.display = ''; // close mobile menu
    });
  });
});
