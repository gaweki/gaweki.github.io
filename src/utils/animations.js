/**
 * Animation Utilities and Helpers
 * JavaScript utilities for managing animations and page transitions
 */

/**
 * Initialize page load animation
 */
export const initPageLoadAnimation = () => {
  // Add page-wrapper class to main content for load animation
  if (typeof window !== 'undefined') {
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.classList.add('page-wrapper');
    }

    // Remove loading overlay after animation
    const loadingOverlay = document.querySelector('.loading-overlay');
    if (loadingOverlay) {
      setTimeout(() => {
        loadingOverlay.style.display = 'none';
      }, 800);
    }
  }
};

/**
 * Scroll reveal animation using Intersection Observer
 */
export const initScrollReveal = () => {
  if (typeof window === 'undefined') return;

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Optional: unobserve after revealing to improve performance
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with reveal-on-scroll class
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  revealElements.forEach(el => observer.observe(el));

  return observer;
};

/**
 * Mouse tracking effect for cursor glow
 */
export const initMouseTracking = () => {
  if (typeof window === 'undefined') return;

  const containers = document.querySelectorAll('.cursor-follow-container');

  containers.forEach(container => {
    const cursorGlow = container.querySelector('.cursor-glow');
    if (!cursorGlow) return;

    let rafId = null;
    let mouseX = 0;
    let mouseY = 0;

    const updateCursorPosition = () => {
      if (cursorGlow) {
        cursorGlow.style.left = `${mouseX}px`;
        cursorGlow.style.top = `${mouseY}px`;
      }
      rafId = null;
    };

    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      // Use requestAnimationFrame for smooth performance
      if (!rafId) {
        rafId = requestAnimationFrame(updateCursorPosition);
      }
    });

    container.addEventListener('mouseleave', () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    });
  });
};

/**
 * Parallax effect on mouse move
 */
export const initParallaxEffect = (selector = '.parallax-layer') => {
  if (typeof window === 'undefined') return;

  const parallaxElements = document.querySelectorAll(selector);
  if (parallaxElements.length === 0) return;

  let rafId = null;
  let mouseX = 0;
  let mouseY = 0;

  const updateParallax = () => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const deltaX = (mouseX - centerX) / centerX;
    const deltaY = (mouseY - centerY) / centerY;

    parallaxElements.forEach((el, index) => {
      // Each layer moves at different speeds
      const speed = (index + 1) * 10;
      const x = deltaX * speed;
      const y = deltaY * speed;
      
      el.style.transform = `translate(${x}px, ${y}px)`;
    });

    rafId = null;
  };

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!rafId) {
      rafId = requestAnimationFrame(updateParallax);
    }
  });
};

/**
 * Scroll progress indicator
 */
export const initScrollProgress = () => {
  if (typeof window === 'undefined') return;

  const progressBar = document.querySelector('.scroll-progress');
  if (!progressBar) return;

  const updateScrollProgress = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
    progressBar.style.transform = `scaleX(${scrollPercentage / 100})`;
  };

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress(); // Initial call
};

/**
 * Smooth scroll to element
 */
export const smoothScrollTo = (targetId, offset = 0) => {
  if (typeof window === 'undefined') return;

  const target = document.querySelector(targetId);
  if (!target) return;

  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = targetPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};

/**
 * Add stagger animation to children
 */
export const addStaggerAnimation = (parentSelector, delay = 100) => {
  if (typeof window === 'undefined') return;

  const parent = document.querySelector(parentSelector);
  if (!parent) return;

  const children = Array.from(parent.children);
  
  children.forEach((child, index) => {
    child.style.animationDelay = `${index * delay}ms`;
    child.classList.add('animate-slide-up');
  });
};

/**
 * Ripple effect on click
 */
export const addRippleEffect = (element) => {
  if (!element) return;

  const ripple = document.createElement('span');
  ripple.className = 'ripple-circle';
  
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.position = 'absolute';
  ripple.style.borderRadius = '50%';
  ripple.style.background = 'rgba(6, 182, 212, 0.5)';
  ripple.style.transform = 'scale(0)';
  ripple.style.animation = 'rippleAnimation 0.6s ease-out';
  ripple.style.pointerEvents = 'none';
  
  element.appendChild(ripple);
  
  setTimeout(() => ripple.remove(), 600);
};

/**
 * Initialize all animations
 */
export const initAllAnimations = () => {
  if (typeof window === 'undefined') return;

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initPageLoadAnimation();
      initScrollReveal();
      initMouseTracking();
      initScrollProgress();
    });
  } else {
    initPageLoadAnimation();
    initScrollReveal();
    initMouseTracking();
    initScrollProgress();
  }
};

/**
 * Page transition handler for Gatsby
 */
export const handlePageTransition = (location) => {
  if (typeof window === 'undefined') return;

  // Add exit animation
  const mainContent = document.querySelector('main');
  if (mainContent) {
    mainContent.classList.add('page-exit');
    
    // After exit animation, reset and add enter animation
    setTimeout(() => {
      mainContent.classList.remove('page-exit');
      mainContent.classList.add('page-enter');
      
      // Remove enter class after animation completes
      setTimeout(() => {
        mainContent.classList.remove('page-enter');
      }, 600);
    }, 500);
  }
};

/**
 * Detect if user prefers reduced motion
 */
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Initialize animations only if motion is allowed
 */
export const initAnimationsIfAllowed = () => {
  if (!prefersReducedMotion()) {
    initAllAnimations();
  } else {
    // Minimal animations for accessibility
    initPageLoadAnimation();
  }
};

export default {
  initPageLoadAnimation,
  initScrollReveal,
  initMouseTracking,
  initParallaxEffect,
  initScrollProgress,
  smoothScrollTo,
  addStaggerAnimation,
  addRippleEffect,
  initAllAnimations,
  handlePageTransition,
  prefersReducedMotion,
  initAnimationsIfAllowed
};
