let offset = 0
const limit = 9

const container = document.querySelector('#container')

function addPokemons(pokemon) {
    let stringResult = `
    <div id="card" class="${pokemon.type}">
        <div id="nome-numero">
            <h3 id="nome">${pokemon.name}</h3>
            <p id="numero">${pokemon.number}</p>
        </div>
        <div id="container-imagem">
            <img src="${pokemon.image}" id="pic" alt="${pokemon.name}">
        </div>
        <div id="container-tipo" class="${pokemon.type}">
            ${pokemon.types.map((type) => `<span id="tipo">${type}</span>`).join('')}
        </div>
    </div>
    `

    let parser = new DOMParser();
    let doc = parser.parseFromString(stringResult, 'text/html');
    container.appendChild(doc.body.firstChild)
}


const pokemonList = document.getElementById('container')

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHTML = pokemons.map(addPokemons).join('')
        pokemonList.innerHTML += newHTML
    })
}

loadPokemonItens(offset, limit)

const botao = document.querySelector('.btn-mostrar-mais')

botao.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset, limit)
})
