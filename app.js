var http = require('http');
var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

// myReadStream.on('data', function (chunk) {
//     console.log('New chunck received: ');
//     myWriteStream.write(chunk);
// - more proper example below -
// myReadStream.pipe(myWriteStream); 

// });

var server = http.createServer(function(req, res) {
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // new additions to streamline:
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
    // res.end('Hey Ninjas');
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');

console.log('now listening to port 3k!');