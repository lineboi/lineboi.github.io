// =============================================
//  GWIZA.COM — Portfolio JavaScript
// =============================================

// =============================================
//  TRANSLATIONS
// =============================================
const translations = {
  en: {
    // Nav
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    // Hero
    'hero.greeting': "Hello, I'm",
    'hero.summary': "Computer Science student at the University of Rwanda, passionate about Data Engineering and building efficient data pipelines that solve real-world problems.",
    'hero.btn.contact': 'Get in Touch',
    'hero.btn.cv': 'Download CV',
    'hero.location': 'Kigali, Rwanda',
    'photo.badge': 'Data Engineer',
    // Typewriter
    'typewriter': ['Data Engineering Student', 'AI Enthusiast', 'Python Developer', 'Digital Ambassador', 'Problem Solver'],
    // About
    'about.tag': 'Who I Am',
    'about.title': 'About Me',
    'about.p1': "I'm a Computer Science student at the <strong>University of Rwanda</strong> with a specialized focus in <strong>Data Engineering</strong>. I'm passionate about transforming raw data into meaningful insights and building systems that make information accessible and actionable.",
    'about.p2': "My practical experience as a <strong>Digital Ambassador at RISA</strong> gave me hands-on exposure to real-world data tracking and community-level digital transformation — training over 250 citizens on e-government platforms.",
    'about.p3': "I thrive at the intersection of technology and community impact, and I'm driven by the goal of leveraging data to build a more connected and informed Rwanda.",
    'about.stat1': 'Citizens Trained',
    'about.stat2': 'Years Coding',
    'about.stat3': 'Languages',
    'about.info.title': 'Quick Info',
    'about.info.name.label': 'Full Name',
    'about.info.email.label': 'Email',
    'about.info.phone.label': 'Phone',
    'about.info.location.label': 'Location',
    'about.info.availability.label': 'Availability',
    'about.info.availability.value': 'Open to Opportunities',
    // Skills
    'skills.tag': 'What I Know',
    'skills.title': 'Technical Skills',
    'skills.programming': 'Programming',
    'skills.data': 'Data Management',
    'skills.digital': 'Digital Services',
    'skills.soft': 'Soft Skills',
    'skills.languages': 'Languages',
    'lang.rw.level': 'Native',
    'lang.en.level': 'Professional Working Proficiency',
    'tag.algorithms': 'Algorithms',
    'tag.ds': 'Data Structures',
    'tag.csv': 'CSV Handling',
    'tag.dbdesign': 'Database Design',
    'tag.pipelines': 'Data Pipelines',
    'tag.egov': 'e-Government',
    'tag.literacy': 'Digital Literacy',
    'tag.communication': 'Communication',
    'tag.teaching': 'Teaching',
    'tag.problemsolving': 'Problem Solving',
    'tag.datatrack': 'Data Tracking',
    'tag.training': 'Community Training',
    'skills.ai': 'AI Enthusiast',
    'skills.ai.desc': 'Passionate about Artificial Intelligence and its real-world applications.',
    'tag.ml': 'Machine Learning',
    'tag.nn': 'Neural Networks',
    'tag.nlp': 'NLP',
    'tag.aitools': 'AI Tools',
    // Experience
    'exp.tag': "What I've Done",
    'exp.title': 'Work Experience',
    'exp.job2.title': 'Software Developer',
    'exp.job2.org': 'Codes of Africa',
    'exp.job2.date': '2024 – Present',
    'exp.job2.bullet1': 'Contributed to software development projects focused on African tech solutions and innovation.',
    'exp.job2.bullet2': 'Collaborated with a team to design and implement software features, improving product quality and user experience.',
    'exp.job2.bullet3': 'Applied Python, data structures, and problem-solving skills to build and optimize application components.',
    'exp.job2.bullet4': 'Gained hands-on experience working in a professional tech environment across real-world projects.',
    'tag.softwaredev': 'Software Development',
    'tag.teamwork': 'Teamwork',
    'tag.agile': 'Agile',
    'exp.job.title': 'Digital Ambassador',
    'exp.job.org': 'Rwanda Information Society Authority (RISA)',
    'exp.bullet1': 'Trained over <strong>250 citizens</strong> on using e-government services like Irembo for health insurance and documentation.',
    'exp.bullet2': 'Built strong communication skills by teaching non-technical users how to navigate digital platforms.',
    'exp.bullet3': 'Used <strong>Excel and Python</strong> to track community training data and organize weekly performance reports.',
    'exp.bullet4': 'Assisted in digital literacy initiatives to increase technology adoption in the Bugomba Cell.',
    // Education
    'edu.tag': 'My Background',
    'edu.title': 'Education',
    'edu.degree1': 'BSc in Computer Science',
    'edu.school1': 'University of Rwanda (CST)',
    'edu.date1': 'Sept 2024 – Present',
    'edu.badge1': 'Current',
    'edu.detail1a': 'Focused on Data Engineering, Database Management, and Algorithms',
    'edu.detail1b': 'Applying theoretical knowledge to personal projects involving data cleaning and processing',
    'edu.degree2': 'Advanced Level Certificate (MPC)',
    'edu.school2': 'Nyagatare Secondary School',
    'edu.date2': '2020 – 2023',
    'edu.badge2': 'Completed',
    'edu.detail2a': 'Specialized in Mathematics, Physics, and Computer Science',
    // Contact
    'contact.tag': "Let's Connect",
    'contact.title': 'Get In Touch',
    'contact.intro': "I'm currently open to internship opportunities, collaborations, and interesting data engineering projects. Feel free to reach out!",
    'contact.email.label': 'Email',
    'contact.phone.label': 'Phone',
    'contact.location.label': 'Location',
    'form.name.label': 'Your Name',
    'form.name.placeholder': 'John Doe',
    'form.email.label': 'Your Email',
    'form.email.placeholder': 'john@example.com',
    'form.message.label': 'Message',
    'form.message.placeholder': "Hello Gwiza, I'd like to...",
    'form.submit': 'Send Message',
    'form.sent': 'Message Sent!',
    // Footer
    'footer.copy': '© 2024 Iradukunda Gwiza Moise. All rights reserved.',
    'footer.made': 'Built with passion in Kigali, Rwanda',
  },

  rw: {
    // Nav
    'nav.about': 'Ibyerekeye',
    'nav.skills': 'Ubuhanga',
    'nav.experience': 'Uburambe',
    'nav.education': 'Amashuri',
    'nav.contact': 'Tumanahane',
    // Hero
    'hero.greeting': "Muraho, ndi",
    'hero.summary': "Ndi umunyeshuri w'Siyansi ya Mudasobwa muri Kaminuza y'u Rwanda, nkunda cyane ubwubatsi bw'amakuru no kubaka imiyoboro y'amakuru ikora neza ikemura ibibazo by'isi nyaryo.",
    'hero.btn.contact': 'Ntumanahane',
    'hero.btn.cv': 'Pakurura CV',
    'hero.location': 'Kigali, u Rwanda',
    'photo.badge': 'Inzobere mu Makuru',
    // Typewriter
    'typewriter': ["Umunyeshuri w'Ubwubatsi bw'Amakuru", 'Inkunda AI', 'Umuhanga wa Python', 'Intumwa ya Dijitali', 'Umushoboye Ibibazo'],
    // About
    'about.tag': 'Uwo Ndi We',
    'about.title': 'Ibyerekeye Jye',
    'about.p1': "Ndi umunyeshuri w'Siyansi ya Mudasobwa muri <strong>Kaminuza y'u Rwanda</strong> nshishikariye cyane <strong>ubwubatsi bw'amakuru</strong>. Nkunda guhindura amakuru atandukanye mu makuru afite agaciro no kubaka sisitemu zituma amakuru agerwaho n'abantu.",
    'about.p2': "Uburambe bwanjye nk'<strong>Intumwa ya Dijitali muri RISA</strong> bwampaye uburambe bw'isi nyaryo mu gukurikirana amakuru no guhindura imirimo ya dijitali ku rwego rw'abaturage — nshimangira abantu barenga 250 gukoresha serivisi za leta ya dijitali.",
    'about.p3': "Nishimira gukorana ibikorwa bya tekinoloji n'ingaruka ku muturage, kandi nshoboye gukoresha amakuru mu kubaka u Rwanda rwibasiye amakuru aruta n'urwa mbere.",
    'about.stat1': 'Abaturage Bahuguwe',
    'about.stat2': "Imyaka yo Gupanga",
    'about.stat3': 'Indimi',
    'about.info.title': 'Amakuru Make',
    'about.info.name.label': 'Amazina Yose',
    'about.info.email.label': 'Imeri',
    'about.info.phone.label': 'Telefoni',
    'about.info.location.label': 'Aho Atuye',
    'about.info.availability.label': 'Ubushobozi',
    'about.info.availability.value': 'Nishimiye Amahirwe',
    // Skills
    'skills.tag': 'Ibyo Nzi',
    'skills.title': 'Ubuhanga bwa Tekiniki',
    'skills.programming': 'Porogaramu',
    'skills.data': "Gucunga Amakuru",
    'skills.digital': 'Serivisi za Dijitali',
    'skills.soft': 'Ubuhanga Bwihariye',
    'skills.languages': 'Indimi',
    'lang.rw.level': "Ururimi rw'Ububiko",
    'lang.en.level': 'Inzobere mu Kazi',
    'tag.algorithms': 'Algoriti',
    'tag.ds': "Imitunganyirize y'Amakuru",
    'tag.csv': "Gukora na CSV",
    'tag.dbdesign': "Kubaka Imbuga z'Amakuru",
    'tag.pipelines': "Imiyoboro y'Amakuru",
    'tag.egov': 'Leta ya Dijitali',
    'tag.literacy': 'Ubumenyi bwa Dijitali',
    'tag.communication': 'Gutumanahana',
    'tag.teaching': 'Kwigisha',
    'tag.problemsolving': 'Gukemura Ibibazo',
    'tag.datatrack': "Gukurikirana Amakuru",
    'tag.training': "Amahugurwa y'Abaturage",
    'skills.ai': 'Inkunda AI',
    'skills.ai.desc': "Nkunda cyane ubwenge bwa mudasobwa n'ibikorwa byayo mu isi nyaryo.",
    'tag.ml': 'Kwigira kwa Mudasobwa',
    'tag.nn': 'Imiyoboro ya Neurone',
    'tag.nlp': 'Gutunganya Ururimi',
    'tag.aitools': "Ibyuma bya AI",
    // Experience
    'exp.tag': 'Ibyo Nakoze',
    'exp.title': 'Uburambe mu Kazi',
    'exp.job2.title': 'Umunyamwuga wa Porogaramu',
    'exp.job2.org': 'Codes of Africa',
    'exp.job2.date': '2024 – Ubu',
    'exp.job2.bullet1': "Yakoze ku mirimo y'iterambere rya porogaramu yibanda ku bisubizo bya tekinoloji muri Afurika.",
    'exp.job2.bullet2': "Yakoranye n'itsinda mu gutekereza no gushyira mu bikorwa ibiranga porogaramu, byungura ubwiza bw'igicuruzwa n'uburambe bw'abakoresha.",
    'exp.job2.bullet3': "Yakoresheje Python, imitunganyirize y'amakuru, no gukemura ibibazo mu kubaka no kunoza ibice by'aplikasiyo.",
    'exp.job2.bullet4': "Yaronse uburambe bw'isi nyaryo mu kazi mu bidukikije bya tekinoloji by'inzobere.",
    'tag.softwaredev': "Iterambere rya Porogaramu",
    'tag.teamwork': "Gukorana n'Itsinda",
    'tag.agile': 'Agile',
    'exp.job.title': 'Intumwa ya Dijitali',
    'exp.job.org': "Urwego rw'Igihugu rw'Iterambere ry'Ikoranabuhanga (RISA)",
    'exp.bullet1': "Nahuguriye abantu barenga <strong>250</strong> gukoresha serivisi za leta za dijitali nka Irembo ku bwiteguro bw'ubuzima no gutuza impapuro.",
    'exp.bullet2': 'Nabitse ubuhanga bwo gutumanahana nk\'aba nyamwigendaho bwaboshyeje abakoresha batari inzobere gukoresha imbuga za dijitali.',
    'exp.bullet3': 'Nakoresheje <strong>Excel na Python</strong> gukurikirana amakuru y\'amahugurwa y\'abaturage no gutunganya raporo z\'ibyuma buri cyumweru.',
    'exp.bullet4': "Narafashije ibikorwa byo guteza imbere ubumenyi bwa dijitali kugira ngo habe iyongera ry'ikoranabuhanga mu kagari ka Bugomba.",
    // Education
    'edu.tag': 'Inkomoko Yange',
    'edu.title': 'Amashuri',
    'edu.degree1': 'Lisansi mu Siyansi ya Mudasobwa',
    'edu.school1': "Kaminuza y'u Rwanda (CST)",
    'edu.date1': 'Nzeri 2024 – Ubu',
    'edu.badge1': 'Ubu',
    'edu.detail1a': "Akeye ubwubatsi bw'amakuru, gucunga imbuga z'amakuru, n'algoriti",
    'edu.detail1b': "Gushyira mu bikorwa ubumenyi bw'inyigisho mu bikorwa bya perso bijyanye no gusukura no gutunganya amakuru",
    'edu.degree2': "Impamyabumenyi y'Amashuri Makuru (MPC)",
    'edu.school2': 'Ecole Secondaire ya Nyagatare',
    'edu.date2': '2020 – 2023',
    'edu.badge2': 'Byarangiye',
    'edu.detail2a': "Byibandiye ku Matematiki, Fiziki, n'Ubumenyi bwa Mudasobwa",
    // Contact
    'contact.tag': 'Tumanahane',
    'contact.title': 'Twandikire',
    'contact.intro': "Ubu nishimiye amahirwe y'amahugurwa, gukorana, n'imishinga irebana n'ubwubatsi bw'amakuru. Ntuze untumanahane!",
    'contact.email.label': 'Imeri',
    'contact.phone.label': 'Telefoni',
    'contact.location.label': 'Aho Atuye',
    'form.name.label': 'Izina Ryawe',
    'form.name.placeholder': 'Kamanzi Jean',
    'form.email.label': 'Imeri Yawe',
    'form.email.placeholder': 'kamanzi@urugero.com',
    'form.message.label': 'Ubutumwa',
    'form.message.placeholder': "Muraho Gwiza, nshaka...",
    'form.submit': 'Ohereza Ubutumwa',
    'form.sent': 'Ubutumwa Bwoherejwe!',
    // Footer
    'footer.copy': '© 2024 Iradukunda Gwiza Moise. Uburenganzira bwose bwabitswe.',
    'footer.made': "Yakozwe n'umwete i Kigali, u Rwanda",
  }
};

