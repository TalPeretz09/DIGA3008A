document.addEventListener('DOMContentLoaded', () => {
  //Back to Top Button Functionality
  //--------------------------------
  const backToTopBtn = document.getElementById('backToTopBtn'); //Get the "Back to Top" button element

  window.addEventListener('scroll', () => {
    if (window.scrollY > 180) //Show button if user scrolls down 180px
    {
      backToTopBtn.style.display = 'block';
    } 
    else 
    {
      backToTopBtn.style.display = 'none'; //Hide button if user scrolls above 200px
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); //Smooth scroll to top when button clicked
  });

  //Navbar Active Link Highlighting
  //-------------------------------
  const currentPath = window.location.pathname; //Get the current page path
  const navLinks = document.querySelectorAll(".navbar a"); //Select all navbar links

  navLinks.forEach(link => {
    const hrefPath = new URL(link.getAttribute("href"), window.location.origin).pathname; //Convert relative href to absolute pathname

    if (currentPath === hrefPath || currentPath.startsWith(hrefPath.replace(/index\.html$/, ''))) 
    {
      link.classList.add("active"); //Add "active" class if current page matches link path
    }
  });

  //Smooth Hide Navbar on Scroll Down, Show on Scroll Up
  //----------------------------------------------------
  let lastScrollY = window.scrollY; //Store the last scroll position
  let ticking = false; //Prevent too many animation frames
  const navbar = document.querySelector('.top-header'); //Select the navbar
  const scrollThreshold = 10; //Minimum scroll movement to trigger action

  function handleScroll() {
    const currentScrollY = window.scrollY; //Get current scroll position

    if (Math.abs(currentScrollY - lastScrollY) > scrollThreshold) //Only act if scroll changed enough
    {
      if (currentScrollY > lastScrollY) 
      {
        navbar.classList.add('hidden'); //Hide navbar when scrolling down
      } 
      else 
      {
        navbar.classList.remove('hidden'); //Show navbar when scrolling up
      }
      lastScrollY = currentScrollY; //Update last scroll position
    }

    ticking = false; //Allow next scroll event to trigger animation frame
  }

  window.addEventListener('scroll', () => {
    if (!ticking) 
    {
      window.requestAnimationFrame(handleScroll); //Run handleScroll at next animation frame
      ticking = true; //Lock until frame is complete
    }
  });

  //Hamburger Menu Functionality
  //-----------------------------
  const toggleButton = document.getElementById("floatingHamburger"); //Button to toggle menu
  const floatingMenu = document.getElementById("floatingMenu"); //The actual floating menu

  if (toggleButton && floatingMenu) 
  {
    // Toggle menu visibility on button click
    toggleButton.addEventListener("click", () => {
      floatingMenu.classList.toggle("hidden"); //Show/hide menu
    });

    // Close menu when any link inside is clicked
    floatingMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        floatingMenu.classList.add("hidden"); //Hide menu after link click
      });
    });
  }

  // Smooth scroll behavior for internal links (anchors like #section1)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); //Prevent default jump-to behavior
      const target = document.querySelector(this.getAttribute("href")); //Find target element
      if (target) 
      {
        target.scrollIntoView({ behavior: "smooth" }); //Smooth scroll to target
      }
    });
  });

  //Cursor Trail Effect
  //-------------------
  document.addEventListener('mousemove', function(e) {
    const trail = document.createElement('div'); //Create a new trail element
    trail.className = 'cursor-trail'; //Assign class for styling
    trail.style.left = `${e.pageX}px`; //Set horizontal position
    trail.style.top = `${e.pageY}px`; //Set vertical position
    document.body.appendChild(trail); //Add trail to page

    setTimeout(() => {
      trail.remove(); //Remove trail after 500ms
    }, 500);
  });

});
