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
    setTimeout(typeH2, 500); //wait 500ms before starting h2
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

//Anime Quote API Logic (Yurippe)
//---------------
const quoteElm = document.getElementById("anime-quote");

async function loadAnimeQuote() 
{
  try 
  {
    const response = await fetch("https://yurippe.vercel.app/api/quotes?random=1");
    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    const quoteData = data[0]; //API data returning an array

    const quote = quoteData.quote || "No quote found";
    const character = quoteData.character || "Unknown";

    quoteElm.textContent = '"' + quote + '" — ' + character;
  } 
  catch (error) 
  {
    console.error("Failed to fetch quote:", error);
    quoteElm.textContent = "Failed to fetch quote";
  }
}

loadAnimeQuote();

//GIF and Sticker API logic (Giphy)
//-------------------------------
const gif = document.getElementById("vaporwave-gif");
const sticker = document.getElementById("vaporwave-sticker");

const apiKey = "C7imfdvqIh9UNE7gc2JfaXk563qYuPDm"; //API Key from GIPHY Developers

//Load vaporwave GIF
async function loadGif() 
{
  try 
  {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/random?api_key=" + apiKey + "&tag=vaporwave&rating=PG-13"
    );

    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    const gifUrl = data.data.images.original.url;
    gif.src = gifUrl;
  } 
  catch (error) 
  {
    console.error("Failed to fetch GIF:", error);
    gif.alt = "Could not load GIF. Please try again.";
  }
}

//Load sticker
async function loadSticker() 
{
  try 
  {
    const limit = 15; //Get more stickers
    const response = await fetch(
      "https://api.giphy.com/v1/stickers/search?api_key=" + apiKey + "&q=vaporwave&limit=" + limit + "&rating=PG-13"
    );

    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();

    if (data.data.length === 0) throw new Error("No stickers found");

    const randomIndex = Math.floor(Math.random() * data.data.length);
    const stickerUrl = data.data[randomIndex].images.original.url;
    sticker.src = stickerUrl;
  } 
  catch (error) 
  {
    console.error("Failed to fetch sticker:", error);
    sticker.alt = "Could not load sticker. Please try again.";
  }
}

loadGif();
loadSticker();
