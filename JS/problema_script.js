document.addEventListener('DOMContentLoaded', function() {
    // Menu lateral animado
    const navToggle = document.getElementById('navToggle');
    const sideNav = document.getElementById('sideNav');

    navToggle.addEventListener('click', function() {
        if (sideNav.style.left === '-300px') {
            sideNav.style.left = '0';
            navToggle.style.left = '260px'; // Move o botão junto com o menu
        } else {
            sideNav.style.left = '-300px';
            navToggle.style.left = '20px'; // Retorna o botão para a posição original
        }
    });

    // Animação do fade-in ao rolar a página
    const fadeInElements = document.querySelectorAll('.fade-in');

    function checkFadeIn() {
        const triggerBottom = window.innerHeight * 0.85;
        fadeInElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkFadeIn);
    checkFadeIn(); // Checar ao carregar a página
});
