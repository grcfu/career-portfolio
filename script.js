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
