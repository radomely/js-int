const showPokemonAsync = pokemon =>
  new Promise((resolve, reject) => {
    const body = document.querySelector("body");
    const image = document.createElement("img");

    image.src = pokemon.sprites.front_default;
    image.onload = resolve;
    image.onerror = reject;

    body.appendChild(image);
  });

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

const getPokemon = async pokemonUrl =>
  fetch(pokemonUrl).then(res => res.json());

(async () => {
  const requestsList = [...pokemonList];

  const getNextPokemon = async requestsList => {
    if (!requestsList.length) {
      return;
    }

    const currReqList = requestsList.slice(0, 3);

    const pokemonsToRender = await Promise.all(
      currReqList.map(url => getPokemon(url))
    );

    const promiseList = pokemonsToRender.map(pokemon =>
      showPokemonAsync(pokemon)
    );

    await Promise.all(promiseList);

    console.log("3 images were loaded!!");
    const nextReqList = requestsList.slice(3);

    getNextPokemon(nextReqList);
  };

  getNextPokemon(requestsList);
})();
