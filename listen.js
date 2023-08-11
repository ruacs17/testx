const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('requesting');
    res.end('Created server');
});

server.listen(5000,()=>{
    console.log('Listening to port 5000')
});