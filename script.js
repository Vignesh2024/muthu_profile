/**
 * MUTHU KUMAR - CINEMATIC PORTFOLIO JAVASCRIPT
 * Features:
 * - Dynamic Role Typing
 * - Draggable Before / After Color Grading Slider with multi-scene support
 * - Lightbox Modal with EXIF metadata & keyboard navigation
 * - Video Theater Modal with project specs
 * - Filterable Photography, Videography & Equipment tabs
 * - Direct WhatsApp Enquiry Generator
 * - Animated Stats Counter & ScrollSpy Navigation
 * - Smooth mobile hamburger menu
 */

document.addEventListener('DOMContentLoaded', () => {

  // Portfolio order: Videography first, then Photography.
  const videographySection = document.getElementById('videography');
  const photographySection = document.getElementById('photography');
  if (videographySection && photographySection) {
    photographySection.before(videographySection);
  }

  const routeSegment = window.location.pathname.split('/').filter(Boolean).pop();
  const routeSection = routeSegment ? document.getElementById(routeSegment) : null;
  if (routeSection && !window.location.hash) {
    const scrollToRouteSection = () => {
      requestAnimationFrame(() => routeSection.scrollIntoView({ block: 'start' }));
    };
    if (document.readyState === 'complete') {
      scrollToRouteSection();
    } else {
      window.addEventListener('load', scrollToRouteSection, { once: true });
    }
  }

  // =========================================================================
  // 1. DYNAMIC ROLE TYPING EFFECT
  // =========================================================================
  const typedRoleElement = document.getElementById('role-typed-text');
  const roles = [
    'Photographer',
    'Videographer',
    'Cinematographer',
    'Video Editor',
    'DaVinci Colorist'
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 110;

  function typeRole() {
    if (!typedRoleElement) return;
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typedRoleElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typedRoleElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 110;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingSpeed = 1800;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400;
    }

    setTimeout(typeRole, typingSpeed);
  }

  typeRole();


  // =========================================================================
  // 2. BEFORE / AFTER COLOR GRADING COMPARISON SLIDER
  // =========================================================================
  const sliderContainer  = document.getElementById('grading-slider-container');
  const beforeWrapper    = document.getElementById('grading-before-wrapper');
  const sliderHandle     = document.getElementById('grading-slider-handle');
  const gradingBeforeImg = document.getElementById('grading-before-img');
  const gradingAfterImg  = document.getElementById('grading-after-img');
  const sceneSunsetBtn   = document.getElementById('scene-sunset-btn');
  const sceneFarmerBtn   = document.getElementById('scene-farmer-btn');

  let isSliding = false;

  function setSliderPosition(xCoord) {
    if (!sliderContainer || !beforeWrapper || !sliderHandle) return;
    const rect = sliderContainer.getBoundingClientRect();
    let offsetX = Math.max(0, Math.min(xCoord - rect.left, rect.width));
    const pct = (offsetX / rect.width) * 100;
    beforeWrapper.style.width = pct + '%';
    sliderHandle.style.left   = pct + '%';
  }

  if (sliderContainer) {
    sliderContainer.addEventListener('mousedown',  (e) => { isSliding = true; setSliderPosition(e.clientX); });
    window.addEventListener('mousemove', (e) => { if (isSliding) setSliderPosition(e.clientX); });
    window.addEventListener('mouseup',   ()  => { isSliding = false; });

    sliderContainer.addEventListener('touchstart', (e) => { isSliding = true; if (e.touches[0]) setSliderPosition(e.touches[0].clientX); }, { passive: true });
    window.addEventListener('touchmove',  (e) => { if (isSliding && e.touches[0]) setSliderPosition(e.touches[0].clientX); }, { passive: true });
    window.addEventListener('touchend',   ()  => { isSliding = false; });
  }

  // Scene Switching
  function switchScene(beforeSrc, afterSrc, label, activateBtn, deactivateBtn) {
    if (!gradingBeforeImg || !gradingAfterImg) return;
    gradingBeforeImg.src = beforeSrc;
    gradingAfterImg.src  = afterSrc;
    activateBtn.classList.add('active');
    deactivateBtn.classList.remove('active');
    showToast(label);
  }

  if (sceneSunsetBtn) {
    sceneSunsetBtn.addEventListener('click', () =>
      switchScene('assets/portfolio/grading-before.jpg', 'assets/portfolio/grading-after.jpg',
        'Switched to Golden Sunset scene', sceneSunsetBtn, sceneFarmerBtn));
  }
  if (sceneFarmerBtn) {
    sceneFarmerBtn.addEventListener('click', () =>
      switchScene('assets/portfolio/grading-2-before.jpg', 'assets/portfolio/grading-2-after.jpg',
        'Switched to Rural Earth scene', sceneFarmerBtn, sceneSunsetBtn));
  }


  // =========================================================================
  // 3. PHOTOGRAPHY FILTER TABS & LIGHTBOX MODAL
  // =========================================================================
  const photoFilterBtns = document.querySelectorAll('.photo-filter-btn');
  const galleryItems    = document.querySelectorAll('.gallery-item');

  photoFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      photoFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      galleryItems.forEach(item => {
        const show = filter === 'all' || item.getAttribute('data-category') === filter;
        item.style.display = show ? 'block' : 'none';
        if (show) { item.style.opacity = '0'; setTimeout(() => { item.style.opacity = '1'; }, 20); }
      });
    });
  });

  // Lightbox
  const lightboxModal    = document.getElementById('lightbox-modal');
  const lightboxImg      = document.getElementById('lightbox-img');
  const lightboxTitle    = document.getElementById('lightbox-title');
  const lightboxCategory = document.getElementById('lightbox-category');
  const lightboxDesc     = document.getElementById('lightbox-desc');
  const lightboxExif     = document.getElementById('lightbox-exif');
  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');
  const lightboxPrevBtn  = document.getElementById('lightbox-prev-btn');
  const lightboxNextBtn  = document.getElementById('lightbox-next-btn');

  let currentLightboxIndex = 0;
  const visibleItems = () => Array.from(galleryItems).filter(el => el.style.display !== 'none');

  function openLightbox(idx) {
    const items = visibleItems();
    if (!items[idx]) return;
    currentLightboxIndex = idx;
    const t = items[idx];
    lightboxImg.src             = t.getAttribute('data-src');
    lightboxTitle.textContent   = t.getAttribute('data-title') || '';
    lightboxCategory.textContent= t.getAttribute('data-category-name') || '';
    lightboxDesc.textContent    = t.getAttribute('data-desc') || '';
    lightboxExif.textContent    = t.getAttribute('data-exif') || '';
    lightboxModal.classList.remove('hidden');
    lightboxModal.classList.add('flex');
    setTimeout(() => { lightboxModal.style.opacity = '1'; }, 10);
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxModal.style.opacity = '0';
    setTimeout(() => {
      lightboxModal.classList.add('hidden');
      lightboxModal.classList.remove('flex');
      document.body.style.overflow = '';
    }, 250);
  }

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const items = visibleItems();
      openLightbox(items.indexOf(item));
    });
  });

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxNextBtn)  lightboxNextBtn.addEventListener('click', () => {
    const items = visibleItems();
    openLightbox((currentLightboxIndex + 1) % items.length);
  });
  if (lightboxPrevBtn)  lightboxPrevBtn.addEventListener('click', () => {
    const items = visibleItems();
    openLightbox((currentLightboxIndex - 1 + items.length) % items.length);
  });
  if (lightboxModal) lightboxModal.addEventListener('click', (e) => { if (e.target === lightboxModal) closeLightbox(); });


  // =========================================================================
  // 4. VIDEOGRAPHY FILTER TABS & VIDEO THEATER MODAL
  // =========================================================================
  const videoFilterBtns = document.querySelectorAll('.video-filter-btn');
  const videoCards      = document.querySelectorAll('.video-card');

  videoFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      videoFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-vfilter');
      videoCards.forEach(card => {
        const cat = card.getAttribute('data-vcategory') || '';
        const cats = cat.split(' ');
        const show = filter === 'all' || cats.includes(filter);
        card.style.display = show ? 'flex' : 'none';
        if (show) { card.style.opacity = '0'; setTimeout(() => { card.style.opacity = '1'; }, 20); }
      });
    });
  });

  const videoModal        = document.getElementById('video-modal');
  const videoPlayer       = document.getElementById('html5-video-player');
  const videoModalTitle   = document.getElementById('video-modal-title');
  const videoModalDesc    = document.getElementById('video-modal-desc');
  const videoModalGear    = document.getElementById('video-modal-gear');
  const videoModalDuration= document.getElementById('video-modal-duration');
  const videoModalCategory= document.getElementById('video-modal-category');
  const videoCloseBtn     = document.getElementById('video-modal-close-btn');

  const loadVideoPreview = (video) => {
    const source = video.getAttribute('data-src');
    if (!source || video.getAttribute('src')) return;
    video.preload = 'metadata';
    video.src = source;
    video.load();
  };

  const videoPreviewObserver = 'IntersectionObserver' in window
    ? new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        loadVideoPreview(entry.target);
        videoPreviewObserver.unobserve(entry.target);
      });
    }, { rootMargin: '120px 0px' })
    : null;

  function formatVideoDuration(seconds) {
    if (!Number.isFinite(seconds) || seconds <= 0) return '00:00';
    const totalSeconds = Math.round(seconds);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return hours > 0
      ? `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
      : `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  document.querySelectorAll('.video-card video').forEach(cardVideo => {
    const updateCardDuration = () => {
      const card = cardVideo.closest('.video-card');
      if (!card) return;
      const duration = formatVideoDuration(cardVideo.duration);
      card.setAttribute('data-video-duration', duration);

      const durationBadge = card.querySelector('.absolute.bottom-3.right-3');
      if (durationBadge) durationBadge.textContent = duration;
    };

    cardVideo.addEventListener('loadedmetadata', updateCardDuration);
    cardVideo.addEventListener('loadedmetadata', () => {
      if (cardVideo.currentTime === 0 && cardVideo.duration > 0) cardVideo.currentTime = 0.1;
    });
    if (cardVideo.readyState >= 1) updateCardDuration();
    if (videoPreviewObserver) videoPreviewObserver.observe(cardVideo);
  });

  function openVideoModal(card) {
    if (!videoModal || !card) return;
    const videoSrc = card.getAttribute('data-video-src');
    card.querySelector('video')?.pause();
    if (videoPlayer && videoSrc) {
      videoPlayer.src = videoSrc;
      videoPlayer.load();
    }
    videoModalTitle.textContent    = card.getAttribute('data-video-title') || 'Film Preview';
    videoModalDesc.textContent     = card.getAttribute('data-video-desc') || '';
    videoModalGear.textContent     = card.getAttribute('data-video-gear') || '';
    videoModalDuration.textContent = 'Duration: ' + (card.getAttribute('data-video-duration') || '');
    videoModalCategory.textContent = card.getAttribute('data-video-category') || '';
    videoModal.classList.remove('hidden');
    videoModal.classList.add('flex');
    setTimeout(() => { videoModal.style.opacity = '1'; }, 10);
    document.body.style.overflow = 'hidden';
    if (videoPlayer) {
      videoPlayer.play().catch(() => {});
    }
  }

  function closeVideoModal() {
    if (!videoModal) return;
    if (videoPlayer) {
      videoPlayer.pause();
      videoPlayer.removeAttribute('src');
      videoPlayer.load();
    }
    videoModal.style.opacity = '0';
    setTimeout(() => {
      videoModal.classList.add('hidden');
      videoModal.classList.remove('flex');
      document.body.style.overflow = '';
    }, 250);
  }

  document.querySelectorAll('.video-play-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      const card = e.target.closest('.video-card');
      if (card) openVideoModal(card);
    });
  });

  if (videoCloseBtn) videoCloseBtn.addEventListener('click', closeVideoModal);
  if (videoModal)    videoModal.addEventListener('click', (e) => { if (e.target === videoModal) closeVideoModal(); });

  // Hover video preview on desktop
  document.querySelectorAll('.video-card').forEach(card => {
    const cardVideo = card.querySelector('video');
    if (!cardVideo) return;
    card.addEventListener('mouseenter', () => {
      loadVideoPreview(cardVideo);
      cardVideo.play().catch(() => {});
    });
    card.addEventListener('mouseleave', () => {
      cardVideo.pause();
      cardVideo.currentTime = 0;
    });
  });


  // =========================================================================
  // 5. KEYBOARD NAVIGATION (Lightbox + Video Modal)
  // =========================================================================
  window.addEventListener('keydown', (e) => {
    if (lightboxModal && !lightboxModal.classList.contains('hidden')) {
      if (e.key === 'Escape')      closeLightbox();
      if (e.key === 'ArrowRight')  lightboxNextBtn?.click();
      if (e.key === 'ArrowLeft')   lightboxPrevBtn?.click();
    }
    if (videoModal && !videoModal.classList.contains('hidden')) {
      if (e.key === 'Escape') closeVideoModal();
    }
  });


  // =========================================================================
  // 6. EQUIPMENT GEAR TABS
  // =========================================================================
  const gearTabBtns = document.querySelectorAll('.gear-tab-btn');
  const gearCards   = document.querySelectorAll('.gear-card');

  gearTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      gearTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.getAttribute('data-geartab');
      gearCards.forEach(card => {
        const show = target === 'all' || card.getAttribute('data-gear-category') === target;
        card.style.display = show ? 'flex' : 'none';
        if (show) { card.style.opacity = '0'; setTimeout(() => { card.style.opacity = '1'; }, 20); }
      });
    });
  });


  // =========================================================================
  // 7. BOOK SERVICE BUTTON → PRE-FILLS CONTACT FORM SERVICE DROPDOWN
  // =========================================================================
  const serviceDropdown = document.getElementById('client-service');

  document.querySelectorAll('.book-service-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.getAttribute('data-service-select');
      if (serviceDropdown && name) {
        serviceDropdown.value = name;
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        showToast(`"${name}" selected — fill in your details below!`);
      }
    });
  });


  // =========================================================================
  // 8. PROJECT ENQUIRY FORM & WHATSAPP GENERATOR
  // =========================================================================
  const enquiryForm    = document.getElementById('project-enquiry-form');
  const sendWABtn      = document.getElementById('send-whatsapp-btn');

  function getFormData() {
    return {
      name:     (document.getElementById('client-name')?.value    || '').trim(),
      phone:    (document.getElementById('client-phone')?.value   || '').trim(),
      email:    (document.getElementById('client-email')?.value   || '').trim(),
      service:   document.getElementById('client-service')?.value || 'Wedding Cinematic Films',
      date:      document.getElementById('event-date')?.value     || 'Not specified',
      location: (document.getElementById('event-location')?.value || '').trim() || 'Not specified',
      budget:    document.getElementById('client-budget')?.value  || 'Flexible',
      message:  (document.getElementById('client-message')?.value || '').trim() || 'Looking forward to working together!'
    };
  }

  if (sendWABtn) {
    sendWABtn.addEventListener('click', () => {
      const d = getFormData();
      if (!d.name || !d.phone) {
        showToast('Please enter your Name and Phone number first!', 'warning');
        document.getElementById('client-name')?.focus();
        return;
      }
      const msg =
`*NEW PROJECT ENQUIRY — MUTHU KUMAR VISUALS*
─────────────────────────────
*Name:* ${d.name}
*Phone/WhatsApp:* ${d.phone}
*Email:* ${d.email || 'N/A'}
*Service Required:* ${d.service}
*Shoot Date:* ${d.date}
*Location:* ${d.location}
*Budget Range:* ${d.budget}
*Project Brief:* ${d.message}
─────────────────────────────
_Sent via portfolio_`;
      window.open('https://wa.me/916379391484?text=' + encodeURIComponent(msg), '_blank');
      showToast('Opening WhatsApp with your enquiry…');
    });
  }

  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const d = getFormData();
      showToast(`Thank you ${d.name || 'there'}! Enquiry received. Muthu will reach out shortly.`, 'success');
      enquiryForm.reset();
    });
  }


  // =========================================================================
  // 9. TOAST NOTIFICATION UTILITY
  // =========================================================================
  function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-item' + (type === 'success' ? ' success' : '');

    const icon = type === 'success'
      ? 'fa-solid fa-circle-check text-emerald-400'
      : type === 'warning'
        ? 'fa-solid fa-triangle-exclamation text-amber-400'
        : 'fa-solid fa-circle-info text-amber-400';

    toast.innerHTML = `<i class="${icon} text-base"></i><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }


  // =========================================================================
  // 10. ANIMATED STATS COUNTER
  // =========================================================================
  const counters = document.querySelectorAll('.counter');
  let countersRan = false;

  function runCounters() {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const steps  = 60;
      const inc    = target / steps;
      let current  = 0;
      const timer  = setInterval(() => {
        current += inc;
        if (current >= target) { counter.textContent = target; clearInterval(timer); }
        else counter.textContent = Math.ceil(current);
      }, 30);
    });
  }

  const heroEl = document.getElementById('hero');
  if (heroEl) {
    new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !countersRan) { countersRan = true; runCounters(); }
    }, { threshold: 0.2 }).observe(heroEl);
  }


  // =========================================================================
  // 11. SCROLL SPY + HEADER GLASS + BACK TO TOP
  // =========================================================================
  const mainHeader    = document.getElementById('main-header');
  const backToTopBtn  = document.getElementById('back-to-top');
  const sections      = document.querySelectorAll('section[id]');
  const desktopLinks  = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Glass header on scroll
    mainHeader?.classList.toggle('scrolled', scrollY > 60);

    // Back-to-top visibility
    if (backToTopBtn) {
      backToTopBtn.style.opacity       = scrollY > 500 ? '1' : '0';
      backToTopBtn.style.pointerEvents = scrollY > 500 ? 'auto' : 'none';
    }

    // ScrollSpy — highlight active nav link with amber underline
    let activeId = null;
    sections.forEach(section => {
      if (scrollY >= section.offsetTop - 100) activeId = section.getAttribute('id');
    });

    desktopLinks.forEach(link => {
      const targets = link.getAttribute('data-nav-targets')
        || (link.getAttribute('href') || '').replace(/^#/, '');
      const isActive = targets.split(/\s+/).includes(activeId);
      link.classList.toggle('active', isActive);
    });
  }, { passive: true });

  backToTopBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));


  // =========================================================================
  // 12. MOBILE HAMBURGER MENU (animated icon)
  // =========================================================================
  const mobileMenuBtn  = document.getElementById('mobile-menu-btn');
  const mobileMenu     = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('#mobile-menu a.mobile-nav-link');
  let menuOpen = false;

  function toggleMenu(forceClose = false) {
    menuOpen = forceClose ? false : !menuOpen;
    const icon = mobileMenuBtn?.querySelector('i');

    if (menuOpen) {
      mobileMenu?.classList.remove('hidden');
      if (icon) { icon.classList.remove('fa-bars'); icon.classList.add('fa-xmark'); }
    } else {
      mobileMenu?.classList.add('hidden');
      if (icon) { icon.classList.remove('fa-xmark'); icon.classList.add('fa-bars'); }
    }
  }

  mobileMenuBtn?.addEventListener('click', () => toggleMenu());
  mobileNavLinks.forEach(link => link.addEventListener('click', () => {
    link.closest('.mobile-nav-portfolio')?.removeAttribute('open');
    toggleMenu(true);
  }));

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (menuOpen && !mobileMenuBtn?.contains(e.target) && !mobileMenu?.contains(e.target)) {
      toggleMenu(true);
    }
  });

});
