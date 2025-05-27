document.addEventListener("DOMContentLoaded", () => {
//Typing Animation Logic
//----------------------
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");

const h1Text = "Welcome to the inTalnet";
const h2Text = "Enjoy your stay...";

h1.textContent = "";
h2.textContent = "";

let i = 0;
let j = 0;

function typeH1() 
{
  if (i < h1Text.length) 
  {
    h1.textContent += h1Text.charAt(i); //Add characters (starts typing)
    i++;
    setTimeout(typeH1, 100);
  } 
  else 
  {
    setTimeout(typeH2, 500); // wait 500ms before starting h2
  }
}

function typeH2() 
{
  if (j < h2Text.length) 
  {
    h2.textContent += h2Text.charAt(j);
    j++;
    setTimeout(typeH2, 100);
  }
}

typeH1();

//Quote API Logic
//---------------
const quote = document.querySelector(".quote");
const api_url ="https://api.quotable.io";

async function getapi(url)
{
  const response = await fetch(url);
  var data = await response.json();
  quote.textContent = data;
}

getapi(api_url);


});
