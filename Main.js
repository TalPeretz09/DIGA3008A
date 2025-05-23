document.addEventListener('DOMContentLoaded', () => {
//Back to Top Button
//------------------
const BttBtn = document.getElementById('backToTopBtn'); //Get button element

function toggleBTT() 
{
  if (window.scrollY > 180) //If user scrolls passed 180px
  {
    BttBtn.style.display = 'block'; //Display button
  } 
  else 
  {
    BttBtn.style.display = 'none'; //Hide button
  }
}

function scrollToTop() //Call function
{
  window.scrollTo({ top: 0, behavior: 'smooth' }); //Creates smooth scrolling back to top of page
}

window.addEventListener('scroll', toggleBTT);
BttBtn.addEventListener('click', scrollToTop);



//Navbar Active Link Highlighting
//-------------------------------
const currentPath = window.location.pathname; //Get the current page path
const navLinks = document.querySelectorAll(".navbar a"); //Select all navbar links

for (let i = 0; i < navLinks.length; i++) //Loop through all navbar links
{
  const link = navLinks[i];
  const href = link.getAttribute("href");
  const hrefPath = new URL(href, window.location.origin).pathname; //Convert relative href to absolute pathname

  if (currentPath === hrefPath || currentPath.startsWith(hrefPath.replace(/index\.html$/, ''))) //Check if current path is the same as the href path containing the new absolute pathname
  {
    link.classList.add("active"); //Add "active" class if current page matches link path to enable the highlighting in CSS
  }
}

//Hide Navbar on Scroll Down, Show on Scroll Up
//---------------------------------------------
let lastScrollY = window.scrollY; //Store last scroll position
const navbar = document.querySelector('.top-header'); //Select the navbar

function toggleNavbarOnScroll() 
{
  let currentScrollY = window.scrollY; //Get current scroll position

  if (currentScrollY > lastScrollY + 10) 
  {
    //Scroll down
    navbar.classList.add('hidden');
    lastScrollY = currentScrollY;
  } 
  else if (currentScrollY < lastScrollY - 10) 
  {
    //Scroll up
    navbar.classList.remove('hidden');
    lastScrollY = currentScrollY;
  }
}

window.addEventListener('scroll', toggleNavbarOnScroll);

 
//Hamburger Menu Functionality
//-----------------------------
const hamburger = document.getElementById("floatingHamburger"); // Button to toggle menu
const burgerMenu = document.getElementById("floatingMenu"); // The actual floating menu

if (hamburger && burgerMenu) //Check that the hamburger and menu exist on the particular webpage
{
  //Toggle menu visibility
  function toggleMenu() 
  {
    burgerMenu.classList.toggle("hidden");
  }

  //Hide menu after link click
  function hideMenu() 
  {
    burgerMenu.classList.add("hidden");
  }

  //Add click listener to toggle button
  hamburger.addEventListener("click", toggleMenu);

  //Add click listeners to each link inside the menu
  const links = burgerMenu.querySelectorAll("a");
  for (let i = 0; i < links.length; i++) 
  {
    links[i].addEventListener("click", hideMenu);
  }
}

const anchors = document.querySelectorAll('a[href^="#"]');

function smoothScrollHandler(e) 
{
  e.preventDefault(); //Prevent default jump-to method
  const tgt = document.querySelector(this.getAttribute("href")); //Find target element
  if (tgt) 
  {
    tgt.scrollIntoView({ behavior: "smooth" }); //Smooth scroll to specified location
  }
}

for (let i = 0; i < anchors.length; i++) 
{
  anchors[i].addEventListener("click", smoothScrollHandler);
}

//Cursor Trail Effect
//-------------------
function createTrail(e) 
{
  let trail = document.createElement('div'); //Create a new trail
  trail.className = 'cursor-trail'; //Assign class for CSS styling
  trail.style.left = e.pageX + 'px'; //Set horizontal position
  trail.style.top = e.pageY + 'px'; //Set vertical position
  document.body.appendChild(trail); //Implement trail on page

  setTimeout(function() {
    trail.remove(); //Remove trail after 500ms
  }, 500);
}

document.addEventListener('mousemove', createTrail);


});
