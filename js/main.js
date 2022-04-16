document.querySelector('button').addEventListener('click',getPokemon)
const stats = document.querySelector('h5')





function getPokemon(){
const choice = document.querySelector('input').value.toLowerCase()


fetch(`https://pokeapi.co/api/v2/pokemon/${choice}`)
    .then(res => res.json())
    .then(data => {
        document.querySelector('h6').innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1)
        document.querySelector('img').src = data.sprites.other['official-artwork'].front_default
        
           const list = document.querySelector('ul')
        //append abilites to a list
         while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
          }
       data.abilities.forEach(obj => {
        const li = document.createElement('li')
           li.innerHTML = obj.ability.name.charAt(0).toUpperCase() + obj.ability.name.slice(1)
           list.appendChild(li)
         
           console.log(obj.ability.name)
       })
        document.querySelector('.weightPlace').innerHTML = data.weight
        const typeListParent = document.querySelector('.type')
        while (typeListParent.hasChildNodes()){
            typeListParent.removeChild(typeListParent.firstChild)
        }
       data.types.forEach(obj =>{
           const typeList = document.createElement('li')
           
           
           typeList.textContent = obj.type.name.charAt(0).toUpperCase() + obj.type.name.slice(1)
           typeListParent.appendChild(typeList)
          
       })
       
    })
    .catch(err => {
        console.log(`Pokemon not Found ${err}`)
    })

}


//fetch image data from API

// function showImage(){

// }