// Generate wish based on user input
function generateWish() {
    const nameInput = document.getElementById('nameInput');
    const wishOutput = document.getElementById('wish-output');
    const name = nameInput.value.trim();
    
    if (!name) {
        showMessage("Please enter your name first!", "error");
        return;
    }
    
    // Reset the output container
    wishOutput.innerHTML = '';
    wishOutput.className = 'wish-container active';
    
    // Create the wish message
    const wish = `Dear ${name}, wishing you a year filled with new achievements, happiness, good health, and prosperity! ✨`;
    
    // Apply typing animation with proper error handling
    try {
        let i = 0;
        const typingSpeed = 50; // milliseconds per character
        
        function typeWriter() {
            if (i < wish.length) {
                wishOutput.innerHTML += wish.charAt(i);
                i++;
                setTimeout(typeWriter, typingSpeed);
            }
        }
        
        typeWriter();
    } catch (error) {
        // Fallback if animation fails
        wishOutput.innerHTML = wish;
        console.error("Animation error:", error);
    }
}

// Show error/success messages
function showMessage(text, type) {
    const wishOutput = document.getElementById('wish-output');
    wishOutput.textContent = text;
    wishOutput.className = 'wish-container'; // Reset classes
    
    if (type === 'error') {
        wishOutput.classList.add('error');
    } else {
        wishOutput.classList.add('success');
    }
    
    // Auto hide after 3 seconds
    setTimeout(() => {
        wishOutput.textContent = '';
        wishOutput.className = 'wish-container';
    }, 3000);
}

// Improved resize event listener that only triggers on significant width changes
let prevWidth = window.innerWidth;
window.addEventListener('resize', () => {
    // Only regenerate if width changed by more than 50px (to avoid keyboard appearance issues)
    if (Math.abs(prevWidth - window.innerWidth) > 50) {
        prevWidth = window.innerWidth;
        
        const wishOutput = document.getElementById('wish-output');
        const nameInput = document.getElementById('nameInput');
        
        if (wishOutput.textContent && nameInput.value.trim()) {
            generateWish();
        }
    }
});

// Initialize animations for background
document.addEventListener('DOMContentLoaded', () => {
    // Add scroll-based parallax effect to bulbs
    window.addEventListener('scroll', () => {
        const scrollValue = window.scrollY;
        const bulbs = document.querySelectorAll('.bulb');
        
        // Only apply parallax if not on small mobile devices
        if (window.innerWidth > 600) {
            bulbs.forEach((bulb, index) => {
                const speed = 0.1 + (index * 0.05);
                bulb.style.transform = `translateY(${scrollValue * speed}px)`;
            });
        }
    });
    
    // Add hover animations for interactive elements
    const content = document.querySelector('.content');
    
    // Add subtle tilt effect on mousemove for desktop
    if (window.innerWidth > 1024) {
        content.addEventListener('mousemove', (e) => {
            const rect = content.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xPercent = ((x / rect.width) - 0.5) * 10;
            const yPercent = ((y / rect.height) - 0.5) * 10;
            
            content.style.transform = `perspective(1000px) rotateY(${xPercent}deg) rotateX(${-yPercent}deg) translateY(-5px)`;
        });
        
        content.addEventListener('mouseleave', () => {
            content.style.transform = 'translateY(-5px)';
        });
    }
    
    // Add enter key support for form submission
    const nameInput = document.getElementById('nameInput');
    nameInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            generateWish();
        }
    });
}); 