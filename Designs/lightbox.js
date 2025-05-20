document.addEventListener('DOMContentLoaded', () => {
  const allImages = Array.from(document.querySelectorAll('img'));
  const images = allImages.slice(1); //Skip first image (Nav Bar logo)
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
    lightboxImg.alt = img.alt || 'Enlarged view';
    counter.textContent = (index + 1) + " / " + images.length;
  }

  function openLightbox(index) {
    currentIndex = index;
    updateLightbox(currentIndex);
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  }

  function closeLightbox() {
    overlay.classList.add('hidden');
    document.body.style.overflow = ''; // Re-enable scroll
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightbox(currentIndex);
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightbox(currentIndex);
  }

  //Image click opens lightbox
  images.forEach((img, index) => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => openLightbox(index));
  });

  // Button click controls
  closeBtn.addEventListener('click', closeLightbox);
  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrev);

  // Keyboard controls
  document.addEventListener('keydown', (e) => {
    if (overlay.classList.contains('hidden')) return;

    switch (e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowRight':
        showNext();
        break;
      case 'ArrowLeft':
        showPrev();
        break;
    }
  });
});
