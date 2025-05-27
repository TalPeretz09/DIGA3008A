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

//Anime Quote API Logic
//---------------
const quoteEl = document.getElementById("anime-quote");

async function loadAnimeQuote() 
{
  try 
  {
    const response = await fetch("https://api.animechan.io/v1/quotes/random");
    if (!response.ok) throw new Error("Network response was not ok");

    const { data } = await response.json();

    const quote = data.content;
    const character = data.character.name;

    quoteEl.textContent = `"${quote}" — ${character}`;
  } 
  catch (error) 
  {
    console.error("Failed to fetch quote:", error);
    quoteEl.textContent = "Could not load quote. Please try again.";
  }
}

loadAnimeQuote();


});
