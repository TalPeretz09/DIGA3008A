const fact = document.getElementById("number-fact"); //Numbers API
const numberImage = document.getElementById("number-image"); //dummyimage API

async function loadMathData() 
{
  try {
    const response = await fetch("http://numbersapi.com/random/math");
    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.text();
    fact.textContent = data;

    //Extract the first number from the fact using regex
    const numberMatch = data.match(/\d+/);
    if (numberMatch) 
    {
      const number = numberMatch[0];

      //Use dummyimage.com to generate an image with the number in it
      const imageUrl = `https://dummyimage.com/200x100/a600a6/00d9ff&text=${number}`;

      // Update the image's source
      numberImage.src = imageUrl;
      numberImage.alt = `Image displaying the number ${number}`;
    } 
    else 
    {
      numberImage.src = "";
      numberImage.alt = "No number found";
    }

  } 
  catch (error) 
  {
    console.error("Failed to fetch math fact:", error);
    fact.textContent = "Unable to load data. Please try again later.";
    numberImage.src = "";
    numberImage.alt = "Unable to load number image";
  }
}

loadMathData();
