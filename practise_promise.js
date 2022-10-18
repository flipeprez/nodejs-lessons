/*i declared a constant with the objective to see if the promise was
resolves in the right mode. normally the conditions are determined
into  a conditional or something that happens in the process*/
const mypromisestatus = false;

const mypromise = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        if(mypromisestatus){
            resolve('promesa cumplida');
        } else {
            reject('faltaste a tu palabra, promesa no cumplida');
        }
    },3000);
});

/*case if the function is true and resolve function give success*/
const managevaluetrue = ((valueistrue) => {
     console.log(valueistrue);
}); 

/*case if the function is false and we need to manage the reject*/
const managevaluefalse = ((valueisfalse) => {
    console.log(valueisfalse);
});

/* give the arguments  for my promise function in both cases true and false*/ 
mypromise.then(managevaluetrue, managevaluefalse);
