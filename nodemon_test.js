/*this file is only for tests nodemon. 
you need to install nodemon,execute, and then you can change the response or the console log
line, to see if the change are being executed with no necesity to
interrup the server execution*/
const http = require ('http');

const server = http.createServer((req, res) => {
  res.end('testing nodemon');
});

const PORT = 3000; 

server.listen(PORT, () => {
  console.log(`serving is running in port http://localhost: ${PORT}`);
});