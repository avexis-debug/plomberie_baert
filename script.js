document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const footerYear = document.getElementById('footer-year');

    // Footer year
    if (footerYear) {
        footerYear.textContent = '\u00A9 ' + new Date().getFullYear() + ' IVAN INTERIOR WORK. VOTRE PARTENAIRE PLOMBERIE, PARQUET & B\u00C2TIMENT.';
    }

    // Navbar scroll effect
    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg', 'py-2');
                navbar.classList.remove('py-3');
            } else {
                navbar.classList.remove('shadow-lg', 'py-2');
                navbar.classList.add('py-3');
            }
        });
    }

    // Mobile menu toggle
    if (menuToggle) {
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
    }

    // Cookie banner
    var cookieBanner = document.getElementById('cookie-banner');
    var cookieAccept = document.getElementById('cookie-accept');
    var cookieRefuse = document.getElementById('cookie-refuse');

    if (cookieBanner && !localStorage.getItem('cookies-accepted')) {
        cookieBanner.classList.remove('hidden');
    }

    if (cookieAccept) {
        cookieAccept.addEventListener('click', function () {
            localStorage.setItem('cookies-accepted', 'true');
            cookieBanner.classList.add('hidden');
        });
    }

    if (cookieRefuse) {
        cookieRefuse.addEventListener('click', function () {
            localStorage.setItem('cookies-accepted', 'false');
            cookieBanner.classList.add('hidden');
        });
    }

    // Portfolio filter (realisations page)
    const filterBtns = document.querySelectorAll('[data-filter]');
    const projectCards = document.querySelectorAll('[data-category]');

    if (filterBtns.length > 0 && projectCards.length > 0) {
        var filterColors = {
            all: { bg: 'bg-logo-dark-green', text: 'text-white' },
            plomberie: { bg: 'bg-blue-500', text: 'text-white', border: 'border-blue-500' },
            parquet: { bg: 'bg-amber-500', text: 'text-white', border: 'border-amber-500' },
            batiment: { bg: 'bg-red-500', text: 'text-white', border: 'border-red-500' }
        };

        filterBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                const filter = btn.getAttribute('data-filter');

                // Reset all buttons
                filterBtns.forEach(function (b) {
                    var f = b.getAttribute('data-filter');
                    var c = filterColors[f];
                    b.classList.remove(c.bg, c.text);
                    if (f === 'all') {
                        b.classList.add('bg-white', 'text-logo-dark-green');
                    } else {
                        b.classList.add('bg-white', 'text-logo-dark-green');
                    }
                });
                // Activate clicked button
                var activeColor = filterColors[filter];
                btn.classList.remove('bg-white', 'text-logo-dark-green');
                btn.classList.add(activeColor.bg, activeColor.text);

                // Filter cards
                projectCards.forEach(function (card) {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = '';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
});
