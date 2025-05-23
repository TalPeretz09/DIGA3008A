document.addEventListener('DOMContentLoaded', () => {
  //Blog Next/Previous Button Logic
  //-------------------------------
  const currentPath = window.location.pathname; //Get the current page's file path
  const match = currentPath.match(/Blog(\d+)\.html$/); //Confirm file starts with 'Blog' and extract number

  if (match) 
  {
    const blogNum = parseInt(match[1]); //Extract essay number from the filename by converting the string to an integer
    const prevNum = blogNum - 1; //Calculate previous blog number
    const nextNum = blogNum + 1; //Calculate next blog number

    const prevBtn = document.getElementById("prevBtn"); //Get the Previous button element
    const nextBtn = document.getElementById("nextBtn"); //Get the Next button element

    if (prevBtn && prevNum >= 1) 
    {
      prevBtn.href = `Blog${prevNum}.html`; //Set href if previous blog exists
    } 
    else if (prevBtn) 
    {
      prevBtn.style.display = "none"; //Hide button if no previous blog
    }

    if (nextBtn && nextNum <= 10) 
    { //Increase Upper Limit if adding more writing
      nextBtn.href = `Blog${nextNum}.html`; //Set href if next blog exists
    } 
    else if (nextBtn) 
    {
      nextBtn.style.display = "none"; //Hide button if no next blog
    }
  }
});
