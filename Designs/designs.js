document.addEventListener('DOMContentLoaded', () => {
  const allImages = Array.from(document.querySelectorAll('img'));
  const images = allImages.slice(1);
  const overlay = document.getElementById('lightboxOverlay');
  const lightboxImg = document.getElementById('lightboxImage');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  const counter = document.getElementById('lightboxCounter');

  let currentIndex = 0;

  function updateLightbox(index) {
    const img = images[index];
    lightboxImg.src = img.src;
    counter.textContent = `${index + 1} / ${images.length}`;
  }

  function openLightbox(index) {
    currentIndex = index;
    updateLightbox(currentIndex);
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // disable background scroll
  }

  function closeLightbox() {
    overlay.classList.add('hidden');
    document.body.style.overflow = ''; // re-enable scroll
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightbox(currentIndex);
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightbox(currentIndex);
  }

  // Click images to open lightbox
  images.forEach((img, index) => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => openLightbox(index));
  });

  // Close, prev, next controls
  closeBtn.addEventListener('click', closeLightbox);
  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrev);

  // Keyboard support
  document.addEventListener('keydown', (e) => {
    if (overlay.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });
});
