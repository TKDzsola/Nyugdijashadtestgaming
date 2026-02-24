/*!
* Start Bootstrap - Grayscale v7.0.6
* Nyugdíjashadtest Gaming - Animációkkal bővített verzió
*/

window.addEventListener('DOMContentLoaded', event => {

    // 1. AOS (Animate On Scroll) Inicializálása
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }

    // 2. Navbar zsugorítás (Navbar shrink)
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) { return; }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    navbarShrink();
    document.addEventListener('scroll', navbarShrink);

    // 3. ScrollSpy aktiválása
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // 4. Reszponzív menü bezárása kattintás után (Mobil nézet)
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});