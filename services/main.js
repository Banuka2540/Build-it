/**
         * Toggles the visibility of the "more content" section for a given category.
         * @param {string} category - The category prefix (e.g., 'contractor', 'material', 'transport').
         */
        function toggleContent(category) {
            const contentDiv = document.getElementById(`${category}-more-content`);
            const button = document.getElementById(`${category}-toggle-btn`);
            
            if (contentDiv && button) {
                const isExpanded = contentDiv.classList.contains('expanded');

                if (isExpanded) {
                    // Collapse the content
                    contentDiv.classList.remove('expanded');
                    contentDiv.style.maxHeight = '0';
                    button.textContent = `See More ${category.charAt(0).toUpperCase() + category.slice(1)}s...`;
                } else {
                    // Expand the content
                    // Set maxHeight to scrollHeight to allow the transition to work properly.
                    contentDiv.style.maxHeight = contentDiv.scrollHeight + 'px'; 
                    contentDiv.classList.add('expanded');
                    button.textContent = 'Show Less...';
                }
            }
        }

        // Add a listener to adjust max-height on window resize for responsiveness
        window.addEventListener('resize', () => {
            const categories = ['contractor', 'material', 'transport'];
            categories.forEach(category => {
                const contentDiv = document.getElementById(`${category}-more-content`);
                // Only recalculate if it's currently expanded
                if (contentDiv && contentDiv.classList.contains('expanded')) {
                    // Recalculate and set max-height when expanded and resized
                    contentDiv.style.maxHeight = contentDiv.scrollHeight + 'px';
                }
            });
        });