//comented to remember previous examples
/*const nombres = require("./nombre.js");
console.log(nombres.nombre("soy el felipardo"));
console.log(nombres.saludaratuvieja()); 
*/

const { nombre, saludaratuvieja} = require('./nombre.js');

console.log(saludaratuvieja());
console.log(nombre('soy el felipardo'));