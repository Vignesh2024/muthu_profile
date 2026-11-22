/**
 * MUTHU KUMAR - CINEMATIC PORTFOLIO JAVASCRIPT
 * Features:
 * - Dynamic Role Typing
 * - Draggable Before / After Color Grading Slider with Multi-Scene support
 * - Lightbox Modal with EXIF metadata & keyboard navigation
 * - Video Theater Modal with project specs
 * - Filterable Photography, Videography & Equipment systems
 * - Direct WhatsApp Enquiry Generator with pre-filled inputs
 * - Bilingual Switcher (English / தமிழ்)
 * - Animated Stats Counter & ScrollSpy Navigation
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. BILINGUAL TRANSLATION DICTIONARY (EN & தமிழ்)
  // =========================================================================
  const translations = {
    en: {
      nav_home: "Home",
      nav_about: "About",
      nav_photography: "Photography",
      nav_videography: "Videography",
      nav_editing: "Video Editing",
      nav_equipment: "Gear",
      nav_services: "Services",
      nav_reviews: "Reviews",
      nav_contact: "Contact",
      btn_hire_me: "Hire Me",
      
      // Hero
      hero_status_badge: "Available for Shoots & Worldwide Projects",
      hero_eyebrow: "HELLO, I'M",
      hero_tagline: "\"Cinematic visuals. Creative storytelling.\"",
      hero_description: "Capturing authentic human emotions, royal wedding celebrations, and crafting frame-by-frame cinematic stories. Powered by precision color science and immersive sound design.",
      hero_btn_work: "View My Work",
      hero_btn_hire: "Hire Me",
      hero_stat_exp: "Years Experience",
      hero_stat_proj: "Cinematic Projects",
      hero_stat_satisfaction: "Client Passion",
      hero_scroll: "Scroll Down",

      // About
      about_tag: "About Me",
      about_heading: "Passion, Vision & Creative Craft",
      about_subtitle: "An introduction to my filmmaking journey, visual philosophy, and how I bring raw emotions alive on screen.",
      about_badge_exp: "5+ Years Experience",
      about_badge_sub: "Weddings, Cinema & Reels",
      about_quote: "\"In every single frame, a story unfolds... capturing the pure essence of raw emotion.\"",
      about_intro_label: "Personal Introduction",
      about_intro_title: "Hello, I am Muthu Kumar — Visual Storyteller & Filmmaker",
      about_intro_p1: "Born with an innate fascination for how light sculpts human emotions, I transitioned from capturing fleeting street portraits to becoming a full-fledged cinematographer and professional video editor. Based in Tamil Nadu, I travel across India and destination weddings to tell heartfelt stories.",
      about_passion_label: "Photography & Filmmaking Passion",
      about_passion_text: "For me, a camera is not just hardware; it is an instrument to freeze unrepeatable moments. Whether it is the quiet tear of a father during a wedding Muhurtham, the sweat-glazed grace of a farmer at dawn, or the neon energy of an urban concert, my mission is to capture authentic raw humanity that echoes through generations.",
      about_exp_title: "My Experience",
      about_exp_desc: "Over 5+ years crafting 180+ wedding cinematic films, high-converting commercial reels, independent short films, and high-end video edits for top creators and brands.",
      about_approach_title: "My Creative Approach",
      about_approach_desc: "From moodboards & storyboards to natural-light composition, rhythm-based editing, bespoke DaVinci color grading, and evocative audio soundscapes.",
      about_btn_services: "Explore My Services",
      about_btn_together: "Let's Work Together",

      // Photography
      photo_tag: "Still Visuals",
      photo_heading: "Photography Portfolio",
      photo_subtitle: "Every frame holds a story. Explore curated works spanning weddings, portraits, candid life, events, and fine-art nature series.",

      // Videography
      video_tag: "Cinematic Motion",
      video_heading: "Videography Portfolio",
      video_subtitle: "From grand 4K wedding films to evocative short stories and dynamic social reels. Motion pictures crafted to move hearts.",

      // Video Editing
      edit_tag: "Post-Production Craft",
      edit_heading: "Video Editing & Color Grading",
      edit_subtitle: "Experience the transformation from flat raw camera profiles (S-Log3) into breathtaking Hollywood-grade cinematic finishes.",
      edit_p1_title: "Cinematic Editing",
      edit_p1_desc: "Pacing, rhythm, J-cuts & L-cuts, emotional arc structuring, and narrative tension matching the musical tempo.",
      edit_p2_title: "Color Grading",
      edit_p2_desc: "Node-based primary & secondary corrections in DaVinci, custom LUT development, skin tone isolation, and film grain emulation.",
      edit_p3_title: "Motion Graphics",
      edit_p3_desc: "Clean kinetic typography, lower thirds, callout markers, dynamic UI overlays, and logo reveal stings in After Effects.",
      edit_p4_title: "Title Animation",
      edit_p4_desc: "Bespoke Tamil & English movie-style title cards, elegant wedding intro slates, and typography tailored to the mood.",
      edit_p5_title: "VFX & Transitions",
      edit_p5_desc: "Seamless match cuts, speed ramps, whip pans, object removal, sky replacement, and immersive sound design sync.",

      // Equipment
      gear_tag: "Professional Arsenal",
      gear_heading: "Camera & Equipment",
      gear_subtitle: "Reliable industry-grade cinema cameras, prime G-Master glass, precision lighting setups, and an elite editing suite.",

      // Services
      services_tag: "Client Offerings",
      services_heading: "Services & Packages",
      services_subtitle: "Tailored creative packages designed to elevate personal milestones, commercial brands, and cinema projects.",
      srv_photo_title: "Photography",
      srv_photo_desc: "High-resolution editorial, candid, portrait, and event photo sessions capturing real emotions with pristine natural and studio lighting.",
      srv_video_title: "Videography",
      srv_video_desc: "Full 4K cinema multi-cam shoot setups, stabilized gimbal tracking shots, high-fidelity wireless audio capture, and 4K aerial drone coverage.",
      srv_wedding_title: "Wedding Cinematic Films",
      srv_wedding_desc: "An unforgettable feature film of your love story. Includes 1-minute Instagram teaser, 4-6 minute emotional highlight, and full ceremony documentary.",
      srv_edit_title: "Video Editing",
      srv_edit_desc: "Transform raw footage into cohesive, high-retention stories. Seamless rhythm cuts, sound engineering, multi-track audio mixing, and format delivery.",
      srv_color_title: "Color Grading & Motion",
      srv_color_desc: "DaVinci Resolve node-based color correction, look development, HDR & SDR color management, custom title animation, and After Effects motion graphics.",

      // Reviews
      reviews_tag: "Social Proof",
      reviews_heading: "Client Reviews & Words",
      reviews_subtitle: "Heartfelt testimonials from wedding couples, brand directors, and content creators who trusted my visual lens.",

      // Contact
      contact_tag: "Get in Touch",
      contact_heading: "Contact & Hire Me",
      contact_subtitle: "Whether you want to document your wedding, shoot a brand commercial, or need high-end video editing, let's connect today."
    },

    ta: {
      nav_home: "முகப்பு",
      nav_about: "சுயவிவரம்",
      nav_photography: "புகைப்படங்கள்",
      nav_videography: "வீடியோகிராபி",
      nav_editing: "வீடியோ எடிட்டிங்",
      nav_equipment: "கருவிகள்",
      nav_services: "சேவைகள்",
      nav_reviews: "வாடிக்கையாளர் கருத்து",
      nav_contact: "தொடர்புக்கு",
      btn_hire_me: "பணியமர்த்த",

      // Hero
      hero_status_badge: "நேரடி படப்பிடிப்பு மற்றும் உலகளாவிய திட்டங்களுக்கு தயார்",
      hero_eyebrow: "வணக்கம், நான்",
      hero_tagline: "\"சினிமாத்தனமான காட்சிகள். படைப்பாற்றல் மிக்க கதை சொல்லல்.\"",
      hero_description: "உண்மையான மனித உணர்வுகளை, திருமண நிகழ்வுகளை, மற்றும் அழகான காட்சிச் சித்திரங்களை சினிமாத்தனமாக பதிவு செய்கிறேன். நேர்த்தியான கலர் கிரேடிங் மற்றும் இசை ஒருங்கிணைப்புடன்.",
      hero_btn_work: "என் படைப்புகளைப் பார்",
      hero_btn_hire: "என்னை பணியமர்த்த",
      hero_stat_exp: "ஆண்டு அனுபவம்",
      hero_stat_proj: "சினிமா ப்ராஜெக்ட்கள்",
      hero_stat_satisfaction: "வாடிக்கையாளர் திருப்தி",
      hero_scroll: "கீழே உருட்டவும்",

      // About
      about_tag: "என்னைப் பற்றி",
      about_heading: "ஆர்வம், பார்வை மற்றும் படைப்பு கலை",
      about_subtitle: "என் திரைப்பட பயணம், காட்சி தத்துவம் மற்றும் உணர்வுகளை திரையில் கொண்டு வரும் கலை.",
      about_badge_exp: "5+ ஆண்டுகள் அனுபவம்",
      about_badge_sub: "திருமணம், சினிமா & ரீல்ஸ்",
      about_quote: "\"ஒவ்வொரு பிரேமிலும் ஒரு கதை... உணர்வுகளின் தூய பதிவு.\"",
      about_intro_label: "உன்னைப் பற்றிய அறிமுகம்",
      about_intro_title: "வணக்கம், நான் முத்து குமார் — ஒளிப்பதிவாளர் & திரைப்பட படைப்பாளி",
      about_intro_p1: "ஒளியின் அழகும் மனித உணர்வுகளின் மாயமும் என்னை ஈர்த்ததில் இருந்து, தெருவோரப் புகைப்படங்களில் தொடங்கி முழுமையான சினிமா ஒளிப்பதிவாளராகவும் தொழில்முறை வீடியோ எடிட்டராகவும் வளர்ந்துள்ளேன். தமிழகத்தை மையமாகக் கொண்டு இந்தியா முழுவதும் பயணிக்கிறேன்.",
      about_passion_label: "புகைப்படம் & திரைப்பட ஆர்வம்",
      about_passion_text: "என்னை பொறுத்தவரை, கேமரா என்பது ஒரு கருவி மட்டுமல்ல; அது மறக்க முடியாத தருணங்களை காலத்தால் அழியாமல் உறைய வைக்கும் ஒரு பாலம். திருமணத்தின் புனிதக் கண்ணீர் முதல் கிராமத்து விவசாயியின் உழைப்பு வரை எல்லாவற்றிலும் உண்மை அழகை பதிவு செய்வதே என் நோக்கம்.",
      about_exp_title: "உன்னுடைய Experience",
      about_exp_desc: "5+ ஆண்டுகளுக்கு மேலாக 180+ திருமண சினிமா படங்கள், பிராண்ட் விளம்பர ரீல்ஸ், குறும்படங்கள் மற்றும் உயர் ரக வீடியோ எடிட்டிங் பணிகளை வெற்றிகரமாக முடித்துள்ளேன்.",
      about_approach_title: "உன்னுடைய Creative Approach",
      about_approach_desc: "கதை பலகை (Storyboard) தயாரிப்பு முதல் இயற்கை ஒளி அமைப்பு, இசை தாளத்திற்கேற்ற எடிட்டிங், DaVinci Resolve கலர் கிரேடிங் மற்றும் முழுமையான ஆடியோ வடிவமைப்பு வரை நேர்த்தி.",
      about_btn_services: "என் சேவைகளைப் பார்க்க",
      about_btn_together: "இணைந்து செயல்படுவோம்",

      // Photography
      photo_tag: "புகைப்படக் கலை",
      photo_heading: "புகைப்பட தொகுப்பு",
      photo_subtitle: "ஒவ்வொரு பிரேமிலும் ஒரு கதை. திருமணங்கள், போர்ட்ரெய்ட், இயல்பான தருணங்கள் மற்றும் கலைநயமிக்க புகைப்படங்கள்.",

      // Videography
      video_tag: "சினிமா இயக்கம்",
      video_heading: "வீடியோகிராபி தொகுப்பு",
      video_subtitle: "4K திருமண சினிமாக்கள், குறும்படங்கள் மற்றும் வைரல் இன்ஸ்டாகிராம் ரீல்ஸ் காட்சிகள்.",

      // Video Editing
      edit_tag: "எடிட்டிங் கலை",
      edit_heading: "வீடியோ எடிட்டிங் & கலர் கிரேடிங்",
      edit_subtitle: "சாதாரண S-Log3 கேமரா காட்சிகளை உலகத்தரம் வாய்ந்த சினிமா வண்ணங்களாக மாற்றும் கலை.",
      edit_p1_title: "சினிமா எடிட்டிங்",
      edit_p1_desc: "இசையின் தாளத்திற்கேற்ற கட்டுகள், உணர்வுபூர்வமான கதை ஓட்டம் மற்றும் காட்சி ஒருங்கிணைப்பு.",
      edit_p2_title: "கலர் கிரேடிங்",
      edit_p2_desc: "DaVinci Resolve மூலம் இயற்கையான மனித தோல் வண்ணங்கள், சினிமா கான்ட்ராஸ்ட் மற்றும் ஃபிலிம் தோற்றம்.",
      edit_p3_title: "மோஷன் கிராபிக்ஸ்",
      edit_p3_desc: "After Effects மூலம் நவீன எழுத்து அசைவுகள், டைனமிக் ஓவர்லேக்கள் மற்றும் லோகோ அனிமேஷன்.",
      edit_p4_title: "டைட்டில் அனிமேஷன்",
      edit_p4_desc: "தமிழ் மற்றும் ஆங்கிலத்தில் திரைப்பட பாணி டைட்டில் கார்டுகள் மற்றும் திருமண தொடக்க காட்சிகள்.",
      edit_p5_title: "VFX & டிரான்சிஷன்கள்",
      edit_p5_desc: "நேர்த்தியான மேட்ச் கட்டுகள், ஸ்பீட் ராம்ப் மற்றும் ஆடியோ சவுண்ட் எஃபெக்ட்ஸ் இணைப்பு.",

      // Equipment
      gear_tag: "தொழில்முறை கருவிகள்",
      gear_heading: "கேமரா & உபகரணங்கள்",
      gear_subtitle: "சினிமா தர சோனி கேமராக்கள், ஜி-மாஸ்டர் லென்ஸ்கள், ஸ்டுடியோ லைட்டிங் மற்றும் அதிநவீன எடிட்டிங் சாப்ட்வேர்.",

      // Services
      services_tag: "சேவைகள்",
      services_heading: "சேவைகள் & தொகுப்புகள்",
      services_subtitle: "உங்கள் சிறப்பு தருணங்கள் மற்றும் பிராண்ட் தேவைகளுக்கான முழுமையான திரைப்பட சேவைகள்.",
      srv_photo_title: "புகைப்படக்கலை",
      srv_photo_desc: "திருமணங்கள், தனிநபர் போர்ட்ரெய்ட் மற்றும் நிகழ்வுகளுக்கான உயர்தர புகைப்பட படப்பிடிப்பு.",
      srv_video_title: "வீடியோகிராபி",
      srv_video_desc: "4K மல்டி-கேமரா சினிமா அமைப்புகள், ஜிம்பால் மற்றும் ட்ரோன் வான்வழி படப்பிடிப்பு.",
      srv_wedding_title: "திருமண சினிமா படங்கள்",
      srv_wedding_desc: "உங்கள் காதல் கதையை ஒரு திரைப்படமாக மாற்றும் முழுமையான திருமண தொகுப்பு மற்றும் டீசர்.",
      srv_edit_title: "வீடியோ எடிட்டிங்",
      srv_edit_desc: "யூடியூப் வீடியோக்கள், இன்ஸ்டாகிராம் ரீல்ஸ் மற்றும் குறும்படங்களுக்கான விரைவான எடிட்டிங்.",
      srv_color_title: "கலர் கிரேடிங் & மோஷன்",
      srv_color_desc: "DaVinci Resolve நோட் கிரேடிங், சினிமா LUT உருவாக்கம் மற்றும் தமிழ் டைட்டில் கார்டுகள்.",

      // Reviews
      reviews_tag: "வாடிக்கையாளர் மதிப்புரை",
      reviews_heading: "வாடிக்கையாளர் கருத்துக்கள்",
      reviews_subtitle: "என் கேமரா லென்ஸை நம்பிய திருமண ஜோடிகள் மற்றும் இயக்குநர்களின் மனமார்ந்த கருத்துக்கள்.",

      // Contact
      contact_tag: "தொடர்பு கொள்ள",
      contact_heading: "தொடர்புக்கு / பணியமர்த்த",
      contact_subtitle: "உங்கள் திருமணத்தை ஆவணப்படுத்தவோ அல்லது வீடியோ எடிட்டிங் செய்யவோ இன்றே தொடர்பு கொள்ளுங்கள்."
    }
  };

  let currentLang = 'en';

  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const langCurrentLabel = document.getElementById('lang-current-label');

  function setLanguage(lang) {
    currentLang = lang;
    const dict = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    if (lang === 'ta') {
      document.body.classList.add('lang-tamil');
      if (langCurrentLabel) langCurrentLabel.textContent = 'English';
    } else {
      document.body.classList.remove('lang-tamil');
      if (langCurrentLabel) langCurrentLabel.textContent = 'தமிழ்';
    }

    localStorage.setItem('mk_portfolio_lang', lang);
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'en' ? 'ta' : 'en');
      showToast(currentLang === 'ta' ? 'தமிழ் மொழிக்கு மாற்றப்பட்டது' : 'Switched to English');
    });
  }

  // Load saved language if available
  const savedLang = localStorage.getItem('mk_portfolio_lang');
  if (savedLang && translations[savedLang]) {
    setLanguage(savedLang);
  }


  // =========================================================================
  // 2. DYNAMIC ROLE TYPING EFFECT
  // =========================================================================
  const typedRoleElement = document.getElementById('role-typed-text');
  const roles = [
    "Photographer",
    "Videographer",
    "Cinematographer",
    "Video Editor",
    "DaVinci Colorist"
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

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
      typingSpeed = 1600; // Pause at full word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400; // Pause before new word
    }

    setTimeout(typeRole, typingSpeed);
  }

  typeRole();


  // =========================================================================
  // 3. BEFORE / AFTER COLOR GRADING COMPARISON SLIDER
  // =========================================================================
  const sliderContainer = document.getElementById('grading-slider-container');
  const beforeWrapper = document.getElementById('grading-before-wrapper');
  const sliderHandle = document.getElementById('grading-slider-handle');
  const gradingBeforeImg = document.getElementById('grading-before-img');
  const gradingAfterImg = document.getElementById('grading-after-img');
  const sceneSunsetBtn = document.getElementById('scene-sunset-btn');
  const sceneFarmerBtn = document.getElementById('scene-farmer-btn');

  let isSliding = false;

  function setSliderPosition(xCoord) {
    if (!sliderContainer || !beforeWrapper || !sliderHandle) return;
    const rect = sliderContainer.getBoundingClientRect();
    let offsetX = xCoord - rect.left;
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;

    const percentage = (offsetX / rect.width) * 100;
    beforeWrapper.style.width = `${percentage}%`;
    sliderHandle.style.left = `${percentage}%`;
  }

  if (sliderContainer) {
    // Mouse events
    sliderContainer.addEventListener('mousedown', (e) => {
      isSliding = true;
      setSliderPosition(e.clientX);
    });

    window.addEventListener('mousemove', (e) => {
      if (!isSliding) return;
      setSliderPosition(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      isSliding = false;
    });

    // Touch events for mobile
    sliderContainer.addEventListener('touchstart', (e) => {
      isSliding = true;
      if (e.touches[0]) setSliderPosition(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!isSliding) return;
      if (e.touches[0]) setSliderPosition(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isSliding = false;
    });
  }

  // Scene Switching in Color Grading Showcase
  if (sceneSunsetBtn && sceneFarmerBtn && gradingBeforeImg && gradingAfterImg) {
    sceneSunsetBtn.addEventListener('click', () => {
      sceneSunsetBtn.classList.add('active', 'bg-amber-500', 'text-dark');
      sceneSunsetBtn.classList.remove('text-slate-300');
      sceneFarmerBtn.classList.remove('active', 'bg-amber-500', 'text-dark');
      sceneFarmerBtn.classList.add('text-slate-300');

      gradingBeforeImg.src = 'assets/portfolio/grading-before.jpg';
      gradingAfterImg.src = 'assets/portfolio/grading-after.jpg';
      showToast('Switched to Golden Sunset S-Log3 comparison');
    });

    sceneFarmerBtn.addEventListener('click', () => {
      sceneFarmerBtn.classList.add('active', 'bg-amber-500', 'text-dark');
      sceneFarmerBtn.classList.remove('text-slate-300');
      sceneSunsetBtn.classList.remove('active', 'bg-amber-500', 'text-dark');
      sceneSunsetBtn.classList.add('text-slate-300');

      gradingBeforeImg.src = 'assets/portfolio/grading-2-before.jpg';
      gradingAfterImg.src = 'assets/portfolio/grading-2-after.jpg';
      showToast('Switched to Rural Earth Film Emulation comparison');
    });
  }


  // =========================================================================
  // 4. PHOTOGRAPHY FILTER TABS & LIGHTBOX MODAL
  // =========================================================================
  const photoFilterBtns = document.querySelectorAll('.photo-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  photoFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      photoFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'block';
          item.style.opacity = '0';
          setTimeout(() => { item.style.opacity = '1'; }, 20);
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Lightbox Modal Logic
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxCategory = document.getElementById('lightbox-category');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxExif = document.getElementById('lightbox-exif');
  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');
  const lightboxPrevBtn = document.getElementById('lightbox-prev-btn');
  const lightboxNextBtn = document.getElementById('lightbox-next-btn');

  let currentLightboxIndex = 0;
  const visibleGalleryItems = () => Array.from(galleryItems).filter(item => item.style.display !== 'none');

  function openLightbox(index) {
    const items = visibleGalleryItems();
    if (!items[index]) return;

    currentLightboxIndex = index;
    const target = items[index];

    lightboxImg.src = target.getAttribute('data-src');
    lightboxTitle.textContent = target.getAttribute('data-title') || 'Untitled';
    lightboxCategory.textContent = target.getAttribute('data-category-name') || 'Photography';
    lightboxDesc.textContent = target.getAttribute('data-desc') || '';
    lightboxExif.textContent = target.getAttribute('data-exif') || 'Sony FX3 · 85mm f/1.4';

    lightboxModal.classList.remove('hidden');
    lightboxModal.classList.add('flex');
    setTimeout(() => {
      lightboxModal.style.opacity = '1';
    }, 10);
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

  function showNextLightbox() {
    const items = visibleGalleryItems();
    currentLightboxIndex = (currentLightboxIndex + 1) % items.length;
    openLightbox(currentLightboxIndex);
  }

  function showPrevLightbox() {
    const items = visibleGalleryItems();
    currentLightboxIndex = (currentLightboxIndex - 1 + items.length) % items.length;
    openLightbox(currentLightboxIndex);
  }

  galleryItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
      const items = visibleGalleryItems();
      const currentIdx = items.indexOf(item);
      openLightbox(currentIdx !== -1 ? currentIdx : 0);
    });
  });

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', showNextLightbox);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', showPrevLightbox);

  // Close when clicking modal backdrop
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  // Keyboard navigation for lightbox & video modal
  window.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('hidden')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNextLightbox();
      if (e.key === 'ArrowLeft') showPrevLightbox();
    }
    if (!videoModal.classList.contains('hidden')) {
      if (e.key === 'Escape') closeVideoModal();
    }
  });


  // =========================================================================
  // 5. VIDEOGRAPHY FILTER TABS & THEATER MODAL
  // =========================================================================
  const videoFilterBtns = document.querySelectorAll('.video-filter-btn');
  const videoCards = document.querySelectorAll('.video-card');

  videoFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      videoFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-vfilter');

      videoCards.forEach(card => {
        const cardCat = card.getAttribute('data-vcategory');
        if (filterVal === 'all' || cardCat === filterVal) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => { card.style.opacity = '1'; }, 20);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Video Theater Modal
  const videoModal = document.getElementById('video-modal');
  const videoPlayer = document.getElementById('html5-video-player');
  const videoModalTitle = document.getElementById('video-modal-title');
  const videoModalDesc = document.getElementById('video-modal-desc');
  const videoModalGear = document.getElementById('video-modal-gear');
  const videoModalDuration = document.getElementById('video-modal-duration');
  const videoModalCategory = document.getElementById('video-modal-category');
  const videoCloseBtn = document.getElementById('video-modal-close-btn');

  function openVideoModal(card) {
    if (!videoModal || !card) return;

    videoModalTitle.textContent = card.getAttribute('data-video-title') || 'Film Preview';
    videoModalDesc.textContent = card.getAttribute('data-video-desc') || '';
    videoModalGear.textContent = card.getAttribute('data-video-gear') || 'Sony FX3 Cinema Line';
    videoModalDuration.textContent = 'Duration: ' + (card.getAttribute('data-video-duration') || '03:30');
    videoModalCategory.textContent = card.getAttribute('data-video-category') || 'Cinema';

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
  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeVideoModal();
    });
  }


  // =========================================================================
  // 6. CAMERA & EQUIPMENT TABS
  // =========================================================================
  const gearTabBtns = document.querySelectorAll('.gear-tab-btn');
  const gearCards = document.querySelectorAll('.gear-card');

  gearTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      gearTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetTab = btn.getAttribute('data-geartab');

      gearCards.forEach(card => {
        const cardCategory = card.getAttribute('data-gear-category');
        if (targetTab === 'all' || cardCategory === targetTab) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => { card.style.opacity = '1'; }, 20);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });


  // =========================================================================
  // 7. BOOK SERVICE BUTTON PRE-FILLS CONTACT FORM
  // =========================================================================
  const bookServiceBtns = document.querySelectorAll('.book-service-btn');
  const serviceDropdown = document.getElementById('client-service');

  bookServiceBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const serviceName = btn.getAttribute('data-service-select');
      if (serviceDropdown && serviceName) {
        serviceDropdown.value = serviceName;
        showToast(`Selected "${serviceName}" in contact form!`);
      }
    });
  });


  // =========================================================================
  // 8. PROJECT ENQUIRY FORM & WHATSAPP GENERATOR
  // =========================================================================
  const enquiryForm = document.getElementById('project-enquiry-form');
  const sendWhatsAppBtn = document.getElementById('send-whatsapp-btn');

  function getEnquiryData() {
    return {
      name: document.getElementById('client-name')?.value.trim() || '',
      phone: document.getElementById('client-phone')?.value.trim() || '',
      email: document.getElementById('client-email')?.value.trim() || '',
      service: document.getElementById('client-service')?.value || 'Wedding Cinematic Films',
      date: document.getElementById('event-date')?.value || 'Not specified',
      location: document.getElementById('event-location')?.value.trim() || 'Not specified',
      budget: document.getElementById('client-budget')?.value || 'Flexible',
      message: document.getElementById('client-message')?.value.trim() || 'Excited to work together!'
    };
  }

  // Direct WhatsApp Button
  if (sendWhatsAppBtn) {
    sendWhatsAppBtn.addEventListener('click', () => {
      const data = getEnquiryData();

      if (!data.name || !data.phone) {
        showToast('Please enter your Name and WhatsApp phone number first!', 'warning');
        document.getElementById('client-name')?.focus();
        return;
      }

      const formattedMessage = 
`*NEW PROJECT ENQUIRY - MUTHU KUMAR VISUALS*
----------------------------------------
*Name:* ${data.name}
*Phone/WhatsApp:* ${data.phone}
*Email:* ${data.email || 'N/A'}
*Service Required:* ${data.service}
*Shoot Date:* ${data.date}
*Location:* ${data.location}
*Budget Range:* ${data.budget}
*Project Brief:* ${data.message}
----------------------------------------
_Sent via muthukumar-portfolio.com_`;

      const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(formattedMessage)}`;
      window.open(whatsappUrl, '_blank');
      showToast('Opening WhatsApp with your enquiry details...');
    });
  }

  // Standard Form Submit Handler
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = getEnquiryData();

      showToast(`Thank you ${data.name}! Your enquiry for "${data.service}" has been received. Muthu will contact you shortly.`, 'success');
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
    toast.className = `toast-item ${type === 'success' ? 'success' : ''}`;

    let iconClass = 'fa-solid fa-circle-info text-amber-400';
    if (type === 'success') iconClass = 'fa-solid fa-circle-check text-emerald-400';
    if (type === 'warning') iconClass = 'fa-solid fa-triangle-exclamation text-amber-400';

    toast.innerHTML = `
      <i class="${iconClass} text-base"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => { toast.classList.add('show'); }, 10);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => { toast.remove(); }, 400);
    }, 4000);
  }


  // =========================================================================
  // 10. ANIMATED STATS COUNTER
  // =========================================================================
  const counters = document.querySelectorAll('.counter');
  let hasAnimatedCounters = false;

  function runCounters() {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 1800; // ms
      const stepTime = 30;
      const totalSteps = duration / stepTime;
      const increment = target / totalSteps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = target;
          clearInterval(timer);
        } else {
          counter.textContent = Math.ceil(current);
        }
      }, stepTime);
    });
  }

  // Observe Hero or scroll to trigger counters
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimatedCounters) {
        hasAnimatedCounters = true;
        runCounters();
      }
    }, { threshold: 0.2 });
    observer.observe(heroSection);
  }


  // =========================================================================
  // 11. SCROLLSPY & HEADER SCROLL EFFECT & BACK TO TOP
  // =========================================================================
  const mainHeader = document.getElementById('main-header');
  const backToTopBtn = document.getElementById('back-to-top');
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Header Blur
    if (scrollY > 50) {
      mainHeader.classList.add('scrolled');
    } else {
      mainHeader.classList.remove('scrolled');
    }

    // Back to top button
    if (scrollY > 500) {
      backToTopBtn.style.opacity = '1';
      backToTopBtn.style.pointerEvents = 'auto';
    } else {
      backToTopBtn.style.opacity = '0';
      backToTopBtn.style.pointerEvents = 'none';
    }

    // Scrollspy active class on nav
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        desktopNavLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active', 'text-amber-400');
          } else {
            link.classList.remove('active', 'text-amber-400');
          }
        });
      }
    });
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  // =========================================================================
  // 12. MOBILE HAMBURGER MENU DRAWER
  // =========================================================================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

});
