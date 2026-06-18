// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Mobile menu
const toggle   = document.getElementById('navToggle');
const menu     = document.getElementById('mobileMenu');
let menuOpen   = false;

function closeMenu() {
  menuOpen = false;
  menu.classList.remove('open');
  document.body.style.overflow = '';
  toggle.children[0].style.transform = '';
  toggle.children[1].style.transform = '';
}

toggle.addEventListener('click', () => {
  menuOpen = !menuOpen;
  menu.classList.toggle('open', menuOpen);
  document.body.style.overflow = menuOpen ? 'hidden' : '';
  toggle.children[0].style.transform = menuOpen ? 'rotate(45deg) translate(4px,4px)'  : '';
  toggle.children[1].style.transform = menuOpen ? 'rotate(-45deg) translate(4px,-4px)' : '';
});

document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', closeMenu));

// Scroll reveal
const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  }),
  { threshold: 0.1 }
);

document.querySelectorAll(
  '.hero__eyebrow,.hero__name,.hero__bio,.hero__actions,' +
  '.about__image-col,.about__content,' +
  '.work__header,.project,' +
  '.podcast__content,.podcast__episodes,' +
  '.writing__header,.article,' +
  '.newsletter__inner,' +
  '.contact__left,.contact__form,' +
  '.label,.section-title'
).forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${(i % 4) * 0.07}s`;
  observer.observe(el);
});

// Newsletter form
document.getElementById('newsletterForm').addEventListener('submit', e => {
  e.preventDefault();
  const note = document.getElementById('newsletterNote');
  const btn  = e.target.querySelector('button');
  btn.disabled = true;
  btn.textContent = 'Subscribing…';
  setTimeout(() => {
    note.textContent = "You're in — welcome aboard.";
    btn.textContent  = 'Subscribed ✓';
    e.target.reset();
  }, 1000);
});

// Contact form
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const note = document.getElementById('formNote');
  const btn  = e.target.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'Sending…';
  setTimeout(() => {
    note.textContent = "Message sent — I'll be in touch within 48 hours.";
    btn.textContent  = 'Sent ✓';
    e.target.reset();
  }, 1200);
});
