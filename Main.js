document.addEventListener('DOMContentLoaded', () => {
    const backToTopBtn = document.getElementById('backToTopBtn');
  
    window.addEventListener('scroll', () => 
    {
      if (window.scrollY > 200) 
      {
        backToTopBtn.style.display = 'block';
      } 
      else 
      {
        backToTopBtn.style.display = 'none';
      }
    });
  
    backToTopBtn.addEventListener('click', () => 
    {
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
  });
  