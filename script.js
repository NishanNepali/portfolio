  // Wait for the DOM to fully load
  window.addEventListener('DOMContentLoaded', function() {
    // Find the logo link element by its class name
    const logoLink = document.querySelector('.snav-top-logo-link');
    
    // Set the href attribute to the current page URL
    logoLink.href = window.location.href;
});




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


const targetText = 'NISHAN';
const typingTarget = document.getElementById('typing-target');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function animateShuffle(text) {
    const shuffledText = [...text];
    shuffleArray(shuffledText);

    let currentIndex = 0;

    function displayNextLetter() {
        if (currentIndex < targetText.length) {
            typingTarget.textContent = shuffledText.slice(0, currentIndex + 1).join('');
            currentIndex++;

            setTimeout(displayNextLetter, 100); // Adjust the delay as needed
        } else {
            if (shuffledText.join('') !== targetText) {
                animateShuffle(text);
            } else {
                typingTarget.textContent = targetText;
            }
        }
    }

    displayNextLetter();
}

animateShuffle(targetText);


