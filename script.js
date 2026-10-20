/* ============================================
   GRACE FU — CAREER PORTFOLIO
   Navigation, dropdowns, scroll reveal.
   No inline handlers anywhere in the HTML.
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* --- Shadow the sticky navbar once the page scrolls --- */
    const navbar = document.getElementById('navbar');
    const onScroll = () => {
        if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* --- Mobile hamburger --- */
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const open = navLinks.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', String(open));
        });
    }

    /* --- Dropdown menus.
       Click-driven rather than hover-only so they work on touch screens,
       and so keyboard users can reach the items inside. --- */
    const drops = Array.from(document.querySelectorAll('.nav-drop'));
    drops.forEach((drop) => {
        const btn = drop.querySelector('.nav-drop-btn');
        if (!btn) return;
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const wasOpen = drop.classList.contains('open');
            drops.forEach((d) => {
                d.classList.remove('open');
                const b = d.querySelector('.nav-drop-btn');
                if (b) b.setAttribute('aria-expanded', 'false');
            });
            if (!wasOpen) {
                drop.classList.add('open');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // Any click outside the nav closes whatever is open.
    document.addEventListener('click', () => {
        drops.forEach((d) => {
            d.classList.remove('open');
            const b = d.querySelector('.nav-drop-btn');
            if (b) b.setAttribute('aria-expanded', 'false');
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        drops.forEach((d) => d.classList.remove('open'));
        if (navLinks) navLinks.classList.remove('open');
    });

    /* ============================================
       PRESSED-BOTANICAL DETAILS
       The same corner sprig, washi tape and drawn stem the technical
       portfolio uses. All of it is decoration, so it's injected here
       (aria-hidden) instead of repeated in eleven HTML files.
       ============================================ */
    const SVG_NS = 'http://www.w3.org/2000/svg';
    const reduceMotionPref = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // One sprig definition, reused by every <use>. Colours ride on
    // presentation attributes: <use> clones into a shadow tree that page
    // stylesheets can't reliably reach.
    const defs = document.createElementNS(SVG_NS, 'svg');
    defs.setAttribute('class', 'hb-defs');
    defs.setAttribute('aria-hidden', 'true');
    defs.innerHTML = `
        <defs>
            <path id="hbLeaf" d="M0 0C2.4 -4.2 7.6 -5.2 10.4 -2.4C7.6 1.4 2.4 1.4 0 0Z"
                  fill="currentColor" fill-opacity="0.45"/>
            <path id="hbPetal" d="M0 0C1.5 -3 5 -3.6 6.6 -1.6C5 0.8 1.5 1.2 0 0Z"
                  fill="#E8A6B8" fill-opacity="0.85"/>
            <g id="hbBloom">
                <use href="#hbPetal" transform="rotate(-90)"/>
                <use href="#hbPetal" transform="rotate(-18)"/>
                <use href="#hbPetal" transform="rotate(54)"/>
                <use href="#hbPetal" transform="rotate(126)"/>
                <use href="#hbPetal" transform="rotate(198)"/>
                <circle r="1.4" fill="#8C7B6F"/>
            </g>
            <g id="hbSprig">
                <path d="M2 3C13 6 23 12 31 21C37 28 41 36 43 45"
                      fill="none" stroke="currentColor" stroke-width="1.15"
                      stroke-linecap="round" vector-effect="non-scaling-stroke"/>
                <use href="#hbLeaf" transform="translate(11 5) rotate(-40)"/>
                <use href="#hbLeaf" transform="translate(19 10) rotate(128) scale(0.85)"/>
                <use href="#hbLeaf" transform="translate(29 19) rotate(-18) scale(0.92)"/>
                <use href="#hbLeaf" transform="translate(36 29) rotate(150) scale(0.78)"/>
                <use href="#hbBloom" transform="translate(43 45)"/>
            </g>
        </defs>`;
    document.body.prepend(defs);

    const sprig = (corner) =>
        `<svg class="plate-sprig plate-sprig-${corner}" viewBox="0 0 52 52" aria-hidden="true" focusable="false"><use href="#hbSprig"/></svg>`;
    const tape = '<span class="tape" aria-hidden="true"></span>';

    // Plates: hub cards, story cards and SWOT quadrants get the full frame.
    document.querySelectorAll('.hub-card, .story, .swot-cell').forEach((el) => {
        el.classList.add('plate');
        el.insertAdjacentHTML('afterbegin', tape + ['tl', 'tr', 'br', 'bl'].map(sprig).join(''));
    });

    /* --- Reveal sections as they scroll into view --- */
    const revealables = document.querySelectorAll('.reveal');
    if (!revealables.length) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
        revealables.forEach((el) => el.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    revealables.forEach((el) => observer.observe(el));
});
