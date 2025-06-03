const fact = document.getElementById("number-fact"); //Numbers API
const numberImage = document.getElementById("number-image"); //dummyimage API

async function loadMathData() 
{
  try {
    const response = await fetch("https://numbersapi.com/random/math");
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

//Steam Web API Logic
//-------------------
const steamAPIKey = '487C291D6E7574FE1A59E1C8433F845E';
const steamID64 = '76561198100260525';
const proxy = 'https://corsproxy.io/?';

async function getOwnedGames() 
{
  const url = `${proxy}https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${steamAPIKey}&steamid=${steamID64}&include_appinfo=true&include_played_free_games=true`;
  const response = await fetch(url);
  const data = await response.json();

  const allGames = data.response.games;
  if (!allGames || allGames.length === 0) throw new Error("No games found.");

  // Sort games by playtime (descending)
  allGames.sort((a, b) => b.playtime_forever - a.playtime_forever);

  // Return top 3
  return allGames.slice(0, 3);
}

async function getGameDetails(appid) 
{
  const url = `${proxy}https://store.steampowered.com/api/appdetails?appids=${appid}&cc=us&l=en`;
  const response = await fetch(url);
  const data = await response.json();

  if (data[appid].success) return data[appid].data;
  return null;
}

async function displayTopGames() 
{
  try 
  {
    const topGames = await getOwnedGames();

    for (let i = 0; i < topGames.length; i++) 
    {
      const game = topGames[i];
      const details = await getGameDetails(game.appid);

      const gameNumber = i + 1;
      const nameElement = document.getElementById(`game${gameNumber}-name`);
      const imageElement = document.getElementById(`game${gameNumber}-image`);
      const hoursElement = document.getElementById(`game${gameNumber}-hours`);

      if (details) 
      {
        nameElement.textContent = details.name;
        imageElement.src = details.header_image;
      } 
      else 
      {
        nameElement.textContent = "Unknown Game";
        imageElement.src = "";
      }

      const hoursPlayed = (game.playtime_forever / 60).toFixed(1);
      hoursElement.textContent = `Hours played: ${hoursPlayed}`;
    }

  } 
  catch (error) 
  {
    console.error('Error loading games:', error);
    for (let i = 1; i <= 3; i++) 
    {
      document.getElementById(`game${i}-name`).textContent = 'Error loading game.';
      document.getElementById(`game${i}-image`).src = '';
      document.getElementById(`game${i}-hours`).textContent = '';
    }
  }
}

displayTopGames();

