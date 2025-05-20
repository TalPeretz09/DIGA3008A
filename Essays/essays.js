document.addEventListener('DOMContentLoaded', () => {
  // ============================
  // Essay Next/Previous Button Logic
  // ============================
  const currentPath = window.location.pathname;
  const match = currentPath.match(/Essay(\d+)\.html$/);

  if (match) {
    const essayNum = parseInt(match[1]);
    const prevNum = essayNum - 1;
    const nextNum = essayNum + 1;

    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (prevBtn && prevNum >= 1) {
      prevBtn.href = `Essay${prevNum}.html`;
    } else if (prevBtn) {
      prevBtn.style.display = "none";
    }

    if (nextBtn && nextNum <= 2) { // Adjust this if you add more essays
      nextBtn.href = `Essay${nextNum}.html`;
    } else if (nextBtn) {
      nextBtn.style.display = "none";
    }
  }
});
