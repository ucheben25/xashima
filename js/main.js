/* ==========================================================================
   XASHIMA MAIN JS — Scroll Reveal, Counter Animation, Cookie, Copyright
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ---- Copyright Year ----
  const yearEl = document.getElementById('copyrightYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Scroll Reveal (Intersection Observer) ----
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  } else {
    // Fallback: make all visible
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  }

  // ---- Counter Animation (Stats Bar) ----
  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1800;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      el.textContent = current.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll('.stat-number[data-target]');
          counters.forEach(animateCounter);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    const statsBar = document.querySelector('.stats-bar');
    if (statsBar) counterObserver.observe(statsBar);
  }

  // ---- FAQ Accordion ----
  document.querySelectorAll('.accordion-header').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.accordion-item');
      const content = item.querySelector('.accordion-content');
      const isOpen = item.classList.contains('active');

      // Close all
      document.querySelectorAll('.accordion-item.active').forEach(openItem => {
        openItem.classList.remove('active');
        const c = openItem.querySelector('.accordion-content');
        if (c) c.style.maxHeight = '0';
      });

      // Open clicked (if not already open)
      if (!isOpen && content) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  // ---- Cookie Banner ----
  const cookieBanner = document.getElementById('cookieBanner');
  const cookieAccept = document.getElementById('cookieAccept');

  if (cookieBanner) {
    if (!localStorage.getItem('xashima_cookie_ok')) {
      setTimeout(() => {
        cookieBanner.style.display = 'flex';
      }, 1800);
    }
  }

  if (cookieAccept && cookieBanner) {
    cookieAccept.addEventListener('click', () => {
      localStorage.setItem('xashima_cookie_ok', '1');
      cookieBanner.style.opacity = '0';
      setTimeout(() => cookieBanner.remove(), 300);
    });
  }

  // ---- Project Filter (category tabs) ----
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectTiles = document.querySelectorAll('.project-tile[data-category], .project-card[data-category]');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectTiles.forEach(tile => {
        const cat = tile.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          tile.style.display = '';
          tile.style.animation = 'fadeInTile 0.4s ease';
        } else {
          tile.style.display = 'none';
        }
      });
    });
  });

  // ---- Lightbox ----
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.id = 'lightboxModal';
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <button class="lightbox-close" aria-label="Close">&times;</button>
      <img src="" alt="Project Image" class="lightbox-img" id="lightboxImg">
    </div>
  `;
  document.body.appendChild(lightbox);

  const lbImg   = document.getElementById('lightboxImg');
  const lbClose = lightbox.querySelector('.lightbox-close');

  function openLightbox(src, alt) {
    if (lbImg) { lbImg.src = src; lbImg.alt = alt || ''; }
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.lightbox-trigger, .project-image').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', e => {
      e.preventDefault();
      const src = img.getAttribute('src') || img.getAttribute('data-src');
      openLightbox(src, img.getAttribute('alt'));
    });
  });

  lbClose?.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

  // ---- Theme toggle init ----
  const themeBtn = document.querySelector('.theme-toggle-btn');
  if (themeBtn) {
    function updateThemeIcon() {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      themeBtn.innerHTML = isDark
        ? `<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10A5 5 0 0012 7z"/></svg>`
        : `<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/></svg>`;
    }

    themeBtn.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
      localStorage.setItem('xashima_theme', isDark ? 'light' : 'dark');
      updateThemeIcon();
    });

    updateThemeIcon();
  }
});

// Fade in animation for filter
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInTile {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);
