document.addEventListener('DOMContentLoaded', () => {
    console.log('BuildIt page interactivity loaded.');

    // --- 0. Navbar Active Link Highlighting ---
    const navLinks = document.querySelectorAll('.nav a');
    
    function updateActiveLink() {
        let currentSection = '';
        
        // Get all sections and check which one is in view
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 100) {
                currentSection = section.getAttribute('id');
            }
        });
        
        // Update active class on nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Update on scroll
    window.addEventListener('scroll', updateActiveLink);
    // Update on page load
    updateActiveLink();

    // --- 1. Mobile Navigation Toggle & Smooth Link Closing ---
    const navMenu = document.querySelector('.nav');
    // Ensure you have this button in your HTML header (or create it dynamically if missing)
    let menuToggle = document.querySelector('.menu-toggle');
    
    // Dynamic creation if missing (optional helper)
    if (!menuToggle && document.querySelector('.header-actions')) {
         menuToggle = document.createElement('button');
         menuToggle.className = 'menu-toggle';
         menuToggle.innerHTML = '☰'; // Simple hamburger character
         menuToggle.style.background = 'none';
         menuToggle.style.border = 'none';
         menuToggle.style.fontSize = '24px';
         menuToggle.style.cursor = 'pointer';
         menuToggle.style.display = 'none'; // Hidden by default, shown in media query
         document.querySelector('.header .container').insertBefore(menuToggle, document.querySelector('.header-actions'));
    }

    if (menuToggle && navMenu) {
        // Toggle menu on click
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('is-open');
        });

        // Close menu when a link inside it is clicked (NEW logic)
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('is-open');
            });
        });
    }

    // --- 2. Service Card Click Logging ---
    const serviceButtons = document.querySelectorAll('.card-btn');
    serviceButtons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); 
            const cardTitle = btn.closest('.service-card').querySelector('h3').innerText;
            console.log(`Action triggered for service: ${cardTitle}`);
        });
    });

    // --- 3. Accordion Functionality (Updated) ---
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        // Note: We attach the click to the item itself or header for better UX
        const header = item.querySelector('.accordion-header');

        header.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');

            // 1. Close all other items first
            accordionItems.forEach(i => {
                i.classList.remove('open');
                i.classList.remove('highlighted');
            });

            // 2. If the clicked item was NOT open, open it now.
            // (If it WAS open, we did nothing after closing all, so it stays closed - effectively toggling off)
            if (!isOpen) {
                item.classList.add('open');
                item.classList.add('highlighted');
            }
        });
    });
    // --- 4. Contact Form Submission ---
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! We will get back to you soon.');
            contactForm.reset();
        });
    }
});