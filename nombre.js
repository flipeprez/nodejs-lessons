function nombre(name){
  return `hola, ${name}`;
}

function saludaratuvieja(){
  return 'hola vieja';
}

//module.exports.nombre = nombre;
//module.exports.saludaratuvieja = saludaratuvieja;

//se puede exportar tambien de esta forma
//can be exports in this way too
  module.exports = {
    nombre: nombre,
    saludaratuvieja: saludaratuvieja
};
//console.log(module.exports);