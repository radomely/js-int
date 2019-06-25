const showPokemon = pokemon => {
  if (!pokemon) return;
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

const requestPokemon = async reqList => {
  if (!reqList.length) {
    console.log("All done");
    return;
  }
  const [req1, req2, req3, ...restReq] = reqList;

  const requestsToSend = [req1, req2, req3].map(async func => {
    if (!func) return;

    const data = await func();

    return data.json();
  });

  const pokemonsList = await Promise.all(requestsToSend);

  console.log("Pokemon list fetched!");

  pokemonsList.forEach(pokemon => showPokemon(pokemon));

  requestPokemon(restReq);
};

(async () => {
  requestPokemon(requestsList);
})();
