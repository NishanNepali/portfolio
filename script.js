



   // Wait for the DOM to fully load
   window.addEventListener('DOMContentLoaded', function() {
    // Find all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Get the current page URL
    const currentPageURL = window.location.href;
    
    // Loop through each navigation link
    navLinks.forEach(link => {
        // Compare the link's href with the current page URL
        if (link.href === currentPageURL) {
            // Add a class to the active link
            link.classList.add('active');
        }
    });
});




