const toggleBtn = document.querySelector('.menu-toggle');
const overlay = document.querySelector('.overlay');
const body = document.body;

// Toggle mobile menu
function toggleMenu() {
  body.classList.toggle('menu-open');
}

// Open / close menu
toggleBtn.addEventListener('click', toggleMenu);

// Close when clicking overlay
overlay.addEventListener('click', toggleMenu);

// Close on ESC key
document.addEventListener('keydown', (e) => {

  if (e.key === 'Escape') {
    body.classList.remove('menu-open');
  }

});

// =========================
// CAROUSEL LOGIC
// =========================

const track = document.querySelector('.carousel-track');
const slides = Array.from(document.querySelectorAll('.slide'));
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');

let currentIndex = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

// =========================
// BASIC SWIPE SUPPORT
// =========================

let startX = 0;
let endX = 0;

track.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

track.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;

  const diff = startX - endX;

  if (Math.abs(diff) > 40) {
    if (diff > 0) {
      currentIndex = (currentIndex + 1) % slides.length;
    } else {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    }
    updateCarousel();
  }
});

// Optional:
// Close menu when clicking a nav link
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {

  link.addEventListener('click', () => {
    body.classList.remove('menu-open');
  });

});