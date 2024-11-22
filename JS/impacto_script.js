document.addEventListener('DOMContentLoaded', function() {
    // Função para animação de scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('[data-aos]');
        const windowHeight = window.innerHeight;
        const offset = 100;

        elements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            if (position < windowHeight - offset) {
                element.classList.add('aos-animate');
            }
        });
    }

    // Chama a animação ao carregar a página
    animateOnScroll();

    // Chama a animação durante o scroll
    window.addEventListener('scroll', animateOnScroll);
});
