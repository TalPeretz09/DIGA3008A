// Lightbox Gallery Logic
//----------------------
document.addEventListener('DOMContentLoaded', function() { //Wait for full DOM to load before running script
  const tl_allImgs = Array.from(document.querySelectorAll('img:not(#lightboxImage)')); //Get all <img> tags except the lightbox image
  const tl_galleryImgs = tl_allImgs.slice(1, -4); //Skip first image (navbar logo) and final 4 images (footer icons)
  const tl_overlay = document.getElementById('lightboxOverlay'); //Lightbox overlay element
  const tl_lightboxImg = document.getElementById('lightboxImage'); //Enlarged image display area
  const tl_closeBtn = document.getElementById('lightboxClose'); //Close button
  const tl_prevBtn = document.getElementById('lightboxPrev'); //Previous button
  const tl_nextBtn = document.getElementById('lightboxNext'); //Next button
  const tl_counter = document.getElementById('lightboxCounter'); //Image index counter display

  let tl_currentIdx = 0; //Track which image is currently shown in the lightbox

  function tl_updateLightbox(idx) 
  {
    const img = tl_galleryImgs[idx]; //Get the image based on the current index
    tl_lightboxImg.src = img.src; //Set lightbox image source to selected image source
    tl_lightboxImg.alt = img.alt || 'Enlarged view'; //Set alt text or fallback
    tl_counter.textContent = (idx + 1) + " / " + tl_galleryImgs.length; //Update image counter display
  }

  function tl_openLightbox(idx) 
  {
    tl_currentIdx = idx; //Set current image index
    tl_updateLightbox(tl_currentIdx); //Load and display the image
    tl_overlay.classList.remove('hidden'); //Show the overlay
    document.body.style.overflow = 'hidden'; //Disable background scroll
  }

  function tl_closeLightbox() 
  {
    tl_overlay.classList.add('hidden'); //Hide the overlay
    document.body.style.overflow = ''; //Re-enable page scrolling
  }

  function tl_showNext() 
  {
    tl_currentIdx = (tl_currentIdx + 1) % tl_galleryImgs.length; //Go to next image, loop around
    tl_updateLightbox(tl_currentIdx); //Update the image display
  }

  function tl_showPrev() 
  {
    tl_currentIdx = (tl_currentIdx - 1 + tl_galleryImgs.length) % tl_galleryImgs.length; //Go to previous image, loop around
    tl_updateLightbox(tl_currentIdx); //Update the image display
  }

  //Image click opens lightbox
  for (let i = 0; i < tl_galleryImgs.length; i++) 
  {
    tl_galleryImgs[i].style.cursor = 'pointer'; //Change cursor to pointer to indicate interactivity
    // Using a closure to capture current value of i for the event listener
    (function(index) {
      tl_galleryImgs[index].addEventListener('click', function() {
        tl_openLightbox(index);
      });
    })(i);
  }

  // Button click controls
  tl_closeBtn.addEventListener('click', tl_closeLightbox); //Close overlay when close button clicked
  tl_nextBtn.addEventListener('click', tl_showNext); //Show next image when next button clicked
  tl_prevBtn.addEventListener('click', tl_showPrev); //Show previous image when prev button clicked

  // Keyboard controls
  document.addEventListener('keydown', function(e) {
    if (tl_overlay.classList.contains('hidden')) 
    { //Ignore if lightbox isn't open
      return;
    }

    switch (e.key) 
    {
      case 'Escape': //Close lightbox with ESC
        tl_closeLightbox();
        break;
      case 'ArrowRight': //Go to next image with right arrow
        tl_showNext();
        break;
      case 'ArrowLeft': //Go to previous image with left arrow
        tl_showPrev();
        break;
    }
  });
});
