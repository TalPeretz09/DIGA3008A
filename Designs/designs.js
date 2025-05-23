document.addEventListener('DOMContentLoaded', () => {
  //Designs Next/Previous Button Logic
  //----------------------------------
  const currentPath = window.location.pathname; //Get the current page's path
  const match = currentPath.match(/Design(\d+)\.html$/); //Confirm path matches a Design page like Design1.html

  if (match) 
  {
    const essayNum = parseInt(match[1]); //Extract design number from the filename
    const prevNum = essayNum - 1; //Calculate previous design number
    const nextNum = essayNum + 1; //Calculate next design number

    const prevBtn = document.getElementById("prevBtn"); //Get previous button element
    const nextBtn = document.getElementById("nextBtn"); //Get next button element

    if (prevBtn && prevNum >= 1) 
    {
      prevBtn.href = `Design${prevNum}.html`; //Set href of previous button if valid
    } 
    else if (prevBtn) 
    {
      prevBtn.style.display = "none"; //Hide previous button if no valid previous page
    }

    if (nextBtn && nextNum <= 4) 
    { //Adjust this upper limit if more designs are added
      nextBtn.href = `Design${nextNum}.html`; //Set href of next button if valid
    } 
    else if (nextBtn) 
    {
      nextBtn.style.display = "none"; //Hide next button if no valid next page
    }
  }
});
