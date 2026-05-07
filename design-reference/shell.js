// Shared header + footer + sticky elements for all pages.
// Usage: place <div data-include="header"></div> and <div data-include="footer"></div>
// in the page; this script will populate them. Pass current page via
// <body data-page="home"> for active nav highlighting.

(function () {
  const PHONE = '+44 7449 470 276';
  const PHONE_TEL = '+447449470276';
  const WA_URL = 'https://api.whatsapp.com/send?phone=447449470276&text=Hi%20Amuse%20Events%2C%20I%27d%20like%20to%20chat%20about%20an%20event';

  const NAV = [
    { href: 'index.html',     label: 'Home',     key: 'home' },
    { href: 'services.html',  label: 'Services', key: 'services' },
    { href: 'weddings.html',  label: 'Weddings', key: 'weddings' },
    { href: 'corporate.html', label: 'Corporate',key: 'corporate' },
    { href: 'events.html',    label: 'Tickets',  key: 'events' },
    { href: 'about.html',     label: 'Studio',   key: 'about' },
    { href: 'journal.html',   label: 'Journal',  key: 'journal' },
    { href: 'contact.html',   label: 'Contact',  key: 'contact' },
  ];

  function header(activeKey) {
    return `
      <header class="site-header" id="siteHeader">
        <div class="container nav">
          <a href="index.html" class="brand">
            <img src="assets/logo-mark.png" alt="Amuse Events" class="brand-mark"/>
            <span class="brand-name">amuse <em style="font-style:italic;color:var(--amber)">events</em></span>
          </a>
          <ul class="nav-links">
            ${NAV.map(n => `<li><a href="${n.href}" class="nav-link ${n.key === activeKey ? 'active' : ''}">${n.label}</a></li>`).join('')}
          </ul>
          <div class="nav-cta">
            <a href="tel:${PHONE_TEL}" class="nav-phone">📞 ${PHONE}</a>
            <a href="contact.html" class="btn btn-amber btn-sm">Get a quote <span class="arrow">→</span></a>
          </div>
          <button class="menu-toggle" id="menuToggle" aria-label="Open menu">
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none"><path d="M0 1h20M0 7h20M0 13h20" stroke="currentColor" stroke-width="1.5"/></svg>
          </button>
        </div>
      </header>

      <div class="mobile-menu" id="mobileMenu">
        <button class="close" id="menuClose" aria-label="Close menu">
          <svg width="16" height="16" viewBox="0 0 16 16"><path d="M2 2l12 12M14 2L2 14" stroke="currentColor" stroke-width="1.5"/></svg>
        </button>
        <ul>
          ${NAV.map(n => `<li><a href="${n.href}">${n.label}</a></li>`).join('')}
        </ul>
        <div style="margin-top:32px; display:flex; flex-direction:column; gap:12px;">
          <a href="${WA_URL}" target="_blank" class="btn btn-amber" style="width:100%">WhatsApp us →</a>
          <a href="tel:${PHONE_TEL}" class="btn btn-ghost" style="width:100%">${PHONE}</a>
        </div>
      </div>
    `;
  }

  function footer() {
    return `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <a href="index.html" class="brand">
                <img src="assets/logo-mark.png" alt="" class="brand-mark"/>
                <span class="brand-name">amuse <em style="font-style:italic;color:var(--amber)">events</em></span>
              </a>
              <p>A small London studio crafting weddings, parties and corporate moments since 2014. Calm planning. Joyful days.</p>
              <div class="footer-social">
                <a href="https://www.instagram.com/amuseeventsuk/" aria-label="Instagram" target="_blank">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
                </a>
                <a href="https://m.facebook.com/AmuseEventsUK/" aria-label="Facebook" target="_blank">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13 21v-7h2.5l.5-3H13V9c0-1 .3-1.5 1.5-1.5H16V5h-2.5C11 5 10 6 10 8v3H8v3h2v7h3z"/></svg>
                </a>
                <a href="${WA_URL}" aria-label="WhatsApp" target="_blank">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.5 15.2L2 22l4.9-1.5A10 10 0 1012 2zm5.6 14.3c-.2.6-1.2 1.2-1.7 1.3-.4.1-1 .1-1.6-.1-1.5-.5-3.7-1.7-5.1-3.4-.6-.7-1.1-1.5-1.5-2.4-.4-1-.4-1.8 0-2.5.2-.4.5-.6.8-.6h.6c.2 0 .4 0 .5.4l.7 1.7c.1.2.1.4 0 .5l-.4.5c-.1.1-.2.2-.1.4.4 1 1.1 1.7 2.1 2.2.2.1.3 0 .4-.1l.4-.5c.1-.2.3-.2.5-.1l1.6.7c.2.1.3.2.3.3 0 .3 0 .8-.5 1.2z"/></svg>
                </a>
                <a href="mailto:contact@amuseevents.co.uk" aria-label="Email">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h4>Services</h4>
              <ul>
                <li><a href="weddings.html">Weddings</a></li>
                <li><a href="services.html#birthdays">Birthdays</a></li>
                <li><a href="services.html#kids">Kids parties</a></li>
                <li><a href="corporate.html">Corporate</a></li>
                <li><a href="services.html#dj">DJ &amp; club</a></li>
                <li><a href="services.html#production">Production</a></li>
              </ul>
            </div>
            <div>
              <h4>Studio</h4>
              <ul>
                <li><a href="about.html">About us</a></li>
                <li><a href="services.html">All services</a></li>
                <li><a href="journal.html">Journal</a></li>
                <li><a href="about.html#team">The team</a></li>
              </ul>
            </div>
            <div>
              <h4>Help</h4>
              <ul>
                <li><a href="contact.html">Get a quote</a></li>
                <li><a href="contact.html#faq">FAQ</a></li>
                <li><a href="${WA_URL}" target="_blank">WhatsApp</a></li>
                <li><a href="tel:${PHONE_TEL}">Call us</a></li>
              </ul>
            </div>
            <div>
              <h4>Visit</h4>
              <ul>
                <li>Isleworth</li>
                <li>London, UK</li>
                <li><a href="mailto:contact@amuseevents.co.uk">contact@amuseevents.co.uk</a></li>
                <li><a href="tel:${PHONE_TEL}">${PHONE}</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <span>© 2026 Amuse Events UK Ltd. All rights reserved.</span>
            <span>Crafted with care in London</span>
          </div>
        </div>
      </footer>

      <a href="${WA_URL}" target="_blank" class="wa-fab" aria-label="WhatsApp us">
        <span class="ico">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.5 15.2L2 22l4.9-1.5A10 10 0 1012 2zm5.6 14.3c-.2.6-1.2 1.2-1.7 1.3-.4.1-1 .1-1.6-.1-1.5-.5-3.7-1.7-5.1-3.4-.6-.7-1.1-1.5-1.5-2.4-.4-1-.4-1.8 0-2.5.2-.4.5-.6.8-.6h.6c.2 0 .4 0 .5.4l.7 1.7c.1.2.1.4 0 .5l-.4.5c-.1.1-.2.2-.1.4.4 1 1.1 1.7 2.1 2.2.2.1.3 0 .4-.1l.4-.5c.1-.2.3-.2.5-.1l1.6.7c.2.1.3.2.3.3 0 .3 0 .8-.5 1.2z"/></svg>
        </span>
        <span class="label-line">
          <strong>Chat on WhatsApp</strong>
          <small>Replies in 4 hours</small>
        </span>
      </a>

      <div class="sticky-bar" id="stickyBar">
        <span class="text">Ready to plan? <b>Free consultation, no card needed.</b></span>
        <a href="contact.html" class="btn btn-amber btn-sm">Start now <span class="arrow">→</span></a>
      </div>
    `;
  }

  // ---- Mount ----
  document.addEventListener('DOMContentLoaded', () => {
    const activeKey = document.body.dataset.page || '';
    document.querySelectorAll('[data-include="header"]').forEach(el => el.outerHTML = header(activeKey));
    document.querySelectorAll('[data-include="footer"]').forEach(el => el.outerHTML = footer());

    // Mobile menu
    const menu = document.getElementById('mobileMenu');
    document.getElementById('menuToggle')?.addEventListener('click', () => menu.classList.add('open'));
    document.getElementById('menuClose')?.addEventListener('click', () => menu.classList.remove('open'));
    menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

    // Header scroll state
    const hdr = document.getElementById('siteHeader');
    const sticky = document.getElementById('stickyBar');
    const onScroll = () => {
      const y = window.scrollY;
      hdr?.classList.toggle('scrolled', y > 8);
      sticky?.classList.toggle('show', y > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Reveal-on-scroll — but ensure anything already in viewport reveals immediately
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('in'));
    }, { threshold: 0.05 });
    document.querySelectorAll('.reveal').forEach(el => {
      io.observe(el);
      // Synchronously reveal anything in (or near) the viewport at load
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 1.1) el.classList.add('in');
    });
  });
})();
