/* to simulete a asynchronus process, 
i use a set interval*/ 
function orderProduct(product){
    return new promise((resolve, reject) => {
        console.log (`creando orden ${product} para envio`);
        setTimeout(() => {
            if (product === pizza){
                resolve('preparando pizza');
            } else {
                reject('solo vendemos pizza');
            }
        }, 2000);
    });

}

function processProduct(response){
    return new promise(resolve => {
        console.log('procesando respuesta...');
        console.log(`"${respuesta}"`);
        setTimeout(() => {
            resolve('gracias por su compra');
        }, 4000);
    });
}

