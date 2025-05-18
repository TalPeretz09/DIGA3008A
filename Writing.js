document.addEventListener('DOMContentLoaded', () => {
  // ============================
  // Blog Next/Previous Button Logic
  // ============================
  const currentPath = window.location.pathname;
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
})