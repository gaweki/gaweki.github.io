// Animation utilities for sophisticated interactions

// Intersection Observer for scroll-triggered animations
export function initScrollAnimations() {
  if (typeof window === 'undefined') return;
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // Observe all elements with fade-in class
  document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// Mouse tracking parallax effect for hero section
export function initParallaxEffect(selector) {
  if (typeof window === 'undefined') return;
  
  const hero = document.querySelector(selector);
  if (!hero) return;
  
  hero.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    const xPercent = (clientX / innerWidth - 0.5) * 2;
    const yPercent = (clientY / innerHeight - 0.5) * 2;
    
    hero.style.transform = `perspective(1000px) rotateY(${xPercent * 2}deg) rotateX(${-yPercent * 2}deg)`;
  });
  
  hero.addEventListener('mouseleave', () => {
    hero.style.transform = '';
  });
}

// Smooth scroll to anchor
export function smoothScrollTo(target, duration = 800) {
  if (typeof window === 'undefined') return;
  
  const targetElement = document.querySelector(target);
  if (!targetElement) return;
  
  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;
  
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }
  
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  
  requestAnimationFrame(animation);
}

// Page transition animation
export function initPageTransitions() {
  if (typeof window === 'undefined') return;
  
  // Add page wrapper class on load
  document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    if (main) {
      main.classList.add('page-transition-wrapper');
    }
  });
}

// Stagger animation for list items
export function staggerAnimation(selector, delay = 100) {
  if (typeof window === 'undefined') return;
  
  const items = document.querySelectorAll(selector);
  items.forEach((item, index) => {
    item.style.animationDelay = `${index * delay}ms`;
    item.classList.add('stagger-item');
  });
}

// Initialize all animations
export function initAllAnimations() {
  if (typeof window === 'undefined') return;
  
  initScrollAnimations();
  initPageTransitions();
  
  // Setup smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = this.getAttribute('href');
      if (target && target !== '#') {
        smoothScrollTo(target);
      }
    });
  });
}
