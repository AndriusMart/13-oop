const Dog = require('./js/Dog.js')

/* 
OOP -object oriented programing.
parametrai -ka zinau, koks as (informacija)
metodai- ka galiu (funkcionalumas)
*/
console.clear();

const rex = new Dog('Rexas', 'taxas');
const brisius= new Dog('Brisius', 'Lietuvos lenciuginis');

console.log(rex.voice());
console.log(brisius.voice());
console.log(brisius.getBone());
console.log(brisius.intro());

