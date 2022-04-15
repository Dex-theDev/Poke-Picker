document.querySelector('button').addEventListener('click',getPokemon)






function getPokemon(){
const choice = document.querySelector('input').value


fetch(`https://pokeapi.co/api/v2/pokemon/${choice}`)
    .then(res => res.json())
    .then(data => {
        document.querySelector('h6').innerHTML = data.name
        document.querySelector('img').src = data.sprites.other['official-artwork'].front_default
        document.querySelector('.pokeStats').innerHTML = `Weight: ${data.weight}`
        console.log(data.name,data.abilities[0].ability.name)
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

}


//fetch image data from API

// function showImage(){

// }