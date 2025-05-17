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
  // Blog Next/Previous Button Logic
  // ============================
  const match = currentPath.match(/Blog(\d+)\.html$/);

  if (match) {
    const blogNum = parseInt(match[1]);
    const prevNum = blogNum - 1;
    const nextNum = blogNum + 1;

    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (prevBtn && prevNum >= 1) {
      prevBtn.href = `Blog${prevNum}.html`;
    } else if (prevBtn) {
      prevBtn.style.display = "none";
    }

    if (nextBtn && nextNum <= 10) {
      nextBtn.href = `Blog${nextNum}.html`;
    } else if (nextBtn) {
      nextBtn.style.display = "none";
    }
  }
});
