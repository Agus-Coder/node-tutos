const http = require('http');
const server = http.createServer((req, res) => {  //req is an object that represents the incoming request, a client requesting from the browser your webpage. you have all the info there
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(`
        <h1>oops!</h1>
    <p>we cant seem to find this page you are looking for</p>
    <a href ="/">back home</a>`)
})

server.listen(5000);

//servers always listen to request. It is not like in the previous examples, where the file starts and then ends. 