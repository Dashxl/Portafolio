// Función para inicializar los carruseles
function initCarousels() {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach((carousel) => {
        const inner = carousel.querySelector('.carousel-inner');
        const items = inner.querySelectorAll('.carousel-item');
        let currentIndex = 0;

        function showSlide(index) {
            if (index >= items.length) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = items.length - 1;
            } else {
                currentIndex = index;
            }
            const offset = -currentIndex * 100;
            inner.style.transform = `translateX(${offset}%)`;
        }

        // Auto slide
        setInterval(() => {
            showSlide(currentIndex + 1);
        }, 3000);
    });
}

// Inicializar carruseles al cargar la página
document.addEventListener('DOMContentLoaded', initCarousels);