const scrollItems = document.querySelectorAll('.scroll-item');
let currentIndex = 0;

function showNext() {
  // Hide current
  scrollItems[currentIndex].classList.remove('active');

  // Move to next index (loop back to 0)
  currentIndex = (currentIndex + 1) % scrollItems.length;

  // Show next
  scrollItems[currentIndex].classList.add('active');
}

// Change text every 3 seconds (adjust timing as you like)
setInterval(showNext, 3000);

// Optionally show first item immediately (already active via HTML)
