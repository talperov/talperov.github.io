// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const target = document.querySelector(a.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Project filter
const buttons = document.querySelectorAll('.project-filter button');
const cards = document.querySelectorAll('.project-card');

buttons.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    buttons.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    cards.forEach(card=>{
      if(filter === 'all') card.style.display = '';
      else {
        const tags = card.dataset.tags.split(',');
        card.style.display = tags.includes(filter) ? '' : 'none';
      }
    });
  });
});
