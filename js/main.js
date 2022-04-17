document.querySelector('button').addEventListener('click',getPokemon)
const stats = document.querySelector('h5')

//User will be able to enter pokemon they have encountered and save each one in storage
//User will then be able to check encounted pokemon with a click of a button

if(!localStorage.getItem('Pokemon')){
    localStorage.setItem('Pokemon', 'Pikachu')
}

//On page load, starter pokemon will appear
fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    .then(res => res.json())
    .then(data => {
        const pList = document.querySelector('ul')
        document.querySelector('.weightPlace').innerHTML = data.weight

        //append abilities to ability list
        data.abilities.forEach(obj => {
            const pLi = document.createElement('li')
            pLi.innerHTML = obj.ability.name.charAt(0).toUpperCase() + obj.ability.name.slice(1)
            pList.appendChild(pLi)})
        
        //append types to type list
        data.types.forEach(obj => {
            const pTypeList = document.querySelector('.type')
            const pTypeLi = document.createElement('li')
            pTypeLi.innerHTML = obj.type.name.charAt(0).toUpperCase() + obj.type.name.slice(1)
            pTypeList.appendChild(pTypeLi)
        })
        
    
    .catch(err => {
        console.log(`Not found ${err}`)
    })

    })





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
    //    localStorage.getItem('Pokemon')
    //    localStorage.setItem('Pokemon', choice.charAt(0).toUpperCase()+ choice.slice(1))

       if(!localStorage.getItem('Pokemon')){
        //if there isn't anything in local storage. put something in local storage
        localStorage.setItem('Pokemon', choice.charAt(0).toUpperCase()+ choice.slice(1))
    } else {
        let pokemon = localStorage.getItem('Pokemon')+" " + choice.charAt(0).toUpperCase() + choice.slice(1)
        localStorage.setItem('Pokemon', pokemon )
    }
    })
    
    .catch(err => {
        console.log(`Pokemon not Found ${err}`)
    })

}


//fetch image data from API

// function showImage(){

// }