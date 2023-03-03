let responeToJSON;
let maxPokemon = 50;
let pokemonName; 
let pokemonType; 
let pokemonIMG;
let pokemonID;
let pokemonStackShort1; 



async function loadPokemon() {
    for (let i = 1; i < maxPokemon; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        responeToJSON = await response.json();
        pokemonName = responeToJSON.name;
        pokemonID = ("000" + responeToJSON.id).slice(-3);
        pokemonIMG = responeToJSON.sprites.other.home.front_default;
        pokemonType = responeToJSON.types[0].type.name;
        pokemonStackShort1 = pokemonType;
        console.log(responeToJSON);
        renderPokemons();
    }
}
function renderPokemons() {
    document.getElementById("pokemons").innerHTML += `
    <div class="pokemonCard ${pokemonType}">
        <p class="pokemonID">#${pokemonID}</p>
        <h1>${pokemonName}</h1>
        <img src="${pokemonIMG}"/>
        <p class="stackShort">${pokemonStackShort1}</p>
    </div>
    `;
}
