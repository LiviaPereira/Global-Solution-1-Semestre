document.addEventListener('DOMContentLoaded', function() {
    // Menu lateral animado
    const navToggle = document.getElementById('navToggle');
    const sideNav = document.getElementById('sideNav');
    let menuOpen = false;

    navToggle.addEventListener('click', function() {
        if (!menuOpen) {
            sideNav.style.left = '0';
            navToggle.style.left = '260px'; // Move o botão junto com o menu
            menuOpen = true;
        } else {
            sideNav.style.left = '-300px';
            navToggle.style.left = '20px'; // Retorna o botão para a posição original
            menuOpen = false;
        }
    });

    // Fechar o menu ao clicar em um link do menu lateral
    const sideNavLinks = document.querySelectorAll('.side-nav ul li a');
    sideNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            sideNav.style.left = '-300px';
            navToggle.style.left = '20px';
            menuOpen = false;
        });
    });

    // Animação ao aparecer dos segmentos do público
    const segmentos = document.querySelectorAll('.segmento-item');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    segmentos.forEach(segmento => {
        observer.observe(segmento);
    });
});
