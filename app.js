// let name1 = ""; // Global variable for the first Pokémon's name
// let name2 = ""; // Global variable for the second Pokémon's name

// async function fetchDataPokemon1() {
//   try {
//     const search = document.getElementById("input1").value.toLowerCase();
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
//     const data = await response.json();
//     name1 = data.name; // Update the global variable name1

//     const pokemonImage = data.sprites.front_default;
//     const image = document.getElementById("pokemoneSprite");
//     image.src = pokemonImage;
//     image.style.display = "block";

//     const pokemonName = document.getElementById("pokemon_name");
//     pokemonName.textContent = `Name: ${name1}`;

//     const type = data.types.map((item) => item.type.name).join(" & ");
//     const pokemonType = document.getElementById("pokemon_type");
//     pokemonType.textContent = `Type: ${type}`;

//     const abilities = data.abilities
//       .map((item) => item.ability.name)
//       .join(" & ");
//     const pokemonAbilities = document.getElementById("pokemon_abilities");
//     pokemonAbilities.textContent = `Abilities: ${abilities}`;

//     pokemon1Stats = {};
//     data.stats.forEach((item) => {
//       pokemon1Stats[item.stat.name] = item.base_stat;
//     });

//     const stats = data.stats.map(
//       (item) => `${item.stat.name}: ${item.base_stat}`
//     );
//     const pokemonStats = document.getElementById("pokemon_stats");
//     pokemonStats.textContent = `Stats: ${stats.join(", ")}`;

//     const height = data.height;
//     const pokemonHeight = document.getElementById("pokemon_height");
//     pokemonHeight.textContent = `Height: ${height}`;

//     const weight = data.weight;
//     const pokemonWeight = document.getElementById("pokemon_weight");
//     pokemonWeight.textContent = `Weight: ${weight}`;
//   } catch (error) {
//     console.error(error);
//   }
// }

// async function fetchDataPokemon2() {
//   try {
//     const search = document.getElementById("input2").value.toLowerCase();
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
//     const data = await response.json();
//     name2 = data.name; // Update the global variable name2

//     const pokemonImage = data.sprites.front_default;
//     const image = document.getElementById("pokemoneSprite2");
//     image.src = pokemonImage;
//     image.style.display = "block";

//     const pokemonName = document.getElementById("pokemon_name2");
//     pokemonName.textContent = `Name: ${name2}`;

//     const type = data.types.map((item) => item.type.name).join(" & ");
//     const pokemonType = document.getElementById("pokemon_type2");
//     pokemonType.textContent = `Type: ${type}`;

//     const abilities = data.abilities
//       .map((item) => item.ability.name)
//       .join(" & ");
//     const pokemonAbilities = document.getElementById("pokemon_abilities2");
//     pokemonAbilities.textContent = `Abilities: ${abilities}`;

//     pokemon2Stats = {};
//     data.stats.forEach((item) => {
//       pokemon2Stats[item.stat.name] = item.base_stat;
//     });

//     const stats = data.stats.map(
//       (item) => `${item.stat.name}: ${item.base_stat}`
//     );
//     const pokemonStats = document.getElementById("pokemon_stats2");
//     pokemonStats.textContent = `Stats: ${stats.join(", ")}`;

//     const height = data.height;
//     const pokemonHeight = document.getElementById("pokemon_height2");
//     pokemonHeight.textContent = `Height: ${height}`;

//     const weight = data.weight;
//     const pokemonWeight = document.getElementById("pokemon_weight2");
//     pokemonWeight.textContent = `Weight: ${weight}`;
//   } catch (error) {
//     console.error(error);
//   }
// }

// let pokemon1Stats = null;
// let pokemon2Stats = null;

// function compare() {
//   let pokemon1Wins = 0;
//   let pokemon2Wins = 0;

//   for (let stat of Object.keys(pokemon1Stats)) {
//     if (pokemon1Stats[stat] > pokemon2Stats[stat]) {
//       pokemon1Wins++;
//     } else if (pokemon1Stats[stat] < pokemon2Stats[stat]) {
//       pokemon2Wins++;
//     }
//   }

//   let result = "";

//   if (pokemon1Wins > pokemon2Wins) {
//     result = `${name1} is stronger!`;
//   } else if (pokemon1Wins < pokemon2Wins) {
//     result = `${name2} is stronger!`;
//   } else {
//     result = "It's a tie!";
//   }

//   const labels = Object.keys(pokemon1Stats);
//   const data1 = labels.map((stat) => pokemon1Stats[stat]);
//   const data2 = labels.map((stat) => pokemon2Stats[stat]);

