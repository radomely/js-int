const showPokemon = pokemon => {
  const body = document.querySelector("body");
  const image = document.createElement("img");

  image.src = pokemon.sprites.front_default;

  body.appendChild(image);
};

const pokemonList = [
  "https://pokeapi.co/api/v2/pokemon/1",
  "https://pokeapi.co/api/v2/pokemon/10",
  "https://pokeapi.co/api/v2/pokemon/12",
  "https://pokeapi.co/api/v2/pokemon/45",
  "https://pokeapi.co/api/v2/pokemon/64",
  "https://pokeapi.co/api/v2/pokemon/78",
  "https://pokeapi.co/api/v2/pokemon/3",
  "https://pokeapi.co/api/v2/pokemon/21",
  "https://pokeapi.co/api/v2/pokemon/26",
  "https://pokeapi.co/api/v2/pokemon/39"
];

const requestsList = pokemonList.map(url => () => fetch(url));

const requestPokemon = () => {
  if (!requestsList.length) {
    console.log("All done");
    return;
  }

  const request = requestsList[0];

  request()
    .then(res => res.json())
    .then(pokemon => {
      console.log(pokemon);

      showPokemon(pokemon);

      requestsList.shift();

      requestPokemon();
    });
};

requestPokemon();
