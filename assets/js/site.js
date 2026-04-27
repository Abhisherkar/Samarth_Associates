const navigationLinks = [
  { href: 'index.html', label: 'Home', key: 'home' },
  { href: 'about.html', label: 'About', key: 'about' },
  { href: 'services.html', label: 'Services', key: 'services' },
  { href: 'developers.html', label: 'Developers', key: 'developers' },
  { href: 'society-members.html', label: 'Society Members', key: 'society-members' },
  { href: 'redevelopment.html', label: 'Redevelopment', key: 'redevelopment' },
  { href: 'resources.html', label: 'Resources', key: 'resources' },
  { href: 'contact.html', label: 'Contact', key: 'contact' },
];

const solutionCards = [
  {
    href: 'society-members.html',
    title: 'Member advisory',
    copy: 'Bring members from confusion to aligned decisions with transparent communication.',
  },
  {
    href: 'redevelopment.html',
    title: 'Redevelopment strategy',
    copy: 'Structure technical, legal, and financial decisions before they become expensive.',
  },
  {
    href: 'developers.html',
    title: 'Developer command room',
    copy: 'Shorten diligence cycles, sharpen stakeholder trust, and reduce approval drag.',
  },
  {
    href: 'services.html',
    title: 'Signature programs',
    copy: 'Advisory sprints, readiness reviews, and board-facing workshops built around clarity.',
  },
];

const footerColumns = [
  {
    title: 'Explore',
    items: [
      { href: 'about.html', label: 'Who we are' },
      { href: 'services.html', label: 'Programs' },
      { href: 'resources.html', label: 'Insights' },
      { href: 'contact.html', label: 'Book a strategy call' },
    ],
  },
  {
    title: 'Focus Areas',
    items: [
      { href: 'society-members.html', label: 'Society members' },
      { href: 'developers.html', label: 'Developers' },
      { href: 'redevelopment.html', label: 'Redevelopment advisory' },
      { href: 'services.html', label: 'Decision design systems' },
    ],
  },
];

const ctaVariants = {
  default: {
    eyebrow: 'Start with clarity',
    title: 'Bring structure, trust, and momentum into your next move.',
    copy: 'We turn ambiguous redevelopment conversations into decision-ready pathways with sharper communication and calmer stakeholder alignment.',
    primary: { href: 'contact.html', label: 'Book a strategy session' },
    secondary: { href: 'services.html', label: 'Explore services' },
  },
  developers: {
    eyebrow: 'Developer enablement',
    title: 'Accelerate diligence without making the process feel transactional.',
    copy: 'Give your team a cleaner narrative, faster member confidence, and materials that feel professionally orchestrated from day one.',
    primary: { href: 'contact.html', label: 'Schedule a developer workshop' },
    secondary: { href: 'developers.html', label: 'View developer flow' },
  },
  society: {
    eyebrow: 'Member confidence',
    title: 'Help every stakeholder understand the journey before asking for a decision.',
    copy: 'We design communication and advisory systems that reduce anxiety, answer hard questions, and protect momentum.',
    primary: { href: 'contact.html', label: 'Plan a member briefing' },
    secondary: { href: 'society-members.html', label: 'See the member experience' },
  },
};

