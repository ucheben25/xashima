/* ==========================================================================
   XASHIMA PROJECTS FILTER & LIGHTBOX GALLERY
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Project Category Filter
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active', 'btn-primary'));
      filterButtons.forEach(b => b.classList.add('btn-outline'));
      
      btn.classList.add('active', 'btn-primary');
      btn.classList.remove('btn-outline');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Lightbox Modal Setup
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.id = 'lightboxModal';
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <button class="lightbox-close" aria-label="Close Lightbox">&times;</button>
      <img src="" alt="Project Expanded View" class="lightbox-img" id="lightboxImg">
    </div>
  `;
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector('#lightboxImg');
  const lightboxClose = lightbox.querySelector('.lightbox-close');

  function openLightbox(src, alt) {
    if (lightboxImg) {
      lightboxImg.src = src;
      lightboxImg.alt = alt || 'Project Image';
    }
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Bind click listener to all project images
  document.querySelectorAll('.project-image, .lightbox-trigger').forEach((img) => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', (e) => {
      e.preventDefault();
      const src = img.getAttribute('src') || img.getAttribute('data-src');
      const alt = img.getAttribute('alt');
      openLightbox(src, alt);
    });
  });

  lightboxClose?.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
});
