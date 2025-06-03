
  const pageTypes = [
    { prefix: 'Blog', upperLimit: 11 },
    { prefix: 'Design', upperLimit: 4 },
    { prefix: 'Essay', upperLimit: 3 }
  ];

  const nextPrev_currentPath = window.location.pathname;

  for (let i = 0; i < pageTypes.length; i++) 
  {
    const type = pageTypes[i];
    const prefix = type.prefix;
    const upperLimit = type.upperLimit;

    const index = nextPrev_currentPath.indexOf(prefix);
    if (index !== -1)
    {
      const fileName = nextPrev_currentPath.substring(nextPrev_currentPath.lastIndexOf('/') + 1);
      const numberString = fileName.substring(prefix.length, fileName.lastIndexOf('.html'));
      const pageNum = parseInt(numberString);

      const prevNum = pageNum - 1;
      const nextNum = pageNum + 1;

      const prevBtn = document.getElementById("prevBtn");
      const nextBtn = document.getElementById("nextBtn");

      if (prevBtn) 
      {
        if (prevNum >= 1) 
        {
          prevBtn.href = prefix + prevNum + ".html";
        } 
        else 
        {
          prevBtn.style.display = "none";
        }
      }

      if (nextBtn) 
      {
        if (nextNum <= upperLimit) 
        {
          nextBtn.href = prefix + nextNum + ".html";
        } 
        else 
        {
          nextBtn.style.display = "none";
        }
      }

      break;
    }
  }
