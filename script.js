document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-testimonials-btn');
    const testimonialsContainer = document.getElementById('testimonials-container');

    if (toggleButton && testimonialsContainer) {
        // Initially show testimonials
        testimonialsContainer.style.display = 'grid';
        toggleButton.textContent = 'Hide student testimonials';

        toggleButton.addEventListener('click', function() {
            if (testimonialsContainer.style.display === 'none') {
                testimonialsContainer.style.display = 'grid'; // Use grid for layout
                toggleButton.textContent = 'Hide student testimonials';
            } else {
                testimonialsContainer.style.display = 'none';
                toggleButton.textContent = 'See what our students say';
            }
        });
    }
});

// Active Navigation Link Logic for Multi-Page Site
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.main-nav a');
    const currentPage = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});
