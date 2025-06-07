export function createCarousel(carouselSelector = '#carousel') {
  const carousel = document.querySelector(carouselSelector);
  if (!carousel) return;

  const sections = carousel.querySelectorAll('.section');
  const sectionArray = Array.from(sections);
  carousel.style.height = `${sectionArray.length * 100}vh`;
  carousel.style.position = 'relative';

  let currentIndex = 0;

  const nav = document.createElement('div');
  nav.classList.add('carousel-nav');
  document.body.appendChild(nav);

  sectionArray.forEach((section, index) => {
   section.style.position = 'absolute';
   section.style.top = `${100 * index}vh`;
   section.style.left = '0';
   section.style.width = '100%';
   section.style.height = '100vh';

   const dot = document.createElement('button');
   dot.classList.add('carousel-indicator');
   dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
   if (index === 0) {
     dot.classList.add('current-slide');
     dot.setAttribute('aria-current', true);
    }
    nav.appendChild(dot);
  });

  const moveToSection = (index) => {
   carousel.style.transform = `translateY(-${index * 100}vh)`;
   carousel.style.transition = 'transform 0.5s ease-in-out';

   const dots = nav.querySelectorAll('button');
   dots.forEach(dot => {
    dot.classList.remove('current-slide');
    dot.removeAttribute('aria-current');
   });
   dots[index].classList.add('current-slide');
   dots[index].setAttribute('aria-current', true);
  };

  document.addEventListener('keydown', (e) => {
   if (e.key === 'ArrowDown') {
    currentIndex = (currentIndex + 1) % sectionArray.length;
    moveToSection(currentIndex);
   } else if (e.key === 'ArrowUp') {
    currentIndex = (currentIndex - 1 + sectionArray.length) % sectionArray.length;
    moveToSection(currentIndex);
   }
  });

  nav.addEventListener('click', e => {
   if (!e.target.matches('button')) return;
   const index = Array.from(nav.children).indexOf(e.target);
   currentIndex = index;
   moveToSection(currentIndex);
  });

  let touchStartY = 0;
  let touchEndY = 0;

  carousel.addEventListener('touchstart', e => {
   touchStartY = e.changedTouches[0].screenY;
  });

  carousel.addEventListener('touchend', e => {
   touchEndY = e.changedTouches[0].screenY;
   handleSwipe();
  });

  const main = document.querySelector('main');

  main.addEventListener('click', (e) => {
   if (e.target.closest('a') || e.target.closest('button')) return;

   currentIndex = (currentIndex + 1) % sectionArray.length;
   moveToSection(currentIndex);
  });

  function handleSwipe() {
   const swipeThreshold = 50;

   if (touchStartY - touchEndY > swipeThreshold) {
    currentIndex = (currentIndex + 1) % sectionArray.length;
    moveToSection(currentIndex);
   } else if (touchEndY - touchStartY > swipeThreshold) {
     currentIndex = (currentIndex - 1 + sectionArray.length) % sectionArray.length;
     moveToSection(currentIndex);
   }
 }
  return { moveToSection, sectionArray };
};