function renderNav(currentPage) {
  const linksMarkup = navigationLinks
    .filter((item) => !['society-members', 'developers', 'redevelopment'].includes(item.key))
    .map(
      (item) => `
        <a class="dock-link ${currentPage === item.key ? 'is-current' : ''}" href="${item.href}">
          ${item.label}
        </a>
      `
    )
    .join('');

  const mobileLinks = navigationLinks
    .map(
      (item) => `
        <a class="mobile-link" href="${item.href}">
          <span>${item.label}</span>
          <span aria-hidden="true">+</span>
        </a>
      `
    )
    .join('');

  const solutionLinks = solutionCards
    .map(
      (item) => `
        <a class="mega-link-card" href="${item.href}">
          <strong>${item.title}</strong>
          <span>${item.copy}</span>
        </a>
      `
    )
    .join('');

  return `
    <div class="site-nav">
      <div class="container-shell">
        <div class="dock-shell">
          <a class="brand-lockup" href="index.html" aria-label="Samarth Associates home">
            <span class="brand-mark" aria-hidden="true">
              <span class="brand-mark__letters">SA</span>
            </span>
            <span class="brand-text">
              <span class="brand-name">Samarth Associates</span>
              <span class="brand-subtitle">Redevelopment Advisory</span>
            </span>
          </a>
          <div class="dock-links" aria-label="Primary navigation">
            ${linksMarkup}
            <button class="mega-toggle ${['society-members', 'developers', 'redevelopment'].includes(currentPage) ? 'is-current' : ''}" type="button" aria-expanded="false" aria-controls="solutions-menu">
              Solutions
              <span aria-hidden="true">+</span>
            </button>
          </div>
          <div class="nav-actions">
            <span class="nav-note">Trusted redevelopment advisors</span>
            <a class="btn-primary" href="contact.html">Book a strategy call</a>
            <button class="menu-button" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open navigation menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round"></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="mega-panel" id="solutions-menu">
          <div class="mega-surface">
            <div class="mega-grid">
              <div class="mega-feature">
                <span class="eyebrow">Signal paths</span>
                <h3>Choose the path that matches your stakeholder landscape.</h3>
                <p>Every engagement is built to reduce ambiguity, speed up alignment, and replace reactive communication with a clear operating system.</p>
                <div class="mega-link-grid">
                  ${solutionLinks}
                </div>
              </div>
              <div class="mega-links">
                <span class="eyebrow">Why it works</span>
                <h3>Clarity first, pressure second.</h3>
                <a class="mega-list" href="services.html">
                  <strong>Decision architecture</strong>
                  <span>Structure sequencing, visuals, and board materials around what people need to understand.</span>
                </a>
                <a class="mega-list" href="resources.html">
                  <strong>Strategic perspectives</strong>
                  <span>Use our frameworks to spot friction before it slows approvals or trust.</span>
                </a>
                <a class="mega-list" href="contact.html">
                  <strong>Working session</strong>
                  <span>Start with a strategy call and leave with the most important next moves mapped.</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="mobile-panel" id="mobile-menu">
          <div class="mobile-surface">
            <div class="mobile-links">${mobileLinks}</div>
            <div class="inline-actions">
              <a class="btn-primary" href="contact.html">Talk to us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderFooter() {
  const columns = footerColumns
    .map(
      (column) => `
        <div>
          <span class="eyebrow">${column.title}</span>
          <div class="footer-list">
            ${column.items
              .map((item) => `<a href="${item.href}">${item.label}</a>`)
              .join('')}
          </div>
        </div>
      `
    )
    .join('');

  return `
    <div class="container-shell">
      <footer class="footer-shell">
        <div class="footer-grid">
          <div>
            <span class="eyebrow">Samarth Associates</span>
            <h2 class="footer-title">Decision systems for complex housing and redevelopment moments.</h2>
            <p class="section-lead">We blend advisory strategy, communication design, and stakeholder choreography so boards, members, and developers can move with more confidence.</p>
          </div>
          ${columns}
        </div>
        <div class="footer-bottom">
          <span>Based in Mumbai. Built for boards, societies, and redevelopment teams.</span>
          <span>hello@samarthassociates.in</span>
        </div>
      </footer>
    </div>
  `;
}

function renderCTA(type = 'default') {
  const variant = ctaVariants[type] || ctaVariants.default;

  return `
    <div class="container-shell cta-shell">
      <section class="cta-panel reveal">
        <div>
          <span class="eyebrow-strong">${variant.eyebrow}</span>
          <h2 class="section-title">${variant.title}</h2>
          <p class="section-lead">${variant.copy}</p>
        </div>
        <div class="inline-actions">
          <a class="btn-primary" href="${variant.primary.href}">${variant.primary.label}</a>
          <a class="btn-secondary" href="${variant.secondary.href}">${variant.secondary.label}</a>
        </div>
      </section>
    </div>
  `;
}

function mountSharedComponents() {
  const navMount = document.querySelector('[data-site-nav]');
  const footerMount = document.querySelector('[data-site-footer]');
  const ctaMount = document.querySelector('[data-site-cta]');

  if (navMount) {
    navMount.innerHTML = renderNav(navMount.dataset.siteNav || '');
  }

  if (footerMount) {
    footerMount.innerHTML = renderFooter();
  }

  if (ctaMount) {
    ctaMount.innerHTML = renderCTA(ctaMount.dataset.siteCta || 'default');
  }
}

function initNavigation() {
  const megaToggle = document.querySelector('.mega-toggle');
  const megaPanel = document.querySelector('.mega-panel');
  const menuButton = document.querySelector('.menu-button');
  const mobilePanel = document.querySelector('.mobile-panel');

  if (megaToggle && megaPanel) {
    megaToggle.addEventListener('click', () => {
      const isOpen = megaToggle.getAttribute('aria-expanded') === 'true';
      megaToggle.setAttribute('aria-expanded', String(!isOpen));
      megaPanel.classList.toggle('is-open', !isOpen);
      if (!isOpen && mobilePanel) {
        mobilePanel.classList.remove('is-open');
      }
    });

    document.addEventListener('click', (event) => {
      if (!megaPanel.classList.contains('is-open')) {
        return;
      }

      if (!megaPanel.contains(event.target) && !megaToggle.contains(event.target)) {
        megaPanel.classList.remove('is-open');
        megaToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  if (menuButton && mobilePanel) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      mobilePanel.classList.toggle('is-open', !isOpen);
      if (megaPanel && megaToggle) {
        megaPanel.classList.remove('is-open');
        megaToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

function initReveal() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const elements = document.querySelectorAll('.reveal');

  if (!elements.length) {
    return;
  }

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach((element) => observer.observe(element));
}

function initCounters() {
  const counters = document.querySelectorAll('[data-counter-target]');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!counters.length) {
    return;
  }

  const paintCounter = (counter, value) => {
    const prefix = counter.dataset.counterPrefix || '';
    const suffix = counter.dataset.counterSuffix || '';
    counter.textContent = `${prefix}${value}${suffix}`;
  };

  if (prefersReducedMotion) {
    counters.forEach((counter) => paintCounter(counter, counter.dataset.counterTarget));
    return;
  }

  const animateCounter = (counter) => {
    const target = Number(counter.dataset.counterTarget || 0);
    const duration = Number(counter.dataset.counterDuration || 1200);
    const start = performance.now();

    const frame = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      paintCounter(counter, value);

      if (progress < 1) {
        requestAnimationFrame(frame);
      }
    };

    requestAnimationFrame(frame);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function initSpotlights() {
  document.querySelectorAll('[data-spotlight]').forEach((card) => {
    card.addEventListener('mouseenter', () => card.classList.add('is-active'));
    card.addEventListener('mouseleave', () => card.classList.remove('is-active'));
    card.addEventListener('focusin', () => card.classList.add('is-active'));
    card.addEventListener('focusout', () => card.classList.remove('is-active'));
  });
}

function initTiltCards() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const supportsFinePointer = window.matchMedia('(pointer: fine)').matches;

  if (prefersReducedMotion || !supportsFinePointer) {
    return;
  }

  document.querySelectorAll('[data-tilt]').forEach((card) => {
    const reset = () => {
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
      card.classList.remove('is-tilting');
    };

    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
      const offsetY = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty('--tilt-x', `${offsetY * -6}deg`);
      card.style.setProperty('--tilt-y', `${offsetX * 8}deg`);
      card.classList.add('is-tilting');
    });

    card.addEventListener('pointerleave', reset);
    card.addEventListener('blur', reset, true);
  });
}

function init() {
  mountSharedComponents();
  initNavigation();
  initReveal();
  initCounters();
  initSpotlights();
  initTiltCards();
}

document.addEventListener('DOMContentLoaded', init);