// =============================================
//  LANGUAGE SWITCHER
// =============================================
let currentLang = localStorage.getItem('lang') || 'en';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  const t = translations[lang];

  // Plain text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // HTML content elements (allow <strong> etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Update active state on toggle
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
  document.getElementById('lang-rw').classList.toggle('active', lang === 'rw');

  // Update <html> lang attribute
  document.documentElement.lang = lang === 'rw' ? 'rw' : 'en';

  // Reset typewriter with new phrases
  resetTypewriter(lang);
}

// Language toggle click
document.getElementById('lang-toggle').addEventListener('click', () => {
  applyLanguage(currentLang === 'en' ? 'rw' : 'en');
});

// =============================================
//  TYPEWRITER
// =============================================
let typewriterPhrases = translations[currentLang].typewriter;
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeTimeout = null;
const typeTarget = document.getElementById('typewriter');

function typeWriter() {
  const currentPhrase = typewriterPhrases[phraseIndex];

  if (isDeleting) {
    typeTarget.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typeTarget.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 50 : 90;

  if (!isDeleting && charIndex === currentPhrase.length) {
    speed = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % typewriterPhrases.length;
    speed = 400;
  }

  typeTimeout = setTimeout(typeWriter, speed);
}

function resetTypewriter(lang) {
  clearTimeout(typeTimeout);
  typewriterPhrases = translations[lang].typewriter;
  phraseIndex = 0;
  charIndex = 0;
  isDeleting = false;
  typeTarget.textContent = '';
  typeWriter();
}

typeWriter();

// =============================================
//  NAVBAR SCROLL
// =============================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// =============================================
//  MOBILE MENU
// =============================================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// =============================================
//  ACTIVE NAV LINK ON SCROLL
// =============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

// =============================================
//  FADE-IN ON SCROLL
// =============================================
const fadeEls = document.querySelectorAll(
  '.skill-card, .timeline-card, .edu-card, .contact-item, .about-details, .stat, .lang-item'
);

fadeEls.forEach(el => el.classList.add('fade-in'));

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), 60 * i);
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => fadeObserver.observe(el));

// =============================================
//  LANGUAGE BAR ANIMATION
// =============================================
const langFills = document.querySelectorAll('.lang-fill');
const langObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      langObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

langFills.forEach(fill => langObserver.observe(fill));

// =============================================
//  CONTACT FORM
// =============================================
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('#submit-btn');
  const span = btn.querySelector('span');
  const t = translations[currentLang];
  const originalText = span.textContent;

  span.textContent = t['form.sent'];
  btn.style.background = '#16a34a';
  btn.disabled = true;

  setTimeout(() => {
    span.textContent = originalText;
    btn.style.background = '';
    btn.disabled = false;
    form.reset();
  }, 3000);
});

// =============================================
//  SMOOTH SCROLL (offset for fixed nav)
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }
  });
});

// =============================================
//  INIT — apply saved language on load
// =============================================
applyLanguage(currentLang);
