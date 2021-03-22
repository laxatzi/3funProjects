
const birdSpecies = document.querySelectorAll('li');
const birdSpeciesArray = Array.prototype.slice.call(birdSpecies);

birdSpeciesArray.forEach((el, idx) => {
    if (el.matches(".endangered")){
        console.log(el.textContent + " is endangered");
    }
});
 
let parrot = document.querySelector('#parrot');

parrot.addEventListener('click', (el)=> {
    const element = el.target;
    element.classList.toggle('bird');
})



 const lunch = {
    snack: 'chips',
    drink: 'soda',
    desert: 'cookie',
  };

for (let key in lunch){
    console.log( `We have ${lunch[key]} for ${key}`);
  }


// forEach

var sandwiches = ['turkey', 'tuna', 'ham', 'pb&j'];

 
// logs 0, tuna, 1, ham, 2, turkey, 3, pb&j
sandwiches.forEach(function (sandwich, index) {
    console.log(index) // index
    console.log(sandwich) // value
});

console.log('Skip ham');
// Skip "ham"
// logs 0, tuna, 2, turkey, 3, pb&j
sandwiches.forEach(function (sandwich, index) {
    if (sandwich === 'ham') return;
    console.log(index); // index
    console.log(sandwich); // value
});

