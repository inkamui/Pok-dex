const pokemonname = document.querySelector(".pokemon__name");
const pokemonnumber = document.querySelector(".pokemon__number");
const pokemonimage = document.querySelector(".pokemon__image");

const form = document.querySelector(".form");
const input = document.querySelector(".input__search");

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);

    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon) => {

    pokemonname.innerHTML = 'Loading ...';
    pokemonnumber.innerHTML = '';

    const data = await fetchPokemon(pokemon);

    if (data) {
        pokemonname.innerHTML = data.name;
        pokemonnumber.innerHTML = data.id;
        pokemonimage.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"];
        input.value ='';
    } else {
        pokemonname.innerHTML = 'Not Found';
        pokemonnumber.innerHTML = '';
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderPokemon(input.value);
});

renderPokemon('1');