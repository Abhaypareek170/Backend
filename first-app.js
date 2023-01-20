const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('Abhay');
})

server.listen(4000)