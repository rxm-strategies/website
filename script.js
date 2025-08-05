// On scroll, check which sections are in view and add 'visible' class
function onScroll() {
  const sections = document.querySelectorAll('.scroll-section');
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', onScroll);

// Run once on load in case some sections are already visible
window.addEventListener('load', onScroll);