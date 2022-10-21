const http = require('http');

const server = http.createServer((req, res) => {
    console.log('response');
    console.log(res.statusCode); //by defect is 200 ok but we can modify it
    res.statusCode = 404 //Not found
    console.log(res.statusCode);
    res.setHeader('content-type', 'application/json');
    //with this line we can obtein the previous setted value 
    //console.log(res.getHeaders());
    
    res.end('now testing responses');
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`serving is operating in http://localhost: ${PORT}`);
});