// ================================================
// FRANCO MAZZOCHI — PORTFOLIO
// script.js — Interactivity & Animations
// ================================================

(function() {
  'use strict';

  // ============ SCROLL PROGRESS BAR ============
  const scrollProg = document.getElementById('scroll-prog');
  
  function updateScrollProgress() {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (scrollProg) scrollProg.style.width = scrolled + '%';
  }

  window.addEventListener('scroll', updateScrollProgress);

  // ============ NAVIGATION SCROLL BEHAVIOR ============
  const nav = document.getElementById('nav');
  
  function handleNavScroll() {
    if (window.scrollY > 80) {
      nav.classList.add('solid');
    } else {
      nav.classList.remove('solid');
    }
  }

  window.addEventListener('scroll', handleNavScroll);

  // ============ MOBILE MENU TOGGLE ============
  const mobBtn = document.getElementById('mobBtn');
  const mobDrawer = document.getElementById('mobDrawer');

  if (mobBtn && mobDrawer) {
    mobBtn.addEventListener('click', function() {
      mobBtn.classList.toggle('open');
      mobDrawer.classList.toggle('open');
      // prevent body scroll when menu open
      if (mobDrawer.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });

    // close menu when clicking a link
    const mobLinks = mobDrawer.querySelectorAll('a');
    mobLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobBtn.classList.remove('open');
        mobDrawer.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ============ SMOOTH SCROLL FOR ANCHOR LINKS ============
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // skip if it's just "#" or empty
      if (!href || href === '#') return;
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        const navHeight = nav ? nav.offsetHeight : 68;
        const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }
    });
  });

  // ============ ACTIVE NAV LINK ON SCROLL ============
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  function highlightNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavLink);

  // ============ INTERSECTION OBSERVER FOR REVEAL ANIMATIONS ============
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('vis');
        // optional: stop observing after reveal
        // observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // ============ INITIAL STATES ============
  // Trigger scroll handlers on load
  updateScrollProgress();
  handleNavScroll();
  highlightNavLink();

})();
