document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-testimonials-btn');
    const testimonialsContainer = document.getElementById('testimonials-container');

    if (toggleButton && testimonialsContainer) {
        // Initially hide testimonials
        testimonialsContainer.style.display = 'none';

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

// NEW: Active Navigation Scrolling Logic
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.main-nav a'); // Changed to .main-nav a

    if (sections.length > 0 && navLinks.length > 0) {
        const observerOptions = {
            root: null, // relative to the viewport
            rootMargin: '0px',
            threshold: 0.5 // Trigger when 50% of the section is visible
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;

                    // Remove active class from all links
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                    });

                    // Add active class to the corresponding link
                    const activeLink = document.querySelector(`.main-nav a[href="#${sectionId}"]`); // Changed to .main-nav a
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    }
});
