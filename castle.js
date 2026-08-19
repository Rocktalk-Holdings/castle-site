/* Castle — castle.rocktalk.holdings
   Minimal JS: anatomy table IntersectionObserver reveal.
   No frameworks. Reduces to nothing under prefers-reduced-motion. */

(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Anatomy table row staggered reveal ── */
  function initAnatomyReveal() {
    var rows = document.querySelectorAll('.anatomy-row');
    if (!rows.length) return;

    /* Under reduced-motion, just make them all visible immediately */
    if (prefersReducedMotion) {
      rows.forEach(function (row) { row.classList.add('visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          /* Stagger by row index */
          var row = entry.target;
          var idx = parseInt(row.getAttribute('data-row-index'), 10) || 0;
          setTimeout(function () {
            row.classList.add('visible');
          }, idx * 80);
          observer.unobserve(row);
        }
      });
    }, { threshold: 0.15 });

    rows.forEach(function (row, idx) {
      row.setAttribute('data-row-index', idx);
      observer.observe(row);
    });
  }

  /* ── Nav shadow on scroll ── */
  function initNavScroll() {
    var nav = document.querySelector('.site-nav');
    if (!nav) return;

    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        if (window.scrollY > 8) {
          nav.style.boxShadow = '0 1px 12px rgba(28,26,23,0.08)';
        } else {
          nav.style.boxShadow = '';
        }
        ticking = false;
      });
    }, { passive: true });
  }

  /* ── Pause looping animations when offscreen (future-proofing) ── */
  function initOffscreenPause() {
    var animated = document.querySelectorAll('[data-loop-anim]');
    if (!animated.length) return;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        entry.target.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
      });
    });
    animated.forEach(function (el) { obs.observe(el); });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initAnatomyReveal();
    initNavScroll();
    initOffscreenPause();
  });
}());
