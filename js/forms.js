/* ==========================================================================
   XASHIMA FORM VALIDATION & FRONTEND INTERACTION
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Quote Request Form Handler
  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = quoteForm.querySelector('[name="name"]');
      const email = quoteForm.querySelector('[name="email"]');
      const phone = quoteForm.querySelector('[name="phone"]');
      const service = quoteForm.querySelector('[name="service"]');
      const alertBox = quoteForm.querySelector('.alert');

      let valid = true;
      quoteForm.querySelectorAll('.form-control').forEach(el => el.classList.remove('is-invalid'));

      if (!name || !name.value.trim()) {
        name?.classList.add('is-invalid');
        valid = false;
      }
      if (!email || !isValidEmail(email.value.trim())) {
        email?.classList.add('is-invalid');
        valid = false;
      }
      if (!phone || !phone.value.trim()) {
        phone?.classList.add('is-invalid');
        valid = false;
      }

      if (!valid) {
        if (alertBox) {
          alertBox.className = 'alert alert-error';
          alertBox.style.display = 'block';
          alertBox.textContent = 'Please fill out all required fields with valid information.';
        }
        return;
      }

      if (alertBox) {
        alertBox.className = 'alert alert-success';
        alertBox.style.display = 'block';
        alertBox.innerHTML = `<strong>Quote Request Received</strong><br>Thank you, ${name.value.trim()}. Your inquiry for <em>${service ? service.value : 'Engineering Services'}</em> has been processed. (Frontend validated; ready for backend integration).`;
      }

      quoteForm.reset();
    });
  }

  // Contact Form Handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = contactForm.querySelector('[name="name"]');
      const email = contactForm.querySelector('[name="email"]');
      const subject = contactForm.querySelector('[name="subject"]');
      const message = contactForm.querySelector('[name="message"]');
      const alertBox = contactForm.querySelector('.alert');

      let valid = true;
      contactForm.querySelectorAll('.form-control').forEach(el => el.classList.remove('is-invalid'));

      if (!name || !name.value.trim()) {
        name?.classList.add('is-invalid');
        valid = false;
      }
      if (!email || !isValidEmail(email.value.trim())) {
        email?.classList.add('is-invalid');
        valid = false;
      }
      if (!message || message.value.trim().length < 10) {
        message?.classList.add('is-invalid');
        valid = false;
      }

      if (!valid) {
        if (alertBox) {
          alertBox.className = 'alert alert-error';
          alertBox.style.display = 'block';
          alertBox.textContent = 'Please enter a valid name, email address, and a message with at least 10 characters.';
        }
        return;
      }

      if (alertBox) {
        alertBox.className = 'alert alert-success';
        alertBox.style.display = 'block';
        alertBox.innerHTML = `<strong>Message Received</strong><br>Thank you, ${name.value.trim()}. Your message regarding "${subject ? subject.value : 'General Inquiry'}" has been received. (Frontend validated; ready for backend integration).`;
      }

      contactForm.reset();
    });
  }

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const feedback = newsletterForm.querySelector('.newsletter-feedback');

      if (!emailInput || !isValidEmail(emailInput.value.trim())) {
        if (feedback) {
          feedback.style.color = '#EF4444';
          feedback.textContent = 'Please provide a valid email address.';
        }
        return;
      }

      if (feedback) {
        feedback.style.color = 'var(--color-primary-red)';
        feedback.textContent = 'Thank you for subscribing to XASHIMA Insights.';
      }

      newsletterForm.reset();
    });
  }

  // Comment Form
  const commentForm = document.getElementById('commentForm');
  if (commentForm) {
    commentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = commentForm.querySelector('[name="name"]');
      const message = commentForm.querySelector('[name="comment"]');
      const alertBox = commentForm.querySelector('.alert');

      if (!name.value.trim() || !message.value.trim()) {
        if (alertBox) {
          alertBox.className = 'alert alert-error';
          alertBox.style.display = 'block';
          alertBox.textContent = 'Please enter your name and comment.';
        }
        return;
      }

      if (alertBox) {
        alertBox.className = 'alert alert-success';
        alertBox.style.display = 'block';
        alertBox.innerHTML = `<strong>Comment Received</strong> Thank you, ${name.value.trim()}. (Frontend validated; ready for API integration).`;
      }

      commentForm.reset();
    });
  }
});