//   // Cleanup old chart if needed
//   if (window.barChartInstance) {
//     window.barChartInstance.destroy();
//   }

//   // Create new bar chart
//   const ctxBar = document.getElementById("barChart").getContext("2d");
//   window.barChartInstance = new Chart(ctxBar, {
//     type: "bar",
//     data: {
//       labels: labels,
//       datasets: [
//         {
//           label: `${name1}`,
//           data: data1,
//           backgroundColor: "rgba(255, 99, 132, 0.5)",
//           borderColor: "rgba(255, 99, 132, 1)",
//           borderWidth: 1,
//         },
//         {
//           label: `${name2}`,
//           data: data2,
//           backgroundColor: "rgba(54, 162, 235, 0.5)",
//           borderColor: "rgba(54, 162, 235, 1)",
//           borderWidth: 1,
//         },
//       ],
//     },
//     options: {
//       responsive: true,
//       scales: {
//         y: {
//           beginAtZero: true,
//         },
//       },
//     },
//   });

//   // Cleanup old radar chart if needed
//   if (window.radarChartInstance) {
//     window.radarChartInstance.destroy();
//   }

//   // Create new radar chart
//   const ctxRadar = document.getElementById("radarChart").getContext("2d");
//   window.radarChartInstance = new Chart(ctxRadar, {
//     type: "radar",
//     data: {
//       labels: labels,
//       datasets: [
//         {
//           label: `${name1}`,
//           data: data1,
//           fill: true,
//           backgroundColor: "rgba(255, 99, 132, 0.2)",
//           borderColor: "rgba(255, 99, 132, 1)",
//           pointBackgroundColor: "rgba(255, 99, 132, 1)",
//         },
//         {
//           label: `${name2}`,
//           data: data2,
//           fill: true,
//           backgroundColor: "rgba(54, 162, 235, 0.2)",
//           borderColor: "rgba(54, 162, 235, 1)",
//           pointBackgroundColor: "rgba(54, 162, 235, 1)",
//         },
//       ],
//     },
//     options: {
//       responsive: true,
//       elements: {
//         line: {
//           borderWidth: 3,
//         },
//       },
//       scales: {
//         r: {
//           angleLines: {
//             display: true,
//           },
//           suggestedMin: 0,
//           suggestedMax: 100,
//         },
//       },
//     },
//   });

//   document.getElementById("comparison_result").innerText = result;
// }

async function fetchDataPokemon1() {
  try {
    const search = document.getElementById("input1").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
    const data = await response.json();
    console.log(data);

    if (!search) {
      alert("Please enter a Pokémon name.");
      return;
    }

    const pokemonImage = data.sprites.front_default;
    const image = document.getElementById("pokemoneSprite");
    image.src = pokemonImage;
    image.style.display = "block";

    const name = data.name;
    const pokemonName = document.getElementById("pokemon_name");
    pokemonName.textContent = `Name: ${name}`;

    const weight = data.weight;
    const pokemonWeight = document.getElementById("pokemon_weight");
    pokemonWeight.textContent = `Weight: ${weight}`;

    const height = data.height;
    const pokemonHeight = document.getElementById("pokemon_height");
    pokemonHeight.textContent = `Height: ${height}`;

    const stats = data.stats.map(
      (item) => `${item.stat.name}: ${item.base_stat}`
    );
    const pokemonStat = document.getElementById("pokemon_stats");
    pokemonStat.textContent = `Stats: ${stats}`;

    const abilities = data.abilities.map((item) => item.ability.name);
    const pokemonAbilities = document.getElementById("pokemon_abilities");
    pokemonAbilities.textContent = `Abilities: ${abilities}`;

    const type = data.types.map((item) => item.type.name);
    const pokemonType = document.getElementById("pokemon_type");
    pokemonType.textContent = `Type: ${type}`;
  } catch (error) {
    console.error(error);
  }
}

