let responeToJSON;
let maxPokemon = 20;
let pokemonName; 
let pokemonType; 
let pokemonIMG;
let pokemonID;
let pokemonStackShort1; 
let pokemonStackShort2; 



async function loadPokemon() {
    for (let i = 1; i < maxPokemon; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        responeToJSON = await response.json();
        pokemonName = responeToJSON.name;
        pokemonID = ("000" + responeToJSON.id).slice(-3);
        pokemonIMG = responeToJSON.sprites.other.home.front_default;
        pokemonType = responeToJSON.types[0].type.name;
        renderPokemons();
    }
}
function renderPokemons() {
    document.getElementById("pokemons").innerHTML += `
    <div class="pokemonCard ${responeToJSON.types[0].type.name}">
        <p class="pokemonID">${000 + responeToJSON.id}</p>
        <h1>${responeToJSON.name}</h1>
        <img src="${responeToJSON.sprites.other.home.front_default}"/>
        <p class="stackShort"></p>
        <p class="stackShort"></p>
    </div>
    `;
}
