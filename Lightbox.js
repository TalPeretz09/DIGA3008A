//Lightbox Gallery Logic
//----------------------
document.addEventListener('DOMContentLoaded', () => { //Wait for full DOM to load before running script
  const allImages = Array.from(document.querySelectorAll('img:not(#lightboxImage)')); //Get all <img> tags except the lightbox image
  const images = allImages.slice(1); //Skip first image (assumed to be navbar logo)
  const overlay = document.getElementById('lightboxOverlay'); //Lightbox overlay element
  const lightboxImg = document.getElementById('lightboxImage'); //Enlarged image display area
  const closeBtn = document.getElementById('lightboxClose'); //Close button
  const prevBtn = document.getElementById('lightboxPrev'); //Previous button
  const nextBtn = document.getElementById('lightboxNext'); //Next button
  const counter = document.getElementById('lightboxCounter'); //Image index counter display

  let currentIndex = 0; //Track which image is currently shown in the lightbox

  function updateLightbox(index) 
  {
    const img = images[index]; //Get the image based on the current index
    lightboxImg.src = img.src; //Set lightbox image source to selected image source
    lightboxImg.alt = img.alt || 'Enlarged view'; //Set alt text or fallback
    counter.textContent = (index + 1) + " / " + images.length; //Update image counter display
  }

  function openLightbox(index) 
  {
    currentIndex = index; //Set current image index
    updateLightbox(currentIndex); //Load and display the image
    overlay.classList.remove('hidden'); //Show the overlay
    document.body.style.overflow = 'hidden'; //Disable background scroll
  }

  function closeLightbox() 
  {
    overlay.classList.add('hidden'); //Hide the overlay
    document.body.style.overflow = ''; //Re-enable page scrolling
  }

  function showNext() 
  {
    currentIndex = (currentIndex + 1) % images.length; //Go to next image, loop around
    updateLightbox(currentIndex); //Update the image display
  }

  function showPrev() 
  {
    currentIndex = (currentIndex - 1 + images.length) % images.length; //Go to previous image, loop around
    updateLightbox(currentIndex); //Update the image display
  }

  //Image click opens lightbox
  images.forEach((img, index) => {
    img.style.cursor = 'pointer'; //Change cursor to pointer to indicate interactivity
    img.addEventListener('click', () => openLightbox(index)); //Open lightbox on image click
  });

  //Button click controls
  closeBtn.addEventListener('click', closeLightbox); //Close overlay when close button clicked
  nextBtn.addEventListener('click', showNext); //Show next image when next button clicked
  prevBtn.addEventListener('click', showPrev); //Show previous image when prev button clicked

  // Keyboard controls
  document.addEventListener('keydown', (e) => {
    if (overlay.classList.contains('hidden')) //Ignore if lightbox isn't open
    {
      return;
    } 

    switch (e.key) 
    {
      case 'Escape': //Close lightbox with ESC
        closeLightbox();
        break;
      case 'ArrowRight': //Go to next image with right arrow
        showNext();
        break;
      case 'ArrowLeft': //Go to previous image with left arrow
        showPrev();
        break;
    }
  });
});
