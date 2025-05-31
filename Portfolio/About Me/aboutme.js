const factEl = document.getElementById("number-fact");

async function loadMathData() {
  try {
    const response = await fetch("http://numbersapi.com/random/math");
    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.text();
    factEl.textContent = data;
  } catch (error) {
    console.error("Failed to fetch math fact:", error);
    factEl.textContent = "Unable to load data. Please try again later.";
  }
}

loadMathData();
