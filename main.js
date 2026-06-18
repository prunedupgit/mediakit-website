// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile menu
const toggle = document.getElementById('navToggle');
const menu   = document.getElementById('mobileMenu');
let menuOpen = false;

toggle.addEventListener('click', () => {
  menuOpen = !menuOpen;
  menu.classList.toggle('open', menuOpen);
  document.body.style.overflow = menuOpen ? 'hidden' : '';
  toggle.querySelector('span:first-child').style.transform =
    menuOpen ? 'rotate(45deg) translate(4px, 4px)' : '';
  toggle.querySelector('span:last-child').style.transform =
    menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : '';
});

document.querySelectorAll('.mobile-menu__link').forEach(link => {
  link.addEventListener('click', () => {
    menuOpen = false;
    menu.classList.remove('open');
    document.body.style.overflow = '';
    toggle.querySelector('span:first-child').style.transform = '';
    toggle.querySelector('span:last-child').style.transform = '';
  });
});

// Scroll reveal
const revealEls = document.querySelectorAll(
  '.hero__eyebrow, .hero__headline, .hero__sub, .hero .btn, .case-study, .about__text, .about__stats, .service, .journal-card, .contact__text, .contact__form'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  }),
  { threshold: 0.12 }
);

revealEls.forEach(el => observer.observe(el));

// Stagger children in services grid
document.querySelectorAll('.service').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.07}s`;
});

document.querySelectorAll('.journal-card').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.1}s`;
});

// Contact form
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const note = document.getElementById('formNote');
  const btn  = e.target.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'Sending…';
  setTimeout(() => {
    note.textContent = 'Thank you — we\'ll be in touch within 48 hours.';
    btn.textContent  = 'Message Sent ✓';
    e.target.reset();
  }, 1200);
});
