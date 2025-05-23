document.addEventListener('DOMContentLoaded', () => {
  //Essay Next/Previous Button Logic
  //--------------------------------
  const currentPath = window.location.pathname; //Get the current page's path
  const match = currentPath.match(/Essay(\d+)\.html$/); //Confirm path matches an Essay page like Essay1.html

  if (match) 
  {
    const essayNum = parseInt(match[1]); //Extract essay number from the filename by converting the string to an integer
    const prevNum = essayNum - 1; //Calculate previous essay number
    const nextNum = essayNum + 1; //Calculate next essay number

    const prevBtn = document.getElementById("prevBtn"); //Get previous button element
    const nextBtn = document.getElementById("nextBtn"); //Get next button element

    if (prevBtn && prevNum >= 1) 
    {
      prevBtn.href = `Essay${prevNum}.html`; //Set href of previous button if valid
    } 
    else if (prevBtn) 
    {
      prevBtn.style.display = "none"; //Hide previous button if no valid previous page
    }

    if (nextBtn && nextNum <= 2) 
    { //Increase Upper Limit if adding more writing
      nextBtn.href = `Essay${nextNum}.html`; //Set href of next button if valid
    } 
    else if (nextBtn) 
    {
      nextBtn.style.display = "none"; //Hide next button if no valid next page
    }
  }
});
