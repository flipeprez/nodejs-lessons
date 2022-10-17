function queEstoyAprendiendo(leccion){
    console.log(`Estoy tomando lecciones de ${leccion}`);
} 

/*show what iám learning after 2 seconds*/ 
setTimeout(queEstoyAprendiendo, 2000, 'nodejs'); 

function cursillo(curso){
    console.log(`esto es un curso de ${curso} y esta es una funcion asincrona`);
} 

/* to show the asynchronous operation, 
i add two console.log
that are shown before print esto es un curso.
but they are added after the console.log that 
contain esto es un curso */ 

console.log('vas a mostrar este msj primero');
setImmediate(cursillo, 'nodejs'); //is going to be showed in the third output line.
console.log('este va a ser el segundo mensaje a pesar de estar en tercer lugar');

function interval(msg1, msg2, msg3){
    console.log(`esto imprime ${msg1} espera 1s,`);
    console.log(`esto imprime ${msg2} espera 1s,`);
    console.log(`esto imprime ${msg3} espera 1s y comienza de nuevo`);    
}

setInterval(interval, 1000, 'primer msj', 'segundo msj', 'tercer msj');
