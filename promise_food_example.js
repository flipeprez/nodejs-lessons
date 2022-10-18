/* this function is to make fail 
the order in a randomly way*/
const status_order = () => {
    return Math.random() < 0.5;
}; 

const order = new Promise ((resolve, reject) => {
    setTimeout(() => {
        if (status_order()) {
            resolve(`pedido procesado con éxito`);
        }else {
            reject('el pedido no fue procesado');
        }        
    }, 2500);
});

const result_order_success = (order_success) => {
    console.log(order_success);
}
const result_order_nosuccess = (order_nosuccess) => {
    console.log(order_nosuccess);
}

order.then(result_order_success,result_order_nosuccess);