// Sticky nav shadow on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Active nav link on scroll
const sections = ['hero', 'apps', 'manifesto', 'support'];
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(id => {
  const el = document.getElementById(id);
  if (el) sectionObserver.observe(el);
});

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Console easter egg
console.log('%c SKIP THE BS ', 'background:#bada55;color:#0f0f0f;font-family:monospace;font-weight:bold;font-size:14px;padding:4px 8px;');
console.log('%c Yes, #bada55 is a real hex code. It ships intentionally. ', 'color:#bada55;font-family:monospace;font-size:11px;');
console.log('%c hello@skipthebs.app ', 'color:#606060;font-family:monospace;font-size:11px;');
