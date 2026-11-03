(() => {
  'use strict';
  const root = document.documentElement;
  const langButton = document.getElementById('langButton');
  const menuButton = document.getElementById('menuButton');
  const mobileNav = document.getElementById('mobileNav');
  const elements = Array.from(document.querySelectorAll('[data-i18n]'));
  const ar = {};
  elements.forEach(el => { ar[el.dataset.i18n] = el.innerHTML; });
  let language = 'ar';
  const en = {
    skip:'Skip to content',location:'Riyadh, Saudi Arabia',since:'Executing with confidence since 2022',brandName:'OSOUD NAJD',brandSub:'GENERAL CONTRACTING',
    navHome:'Home',navAbout:'About',navServices:'Expertise',navProjects:'Projects',navContact:'Contact',navCta:'Discuss a Project',
    heroEyebrow:'OSOUD NAJD GENERAL CONTRACTING | RIYADH',heroLine1:'Building trust.',heroLine2:'Leaving a legacy.',
    heroLead:'From concrete and steel structures to fit-out, roadworks and landscaping, we turn project requirements into dependable execution.',
    seeProjects:'Explore Our Projects',connectNow:'Talk to Our Team',heroFoot:'Original photographs from our project experience',
    badgePrimary:'Experience in every detail',badgeSecondary:'RIYADH · SAUDI ARABIA',scrollLabel:'Discover the company ↓',
    capabilityLabel:'ON THE GROUND',capabilityIntro:'We know that a strong project begins with the details you do not see.',stat1:'Established',stat2:'Execution disciplines',stat3:'Riyadh-based',
    aboutEyebrow:'01 — ABOUT US',aboutTitle1:'Experience on site.',aboutTitle2:'Trust built through results.',aboutLead:'Founded in Riyadh in 2022, Osoud Najd delivers construction and specialist work packages, with documented experience across Riyadh Metro, JAX and Diriyah projects.',
    aboutBody:'We carry out concrete works, structural steel, interior fit-out, roads and site preparation for owners and main contractors. Attention to site coordination, execution detail and handover defines our approach.',
    aboutCta:'Explore Our Capabilities',aboutDetail:'Professional execution starts with clear responsibility.',aboutQuote:'We treat every detail as part of the project’s overall success.',
    servicesEyebrow:'02 — OUR CAPABILITIES',servicesTitle1:'Execution expertise.',servicesTitle2:'For every project.',servicesIntro:'Specialised services supporting construction projects from civil works through to fit-out and external areas.',
    service1Title:'Concrete Works',service1Desc:'Concrete elements and construction work tailored to project specifications.',
    service2Title:'Steel Structures',service2Desc:'Structural steelwork, installation and steel framing solutions.',
    service3Title:'Interior Fit-Out',service3Desc:'Interior finishing, renovations and facility fit-out works.',
    service4Title:'Roads & Site Preparation',service4Desc:'Roadworks, site preparation and outdoor hardscape construction.',
    service5Title:'Landscaping',service5Desc:'Landscape execution, external pathways and site improvements.',
    servicesFoot:'Precise execution. Active coordination. Clear direction.',servicesCta:'Discuss Your Project',
    signature:'Quality is not the final step.<br><em>It guides every stage.</em>',
    projectsEyebrow:'03 — SELECTED WORK',projectsTitle1:'Projects that speak',projectsTitle2:'for our experience.',projectsIntro:'A curated selection of Osoud Najd projects using original site photographs from the company records.',
    filterAll:'All Projects',filterCivil:'Construction',filterInfra:'Roads & Sites',filterFitout:'Fit-Out',
    metroCategory:'Concrete & Construction',metroTitle:'Riyadh Metro — Line 5',jaxroadsCategory:'Roads & Hardscape',jaxroadsTitle:'JAX — Roads & Hardscape',
    jaxfitCategory:'Fit-Out & Finishing',jaxfitTitle:'JAX — Warehouse Fit-Out',diriyahCategory:'Landscaping & Outdoor Works',diriyahTitle:'Diriyah Biennale — Landscaping',
    eventsCategory:'Event Preparation',eventsTitle:'HYA HUB — Event Preparation',steelCategory:'Steel Structures',steelTitle:'Selected Steelwork',
    projectsNote:'Project images are from the Osoud Najd company portfolio. Some works were delivered as a subcontractor under main contractors. Confidential project images are not published here.',
    processEyebrow:'04 — OUR APPROACH',processTitle1:'From planning',processTitle2:'to handover.',processLead:'We assess each scope, coordinate with project stakeholders and follow through to handover.',processCta:'Discuss Your Scope of Work',
    step1Title:'Scope Assessment',step1Desc:'Understanding work packages, specifications and delivery priorities.',
    step2Title:'Planning & Coordination',step2Desc:'Organizing resources, phases and on-site interfaces.',
    step3Title:'Execution & Monitoring',step3Desc:'Monitoring activities with attention to quality and safety requirements.',
    step4Title:'Inspection & Handover',step4Desc:'Reviewing deliverables and coordinating handover.',
    contactEyebrow:'05 — WORK WITH US',contactTitle1:'Your next project.',contactTitle2:'A stronger partnership.',contactLead:'We welcome opportunities with developers, main contractors and project owners across construction, fit-out and infrastructure scopes.',
    whatsappCta:'Message Us on WhatsApp',emailCta:'Send an Email',contactInfoTitle:'Contact Information',contactPhoneTitle:'PHONE',contactEmailTitle:'EMAIL',contactLocationTitle:'LOCATION',contactLocation:'Al Rimal, Riyadh, Saudi Arabia',mapCta:'Open Map',
    footerLine:'Built on trust. Delivered with care.',footerRights:'All rights reserved',backTop:'Back to top ↑',modalSource:'Source: company project records',modalCta:'Discuss Similar Work ↗', stripTitle:'EXPERTISE',stripOne:'Construction',stripTwo:'Concrete',stripThree:'Fit-Out',stripFour:'Roads & Sites',stripFive:'Steel Structures',aboutCaption:'Roadworks & hardscape',statementKicker:'OUR EXECUTION PRINCIPLES'
  };
  const projects = {
    metro: {
      ar: {title:'مترو الرياض — المسار الخامس',category:'أعمال خرسانية وإنشائية',text:'تتضمن سابقة أعمال أسود نجد نطاق أعمال خرسانية وإنشائية بمحطات المسار الخامس لمترو الرياض، نُفذت ضمن أعمال مقاول رئيسي حسب سجل الشركة.'},
      en: {title:'Riyadh Metro — Line 5',category:'Concrete and construction works',text:'The company’s project record lists concrete and construction works related to Riyadh Metro Line 5, delivered within a main contractor’s project scope.'}
    },
    jaxroads: {
      ar: {title:'مشروعات JAX — الطرق والمسطحات الخارجية',category:'الطرق وتجهيز المواقع',text:'أعمال طرق وتهيئة مساحات ومسطحات خارجية ضمن مشروعات JAX، وفق الصور وسجل الأعمال الوارد في ملف الشركة.'},
      en: {title:'JAX — Roads & Hardscape',category:'Roadworks and hardscape',text:'Roadworks and outdoor hardscape packages within the JAX development, shown in the submitted company portfolio.'}
    },
    jaxfit: {
      ar: {title:'مشروعات JAX — التجهيز والتشطيبات',category:'تجهيز مواقع وتشطيبات',text:'أعمال تجهيز وتشطيبات ومساحات داخلية مرتبطة بمشروعات JAX، مع عرض لصور من التنفيذ الفعلي.'},
      en: {title:'JAX — Warehouse Fit-Out',category:'Interior fit-out and finishing',text:'Interior preparation and finishing works within JAX project spaces, illustrated using photographs from the company records.'}
    },
    diriyah: {
      ar: {title:'بينالي الدرعية — أعمال اللاندسكيب',category:'تنسيق المواقع الخارجية',text:'تنفيذ أعمال تنسيق مواقع ومسطحات خارجية ضمن نطاق أعمال بينالي الدرعية، من خلال مقاول رئيسي كما ورد في سجل المشروع.'},
      en: {title:'Diriyah Biennale — Landscaping',category:'Landscaping and outdoor works',text:'Landscaping and external-site execution in the Diriyah Biennale project scope, delivered under a main contractor as recorded in the portfolio.'}
    },
    events: {
      ar: {title:'HYA HUB — تجهيز الفعاليات',category:'أعمال التجهيز',text:'تنفيذ أعمال تجهيز ومساحات الفعاليات ضمن مشروع HYA HUB، من الصور الواردة في سابقة الأعمال.'},
      en: {title:'HYA HUB — Event Preparation',category:'Event fit-out',text:'Event preparation and venue works documented in the HYA HUB project photographs from the company portfolio.'}
    },
    steel: {
      ar: {title:'نماذج من أعمال الهياكل المعدنية',category:'هياكل فولاذية',text:'نماذج تصويرية لأعمال الهياكل الحديدية المدرجة ضمن ألبوم الشركة؛ لا تُنسب الصورة هنا إلى مشروع مسمى غير موثق.'},
      en: {title:'Selected Steel Structure Works',category:'Structural steelwork',text:'Examples of steel structure works from the company’s photo album. These images are not attributed to a named project without clear documentation.'}
    }
  };
  function changeLanguage(next) {
    language = next;
    root.lang = next;
    root.dir = next === 'ar' ? 'rtl' : 'ltr';
    elements.forEach(el => {
      const key = el.dataset.i18n;
      if (next === 'en' && Object.prototype.hasOwnProperty.call(en,key)) el.innerHTML = en[key];
      else if (next === 'ar' && Object.prototype.hasOwnProperty.call(ar,key)) el.innerHTML = ar[key];
    });
    langButton.innerHTML = next === 'ar' ? 'EN <span aria-hidden="true">↗</span>' : 'العربية <span aria-hidden="true">↗</span>';
    langButton.setAttribute('aria-label', next === 'ar' ? 'Switch to English' : 'العودة إلى العربية');
    document.title = next === 'ar' ? 'أسود نجد للمقاولات العامة | Osoud Najd' : 'Osoud Najd General Contracting | Riyadh';
    menuButton.setAttribute('aria-label', next === 'ar' ? 'فتح القائمة' : 'Open navigation');
    if (modal.open) populateModal(modal.dataset.currentProject);
  }
  langButton.addEventListener('click', () => changeLanguage(language === 'ar' ? 'en' : 'ar'));

  function closeMenu() { mobileNav.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); }
  menuButton.addEventListener('click', () => {
    mobileNav.hidden = !mobileNav.hidden;
    menuButton.setAttribute('aria-expanded', String(!mobileNav.hidden));
  });
  document.querySelectorAll('.mobile-nav a').forEach(el => el.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 920) closeMenu(); });

  const header = document.getElementById('siteHeader');
  const navLinks = Array.from(document.querySelectorAll('.desktop-nav .nav-link'));
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled',window.scrollY > 25);
    const sections = ['home','about','services','projects','contact'];
    let current = 'home';
    for (const id of sections) {
      const s = document.getElementById(id);
      if (s && s.getBoundingClientRect().top <= 150) current = id;
    }
    navLinks.forEach(link => link.classList.toggle('active',link.getAttribute('href') === '#' + current));
  }, {passive:true});

  const revealNodes = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => { if(entry.isIntersecting) { entry.target.classList.add('show'); observer.unobserve(entry.target); } });
    }, {threshold:.07,rootMargin:'0px 0px -25px 0px'});
    revealNodes.forEach(el => revealObserver.observe(el));
  } else revealNodes.forEach(el => el.classList.add('show'));

  const filters = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('.project-card');
  filters.forEach(filter => filter.addEventListener('click', () => {
    const kind = filter.dataset.filter;
    filters.forEach(f => { f.classList.toggle('active', f === filter); f.setAttribute('aria-pressed',String(f === filter)); });
    cards.forEach(card => { card.classList.toggle('hidden-project',!(kind === 'all' || card.dataset.category === kind)); });
  }));

  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalDescription = document.getElementById('modalDescription');
  const modalImage = document.getElementById('modalImage');
  function populateModal(id) {
    const card = document.querySelector(`.project-card[data-project="${id}"]`);
    if (!card || !projects[id]) return;
    const detail = projects[id][language];
    modalTitle.textContent = detail.title;
    modalCategory.textContent = detail.category;
    modalDescription.textContent = detail.text;
    modalImage.src = card.querySelector('img').getAttribute('src');
    modalImage.alt = detail.title;
    modal.dataset.currentProject = id;
  }
  document.querySelectorAll('.project-open').forEach(button => button.addEventListener('click', () => {
    const id = button.closest('.project-card').dataset.project;
    populateModal(id);
    if (typeof modal.showModal === 'function') modal.showModal();
  }));
  document.getElementById('modalClose').addEventListener('click', () => modal.close());
  document.getElementById('modalContact').addEventListener('click', () => modal.close());
  modal.addEventListener('click', ev => { if (ev.target === modal) modal.close(); });
  document.getElementById('year').textContent = new Date().getFullYear();
})();