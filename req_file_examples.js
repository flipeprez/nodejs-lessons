const http = require('http');

const server = http.createServer((req, res) => {
    //add this line to see the result in console
    console.log('request result');
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    res.end('continuing experimenting with the server');
}); 

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`the server is working in http://localhost:${PORT}`);

});