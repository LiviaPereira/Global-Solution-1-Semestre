document.addEventListener('DOMContentLoaded', function() {
    // Menu lateral animado
    const navToggle = document.getElementById('navToggle');
    const sideNav = document.getElementById('sideNav');
    let menuOpen = false;

    // Define posição inicial do menu lateral
    sideNav.style.left = '-300px';
    navToggle.style.left = '20px';

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

    // Carrossel de imagens
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const slide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-image');
    
    let currentIndex = 0;
    const totalImages = images.length;

    function showImage(index) {
        slide.style.transform = `translateX(-${index * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
        showImage(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
        showImage(currentIndex);
    });

    // Auto-slide functionality
    setInterval(() => {
        currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
        showImage(currentIndex);
    }, 5000); // Change image every 5 seconds
});
