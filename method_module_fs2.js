const fs2 = require ('fs');

/*
fs methods: for this purpouse,
i create a html file where i make all the modifications 
*/

/*read method*/
const synchmeth = fs2.readFileSync('index1.html', 'utf-8');
    console.log(synchmeth);

/*rename file*/
fs2.renameSync('index1.html', 'main.html');
    console.log('name modification success'); 

/* append file */
fs2.appendFileSync('main.html', '<p>new lorem ipsum</p>');
console.log('file added at end')


/* all those examples was made in the synchronous way,
so they can't be appreciated in order.*/