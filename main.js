var http = require('http');
var template = require('./template.js')
var app = http.createServer((req, res) => {
    res.writeHead(200);
    res.end(template.HTML('Wang!'))
})

app.listen(3000)