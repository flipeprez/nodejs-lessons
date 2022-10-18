//comented to remember previous examples
/*const nombres = require("./nombre.js");
console.log(nombres.nombre("soy felipe"));
console.log(nombres.saludaramablemente()); 
*/

const { nombre, saludaramablemente} = require('./nombre.js');
const EventEmitter = require('events');

console.log(saludaramablemente());
console.log(nombre('soy felipe')); 


const emisorEventos = new EventEmitter();

/*event 1*/ 
emisorEventos.on('evento 1', () => {
    console.log('ha ocurrido el evento 1')
});

emisorEventos.emit('evento 1');

/* we can addd arguments to the arrow function 
and show in the event 2*/
emisorEventos.on('evento 2',(eventoarealizar) =>{
    console.log(`se realizo ${eventoarealizar} con éxito`)
}); 
emisorEventos.emit('evento 2', 'el majestuoso evento 2');


/* we can add more than 1 arguments to the arrow function 
and show in the event 3*/
emisorEventos.on('evento 3',(eventoarealizar, secondargument) =>{
    console.log(`se realizo ${eventoarealizar}`);
    console.log(`${secondargument}`);
}); 
emisorEventos.emit('evento 3', 'el majestuoso evento 3',  'el cual fue un expectaculo increible');

