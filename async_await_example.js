/* to simulete a asynchronus process, 
i use a set interval*/ 
function orderProduct(product){
  return new Promise((resolve, reject) => {
    console.log (`creando ${product} para envio`);
    setTimeout(() => {
      if (product === 'pizza'){
        resolve('preparando pizza');
        } else {
        reject(`solo vendemos pizza, ${product} no vendemos`);
        }
      }, 2000);
  });
}

function processProduct(response){
  return new Promise(resolve => {
    console.log('procesando respuesta...');
    console.log(`"${response}"`);
    setTimeout(() => {
      resolve('gracias por su compra');
    }, 4000);
  });
}

/*now we have 2 process simulation being asynchronous
i am going to apply async and await, to determine the order
that the process are going to be executed*/

async function makeorder(product){
  try{
    const respuesta = await orderProduct(product);
    console.log('response ok');
    const resprocess = await processProduct(respuesta);
    console.log(resprocess);
  } catch (err){
    console.log(err);
  }
}

makeorder('habano');