// Lightweight tilt effect for hero card
(function(){
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  function attachTilt(element) {
    const rect = () => element.getBoundingClientRect();
    let rafId = 0;
    function onMove(e) {
      const r = rect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const px = (e.clientX - cx) / (r.width / 2);
      const py = (e.clientY - cy) / (r.height / 2);
      const rx = clamp(-py * 10, -12, 12);
      const ry = clamp(px * 10, -12, 12);
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        element.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
      });
    }
    function onLeave(){
      cancelAnimationFrame(rafId);
      element.style.transform = 'rotateX(0) rotateY(0)';
    }
    element.addEventListener('mousemove', onMove);
    element.addEventListener('mouseleave', onLeave);
  }
  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('[data-tilt]')
      .forEach(el => attachTilt(el));
  });
})();


