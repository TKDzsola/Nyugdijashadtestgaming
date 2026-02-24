/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Nyugdíjashadtest Gaming Custom Scripts
*/

window.addEventListener('DOMContentLoaded', event => {

    // 1. AOS (Animate On Scroll) Inicializálása
    // Ez felel a Sheriff oldalnál látott beúszó animációkért
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000, // Az animáció hossza ms-ben
            once: true,     // Csak egyszer fusson le görgetésnél
            offset: 100     // Mennyivel előbb induljon az animáció (px)
        });
    }

    // 2. Navbar zsugorítási funkció (Navbar shrink)
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Navbar zsugorítása az oldal betöltésekor
    navbarShrink();

    // Navbar zsugorítása görgetéskor
    document.addEventListener('scroll', navbarShrink);

    // 3. Bootstrap ScrollSpy aktiválása
    // Automatikusan frissíti a menüben az aktív pontot görgetés közben
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // 4. Reszponzív menü bezárása kattintás után
    // Mobilon bezárja a menüt, ha kiválasztottunk egy menüpontot
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