// Simple inter-page transition helper
(function(){
  function ensureOverlay(){
    let overlay = document.querySelector('#page-transition');
    if(!overlay){
      overlay = document.createElement('div');
      overlay.id = 'page-transition';
      document.body.appendChild(overlay);
    }
    return overlay;
  }
  function navigate(href){
    const overlay = ensureOverlay();
    overlay.classList.add('is-active');
    // Let the animation play before navigating
    setTimeout(() => { window.location.href = href; }, 320);
  }
  function bind(){
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a');
      if(!a) return;
      const href = a.getAttribute('href');
      if(!href) return;
      const isExternal = /^(https?:)?\/\//i.test(href) || href.startsWith('mailto:') || href.startsWith('#');
      if(isExternal) return; // skip internal anchors and external links
      e.preventDefault();
      navigate(href);
    });
    window.addEventListener('pageshow', () => {
      const overlay = document.querySelector('#page-transition');
      if(overlay) overlay.classList.remove('is-active');
    });
  }
  document.addEventListener('DOMContentLoaded', bind);
})();


