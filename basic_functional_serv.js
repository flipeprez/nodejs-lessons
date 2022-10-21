/*creating my first functional server*/
const http = require('http');

const newServer = http.createServer((req, res) => {
    //i add next line to see every time the petition is called
    //console.log('new petition');
    res.end('this is my first functional server');
}); 

const PORT = 3000;

newServer.listen(PORT, () => {
    console.log(`the server is working and listening in http:localhost:${PORT}`);
});