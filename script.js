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
        footerYear.textContent = '\u00A9 ' + new Date().getFullYear() + ' PLOMBERIE BAERT';
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
});
