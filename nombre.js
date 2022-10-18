function nombre(name){
  return `hola, ${name}`;
}

function saludaramablemente(){
  return 'hola, que tal?';
}

//module.exports.nombre = nombre;
//module.exports.saludaratuvieja = saludaratuvieja;

//se puede exportar tambien de esta forma
//can be exports in this way too
  module.exports = {
    nombre: nombre,
    saludaramablemente: saludaramablemente
};
//console.log(module.exports);