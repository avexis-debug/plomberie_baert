document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const footerYear = document.getElementById('footer-year');

    // Footer year
    footerYear.textContent = '\u00A9 ' + new Date().getFullYear() + ' TS PRO-TECH. VOTRE PARTENAIRE AM\u00C9NAGEMENT & FINITION.';

    // Navbar scroll effect - stays black, adds shadow on scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg', 'py-2');
            navbar.classList.remove('py-3');
        } else {
            navbar.classList.remove('shadow-lg', 'py-2');
            navbar.classList.add('py-3');
        }
    });

    // Mobile menu toggle
    let isMenuOpen = false;

    menuToggle.addEventListener('click', function () {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileMenu.classList.remove('hidden');
            menuIconOpen.classList.add('hidden');
            menuIconClose.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
            menuIconOpen.classList.remove('hidden');
            menuIconClose.classList.add('hidden');
        }
    });

    // Close mobile menu on link click
    mobileLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            isMenuOpen = false;
            mobileMenu.classList.add('hidden');
            menuIconOpen.classList.remove('hidden');
            menuIconClose.classList.add('hidden');
        });
    });
});
