document.addEventListener('DOMContentLoaded', () => {
    console.log('BuildIt page interactivity loaded.');

    // --- 1. Mobile Navigation Toggle Functionality 📱 ---
    const navMenu = document.querySelector('.nav');
    // Note: Ensure you have a button with class="menu-toggle" in your HTML header for mobile view
    // Or uncomment the lines below to create it dynamically if it doesn't exist.
    /*
    let menuToggle = document.querySelector('.menu-toggle');
    if (!menuToggle) {
        menuToggle = document.createElement('button');
        menuToggle.className = 'menu-toggle';
        menuToggle.innerHTML = '&#9776;'; // Hamburger icon
        document.querySelector('.header .container').appendChild(menuToggle);
    }
    */
    
    const menuToggle = document.querySelector('.menu-toggle'); 

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('is-open');
        });
    }

    // --- 2. Service Card Click Logging 🛠️ ---
    const serviceButtons = document.querySelectorAll('.card-btn');

    serviceButtons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); 
            const cardTitle = btn.closest('.service-card').querySelector('h3').innerText;
            console.log(`Action triggered for service: ${cardTitle}`);
        });
    });

    // --- 3. Accordion Functionality (Why Choose Section) 💡 ---
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');

        header.addEventListener('click', () => {
            // Check if the clicked item is already open
            const isOpen = item.classList.contains('open');

            // Close all items first (ensures only one open at a time)
            accordionItems.forEach(i => {
                i.classList.remove('open');
                i.classList.remove('highlighted');
            });

            // If it wasn't open, open it now
            if (!isOpen) {
                item.classList.add('open');
                item.classList.add('highlighted');
            }
        });
    });

    // --- 4. Professional "Book Now" Button Handlers ⭐ ---
    const bookNowButtons = document.querySelectorAll('.book-now-btn');

    bookNowButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const professionalName = btn.closest('.professional-card').querySelector('h3').innerText;
            console.log(`Booking process initiated for: ${professionalName}`);
            // In a real app: window.location.href = '/booking';
        });
    });

    // --- 5. Subscription Plan Button Handlers 🎁 ---
    const planButtons = document.querySelectorAll('.plan-btn');

    planButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            // Get the plan name from the header of the same card
            const planName = btn.closest('.plan-card').querySelector('.plan-header h3').innerText;
            console.log(`Subscription chosen: ${planName}. Redirecting to checkout.`);
            // In a real app: window.location.href = `/signup?plan=${encodeURIComponent(planName)}`;
        });
    });
});