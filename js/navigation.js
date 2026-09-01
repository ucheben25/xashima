/* ==========================================================================
   XASHIMA NAVIGATION — Transparent header + sticky scroll + mobile drawer
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const header      = document.querySelector('.header');
  const navToggle   = document.querySelector('.mobile-nav-toggle');
  const navMenu     = document.querySelector('.nav-menu');
  const dropdowns   = document.querySelectorAll('.nav-item-dropdown');

  // ---- Transparent / Scrolled header logic ----
  function updateHeader() {
    if (!header) return;
    const isHero = document.querySelector('.hero-fullscreen');

    if (isHero) {
      // On homepage: start transparent, go solid on scroll
      if (window.scrollY > 40) {
        header.classList.add('is-scrolled');
        header.classList.remove('is-transparent');
      } else {
        header.classList.remove('is-scrolled');
        header.classList.add('is-transparent');
      }
    } else {
      // Inner pages: always solid
      header.classList.add('is-solid');
    }
  }

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  // ---- Mobile nav toggle ----
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navMenu.classList.toggle('active');

      navToggle.innerHTML = navMenu.classList.contains('active')
        ? `<svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/></svg>`
        : `<svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16"/></svg>`;
    });
  }

  // ---- Mobile accordion dropdowns ----
  dropdowns.forEach(item => {
    const trigger = item.querySelector('.nav-link');
    if (!trigger) return;

    trigger.addEventListener('click', e => {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        item.classList.toggle('active');
      }
    });
  });

  // ---- Close nav on outside click ----
  document.addEventListener('click', e => {
    if (navMenu && navMenu.classList.contains('active')) {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // ---- Highlight active nav link ----
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href.endsWith(currentPath) || (currentPath === '' && href.includes('index'))) {
      link.classList.add('active');
    }
  });
});
