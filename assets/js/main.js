// Global UI behaviors: reveal on scroll, active nav, and small helpers
(function(){
  function onScrollReveal(){
    const elements = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach(el => io.observe(el));
  }

  function setActiveNav(){
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
      if(link.getAttribute('href') === location.pathname.split('/').pop()){
        link.classList.add('is-active');
      } else if(location.pathname.endsWith('/') && link.getAttribute('href') === 'index.html'){
        link.classList.add('is-active');
      }
    });
  }

  function init(){
    onScrollReveal();
    setActiveNav();
  }

  document.addEventListener('DOMContentLoaded', init);
})();


