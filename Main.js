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

});