async function fetchDataPokemon2() {
  try {
    const search = document.getElementById("input2").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
    const data = await response.json();
    console.log(data);

    const pokemonImage = data.sprites.front_default;
    const image = document.getElementById("pokemoneSprite2");
    image.src = pokemonImage;
    image.style.display = "block";

    const name = data.name;
    const pokemonName = document.getElementById("pokemon_name2");
    pokemonName.textContent = `Name: ${name}`;

    const weight = data.weight;
    const pokemonWeight = document.getElementById("pokemon_weight2");
    pokemonWeight.textContent = `Weight: ${weight}`;

    const height = data.height;
    const pokemonHeight = document.getElementById("pokemon_height2");
    pokemonHeight.textContent = `Height: ${height}`;

    const stats = data.stats.map(
      (item) => `${item.stat.name}: ${item.base_stat}`
    );
    const pokemonStat = document.getElementById("pokemon_stats2");
    pokemonStat.textContent = `Stats: ${stats}`;

    const abilities = data.abilities.map((item) => item.ability.name);
    const pokemonAbilities = document.getElementById("pokemon_abilities2");
    pokemonAbilities.textContent = `Abilities: ${abilities}`;

    const type = data.types.map((item) => item.type.name);
    const pokemonType = document.getElementById("pokemon_type2");
    pokemonType.textContent = `Type: ${type}`;
  } catch (error) {
    console.error(error);
  }
}

const pokemonList = [];
let offset = 0;

async function getPokemonList() {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offset}`
    );
    const data = await response.json();
    const results = data.results;

    for (let pokemon of results) {
      const detailedResponse = await fetch(pokemon.url);
      const detailedData = await detailedResponse.json();

      const pokemonName = detailedData.name;
      const pokemonImage = detailedData.sprites.front_default;
      const pokemonStats = detailedData.stats.map(
        (item) => `${item.stat.name}: ${item.base_stat}`
      );
      const pokemonType = detailedData.types.map((item) => item.type.name);

      pokemonList.push({
        pokemonName,
        pokemonImage,
        pokemonStats,
        pokemonType,
      });
    }

    const pokemonCardContainer = document.getElementById("pokemon_cards");

    for (let pokemon of pokemonList) {
      const card = document.createElement("div");
      card.classList.add("pokemon-card");

      card.innerHTML = `
      <img src="${pokemon.pokemonImage}" />
      <h3>${pokemon.pokemonName}</h3>
      <p>${pokemon.pokemonStats.join(", ")}</p>
      <p>${pokemon.pokemonType.join(", ")}</p>
      `;

      pokemonCardContainer.appendChild(card);
    }

    offset += 50;
    console.log(results);
  } catch (error) {
    console.error(error);
  }
}

// Access the Load More button
const loadMoreBtn = document.getElementById("loadMoreBtn");

// Add an event listener to the button
loadMoreBtn.addEventListener("click", async () => {
  // Disable the button while we are fetching data
  loadMoreBtn.disabled = true;
  loadMoreBtn.textContent = "Loading...";

  // Call the function to fetch the next set of Pokémon
  await getPokemonList();

  // Re-enable the button once fetching is complete
  loadMoreBtn.disabled = false;
  loadMoreBtn.textContent = "Load More";
});

// Make sure these are defined once at the top of your script:
let allPokemonNames = [];
const pokemonCardContainer = document.getElementById("pokemon_cards");

// Call this once on page load to fill allPokemonNames
async function searchPokemon() {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=1302"
    );
    const data = await response.json();
    allPokemonNames = data.results.map((item) => item.name);
  } catch (error) {
    console.error(error);
  }
}
searchPokemon();

// Now set up the live search
document.getElementById("input3").addEventListener("input", async (e) => {
  const inputValue = e.target.value.toLowerCase();

  // Clear out any existing cards
  pokemonCardContainer.innerHTML = "";

  // Find matching names
  const matchingNames = allPokemonNames.filter((name) =>
    name.includes(inputValue)
  );

  // For each match, fetch its details and render a card
  for (const name of matchingNames) {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await res.json();

      const pokemonName = data.name;
      const pokemonImage = data.sprites.front_default;
      const pokemonStats = data.stats
        .map((item) => `${item.stat.name}: ${item.base_stat}`)
        .join(", ");
      const pokemonType = data.types.map((item) => item.type.name).join(", ");

      const card = document.createElement("div");
      card.classList.add("pokemon-card"); // Optional: your own CSS class
      card.innerHTML = `
        <img src="${pokemonImage}" alt="${pokemonName}" />
        <h3>${pokemonName}</h3>
        <p><strong>Stats:</strong> ${pokemonStats}</p>
        <p><strong>Type:</strong> ${pokemonType}</p>
      `;

      pokemonCardContainer.appendChild(card);
    } catch (err) {
      console.error(`Failed to load data for ${name}`, err);
    }
  }
});

//Clear search field

function clearInput() {
  document.getElementById("input3").value = "";
  pokemonCardContainer.innerHTML = ""; // Add this line to clear the results
}
