document.addEventListener('DOMContentLoaded', () => {
  // Back to Top button functionality
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

  // Navbar active link highlighting (supports relative paths and subpages)
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".navbar a");

  navLinks.forEach(link => {
    // Convert each href into a fully resolved path
    const hrefPath = new URL(link.getAttribute("href"), window.location.origin).pathname;

    // Check if the current page is the link or inside its folder
    if (currentPath === hrefPath || currentPath.startsWith(hrefPath.replace(/index\.html$/, ''))) {
      link.classList.add("active");
    }
  });
});
