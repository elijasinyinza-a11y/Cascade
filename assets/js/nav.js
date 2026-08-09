/* ── Karis Cascade — shared nav behaviour ── */
(function () {
  /* Mobile hamburger toggle */
  const hamburger = document.querySelector('[data-hamburger]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
    });
  }

  /* Active nav link highlight */
  const path = window.location.pathname;
  document.querySelectorAll('.landing-nav-links a, .nav-link').forEach(a => {
    if (a.getAttribute('href') && path.endsWith(a.getAttribute('href'))) {
      a.classList.add('active');
    }
  });
})();
