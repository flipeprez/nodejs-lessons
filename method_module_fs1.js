const fs = require ('fs');

/*
fs methods: for this purpouse,
i create a html file where i make all the modifications 
*/

/*read method*/
fs.readFile('index.html', 'utf-8', (err,contenido) => {
    if (err){
        throw err;
    }
    console.log(contenido);
}); 

/*rename file*/
fs.rename('index.html', 'main.html', (err) =>{
    if (err){
        throw err;
    }
    console.log('name modification success')
}); 

/* append file */
fs.appendFile('main.html', '<p>new lorem ipsum</p>', (err) => {
    if (err){
        throw err;
    }
    console.log('file added at end')
});
/*add again read method to see result of append file in 
console, but with a modification in the name file because 
it was renamed earlier and rename again to index.html 
fs.readFileSync('main.html', 'utf-8', (err,contenido) => {
    if (err){
        throw err;
    }
    console.log(contenido);
});*/
fs.renameSync('main.html', 'index.html', (err) => {
    if(err){
        throw err;
    }
    console.log('file was renamed to the original name');
}); 

fs.writeFile('main.html', 'new content added', (err) =>{
    if(err){
        throw err;
    }
    console.log('content modified');
});

fs.unlink('main.html', (err) => {
    if(err){
        throw err;
    }
    console.log('main.html file was deleted');
});
/* all those examples was made in the asynchronous way,
so they can't be appreciated in order.
into the file method_module_fs2 you can found the same
exercises made in the sync mode */