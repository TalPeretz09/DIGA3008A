document.addEventListener('DOMContentLoaded', () => {
  // ============================
  // Back to Top Button Functionality
  // ============================
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ============================
  // Navbar Active Link Highlighting
  // ============================
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".navbar a");

  navLinks.forEach(link => {
    const hrefPath = new URL(link.getAttribute("href"), window.location.origin).pathname;

    if (currentPath === hrefPath || currentPath.startsWith(hrefPath.replace(/index\.html$/, ''))) {
      link.classList.add("active");
    }
  });

    // ============================
  // Smooth Hide Navbar on Scroll Down, Show on Scroll Up
  // ============================
  let lastScrollY = window.scrollY;
  let ticking = false;
  const navbar = document.querySelector('.top-header');
  const scrollThreshold = 10;

  function handleScroll() {
    const currentScrollY = window.scrollY;

    if (Math.abs(currentScrollY - lastScrollY) > scrollThreshold) {
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        navbar.classList.add('hidden');
      } else {
        // Scrolling up
        navbar.classList.remove('hidden');
      }
      lastScrollY = currentScrollY;
    }

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(handleScroll);
      ticking = true;
    }
  });



});
